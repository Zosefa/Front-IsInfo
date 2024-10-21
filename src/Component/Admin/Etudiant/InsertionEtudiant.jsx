import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const InsertionEtudiant = () => {
    const [Nom,setNom] = useState('');
    const [Prenom,setPrenom] = useState('');
    const [Telephone,setTelephone] = useState('');
    const [Email,setEmail] = useState('');
    const [Adresse,setAdresse] = useState('');
    const [Matricule,setMatricule] = useState('');
    const [Genre,setGenre] = useState('');
    const [IdGenre,setIdGenre] = useState('');
    const [IdPromotion,setIdPromotion] = useState('');
    const [Promotion,setPromotion] = useState('');
    const token = localStorage.getItem("token");
    const insertion = (e) => {
        e.preventDefault();
        try{
            axios.post(`${import.meta.env.VITE_API_BACK_URL}/Etudiant/insertionEtudiant`,
                { nom:Nom, prenom:Prenom, telephone:Telephone, matricule:Matricule, promotion_id:IdPromotion,id_genre:IdGenre,adresse:Adresse,email:Email },
                {
                    headers:
                    {
                        'content-type': 'application/json',
                        'Authorization':`Bearer ${token}`
                    }
                },
            );
            toast.success("Etudiant inscrit avec success!");
            setNom('');
            setPrenom('');
            setAdresse('');
            setEmail('');
            setTelephone('');
            setMatricule('');
        }catch(error)
        {
            console.error('Erreur d\'insertion' , error);
            toast.error("erreur d'insertion de l'etudiant!");
        }

    }
    const ListeGenre = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_BACK_URL}/Genre/SelectAll_Genre`,{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            setGenre(response.data.data);
        } catch (error) {
            console.log("erreur de recuperation "+error);
        }
    }

    const ListePromotion = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_BACK_URL}/Promotion/selectAll_Promotion`,{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            setPromotion(response.data.data);
        } catch (error) {
            console.log("erreur de recuperation "+error);
        }
    }

    useEffect(() => {
        ListeGenre();
        ListePromotion();
    })
    return (
        <>
            <ToastContainer />
            <div className="w-100 mt-2 mb-2">
                <h4 className="text-center mb-4" style={{'textTransform':'uppercase'}}>Ajouter un etudiant !</h4>
                <div className="row">
                    <form method="post" onSubmit={insertion}>
                        <div className="h-100 d-flex flex-column gap-3">
                            <div className="d-flex justify-content-between">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" value={Nom} onChange={(e) => setNom(e.target.value)} placeholder="Nom" style={{'height':'50px'}}/>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" value={Prenom} onChange={(e) => setPrenom(e.target.value)} placeholder="Prenom" style={{'height':'50px'}}/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" value={Matricule} onChange={(e) => setMatricule(e.target.value)} placeholder="Matricule Etudiant" style={{'height':'50px'}}/>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" value={Telephone} onChange={(e) => setTelephone(e.target.value)} placeholder="Telephone Etudiant" style={{'height':'50px'}}/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" value={Adresse} onChange={(e) => setAdresse(e.target.value)} placeholder="Adresse Etudiant" style={{'height':'50px'}}/>
                                </div>
                                <div className="col-md-6">
                                    <input type="email" className="form-control" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Etudiant" style={{'height':'50px'}}/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="col-md-6">
                                    <select name="" id="" className="form-control" style={{'height':'50px'}} value={IdPromotion} onChange={(e) => setIdPromotion(e.target.value)}>
                                        <option>Ajouter une promotion</option>
                                        {Array.isArray(Promotion) ? (
                                        Promotion.map((P) => (
                                            <option className="form-control" key={P.id_promotion} value={P.id_promotion}>
                                                {P.codep}
                                            </option>
                                        ))
                                    ) : (
                                        <option className="form-control">Null</option>
                                    )}
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <select name="" id="" className="form-control" style={{'height':'50px'}} value={IdGenre} onChange={(e) => setIdGenre(e.target.value)}>
                                    <option>Ajouter le genre de l'étudiant</option>
                                        {Array.isArray(Genre) ? (
                                        Genre.map((G) => (
                                            <option className="form-control" key={G.id_genre} value={G.id_genre}>
                                                {G.nom}
                                            </option>
                                        ))
                                    ) : (
                                        <option className="form-control">Null</option>
                                    )}
                                    </select>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                
                                <div className="col-md-4">
                                    <button type="submit" className="btn btn-success">Enregistrer</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default InsertionEtudiant;