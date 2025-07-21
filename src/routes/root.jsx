import { Outlet, Link } from "react-router-dom";
import StoreHeader from "../components/StoreHeader";


export default function Root() {
    return (
        <>
            <StoreHeader />
            <div className="contents">
                <Outlet />
            </div>
        </>
    )
}