import {useEffect, useState} from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const InsertionPromotion = () => {
    const [CodePromotion,setCodePromotion] = useState('');
    const [AnnePromotion,setAnnePromotion] = useState('');
    const [Filiere,setFiliere] = useState('');
    const [Formation,setFormation] = useState('');
    const [IdFormation,setIdFormation] = useState('');
    const [IdFiliere,setIdFiliere] = useState('');
    const token = localStorage.getItem("token");
    const insertion = (e) => {
        e.preventDefault();
        try{
            axios.post(`${import.meta.env.VITE_API_BACK_URL}/Promotion/insertionPromotion`,
                { codep:CodePromotion, anne_promotion:AnnePromotion, filiere_id:IdFiliere, formation_id:IdFormation },
                {
                    headers:
                    {
                        'content-type': 'application/json',
                        'Authorization':`Bearer ${token}`
                    }
                },
            );
            toast.success("Promotion inserer");
            setCodePromotion('');
            setAnnePromotion('');
        }catch(error)
        {
            toast.error("Erreur d'insertion");
            console.error('Erreur d\'insertion' , error)
        }

    }
    const ListeFiliere = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_BACK_URL}/Filiere/SelectAll_Filiere`,{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            setFiliere(response.data.data);
        }catch (error){
            console.log('ERREUR DE RECUPERATION',error)
        }
    };
    const ListeFormation = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_BACK_URL}/Formation/selectAll_Formation`,{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            setFormation(response.data.data);
        }catch (error){
            console.log('ERREUR DE RECUPERATION',error)
        }
    };
    useEffect(() => {
        ListeFiliere();
        ListeFormation();
    });
    return (
        <>
            <ToastContainer />
            <div className="w-100 mt-2 mb-2">
                <div className="row">
                    <form method="post" onSubmit={insertion}>
                        <div className="d-flex">
                            <div className="col-md-6">
                                <input type="text" className="form-control" value={CodePromotion} onChange={(e) => setCodePromotion(e.target.value)} placeholder="Nom de la Promotion" style={{'height':'50px'}}/>
                            </div>
                            <div className="col-md-6">
                                <input type="date" className="form-control" value={AnnePromotion} onChange={(e) => setAnnePromotion(e.target.value)} placeholder="Anne Promotion" style={{'height':'50px'}}/>
                            </div>
                        </div>
                        <div className="d-flex mt-3">
                            <div className="col-md-6">
                                <select name="" id="" className="form-control" value={IdFiliere} onChange={(e)=> setIdFiliere(e.target.value)} style={{'height':'50px'}}>
                                    <option>séléctionner une filière</option>
                                    {Array.isArray(Filiere) ? (
                                        Filiere.map((f) => (
                                            <option className="form-control" key={f.id_filiere} value={f.id_filiere}>
                                                {f.codef}
                                            </option>
                                        ))
                                    ) : (
                                        <option className="form-control">Null</option>
                                    )}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <select name="" id="" className="form-control" value={IdFormation} onChange={(e)=> setIdFormation(e.target.value)} style={{'height':'50px'}}>
                                    <option>séléctionner une formation</option>
                                    {Array.isArray(Formation) ? (
                                        Formation.map((f) => (
                                            <option className="form-control" key={f.id_formation} value={f.id_formation}>
                                                {f.codeF}
                                            </option>
                                        ))
                                    ) : (
                                        <option className="form-control">Null</option>
                                    )}
                                </select>
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
export default InsertionPromotion;