import { FaHouseUser } from "react-icons/fa"
import NavBar from "../components/NavBar/NavBar"
import { FaCircleInfo } from "react-icons/fa6"
import { MdOutlineHomeRepairService } from "react-icons/md"
import { RiContactsBook3Fill } from "react-icons/ri"
import { Outlet } from "react-router-dom"

const Root = () => {
    const items = [
    {
        icon : <FaHouseUser /> ,
        content :"Home" ,
        url : "/"
    },
    {
        icon : <FaCircleInfo /> ,
        content :"About",
        url : "/about"
    },
    {
        icon : <MdOutlineHomeRepairService /> ,
        content :"Service",
        url : "/service"
    },
    {
        icon : <RiContactsBook3Fill /> ,
        content :"Contact",
        url : "/contact"
    }
    ]
    return (
        <div>
            <NavBar logo="Trippy" items={items} btn="Sign Up" />
            <Outlet/>
        </div>
    )
}

export default Root
