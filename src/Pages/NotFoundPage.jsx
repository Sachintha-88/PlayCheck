import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="flex flex-col text-center pt-100 text-5xl leading-15">
            <h1 className="text-red-500"> Page is Not Found ! </h1>
            <Link to={"/"}>
                <button className="font-bold hover:text-blue-600">Go Back home</button>
            </Link>
        </div>
    )
}

export default NotFoundPage;