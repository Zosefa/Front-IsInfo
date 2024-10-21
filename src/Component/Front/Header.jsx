import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    const [instituts, setInstituts] = useState([]);

    const selectInstitut = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_BACK_URL}/Institut/SelectAll_Intitut`);
            console.log(response.data.data);
            setInstituts(response.data.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des instituts:", error);
        }
    };

    useEffect(() => {
        selectInstitut();
    }, []);
    const images = [
        {
            url: "/Image/ISINFO-326-2048x1365.jpg",
            description: "Nous sommes un institut spécialisé en technologies de l'information, offrant des formations adaptées aux besoins du marché pour préparer les professionnels aux défis technologiques."
        },
        {
            url: "/Image/P1380834-2048x1536.jpg",
            description: "Nous proposons une large gamme de formations conçues pour s'adapter à tous les profils, que vous soyez débutant ou professionnel souhaitant perfectionner vos compétences."
        },
        {
            url: "/Image/ISINFO-150-2048x1365.jpg",
            description: "Pour toute information complémentaire ou demande spécifique, nous vous invitons à nous contacter. Nous serons ravis de répondre à vos questions.",
            telephone: "034 74 966 18 / 034 60 409 50"
        }
    ];

    return (
        <Carousel>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <div className="position-relative">
                        <img 
                            className="d-block w-100" 
                            src={image.url} 
                            alt={`Image ${index + 1}`} 
                            style={{ height: '80vh', objectFit: 'cover' }} 
                        />
                        <div 
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(2, 16, 23, 0.6)',
                                zIndex: 1 
                            }}
                        />
                        <div className="container position-absolute text-center my-5 py-5" style={{ top: "17%", zIndex: 2, left: '15%' }}>
                            <h2 className="text-white mt-4 mb-4 fs-1" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                                {instituts.length > 0 ? instituts[0].nomInstitut : "Chargement..."}
                            </h2>
                            <h3 className="text-white mb-5" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)' }}>{image.description}</h3>
                            {index === 2 && (
                                <a href="#contact" className="btn btn-info">
                                    CONTACTEZ-NOUS
                                </a>
                            )}
                        </div>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default Header;
