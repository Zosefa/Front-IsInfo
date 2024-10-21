import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const ListePromotion = () => {
    const [Promotion,setPromotion] = useState('');
    const token = localStorage.getItem("token");
    const fetch = async () => {
        try{
            const response = await axios.get(`${import.meta.env.VITE_API_BACK_URL}/Promotion/selectAll_Promotion`,{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            setPromotion(response.data.data);
        }catch(error){
            toast.error("Erreur de recuperation des donnees");
            console.log("erreur : ",error);
        }
    };
    useEffect(() => {
        fetch();
        console.log(Promotion);
    });
    return (
        <>
            <ToastContainer />
            <table className="table table-bordered">
                <thead>
                    <tr className="text-center">
                        <th className='border'>Promotion</th>
                        <th className='border'>Filiere</th>
                        <th className='border'>Formation</th>
                        <th className='border'>Rentree</th>
                    </tr>
                </thead>
                <tbody>
                {Array.isArray(Promotion) ? (
                            Promotion.map(P => (
                                <tr key={P.id_promotion} className="text-center">
                                        <td className='border'>
                                            {P.codep}
                                        </td>
                                        <td className='border'>
                                            {P.filiere_id.codef}
                                        </td>
                                        <td className='border'>
                                            {P.formation_id.nom_formation}
                                        </td>
                                        <td className='border'>
                                            {P.anne_promotion}
                                        </td>
                                </tr>
                            ) )
                        ) : ( <tr><td>Aucune valeur trouver!</td></tr>) }
                </tbody>
            </table>
        </>
    )
}

export default ListePromotion;