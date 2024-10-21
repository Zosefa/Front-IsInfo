import { useState,useEffect } from "react";
import axios from 'axios';
const Consultation = () => {
    const [Consultation,setConsultation] = useState('');
    const token = localStorage.getItem('token');
    const ListePrix = async () => {
        const response = await axios.get('http://localhost:8080/Cours/ConsultationPrix',{
            headers:{
                'Authorization' :`Bearer ${token}`
            }
        });
        setConsultation(response.data.data);
    };
    useEffect(()=>{
        ListePrix();
    })
    return (
        <>
            <table className="table table-bordered">
                <thead>
                    <tr className="text-center">
                        <th className='border'>Niveaux Classe</th>
                        <th className='border'>Prix Ecolage</th>
                        <th className='border'>Date de Mise a jour</th>
                    </tr>
                </thead>
                <tbody>
                   {Array.isArray(Consultation) ? (
                       Consultation.map( C => (
                           <tr key={C.id_prix_ecolage} className="text-center">
                               <td className='border'>
                                   {C.id_niveau.nom}
                               </td>
                               <td className='border'>
                                   {C.valeur} Ar
                               </td>
                               <td className='border'>
                                   {C.dates}
                               </td>
                           </tr>
                       ) )
                   ) : ( <tr><td>Null</td></tr>) }
                </tbody>
            </table>
        </>
    )
}

export default Consultation;