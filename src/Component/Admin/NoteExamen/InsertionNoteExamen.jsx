import axios from "axios";
import { useEffect, useState } from "react";

const InsertionNoteExamen = () => {

const [examen,setExamen] = useState('');
const [etudiant,setEtudiant] = useState('');
const [professeurMatiere,setProfesseurMatiere] = useState('');
const [IdExamen,setIdExamen] = useState('');
const [IdEtudiant,setIdEtudiant] = useState('');
const [IdMAtiere,setMatiere] = useState('');
const [note,setNote] = useState('');
const token = localStorage.getItem("token");

const insertionNOte = (event) => {
    event.preventDefault();
    try {
        axios.post(`${import.meta.env.VITE_API_BACK_URL}/Note_Examen/insertionEtudiant`,
            {id_examen:IdExamen, id_etudiant:IdEtudiant, id_professeur_matiere:IdMAtiere, note:note},
            {
                headers:{
                    "Content-Type" : "application/json",
                    'Authorization':`Bearer ${token}`
                }
            }
        ),
        console.log('NOte inserer');
        setNote('');
    } catch (error) {
        console.log("erreur d'insertion : ".error)
    }
}

const ListeExamen = async () => {
    try {
        const response = await axios.get('http://localhost:8080/Examen/SelectAll_Examen',{
            headers:{
                'Authorization':`Bearer ${token}`
            }
        });
        setExamen(response.data.data);
    } catch (error) {
        console.log("Erreur de recuperation d'examen :",error);
    }
}
const ListeEtudiant = async () => {
    try {
        const response =await axios.get('http://localhost:8080/Etudiant/SelectAll_Etudiant',{
            headers:{
                'Authorization':`Bearer ${token}`
            }
        });
        setEtudiant(response.data.data);
    } catch (error) {
        console.log("Erreur de recuperation d'Etudiant :",error);
    }
}
const LIsteMAtiere = async () => {
    try {
        const response = await axios.get('http://localhost:8080/Professeur_matiere/SelectAll_ProfesseurMatiere',{
            headers:{
                'Authorization':`Bearer ${token}`
            }
        });
        setProfesseurMatiere(response.data.data);
    } catch (error) {
        console.log("Erreur de recuperation de MAtiere :",error);
    }
}

useEffect(() => {
    ListeExamen();
    ListeEtudiant();
    LIsteMAtiere();
});
    return (
        <>
            <div className="w-100 mt-2 mb-2">
                <h4 className="text-center mb-4" style={{'textTransform':'uppercase'}}>Attribuer les notes d un etudiant a un examen !</h4>
                <div className="row">
                    <form method="post" onSubmit={insertionNOte}>
                        <div className="w-100 h-100 d-flex flex-column gap-3">
                            <div className="d-flex justify-content-between">
                                <div className="col-md-6">

                                    <select name="" id="" className="form-control" style={{'height':'50px'}} value={IdExamen} onChange={(e) => setIdExamen(e.target.value)}>
                                        <option>Séléctionner le semestre et la promotion</option>
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
                                <div className="col-md-6">
                                    <select name="" id="" className="form-control" style={{'height':'50px'}} value={IdEtudiant} onChange={(e) => setIdEtudiant(e.target.value)}>
                                        <option>Séléctionner l'étudiant</option>
                                        {Array.isArray(etudiant) ? (
                                        etudiant.map((e) => (
                                            <option className="form-control" key={e.id_etudiant} value={e.id_etudiant}>
                                                {e.matricule}  {e.id_personne.nom} {e.id_personne.prenom}
                                            </option>
                                        ))
                                    ) : (
                                        <option className="form-control">Null</option>
                                    )}
                                    </select>
                                </div>
                                
                            </div>
                            <div className="d-flex justify-content-between gap-2">
                                <div className="col-md-6">
                                    <select name="" id="" className="form-control" style={{'height':'50px'}} value={IdMAtiere} onChange={(e) => setMatiere(e.target.value)}>
                                        <option>Séléctionner une matière</option>
                                        {Array.isArray(professeurMatiere) ? (
                                            professeurMatiere.map((pm) => (
                                                <option className="form-control" key={pm.id_professeur_matiere} value={pm.id_professeur_matiere}>
                                                    {pm.matiere_id.nom_matiere}
                                                </option>
                                            ))
                                        ) : (
                                            <option className="form-control">Null</option>
                                        )}
                                        </select>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Note" style={{'height':'50px'}}/>
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
export default InsertionNoteExamen;