import useUser from "../../CustomHocks/useUser";
import AdminHome from "./AdminHome/AdminHome";
import UserProfileLayout from "./Componets/UserProfileLayout";

const DashBoard = () => {
    const {user}=useUser()
    return (
        <div className="max-w p-4">
           <UserProfileLayout></UserProfileLayout>

         
           {
            user&&<AdminHome></AdminHome>
           }
        </div>
    );
};

export default DashBoard;