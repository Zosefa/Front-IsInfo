import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const InsertionFormation = () => {
    const [NomFormation,setNomFormation] = useState('');
    const [codef,setCodeF] = useState('');
    const token = localStorage.getItem("token");
    const insertion = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post(`${import.meta.env.VITE_API_BACK_URL}/Formation/insertionFormation`,
                { nom_formation:NomFormation, codef:codef },
                {
                    headers:
                    {
                        'content-type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                },
            );
            toast.success("Inserer avec success!");
            console.log('Inserer',response.data);
            setNomFormation('');
        }catch(error)
        {
            toast.error("Erreur dans l'insertion d'une Formation");
            console.error('Erreur d\'insertion' , error)
        }

    }
    return (
        <>

            <div className="w-100 mt-2 mb-2">
                <ToastContainer />
                <div className="row">
                    <form method="post" onSubmit={insertion}>
                        <div className="d-flex">
                        <div className="col-md-6">
                            <input type="text" className="form-control" value={NomFormation} onChange={(e) => setNomFormation(e.target.value)} placeholder="Nom de la Formation" style={{'height':'50px'}}/>
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" value={codef} onChange={(e) => setCodeF(e.target.value)} placeholder="Code Formation" style={{'height':'50px'}}/>
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
export default InsertionFormation;