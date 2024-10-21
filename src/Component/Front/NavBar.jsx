import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('#acceuil'); 

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    const handleScroll = () => {
        const sections = ['#acceuil', '#apropos', '#filiere', '#diplome', '#formation', '#contact', '#evenement'];
        const offsets = sections.map((id) => document.querySelector(id)?.offsetTop);

        const scrollPosition = window.scrollY + 200;

        sections.forEach((id, index) => {
            if (scrollPosition >= offsets[index] && scrollPosition < offsets[index + 1]) {
                setActiveSection(id);
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="container-fluid p-0 sticky-top">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
                    <a href="/Login" className="navbar-brand ml-lg-3">
                        <h3 className="m-0 text-uppercase text-info">
                            <img src="/Image/logo.jpeg" style={{ width: '60px' }} alt="Logo" /> IS-INFO
                        </h3>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleNavbar}
                        aria-controls="navbarCollapse"
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : 'hide'} transition`} id="navbarCollapse">
                        <div className="navbar-nav mx-auto py-0">
                            <a
                                href="#acceuil"
                                className={`nav-item nav-link ${activeSection === '#acceuil' ? 'active' : ''}`}
                                style={{ fontSize: '17px' }}
                                onClick={() => {
                                    closeNavbar();
                                    setActiveSection('#acceuil');
                                }}
                            >
                                Acceuil
                            </a>
                            <a
                                href="#apropos"
                                className={`nav-item nav-link ${activeSection === '#apropos' ? 'active' : ''}`}
                                style={{ fontSize: '17px' }}
                                onClick={() => {
                                    closeNavbar();
                                    setActiveSection('#apropos');
                                }}
                            >
                                A propos
                            </a>
                            <a
                                href="#filiere"
                                className={`nav-item nav-link ${activeSection === '#filiere' ? 'active' : ''}`}
                                style={{ fontSize: '17px' }}
                                onClick={() => {
                                    closeNavbar();
                                    setActiveSection('#filiere');
                                }}
                            >
                                Filière
                            </a>
                            <a
                                href="#diplome"
                                className={`nav-item nav-link ${activeSection === '#diplome' ? 'active' : ''}`}
                                style={{ fontSize: '17px' }}
                                onClick={() => {
                                    closeNavbar();
                                    setActiveSection('#diplome');
                                }}
                            >
                                Diplôme
                            </a>
                            <a
                                href="#formation"
                                className={`nav-item nav-link ${activeSection === '#formation' ? 'active' : ''}`}
                                style={{ fontSize: '17px' }}
                                onClick={() => {
                                    closeNavbar();
                                    setActiveSection('#formation');
                                }}
                            >
                                Formations
                            </a>
                            <a
                                href="#contact"
                                className={`nav-item nav-link ${activeSection === '#contact' ? 'active' : ''}`}
                                style={{ fontSize: '17px' }}
                                onClick={() => {
                                    closeNavbar();
                                    setActiveSection('#contact');
                                }}
                            >
                                Contact
                            </a>
                            <a
                                href="#evenement"
                                className={`nav-item nav-link ${activeSection === '#evenement' ? 'active' : ''}`}
                                style={{ fontSize: '17px' }}
                                onClick={() => {
                                    closeNavbar();
                                    setActiveSection('#evenement');
                                }}
                            >
                                Evènement
                            </a>
                        </div>
                        <a href="/Login" className="btn btn-info mt-3" onClick={closeNavbar}>
                            Se connecter
                        </a>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
