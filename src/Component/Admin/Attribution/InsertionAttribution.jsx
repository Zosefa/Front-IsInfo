import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const InsertionAttribution = () => {
    const [professeur,setProfesseur] = useState('');
    const [Idprofesseur,setIdProfesseur] = useState('');
    const [Matiere,setMatiere] = useState('');
    const [IdMatiere,setIdMatiere] = useState('');
    const [Cours,setCours] = useState('');
    const [IdCours,setIdCours] = useState('');
    const token = localStorage.getItem("token");
    const insertion = (e) => {
        e.preventDefault();
        try{
            console.log(Idprofesseur,IdMatiere,IdCours);
            const response = axios.post(`${import.meta.env.VITE_API_BACK_URL}/Professeur_matiere/insertionProfesseur_matiere`,
                { professeur_id:Idprofesseur, matiere_id:IdMatiere, id_cours:IdCours},
                {
                    headers:
                    {
                        'content-type': 'application/json',
                        'Authorization':`Bearer ${token}`
                    }
                },
            );
            console.log('Inserer',response.data);
            toast.success("Attribution reussis!");
        }catch(error)
        {
            console.error('Erreur d\'insertion' ,error)
            toast.error("Erreur lors de l'attribution!");
        }
    }
    const ListeProfesseur = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_BACK_URL}/Professeur/SelectAll_Professeur`,{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            setProfesseur(response.data.data);
        } catch (error) {
            console.log('Erreur de recuperation',error);
        }
    }
    const ListeMatiere = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_BACK_URL}/Matiere/SelectAll_Matiere`,{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            setMatiere(response.data.data);
        } catch (error) {
            console.log('Erreur de recuperation',error);
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
        ListeProfesseur();
        ListeMatiere();
        ListeCours();
    },)
    return (
        <>
            <ToastContainer />
            <div className="w-100 mt-2 mb-2">
                <h4 className="text-center mb-4" style={{'textTransform':"uppercase"}}>Gerer l attribution des professeurs !</h4>
                <div className="row">
                    <form method="post" onSubmit={insertion}>
                        <div className="h-100 d-flex flex-column gap-3">
                            <div className="d-flex justify-content-between">
                                <div className="col-md-6">
                                    <select name="" id="" className="form-control" style={{'height':'50px'}} value={Idprofesseur} onChange={(e) => setIdProfesseur(e.target.value)}>
                                    <option>Séléctionner un professeur</option>
                                        {Array.isArray(professeur) ? (
                                        professeur.map((G) => (
                                            <option className="form-control" key={G.id_professeur} value={G.id_professeur}>
                                                {G.id_personne.nom} {G.id_personne.prenom}
                                            </option>
                                        ))
                                    ) : (
                                        <option className="form-control">Null</option>
                                    )}
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <select name="" id="" className="form-control" style={{'height':'50px'}} value={IdMatiere} onChange={(e) => setIdMatiere(e.target.value)}>
                                        <option>Séléctionner une matière</option>
                                        {Array.isArray(Matiere) ? (
                                        Matiere.map((M) => (
                                            <option className="form-control" key={M.id_matiere} value={M.id_matiere}>
                                                {M.nom_matiere}
                                            </option>
                                        ))
                                    ) : (
                                        <option className="form-control">Null</option>
                                    )}
                                    </select>
                                </div>
                                
                            </div>
                            <div className="col-md-6">
                                    <select name="" id="" className="form-control" style={{'height':'50px'}} value={IdCours} onChange={(e) => setIdCours(e.target.value)}>
                                        <option>Séléctionner le niveau a attibuer</option>
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
export default InsertionAttribution;