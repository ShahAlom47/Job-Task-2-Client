import { useQuery } from '@tanstack/react-query';

import { ResponsiveTable } from 'responsive-table-react';
import { useState } from 'react';
import Modal from 'react-modal';
import useAxios from '../../../../CustomHocks/useAxiosSecure';
import Loading from '../../../../SharedComponent/Loading';
import ErrorPage from '../../../ErrorPage/ErrorPage';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';

const AllBloodRequest = () => {
    const AxiosSecure = useAxios();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalData, setModalData] = useState({})
    const [page, setPage] = useState(1);


    const handelPrev = () => {
        if (page > 1) setPage(page - 1);
        refetch()
    };

    const handelNext = () => {
        if (page < data.totalPages) setPage(page + 1);
        refetch()
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };


    const { data, isLoading, error,refetch } = useQuery({
        queryKey: ['adminAllProduct'],
        queryFn: async () => {
              const res = await AxiosSecure.get(`/product/getAdminAllProducts?page=${page}&limit=8`);
            return res?.data;
        }
    });


console.log(modalData);
  
    

    if (isLoading) return <div><Loading /></div>;
    if (error) return <div><ErrorPage /></div>;

    


    const columns = [
        { 'text': 'Name', 'id': 'name' },
        { 'text': 'Category', 'id': 'category' },
        { 'text': 'Brand', 'id': 'brand' },
        { 'text': 'Price', 'id': 'price' },
        { 'text': 'Date', 'id': 'date' },
        { 'text': 'Available ', 'id': 'available' },
        { 'text': 'Edit', 'id': 'edit' },
        
        { 'text': 'Delete', 'id': 'delete' }
    ];


    const tableData = data ? data?.data?.map(product => ({
        name: product.productName,
        category: product.category,
        brand: product.brand,
        price: product.price,
        date: new Date(product.createdAt).toLocaleDateString(),
        available: (<img className='w-10 h-42' src={product.productImage}></img>),


        edit: (
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => {
                    setModalData(product)
                    setModalIsOpen(true)
                }}
            >
               Edit
            </button>
        ),
        delete: (
            <button
                className=" text-2xl text-color-p hover:text-3xl "
                onClick={() => {
                    Swal.fire('This option is temporarily unavailable.')
                }}
            >
                <MdDeleteForever />
            </button>
        ),
    })) : [];



    return (
        <div className="p-4">
            <div className="overflow-x-auto">
                <ResponsiveTable
                    columns={columns}
                    data={tableData}
                    className="min-w-full divide-y divide-gray-200"
                    cellClassName="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    ClassName="bg-gray-50 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                />
            </div>
            <div className="flex items-end justify-center h-full lg:p-5 md:p-4  p-1">
                <button onClick={handelPrev} style={{ borderRadius: '0px 100%' }} className="btn btn-p rounded-r-full" disabled={page === 1}>Prev</button>
                <button onClick={handelNext} style={{ borderRadius: ' 100% 0px' }} className="btn btn-p rounded-r-full" disabled={page === data?.totalPages}>Next</button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={customStyles}
            >
               Modal
            </Modal>
        </div>
    );
};

export default AllBloodRequest 

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
