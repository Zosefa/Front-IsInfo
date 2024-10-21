import { useState } from "react";
import InsertionExamen from "./InsertionExamen.jsx";

const Examen = () => {
    const [Page,setPage] = useState(0);
    return (
        <>
            <div className="mt-4" style={{'width':'90%','marginLeft':'auto','marginRight':'auto'}}>
                <div className="w-100 mb-2 container-fluid">
                    <button className="btn btn-success" onClick={() => {setPage(0)}}>Nouveau</button>
                </div>
                <div className="w-100">
                    {Page === 0 && <InsertionExamen />}
                </div>
            </div>
        </>
    )
}
export default Examen;