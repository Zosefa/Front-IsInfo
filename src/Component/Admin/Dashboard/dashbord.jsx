import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Crud from "../CRUD/Crud";
import Etudiant from "../Etudiant/Etudiant.jsx";
import Professeur from "../Professeur/Professeur.jsx";
import Attribution from "../Attribution/Attribution.jsx";
import Examen from "../Examen/Examen.jsx";
import NoteExamen from "../NoteExamen/NoteExamen.jsx";
import InsertionReponsable from "../Reponsable/InsertionResponsable.jsx";
import logo from "../../../../public/Image/logo.jpeg";
import Institut from "../Institut/Institut.jsx";
import Evenement from "../Evenement/Evenement.jsx";


const Dashbord = () => {
  const [page, setPage] = useState(8);
  const [activeIndex, setActiveIndex] = useState(8);
  const navigate = useNavigate();
  
  const deconnexion = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/Login');
  }

  const handlePageChange = (index) => {
    setPage(index);
    setActiveIndex(index); 
  }

  return (
    <>
      <div className="wrapper ">
      <div className="sidebar" data-color="blue">
      <div className="logo">
        <a href="#" className="simple-text fs-5 text-center">
          <img src={logo} alt="" style={{"width":"15%"}}/> IS-INFO
        </a>
      </div>
      <div className="sidebar-wrapper" id="sidebar-wrapper">
        <ul className="nav">
          <li className={activeIndex === 8 ? "active" : ""}
            onClick={() => handlePageChange(8)}>
            <a href="#">
              <i className="now-ui-icons education_atom"></i>
              <p>Institut</p>
            </a>
          </li>
          <li className={activeIndex === 9 ? "active" : ""}
            onClick={() => handlePageChange(9)}>
            <a href="#">
              <i className="now-ui-icons education_atom"></i>
              <p>Evenement</p>
            </a>
          </li>
          <li className={activeIndex === 2 ? "active" : ""}
            onClick={() => handlePageChange(2)}>
            <a href="#">
              <i className="now-ui-icons education_atom"></i>
              <p>Etudiant</p>
            </a>
          </li>
          <li className={activeIndex === 3 ? "active" : ""}
            onClick={() => handlePageChange(3)}>
            <a href="#">
              <i className="now-ui-icons ui-1_bell-53"></i>
              <p>Professeur</p>
            </a>
          </li>
          <li className={activeIndex === 4 ? "active" : ""}
            onClick={() => handlePageChange(4)}>
            <a href="#">
              <i className="now-ui-icons ui-1_bell-53"></i>
              <p>Attribution</p>
            </a>
          </li>
          <li className={activeIndex === 5 ? "active" : ""}
            onClick={() => handlePageChange(5)}>
            <a href="#">
              <i className="now-ui-icons ui-1_bell-53"></i>
              <p>Examen</p>
            </a>
          </li>
          <li className={activeIndex === 6 ? "active" : ""}
            onClick={() => handlePageChange(6)}>
            <a href="#">
              <i className="now-ui-icons education_atom"></i>
              <p>Note Examen</p>
            </a>
          </li>
          <li className={activeIndex === 1 ? "active" : ""}
            onClick={() => handlePageChange(1)}>
            <a href="#">
              <i className="now-ui-icons ui-1_bell-53"></i>
              <p>OPERATIONS</p>
            </a>
          </li>
          <li className={activeIndex === 7 ? "active" : ""}
            onClick={() => handlePageChange(7)}>
            <a href="#">
              <i className="now-ui-icons ui-1_bell-53"></i>
              <p>RESPONSABLE</p>
            </a>
          </li>
          
          <li className="active-pro" onClick={deconnexion}>
            <a href="#">
              <i className="now-ui-icons arrows-1_cloud-download-93"></i>
              <p>Deconnexion</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
      <div className="main-panel bg-white">
        {page === 1 && <Crud />}
        {page === 2 && <Etudiant />}
        {page === 3 && <Professeur />}
        {page === 4 && <Attribution />}
        {page === 5 && <Examen />}
        {page === 6 && <NoteExamen />}
        {page === 7 && <InsertionReponsable />}
        {page === 8 && <Institut />}
        {page === 9 && <Evenement />}
      </div>
    </div>
    
      
    </>
  )
}

export default Dashbord
