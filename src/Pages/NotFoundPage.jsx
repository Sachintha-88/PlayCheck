import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="flex flex-col text-center pt-100 text-5xl leading-25 min-h-screen bg-amber-50">
            <h1 className="text-red-500"> Page is Not Found ! </h1>
            <Link to={"/"}>
                <button className="font-bold hover:bg-blue-600/10 bg-black/15 bg-radial rounded-lg outline-2 outline-offset-2">Go Back home</button>
            </Link>
        </div>
    )
}

export default NotFoundPage;