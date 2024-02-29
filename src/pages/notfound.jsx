import { Link } from "react-router-dom"

export default function Notfound(){
    return(
        <div>
            <h1>Esta página no existe</h1>
            <Link to={'/'}> volver a home</Link>
        </div>
    )
}