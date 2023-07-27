import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function PrivateRouter(props) {

    const context = useContext(AuthContext)
    const currentUser = context.currentUser

    return (
        <React.Fragment>
            {
                currentUser ? <Outlet /> : <Navigate to={`login`} />
            }
        </React.Fragment>
    )
}
export default PrivateRouter

/* div,main,section,article,header,footer,aside  -> Html Block Elements
    React Fragments is used for -> virtual react block element
*/