import { Outlet } from "react-router-dom";


export default function Root() {
    return (
        <>
            <p>Hello World!</p>
            <div className="contents">
                <Outlet />
            </div>
        </>
    )
}