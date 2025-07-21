import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Uh Oh</h1>
            <p>An unexpected error has occurrect</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}