import { useState } from "react";
import ListeFiliere from "./ListeFiliere";
import InsertionFiliere from "./InsertionFiliere";

const Filiere = () => {
    const [Page,setPage] = useState(0);
    return (
        <>
            <div className="w-100" style={{'height':'60vh'}}>
                <div className="w-100 mb-2">
                    <button className="btn btn-success" onClick={() => {setPage(0)}}>Liste</button>
                    <button className="btn btn-success" onClick={() => {setPage(1)}}>Ajouter</button>
                </div>
                <div className="w-100">
                    {Page === 0 && <ListeFiliere />}
                    {Page === 1 && <InsertionFiliere />}
                </div>
            </div>
        </>
    )
}
export default Filiere;