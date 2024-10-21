import axios from "axios";
import { useEffect, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

const ListeProfesseur = () => {
    const [Professeur,setProfesseur] = useState('');
    const token = localStorage.getItem("token");
    const Liste = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_BACK_URL}/Professeur/SelectAll_Professeur`,{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            setProfesseur(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        Liste();
    })
    return(
        <>
            <div className="container-fluid">
                <h4 className="text-center mb-4" style={{'textTransform':'uppercase'}}>Liste de tous les professeurs !</h4>
                <table className="table table-bordered">
                    <thead>
                        <tr className="text-center">
                            <th className='border'>Nom</th>
                            <th className='border'>Prénom</th>
                            <th className='border'>Adresse</th>
                            <th className='border'>Telephone</th>
                            <th className='border'>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(Professeur) ? (
                            Professeur.map( P => (
                                <tr key={P.id_professeur} className="text-center">
                                        <td className='border'>
                                            {P.id_personne.nom}
                                        </td>
                                        <td className='border'>
                                            {P.id_personne.prenom}
                                        </td>
                                        <td className='border'>
                                            {P.id_personne.adresse}
                                        </td>
                                        <td className='border'>
                                            {P.id_personne.telephone}
                                        </td>
                                        <td className='border'>
                                            {P.id_personne.email}
                                        </td>
                                </tr>
                            ) )
                        ) : ( <tr><td>Null</td></tr>)}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ListeProfesseur;