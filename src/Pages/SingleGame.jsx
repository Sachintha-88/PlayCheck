import { useParams } from "react-router-dom";

function SingleGame() {
    const { id } = useParams();

    return (
        <>
        <h1>jnwjd {id}</h1>
        </>
    );
}

export default SingleGame