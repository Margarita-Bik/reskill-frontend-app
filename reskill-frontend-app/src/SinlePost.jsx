import { useEffect } from "react";
import { useParams } from "react-router-dom";

function SinglePost(props) {
    const { id } = useParams();
    
    return (
        <h1>Single Post id={id}</h1>
    )
}

export default SinglePost;