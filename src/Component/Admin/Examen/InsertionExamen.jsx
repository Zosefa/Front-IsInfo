import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const InsertionExamen = () => {
    const [datedebut,setDateDebut] = useState('');
    const [datefin,setDateFin] = useState('');
    const [Cours,setCours] = useState('');
    const [IdCours,setIdCours] = useState('');
    const [Semestre,setSemestre] = useState('');
    const [idSemestre,setIdSemestre] = useState('');
    const token = localStorage.getItem("token");
    const insertion = (e) => {
        e.preventDefault();
        try{
            const response = axios.post(`${import.meta.env.VITE_API_BACK_URL}/Examen/insertionExamen`,
                { date_debut:datedebut, date_fin:datefin, cours_id:IdCours, semestre_id:idSemestre },
                {
                    headers:
                    {
                        'content-type': 'application/json',
                        'Authorization':`Bearer ${token}`
                    }
                },
            );
            console.log('Inserer',response.data);
            toast.success("Nouvelle Examen Inserer!");
            setDateDebut('');
            setDateFin('');
        }catch(error)
        {
            console.error('Erreur d\'insertion' ,error);
            toast.error("Erreur lors de l'insertion!");
        }

    }

    const ListeSemestre = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_BACK_URL}/Semestre/SelectAll_Semestre`,{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            setSemestre(response.data.data);
        } catch (error) {
            console.log(error);
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
            console.log('Erreur de recuperation',error);
        }
    }

    
    
    useEffect(()=>{
        ListeCours();
        ListeSemestre();
    })
    return (
        <>
        <ToastContainer />
            <div className="w-100 mt-2 mb-2">
                <h4 className="text-center mb-4" style={{'textTransform':'uppercase'}}>Planifier l'éxamen d'une promotion !</h4>
                <div className="row">
                    <form method="post" onSubmit={insertion}>
                        <div className="h-100 d-flex flex-column gap-3">
                            <div className="d-flex justify-content-between">
                                <div className="col-md-6">
                                    <input type="date" className="form-control" value={datedebut} onChange={(e) => setDateDebut(e.target.value)} placeholder="Nom" style={{'height':'50px'}}/>
                                </div>
                                <div className="col-md-6">
                                    <input type="date" className="form-control" value={datefin} onChange={(e) => setDateFin(e.target.value)} placeholder="Prenom" style={{'height':'50px'}}/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                            <div className="col-md-6">
                                <select name="" id="" className="form-control" style={{'height':'50px'}} value={IdCours} onChange={(e) => setIdCours(e.target.value)}>
                                    <option>Séléctionner la promotion</option>
                                    {Array.isArray(Cours) ? (
                                        Cours.map((C) => (
                                            <option className="form-control" key={C.id_cours} value={C.id_cours}>
                                                {C.promotion_id.codep} {C.id_niveaux.nom}
                                            </option>
                                        ))
                                    ) : (
                                        <option className="form-control">Null</option>
                                    )}
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <select name="" id="" className="form-control" style={{'height':'50px'}} value={idSemestre} onChange={(e) => setIdSemestre(e.target.value)}>
                                    <option>Séléctionner la semestre</option>
                                        {Array.isArray(Semestre) ? (
                                        Semestre.map((S) => (
                                            <option className="form-control" key={S.id_semestre} value={S.id_semestre}>
                                                {S.semestre} 
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
export default InsertionExamen;