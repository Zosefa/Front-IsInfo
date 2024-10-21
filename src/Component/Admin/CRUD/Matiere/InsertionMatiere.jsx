import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const InsertionMatiere = () => {
    const [NomMatiere,setNomMatiere] = useState('');
    const [Coeff,setCoeff] = useState('');
    const token = localStorage.getItem("token");
    const insertion = (e) => {
        e.preventDefault();
        try{
            const response = axios.post(`${import.meta.env.VITE_API_BACK_URL}/Matiere/insertionMatiere`,
                { nom_matiere:NomMatiere, coeff:Coeff },
                {
                    headers:
                        {
                            'content-type': 'application/json',
                            'Authorization':`Bearer ${token}`
                        }
                },
            );
            console.log('Inserer',response.data);
            toast.success("Matiere ajouter!");
            setNomMatiere('');
            setCoeff('');
        }catch(error)
        {
            console.error('Erreur d\'insertion' , error)
            toast.error("Erreur d'ajout de la Matiere");
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
                                <input type="text" className="form-control" value={NomMatiere} onChange={(e) => setNomMatiere(e.target.value)} placeholder="Matiere" style={{'height':'50px'}}/>
                            </div>
                            <div className="col-md-6">
                                <input type="number" className="form-control" value={Coeff} onChange={(e) => setCoeff(e.target.value)} placeholder="Coefficient" style={{'height':'50px'}}/>
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
export default InsertionMatiere;