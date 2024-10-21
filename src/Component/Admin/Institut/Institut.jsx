import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Institut = ()=> {
    const [nom,setNom] = useState('');
    const [description,setDescription] = useState('');
    const [agrement,setAgrement] = useState('');
    const [siege,setSiege] = useState('');
    const [mot,setMot] = useState('');
    const [id,setId] = useState('');
    const token = localStorage.getItem('token');

    const selectInstitut = async () => {
        const response = await axios.get(`${import.meta.env.VITE_API_BACK_URL}/Institut/SelectAll_Intitut`);
        setId(response.data.data[0].id_institut);
        setNom(response.data.data[0].nomInstitut);
        setAgrement(response.data.data[0].agrement);
        setSiege(response.data.data[0].siege);
        setDescription(response.data.data[0].description);
        setMot(response.data.data[0].motDirecteur);
    }
    useEffect(()=>{
        selectInstitut();
    },[])

    const update = async (e) => {
        e.preventDefault();
        console.log(agrement);
        try{
            await axios.post('http://localhost:8080/Institut/Update_Intitut',
            {
                nom:nom,description:description,agrement:agrement,siege:siege,mot:mot,id_institut:id
            },
            {
                headers:
                {
                    'content-type': 'application/json',
                    'Authorization':`Bearer ${token}`
                }
            },);
            toast.success('Modification effectuer');
        }catch(error){
            console.log(error);
            toast.error('Erreur de modification');
        }
    } 
    
    return(
        <>
        <ToastContainer />
            <div className="mt-4" style={{'width':'90%','marginLeft':'auto','marginRight':'auto'}}>
                <h4 className="text-center mb-5">MODIFIER LES A PROPOS DE L'INSTITUT !</h4>
                <div className="row">
                    <form method="post" onSubmit={update}>
                        <div className="h-100 d-flex flex-column gap-3">
                            <div className="d-flex justify-content-between">
                                <div className="col-md-6">
                                    <label htmlFor="">Nom de l'institut</label>
                                    <input type="text" className="form-control" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Nom de l'institut" style={{'height':'50px'}}/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="">Siège de l'institut</label>
                                    <input type="text" className="form-control" value={siege} onChange={(e) => setSiege(e.target.value)} placeholder="Siege" style={{'height':'50px'}}/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="col-md-12">
                                    <label htmlFor="">Agrément</label>
                                    <textarea type="text" className="w-100 border"  value={agrement} onChange={(e) => setAgrement(e.target.value)} placeholder="Numero d'agrement" style={{'height':'150px'}}></textarea>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="col-md-12">
                                    <label htmlFor="">Déscription</label>
                                    <textarea type="text" className="w-100 border" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description de l'Institut" style={{'height':'150px'}}></textarea>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="col-md-12">
                                    <label htmlFor="">Mot du directeur</label>
                                    <textarea type="text" rows={6} className="w-100 border" value={mot} onChange={(e) => setMot(e.target.value)} placeholder="Mot du directeur" style={{'height':'200px'}}></textarea>
                                </div>
                            </div>
                            
                            <div className="d-flex justify-content-between">
                                
                                <div className="col-md-4">
                                    <button type="submit" className="btn btn-success">Modifier</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Institut;