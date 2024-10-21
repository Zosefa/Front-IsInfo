import axios from "axios";
import { useEffect, useState } from "react";

const Apropos = () => {
    const [agrement,setAgrement] = useState('');
    const [description,setDescription] = useState('');
    const [siege,setSiege] = useState('');
    const selectInstitut = async () => {
        const response = await axios.get(`${import.meta.env.VITE_API_BACK_URL}/Institut/SelectAll_Intitut`);
        setAgrement(response.data.data[0].agrement);
        setSiege(response.data.data[0].siege);
        setDescription(response.data.data[0].description);
    }
    useEffect(()=>{
        selectInstitut();
    },[])
    return (
        <div className="container-fluid bg-imag" style={{"margin": "10px 0 90px 0"}} id="apropos">
        <div className="w-85 m-auto">
            <div className="row">
                <div className="col-lg-6 my-5 pb-lg-5">
                    <div className="section-title position-relative mb-4">
                        <h1 className="display-6">A PROPOS</h1> 
                        {description}
                    </div>
                    <h6 className="mb-4 pb-2 font-weight-bold"></h6>
                    <div className="d-flex align-items-center mb-2">
                        <div className="btn btn-dark mr-4">
                            <i className="fa fa-map-marker-alt text-white"></i>
                        </div>
                        <div className="mt-n1">
                            <p className="m-0">{siege}</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                        <div className="btn btn-dark mr-4">
                            <i className="fas fa-phone-square text-white"></i>
                        </div>
                        <div className="mt-n1">
                            <p className="m-0">034 74 966 18 / 034 60 409 50</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="btn btn-dark mr-4">
                            <i className="fa fa-envelope text-white"></i>
                        </div>
                        <div className="mt-n1">
                            <p className="m-0"> <b style={{"fontWeight":"bold"}}>direction@isinfo.mg</b>   /  isinfo@blueline.mg</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6" style={{"minHeight": "500px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100" src="/Image/IS-INFO.jpg" style={{"objectFit": "cover"}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Apropos;