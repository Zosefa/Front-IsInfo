import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const InsertionFiliere = () => {
    const [NomFiliere,setNomFiliere] = useState('');
    const [CodeFiliere,setCodeFiliere] = useState('');
    const token = localStorage.getItem("token");
    const insertion = (e) => {
        e.preventDefault();
        try{
             axios.post(`${import.meta.env.VITE_API_BACK_URL}/Filiere/insertionFiliere`,
                { filiere:NomFiliere, codef:CodeFiliere },
                {
                    headers:
                    {
                        'content-type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                },
            );
            toast.success("Filiere inserer!");
            setNomFiliere('');
            setCodeFiliere('');
        }catch(error)
        {
            console.error('Erreur d\'insertion' , error)
            toast.error("Erreur d'insertion");
        }

    }
    return (
        <>
            <ToastContainer />
            <div className="w-100 mt-2 mb-2">
                <div className="row">
                    <form method="post" onSubmit={insertion}>
                        <div className="d-flex">
                        <div className="col-md-6">
                            <input type="text" className="form-control" value={NomFiliere} onChange={(e) => setNomFiliere(e.target.value)} placeholder="Nom de la Filiere" style={{'height':'50px'}}/>
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" value={CodeFiliere} onChange={(e) => setCodeFiliere(e.target.value)} placeholder="Code Filiere" style={{'height':'50px'}}/>
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
export default InsertionFiliere;