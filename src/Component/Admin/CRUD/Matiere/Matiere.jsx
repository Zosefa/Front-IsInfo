import { useState } from "react";
import ListeMatiere from "./ListeMatiere";
import InsertionMatiere from "./InsertionMatiere";

const Matiere = () => {
    const [Page,setPage] = useState(0);
    return (
        <>
            <div className="w-100" style={{'height':'60vh'}}>
                <div className="w-100 mb-2">
                    <button className="btn btn-success" onClick={() => {setPage(0)}}>Liste</button>
                    <button className="btn btn-success" onClick={() => {setPage(1)}}>Ajouter</button>
                </div>
                <div className="w-100">
                    {Page === 0 && <ListeMatiere />}
                    {Page === 1 && <InsertionMatiere />}
                </div>
            </div>
        </>
    )
}
export default Matiere;