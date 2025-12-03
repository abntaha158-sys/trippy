import { Link, Outlet } from "react-router-dom"

const Services = () => {
  return (
    <div>
        <Link to="/Service/1/front">front Service</Link>
        <Link to="/Service/2/back">back Service</Link>
        <Outlet/>
    </div>
  )
}

export default Services
