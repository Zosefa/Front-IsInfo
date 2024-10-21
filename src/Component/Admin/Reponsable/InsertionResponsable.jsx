import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const InsertionReponsable = () => {
    const [Nom,setNom] = useState('');
    const [Prenom,setPrenom] = useState('');
    const [Email,setEmail] = useState('');
    const [Telephone,setTelephone] = useState('');
    const [Adresse,setAdresse] = useState('');
    const [Genre,setGenre] = useState('');
    const [IdGenre,setIdGenre] = useState('');
    const token = localStorage.getItem("token");

    const ListeGenre = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_BACK_URL}/Genre/SelectAll_Genre`,{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            setGenre(response.data.data);
        } catch (error) {
            console.log(error);
            toast.error("Erreur de recuperation des donnee!");
        }
    }

    const insertion = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_BACK_URL}/Personne/insertionPersonne`,
                {nom:Nom, prenom:Prenom, telephone:Telephone, id_genre:IdGenre,email:Email, adresse:Adresse},
                {
                    headers:
                    {
                        'content-type' : 'application/json',
                        'Authorization':`Bearer ${token}`
                    }
                }
            );
            console.log(response.data);
            toast.success("Nouveau responsable inserer !");
            setNom('');
            setPrenom('');
            setTelephone('');
            setAdresse('');
            setTelephone('');
            setAdresse('');
        } catch (error) {
            console.log(error);
            toast.error("Erreur lors de l'insertion !");
        }
    }

    useEffect(() => {
        ListeGenre();
    })
    return (
        <>
            <ToastContainer />
            <div className="mt-4" style={{'width':'90%','marginLeft':'auto','marginRight':'auto'}}>
                <h4 className="text-center mb-4" style={{'textTransform':'uppercase'}}>Ajouter un nouveau responsable!</h4>
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
                                    <option>Séléctionner un genre</option>
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
export default InsertionReponsable;