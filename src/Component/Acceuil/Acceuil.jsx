import Navbar from '../Front/NavBar';
import Header from '../Front/Header';
import Apropos from '../Front/Apropos';
import Directeur from '../Front/Directeur';
import Filiere from '../Front/Filiere';
import Diplome from '../Front/Diplome';
import Formation from '../Front/Formation';
import Contact from '../Front/Contact';
import Footer from '../Front/Footer';
import Evenement from '../Front/Evenement';

const Acceuil = () => {
    return (
        <>
        <Navbar />
        <Header />
        <Directeur />
        <Apropos />
        <Filiere />
        <div className="container-fluid">
            <Diplome />
            <Formation />
            <div className="row justify-content-center bg-image mx-0 mb-5">
                <Contact />
            </div>
            <div className="row justify-content-center bg-image mx-0 mb-5">
                <Evenement />
            </div>
        </div>
        <Footer />
        <a href="#" className="btn btn-sm btn-info rounded-0 btn-lg-square back-to-top d-flex align-items-center justify-content-center"><i className="fa fa-angle-double-up fs-5"></i></a>
        </>
    )
} 
export default Acceuil;
