import axios from "axios";
import { useEffect, useState } from "react";

const ListeNoteExamen = () => {
    const [examen,setExamen] = useState('');
    const [cours,setCours] = useState('');
    const token = localStorage.getItem("token");

    const ListeExamen = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_BACK_URL}/Examen/SelectAll_Examen`,{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            setExamen(response.data.data);
        } catch (error) {
            console.log("Erreur de recuperation d'examen :",error);
        }
    }

    const ListeCours = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_BACK_URL}/Cours/SelectAll_Cours`,{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            setCours(response.data.data);
        } catch (error) {
            console.log("Erreur de recuperation d'examen :",error);
        }
    }

    useEffect(() => {
        ListeExamen();
    })
    return(
        <>
            <div className="row">
                <div className="col-6">
                    <select name="" id="" className="form-control" style={{'height':'50px'}} onChange={ListeCours}>
                        {Array.isArray(examen) ? (
                            examen.map((e) => (
                                <option className="form-control" key={e.id_examen} value={e.id_examen}>
                                    examen du {e.semestre_id.semestre} de la classe {e.cours_id.promotion_id.codep}
                                </option>
                            ))
                        ) : (
                            <option className="form-control">Null</option>
                        )}
                    </select>
                </div>
                <div className="col-6">
                    <select name="" id="" className="form-control" style={{'height':'50px'}}>
                        {Array.isArray(cours) ? (
                            cours.map((c) => (
                                <option className="form-control" key={c.id_cours} value={c.id_cours}>
                                    {c.promotion_id.codep}
                                </option>
                            ))
                        ) : (
                            <option className="form-control">Null</option>
                        )}
                    </select>
                </div>
            </div>
        </>
    )
}
export default ListeNoteExamen;