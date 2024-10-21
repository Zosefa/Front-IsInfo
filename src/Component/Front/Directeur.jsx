import axios from "axios";
import { useEffect, useState } from "react";

const Directeur = () => {
    const [mot,setMot] = useState('');
    const selectInstitut = async () => {
        const response = await axios.get(`${import.meta.env.VITE_API_BACK_URL}/Institut/SelectAll_Intitut`);
        console.log(response.data.data);
        setMot(response.data.data[0].motDirecteur);
    }
    useEffect(()=>{
        selectInstitut();
    },[])
    return (
        <div className="container-fluid py-5" id="acceuil">
        <div className="w-85 m-auto py-5">
            <div className="row">
                <div className="col-lg-5 mb-5 mb-lg-0" style={{"minHeight": "500px"}}>
                    <div className="position-relative h-100">
                        <img className=" w-100 h-100" src="/Image/Mot-du-directeur.jpg" style={{"objectFit": "cover"}}/>
                    </div>
                </div>
                <div className="col-lg-7 align-content-center">
                    <div className="section-title position-relative mb-4">
                        <h3 className="display-6">Mot du Directeur</h3>
                    </div>
                    <p>{mot}</p>
                    <h5 className="text-info">
                    Le Directeur de l’Institut
                    </h5>
                    <p style={{"fontWeight":"bold"}}>RAKOTOARIVAO Manohisoa Tsiory</p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Directeur;