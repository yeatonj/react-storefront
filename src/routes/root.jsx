import { Outlet, Link } from "react-router-dom";


export default function Root() {
    return (
        <>
            <p>Hello World!</p>
            <Link to={`/`}>Home</Link>
            <p>Link spacer</p>
            <Link to={`store`}>Store</Link>
            <div className="contents">
                <Outlet />
            </div>
        </>
    )
}