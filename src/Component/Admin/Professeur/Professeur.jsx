import { useState } from "react";
import InsertionProfesseur from "./InsertionProfesseur.jsx";
import ListeProfesseur from "./ListeProfesseur.jsx";

const Professeur = () => {
    const [Page,setPage] = useState(0);
    return (
        <>
            <div className="mt-4" style={{'width':'90%','marginLeft':'auto','marginRight':'auto'}}>
                <div className="w-100 mb-2 container-fluid">
                    <button className="btn btn-success" onClick={() => {setPage(0)}}>Nouveau</button>
                    <button className="btn btn-success" onClick={() => {setPage(1)}}>Liste</button>
                </div>
                <div className="w-100">
                    {Page === 0 && <InsertionProfesseur />}
                    {Page === 1 && <ListeProfesseur />}
                </div>
            </div>
        </>
    )
}
export default Professeur;