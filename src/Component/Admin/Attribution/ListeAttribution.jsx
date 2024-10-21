import axios from "axios";
import { useEffect, useState } from "react";

const ListeAttribution = () => {
    const [Professeur,setProfesseur] = useState('');
    const token = localStorage.getItem("token");
    const Liste = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_BACK_URL}/Professeur_matiere/SelectAll_ProfesseurMatiere`,{
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
    },)
    return(
        <>
            <div className="container">
                <h4 className="text-center mb-4" style={{'textTransform':"uppercase"}}>Liste des attributions pour les professeurs !</h4>
                <table className="table table-bordered">
                    <thead>
                        <tr className="text-center">
                            <th className='border'>Professeur</th>
                            <th className='border'>Matiere</th>
                            <th className='border'>Promotion</th>
                            <th className='border'>Niveaux</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(Professeur) ? (
                            Professeur.map( P => (
                                <tr key={P.id_professeur} className="text-center">
                                        <td className='border'>
                                            {P.professeur_id.id_personne.nom} {P.professeur_id.id_personne.prenom}
                                        </td>
                                        <td className='border'>
                                            {P.matiere_id.nom_matiere}
                                        </td>
                                        <td className='border'>
                                            {P.id_cours.promotion_id.codep}
                                        </td>
                                        <td className='border'>
                                            {P.id_cours.id_niveaux.nom}
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
export default ListeAttribution;