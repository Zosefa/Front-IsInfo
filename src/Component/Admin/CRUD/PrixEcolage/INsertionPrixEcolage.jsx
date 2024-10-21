import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const InsertionPrixEcolage = () => {
    const [Valeur,setValeur] = useState('');
    const [Niveaux,setNIveaux] = useState('');
    const [IdNiveau,setIdNiveau] = useState('');
    const token = localStorage.getItem("token");
    const insertion = (e) => {
        e.preventDefault();
        try{
            axios.post(`${import.meta.env.VITE_API_BACK_URL}/Cours/insertionPrixEcolage`,
                { valeur:Valeur, id_niveau:IdNiveau },
                {
                    headers:
                    {
                        'content-type': 'application/json',
                        'Authorization':`Bearer ${token}`
                    }
                },
            );
            toast.success("Prix mise a jour!");
            setValeur('');
        }catch(error)
        {
            toast.error("Erreur de la mise a jour des prix!");
            console.error('Erreur d\'insertion' , error)
        }

    }
    const ListeNIveau = async () => {
        try{
            const response = await axios.get(`${import.meta.env.VITE_API_BACK_URL}/Niveaux/selectAll_Niveaux`,{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            setNIveaux(response.data.data);
        }catch(error)
        {
            console.log('Erreur de recuperation',error)
        }
    }
    useEffect(()=>{
        ListeNIveau();
    })
    return (
        <>
            <ToastContainer />
            <div className="w-100 mt-2 mb-2">
                <div className="row">
                    <form method="post" onSubmit={insertion}>
                        <div className="d-flex">
                            <div className="col-md-6">
                                <input type="text" className="form-control" value={Valeur} onChange={(e) => setValeur(e.target.value)} placeholder="Valeur en Ariary" style={{'height':'50px'}}/>
                            </div>
                            <div className="col-md-6">
                                <select name="" id="" className="form-control" value={IdNiveau} onChange={(e) => setIdNiveau(e.target.value)} style={{'height':'50px'}}>
                                <option>Séléctionner un nouveau</option>
                                    {Array.isArray(Niveaux) ? (
                                        Niveaux.map((N) => (
                                            <option className="form-control" key={N.id_niveaux} value={N.id_niveaux}>
                                                {N.nom}
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
export default InsertionPrixEcolage;