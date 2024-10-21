import { useState } from "react";
import InsertionEtudiant from "./InsertionEtudiant.jsx";
import ListeEtudiant from "./ListeEtudiant.jsx";

const Etudiant = () => {
    const [Page,setPage] = useState(0);
    return (
        <>
            <div className="mt-4" style={{'width':'90%','marginLeft':'auto','marginRight':'auto'}}>
                <div className="w-100 mb-2 container-fluid">
                    <button className="btn btn-success" onClick={() => {setPage(0)}}>Nouveau</button>
                    <button className="btn btn-success" onClick={() => {setPage(1)}}>Liste des Etudiants</button>
                </div>
                <div className="w-100">
                    {Page === 0 && <InsertionEtudiant />}
                    {Page === 1 && <ListeEtudiant />}
                </div>
            </div>
        </>
    )
}
export default Etudiant;