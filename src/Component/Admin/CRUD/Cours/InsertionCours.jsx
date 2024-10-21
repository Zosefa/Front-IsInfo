import {useEffect, useState} from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const InsertionCours = () => {
    const [datedebut,setDatedebut] = useState('');
    const [listePromotion,setListePromotion] = useState('');
    const [idPromotion,setIdPromotion] = useState('');
    const token = localStorage.getItem("token");
    const promotion = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_BACK_URL}/Promotion/selectAll_Promotion`,
                {
                    headers:{
                        'Authorization':`Bearer ${token}`
                    }
                }
            );
            setListePromotion(response.data.data);
        }catch (error){
            console.log('ERREUR DE RECUPERATION',error);
        }
    };
    const insertion = (e) => {
        e.preventDefault();
        try{
            console.log(idPromotion,idPromotion.toString());
            const response = axios.post(`${import.meta.env.VITE_API_BACK_URL}/Cours/insertionCours`,
                { date_debut:datedebut, promotion_id:idPromotion.toString() },
                {
                    headers:
                        {
                            'content-type': 'application/json',
                            'Authorization':`Bearer ${token}`
                        }
                },
            );
            console.log('Inserer',response.data);
            setDatedebut('');
            toast.success("Cours de la promotion ajouter!")
        }catch(error)
        {
            console.error('Erreur d\'insertion' , error)
            toast.error("erreur de l'attribution des cours!")
        }

    }
    useEffect(()=>{
        promotion();
    },)
    return (
        <>
            <ToastContainer />
            <div className="w-100 mt-2 mb-2">
                <div className="row">
                    <form method="post" onSubmit={insertion}>
                        <div className="h-100 d-flex flex-column gap-3">
                            <div className="d-flex justify-content-between">
                                <div className="col-md-6">
                                    <input type="date" className="form-control" placeholder="Date de debut des Cours" style={{'height':'50px'}} value={datedebut} onChange={(e) => setDatedebut(e.target.value) }/>
                                </div>
                                <div className="col-md-6">
                                    <select name="" id="" className="form-control" style={{'height':'50px'}} value={idPromotion} onChange={(e) => setIdPromotion(e.target.value)}>
                                        <option>Séléctionner une promotion</option>
                                        {Array.isArray(listePromotion) ? (
                                            listePromotion.map((promotions) => (
                                                <option className="form-control" key={promotions.id_promotion} value={promotions.id_promotion}>
                                                    {promotions.codep}
                                                </option>
                                            ))
                                        ) : (
                                            <option className="form-control">Null</option>
                                        )}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <button type="submit" className="btn btn-success">Enregistrer</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default InsertionCours;