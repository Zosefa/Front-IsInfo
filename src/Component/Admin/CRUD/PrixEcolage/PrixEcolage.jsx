import { useState } from "react";
import InsertionPrixEcolage from "./INsertionPrixEcolage";
import Consultation from "./Consultation";

const PrixEcolage = () => {
    const [Page,setPage] = useState(0);
    return (
        <>
            <div className="w-100" style={{'height':'60vh'}}>
                <div className="w-100 mb-2">
                    <button className="btn btn-success" onClick={() => {setPage(0)}}>Ajouter</button>
                    <button className="btn btn-success" onClick={() => {setPage(1)}}>cONSULTATION</button>
                </div>
                <div className="w-100">
                    {Page === 0 && <InsertionPrixEcolage />}
                    {Page === 1 && <Consultation />}
                </div>
            </div>
        </>
    )
}
export default PrixEcolage;