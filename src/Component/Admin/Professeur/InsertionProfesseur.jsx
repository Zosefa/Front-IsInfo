import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const InsertionProfesseur = () => {
    const [Nom,setNom] = useState('');
    const [Prenom,setPrenom] = useState('');
    const [Telephone,setTelephone] = useState('');
    const [Adresse,setAdresse] = useState('');
    const [Email,setEmail] = useState('');
    const [Genre,setGenre] = useState('');
    const [IdGenre,setIdGenre] = useState('');
    const token = localStorage.getItem("token");
    const insertion = (e) => {
        e.preventDefault();
        try{
            const response = axios.post(`${import.meta.env.VITE_API_BACK_URL}/Professeur/insertionProfesseur`,
                { nom:Nom, prenom:Prenom, telephone:Telephone, id_genre:IdGenre,email:Email, adresse:Adresse },
                {
                    headers:
                    {
                        'content-type': 'application/json','Authorization':`Bearer ${token}`
                    }
                },
            );
            console.log('Inserer',response.data);
            toast.success("Professeur inserer");
            setNom('');
            setPrenom('');
            setTelephone('');
            setAdresse('');
            setTelephone('');
            setAdresse('');
        }catch(error)
        {
            toast.error("Erreur d'insertion du professeur!");
            console.error('Erreur d\'insertion' ,error)
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
            console.log('Erreur de recuperation',error);
        }
    }
    useEffect(()=>{
        ListeGenre();
    })
    return (
        <>
            <ToastContainer />
            <div className="w-100 mt-2 mb-2">
                <h4 className="text-center mb-4" style={{'textTransform':'uppercase'}}>Inserer un nouveau professeur !</h4>
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
                                    <input type="text" className="form-control" value={Adresse} onChange={(e) => setAdresse(e.target.value)} placeholder="Adresse" style={{'height':'50px'}}/>
                                </div>
                                <div className="col-md-6">
                                    <input type="email" className="form-control" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" style={{'height':'50px'}}/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" value={Telephone} onChange={(e) => setTelephone(e.target.value)} placeholder="Telephone" style={{'height':'50px'}}/>
                                </div>
                                <div className="col-md-6">
                                    <select name="" id="" className="form-control" style={{'height':'50px'}} value={IdGenre} onChange={(e) => setIdGenre(e.target.value)}>
                                    <option>Choisir le genre</option>
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
export default InsertionProfesseur;