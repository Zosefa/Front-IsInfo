import { useEffect, useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ListeFormation = () => {
    const [Formation,setFormation] = useState('');
    const token = localStorage.getItem("token");
    const fetch = async () => {
        try{
            const response = await axios.get(`${import.meta.env.VITE_API_BACK_URL}/Formation/selectAll_Formation`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            setFormation(response.data.data);
        }catch(error){
            toast.error("Recuperation des donnee echouer!");
            console.log("Erreur de recuperation",error);
        }
    };
    const suppressionFormation = async (event,id) => {
        event.preventDefault();
        try{
            await axios.post(`${import.meta.env.VITE_API_BACK_URL}/Formation/Delete_Formation`,{id_formation:id},
                {
                    headers:
                        {
                            'content-type': 'application/json',
                            'Authorization':`Bearer ${token}`
                        }
                },
            );
            fetch();
            toast.success("Formation Supprimer!");
        }catch(error){
            toast.error("Erreur de suppresion de la formation!");
            console.log(error);
        }
    };
    useEffect(() => {
        fetch();
    });
    return (
        <>
            <ToastContainer />
            <table className="table table-bordered">
                <thead>
                    <tr className="text-center">
                        <th className='border'>Formation</th>
                        <th className='border'>Code Formation</th>
                        <th className='border'>Supprimer</th>
                    </tr>
                </thead>
                <tbody>
                   {Array.isArray(Formation) ? (
                       Formation.map( F => (
                           <tr key={F.id_formation} className="text-center">
                               <td className='border'>
                                   {F.nom_formation}
                               </td>
                               <td className='border'>
                                   {F.codeF}
                               </td>
                               <td className="d-flex justify-content-center align-items-center border">
                                   <button className="btn btn-danger btn-block d-flex align-items-center justify-content-center" style={{'width': '50px'}} onClick={(event) => suppressionFormation(event, F.id_formation)} ><i className="now-ui-icons shopping_basket"></i></button>
                               </td>
                           </tr>
                       ) )
                   ) : ( <tr><td>Null</td></tr>) }
                </tbody>
            </table>
        </>
    )
}

export default ListeFormation;