import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/Login/css/material-kit.css';
import '../../assets/Login/css/nucleo-icons.css';
import '../../assets/Login/css/nucleo-svg.css';
import axios from "axios";

const Inscription = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confpassword,setConfPassword] = useState('');
    const insertion = async (e) => {
        e.preventDefault();
        if(password === confpassword){
            try {
                const response = await axios.post(`${import.meta.env.VITE_API_BACK_URL}/Utilisateur/Inscription`,
                    {email:email,password:password},
                    {
                        headers:
                        {
                            'content-type': 'application/json'
                        }
                    }
                );
                const error = response.data.error;
                const reussis = response.data.data;
                if(error){
                    toast.error("Email non trouver !");
                    setEmail('');
                } 
                if(reussis){
                    toast.success("Inscription reussis ! veuillez maintenant vous connectez");
                    console.log(response.data.data);
                    setEmail('');
                    setPassword('');
                    setConfPassword('');
                }
            } catch (error) {
                toast.error("Erreur d'inscription!");
                console.log(error);
            }
        }else{
            toast.error("Votre mot de passe ne correspond pas!");
            setConfPassword('');
        }
    }   
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
    return (
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
                            <h5 className="text-white font-weight-bolder text-center mt-2 mb-0">Inscrivez-vous</h5>
                            <div className="row ">
                            <div className="col-2 text-center m-auto d-flex align-items-center justify-content-center mt-3">
                                <i className="fas fa-user text-white fs-3 mt-2"></i>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="card-body">
                            <form role="form" className="text-start" onSubmit={insertion}>
                                <div className="input-group input-group-outline my-3">
                                <label className="form-label">Enter votre Email</label>
                                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} style={{"height":"40px"}} value={email} required/>
                                </div>
                                <div className="input-group input-group-outline mb-3">
                                    <label className="form-label">Votre mot de passe</label>
                                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} style={{"height":"40px"}} value={password} required/>
                                </div>
                                <div className="input-group input-group-outline mb-3">
                                    <label className="form-label">Confirmer votre mot de passe</label>
                                    <input type="password" className="form-control" onChange={(e) => setConfPassword(e.target.value)} style={{"height":"40px"}} value={confpassword} required/>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn bg-gradient-info w-100">S inscrire</button>
                                    <a href="/login" className="text-info">Se connecter?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default Inscription;