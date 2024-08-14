import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../../CustomHocks/useAxiosSecure';
import Loading from '../../../../SharedComponent/Loading';
import ErrorPage from '../../../ErrorPage/ErrorPage';
import useUser from '../../../../CustomHocks/useUser';
import { ResponsiveTable } from 'responsive-table-react';
import { useState } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import { MdDeleteForever } from "react-icons/md";
import DataNotAvailable from '../../../../SharedComponent/DataNotAvailable';
import MyBloodBankRequest from './MyBloodBankRequest';

const MyBloodRequest = () => {
    const AxiosSecure = useAxios();
    const { user } = useUser();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalData, setModalData] = useState({})
    const [requestPage,setRequestPage]=useState(false)



    const closeModal = () => {
        setModalIsOpen(false);
    };


    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['userAllBloodRequest'],
        queryFn: async () => {
            const res = await AxiosSecure.get(`/donation/user/allRequest/${user.email}`);
            return res.data;
        }
    });


    const handleComplete = async (requestId, name, email) => {
        Swal.fire({
            title: "Are you sure?",
            showCancelButton: true,
            confirmButtonColor: "#ea062b",
            cancelButtonColor: "#000",
            confirmButtonText: "Confirm"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const confirmedDonorData = {
                    donorName: name,
                    donorEmail: email,
                    notification:{
                        
                    }
                };

                try {
                    const res = await AxiosSecure.patch(`/donation/user/confirmDonation/${requestId}`, confirmedDonorData);

                    if (res.status === 200) {
                        setModalIsOpen(false)
                        refetch()
                        Swal.fire({
                            title: "Completed",
                            icon: "success"
                        });
                    } else {
                        Swal.fire({
                            title: "Error",
                            text: "Something went wrong. Please try again.",
                            icon: "error"
                        });
                    }
                } catch (error) {
                    Swal.fire({
                        title: "Error",
                        text: error.response?.data?.message || "An unexpected error occurred. Please try again.",
                        icon: "error"
                    });
                }
            }
        });
    };


    const handelDelete = async (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                const res= await AxiosSecure.delete(`/donation/delete/bloodRequest/${id}`)
                if(res?.data?.deletedCount>0){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
            }
          });

      
   

    }

    if (isLoading) return <div><Loading /></div>;
    if (error) return <div><ErrorPage /></div>;



    const columns = [
        { 'text': 'Name', 'id': 'name' },
        { 'text': 'Phone', 'id': 'phone' },
        { 'text': 'Email', 'id': 'email' },
        { 'text': 'Group', 'id': 'bloodGroup' },
        { 'text': 'Requested Date', 'id': 'requestedDate' },
        { 'text': 'Require Date', 'id': 'requireDate' },
        { 'text': 'Status', 'id': 'status' },
        { 'text': 'Donors', 'id': 'donors' },
        { 'text': 'Delete', 'id': 'delete' }
    ];


    const tableData = data ? data?.map(request => ({
        name: request.name,
        phone: request.phone,
        email: request.email,
        bloodGroup: request.bloodGroup,
        requestedDate: request.requestedDate,
        requireDate: request.requireDate,
        status: request.status,


        donors: (
            <button
                className="px-4 py- bg-green-500 text-white rounded"
                onClick={() => {
                    setModalData(request)
                    setModalIsOpen(true)
                }}
            >
                Donors <span> ({request?.donors?.length})</span>
            </button>
        ),
        delete: (
            <button
                className=" text-2xl text-color-p hover:text-3xl  "
                onClick={() => {
                    handelDelete(request._id)
                }}
            >
                <MdDeleteForever />
            </button>
        ),
    })) : [];



    return (
        <div className="p-4 pt-0">
            <div className=' w-full flex justify-end items-center mb-5'>
                <button 
                onClick={()=>setRequestPage(!requestPage)}
                style={{width:'190px'}}
                className=' btn-p font-semibold'
                >{requestPage?'My Blood Request':'My Blood bank Request'}</button>
            </div>
            <div className="overflow-x-auto">
                {
                    requestPage?<MyBloodBankRequest></MyBloodBankRequest>:
              
                <ResponsiveTable
                    columns={columns}
                    data={tableData}
                    cellClassName="px-6 py-8 whitespace-nowrap text-sm text-gray-500"

                    className="min-w-full "
                   
                    ClassName=" px-6 py-6 text-left text-xs font-medium  uppercase tracking-wider"
                />
            }
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={customStyles}
            >
                {modalData?.donors?.length === 0 ? (
                   <DataNotAvailable></DataNotAvailable>
                ) : (
                    <div className="space-y-4">
                        {modalData?.donors?.map((donor, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <h1 className='text-xl font-bold mb-5 border-b-2'>Donor {index + 1}</h1>
                                <h2 className="font-bold mb-1"> Donor Name: {donor.donorName}</h2>
                                <p className="text-gray-700 mb-2"><span className='font-bold'> Donor Email:</span> {donor.donorEmail}</p>
                                <button
                                    disabled={modalData.status !== 'Pending'}
                                    style={{ width: '90px' }}
                                    className={`px-4 py-2 btn-p text-white rounded ${modalData.status !== 'Pending' ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    onClick={() => handleComplete(modalData._id, donor.donorName, donor.donorEmail)}
                                >
                                    Complete
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default MyBloodRequest;

const customStyles = {
    overlay: {
        zIndex: '50',
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: '90%',
        minWidth: '80%',
        height: 'auto',
        maxHeight: '90vh',
        overflow: 'auto'
    }
};
