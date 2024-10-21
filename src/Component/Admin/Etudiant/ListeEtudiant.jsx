import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ListeEtudiant = () => {
    const [Etudiant,setEtudiant] = useState('');
    const [Promotion,setPromotion] = useState('');
    const [IdPromotion,setIdPromotion] = useState('');
    const token = localStorage.getItem("token");
    const ListeEtudiant = async (e) => {
        e.preventDefault();
        console.log(IdPromotion);
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_BACK_URL}/Etudiant/SelectAll_Etudiant_Promotion`,
                {id_promotion:IdPromotion},
                {
                    headers:
                    {
                        'content-type': 'application/json',
                        'Authorization':`Bearer ${token}`
                    }
                }
            );
            setEtudiant(response.data.data);
            console.log(response.data.data);
            toast.success('Liste des etudiants recuperer !');
        } catch (error) {
            console.log(error);
            toast.error("Erreur de chargement!");
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
            console.log(error);
        }
    }


    useEffect(() => {
        ListePromotion();
        
    });
    return(
        <>
            <ToastContainer />
            <div className="container-fluid">
                <h4 className="text-center mb-4" style={{'textTransform':'uppercase'}}>Liste des etudiants de chaque promotion !</h4>
                <form onSubmit={ListeEtudiant} className="w-100 d-flex align-items-center justify-content-center mb-4">
                    <div className="d-flex justify-content-center align-itens-center align-content-center " style={{'width':'90%'}}>
                        <select name="" id="" className="form-control" onChange={(e) => setIdPromotion(e.target.value)} style={{"height" : "50px"}}>
                            <option>Séléctionner la promotion</option>
                            {Array.isArray(Promotion) ? (
                                Promotion.map( P => (
                                    <option value={P.id_promotion} key={P.id_promotion}>{P.codep}</option>
                                ))
                            ) : (
                                <option value="">Null</option>
                            )}
                        </select>
                    </div>
                    <div className="d-flex justify-content-center align-itens-center" style={{'width':'10%'}}>
                        <button type="submit" className=" w-100 btn btn-info" style={{'height':'50px'}}>Voir</button>
                    </div>
                </form>
            
                <table className="table table-bordered">
                    <thead>
                        <tr className="text-center">
                            <th className='border'>Matricule</th>
                            <th className='border'>Nom</th>
                            <th className='border'>Prénom</th>
                            <th className='border'>Tel</th>
                            <th className='border'>Genre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(Etudiant) ? (
                            Etudiant.map( E => (
                                <tr key={E.id_Etudiant} className="text-center">
                                        <td className='border'>
                                            {E.matricule} 
                                        </td>
                                        <td className='border'>
                                            {E.id_personne.nom} 
                                        </td>
                                        <td className='border'>
                                            {E.id_personne.prenom}
                                        </td>
                                        <td className='border'>
                                            {E.id_personne.telephone}
                                        </td> 
                                        <td className='border'>
                                            {E.id_personne.id_genre.nom}
                                        </td>
                                </tr>
                            ) )
                        ) : ( <tr className="text-center"><td colSpan="5">Null</td></tr>)}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ListeEtudiant;