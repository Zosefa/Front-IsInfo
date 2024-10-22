import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

const Login = () => {
    const [utilisateur,setUtilisateur] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const inputListe = document.querySelectorAll(".input-group input");
    Array.prototype.forEach.call(inputListe, (inputItem) =>{
      inputItem.addEventListener("focus" , function() {
        inputItem.parentElement.classList.add("is-focused");
      });
      inputItem.addEventListener("blur" , function() {
        if(inputItem.value.length === 0){
          inputItem.parentElement.classList.remove("is-filled");
          inputItem.parentElement.classList.remove("is-focused");
        }
        else{
          inputItem.parentElement.classList.add("is-filled");
        }
      });
    });
    })
    const getRole = async (token) => { 
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_BACK_URL}/decode`, {
                token: token
            }, {
                headers: { 
                    'Content-Type': 'application/json',
                },
            });
            localStorage.setItem("role", response.data.data);
        } catch (error) {
            console.error("Erreur lors de la récupération du rôle :", error);
        }
    }

    const Connexion = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.post(`${import.meta.env.VITE_API_BACK_URL}/Utilisateur/checking`,{ user:utilisateur , psw:password },{
                header: {
                    'content-type' : 'application/json',
                },
            });
            const erreur = response.data.Erreur;
            const authentifier = response.data.data;
            if(erreur){
                toast.error(erreur);
            }
            if(authentifier){
                const token = authentifier;
                localStorage.setItem("token",token);
                await getRole(token);
                navigate('/Admin');
            }
        }catch(error){
            toast.error("erreur de connexion!");
            console.error('Erreur de Connexion');
        }
    };
    return(
        <>
        <ToastContainer />
        <div className="sign-in-basic">
  
            <div className="page-header align-items-start min-vh-100" style={{"backgroundImage": "url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')"}} loading="lazy">
                <span className="mask bg-gradient-dark opacity-6"></span>
                <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-4 col-md-8 col-12 mx-auto">
                    <div className="card z-index-0 fadeIn3 fadeInBottom">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                        <div className="bg-gradient-info shadow-primary border-radius-lg py-3 pe-1">
                            <h5 className="text-white font-weight-bolder text-center mt-2 mb-0">Veuillez entrer vos identifient</h5>
                            <div className="row ">
                            <div className="col-2 text-center m-auto d-flex align-items-center justify-content-center mt-3">
                                <i className="fas fa-user text-white fs-3 mt-2" style={{"fontSize": "50px !important"}}></i>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="card-body">
                            <form role="form" className="text-start" onSubmit={Connexion}>
                                <div className="input-group input-group-outline my-3">
                                    <label className="form-label">Email Responsable</label>
                                    <input type="email" className="form-control" onChange={(e) => setUtilisateur(e.target.value)} style={{"height":"40px"}} required/>
                                </div>
                                <div className="input-group input-group-outline mb-3">
                                    <label className="form-label">Mot de passe</label>
                                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} style={{"height":"40px"}} required/>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn bg-gradient-info w-100">Connexion</button>
                                    <a href="/inscription" className="text-info">Creer un compte?</a>
                                </div>
                            </form>
                            <div className="text-center mt-1">
                                <a href="/" className="btn btn-link text-secondary font-weight-bold">
                                <i className="fas fa-arrow-left me-2"></i>
                                Retour à l'accueil
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
    );
}
export default Login;
