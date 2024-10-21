import { useState } from "react";
import InsertionAttribution from "./InsertionAttribution.jsx";
import ListeAttribution from "./ListeAttribution.jsx";

const Attribution = () => {
    const [Page,setPage] = useState(0);
    return (
        <>
            <div className="mt-4" style={{'width':'90%','marginLeft':'auto','marginRight':'auto'}}>
                <div className="w-100 mb-2 container-fluid">
                    <button className="btn btn-success" onClick={() => {setPage(0)}}>Nouveau</button>
                    <button className="btn btn-success" onClick={() => {setPage(1)}}>Liste d'attibution des profs</button>
                </div>
                <div className="w-100">
                    {Page === 0 && <InsertionAttribution />}
                    {Page === 1 && <ListeAttribution />}
                </div>
            </div>
        </>
    )
}
export default Attribution;