import axios from "axios";
import { useEffect, useState } from "react";
 
const Footer = () => {
    const [nom,setNom] = useState('');
    const [description,setDescription] = useState('');
    const [agrement,setAgrement] = useState('');
    const [siege,setSiege] = useState('');
    const selectInstitut = async () => {
        const response = await axios.get(`${import.meta.env.VITE_API_BACK_URL}/Institut/SelectAll_Intitut`);
        console.log(response.data.data);
        setNom(response.data.data[0].nomInstitut);
        setDescription(response.data.data[0].description);
        setAgrement(response.data.data[0].agrement);
        setSiege(response.data.data[0].siege);
    }
    useEffect(()=>{
        selectInstitut();
    },[])
    return (
        <>
            <div className="container-fluid position-relative overlay-top bg-dark text-white-50 py-5" style={{"marginTop": "90px"}}>
        <div className="container-fluid mt-5 pt-5">
            <div className="row">
                <div className="col-md-4 mb-5">
                    <a href="index.html" className="navbar-brand">
                        <h6 className="mt-n2 text-uppercase text-white" style={{"fontWeight":"bold"}}>{nom}</h6>
                    </a>
                    <p className="m-0">{description}</p>
                </div>
                <div className="col-md-12 mb-5">
                    <div className="row">
                        <div className="col-md-4 mb-5">
                            <h3 className="text-white mb-4">Informations</h3>
                            <p><i className="fa fa-map-marker-alt mr-2"></i>{siege}</p>
                            <p><i className="fa fa-graduation-cap mr-2"></i>{agrement}</p>
                            <p><i className="fa fa-phone mr-2"></i>034 74 966 18 / 034 60 409 50</p>
                            <p><i className="fa fa-envelope mr-2"></i>direction@isinfo.mg / isinfo@blueline.mg</p>
                            <div className="d-flex justify-content-start mt-4">
                        
                            <a className="text-muted mr-4 d-flex flex-column align-items-center gap-2 justify-content-center" href="https://www.facebook.com/Isinfo.Institut?locale=fr_FR" target="_blank"><i className="fab fa-2x fa-facebook-f"></i></a>
                        <a className="text-muted mr-4 d-flex flex-column align-items-center gap-2 justify-content-center" href="https://wa.me/261346470325" target="_blank" rel="noopener noreferrer"><i className="fab fa-2x fa-whatsapp"></i></a>
                        <a className="text-muted mr-4 d-flex flex-column align-items-center gap-2 justify-content-center" href="https://mail.google.com/mail/u/0/#search/isinfo%40blueline.mg" target="_blank"><i className="fa fa-2x fa-envelope"></i></a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <h3 className="text-white mb-4">Filières</h3>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Informatique de Géstion (IG)</a>
                                <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Maintenance et Réseaux (MR)</a>
                                <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Génie Logiciel (GL)</a>
                                <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Administrateur Systems et Réseaux (ASR)</a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <h3 className="text-white mb-4">Diplômes</h3>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Licence Bac +3</a>
                                <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Master Bac +5</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    <div className="container-fluid bg-dark text-white-50 border-top py-4" style={{"borderColor": "rgba(256, 256, 256, .1) !important"}}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 text-center text-md-left mb-3 mb-md-0">
                    <p className="m-0">Copyright &copy; <a className="text-white" href="#">zosephatoky@gmail.com / razafindrakotomickael77@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}
export default Footer;