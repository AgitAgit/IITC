import { Outlet } from "react-router-dom";

const Articles = () => {
    return (
        <>
            <h1>This is the Articles page</h1>
            <Outlet />
        </>
    )
}

export default Articles;