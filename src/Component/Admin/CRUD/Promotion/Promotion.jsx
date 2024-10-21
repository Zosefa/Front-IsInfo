import { useState } from "react";
import ListePromotion from "./ListePromotion";
import InsertionPromotion from "./InsertionPromotion";

const Promotion = () => {
    const [Page,setPage] = useState(0);
    return (
        <>
            <div className="w-100" style={{'height':'60vh'}}>
                <div className="w-100 mb-2">
                    <button className="btn btn-success" onClick={() => {setPage(0)}}>Liste</button>
                    <button className="btn btn-success" onClick={() => {setPage(1)}}>Ajouter</button>
                </div>
                <div className="w-100">
                    {Page === 0 && <ListePromotion />}
                    {Page === 1 && <InsertionPromotion />}
                </div>
            </div>
        </>
    )
}
export default Promotion;