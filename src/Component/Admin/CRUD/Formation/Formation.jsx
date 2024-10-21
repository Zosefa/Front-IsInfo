import { useState } from "react";
import ListeFormation from "./ListeFormation";
import InsertionFormation from "./InsertionFormation";

const Formation = () => {
    const [Page,setPage] = useState(0);
    return (
        <>
            <div className="w-100" style={{'height':'60vh'}}>
                <div className="w-100 mb-2">
                    <button className="btn btn-success" onClick={() => {setPage(0)}}>Liste</button>
                    <button className="btn btn-success" onClick={() => {setPage(1)}}>Ajouter</button>
                </div>
                <div className="w-100">
                    {Page === 0 && <ListeFormation />}
                    {Page === 1 && <InsertionFormation />}
                </div>
            </div>
        </>
    )
}
export default Formation;