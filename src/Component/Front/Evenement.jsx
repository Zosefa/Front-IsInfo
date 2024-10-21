import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

const api_url = import.meta.env.VITE_API_BACK_URL;

const Evenement = () => {
    const [Evenement, setEvenement] = useState([]);

    const selectEvenement = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_BACK_URL}/Evenement/select_evenemet_proch`);
            setEvenement(response.data.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des événements : ", error);
        }
    };

    useEffect(() => {
        selectEvenement();
    }, []);

    return (
        <div className="col-lg-11 py-5" id="evenement">
            <div className="bg-white p-5 my-5">
                <h1 className="text-center mb-4">ACTUALITES</h1>
                <h5 className="text-center mb-4 text-muted">Voici les dernière actualité organisé par notre établissement</h5>
                <div className="d-flex justify-content-center flex-column mt-5 gap-5 ">
                    {Array.isArray(Evenement) && Evenement.length > 0 ? (
                        Evenement.map(E => {
                            const imagesArray = E.image.split(',');
                            
                            return (
                                <div className="row d-flex" key={E.id_evenement}>
                                    <div className="col-6 ">
                                        <h2 className="mb-4">{E.evenement}</h2>
                                        <div className="d-flex gap-2"><strong>Date de l'évenement : </strong> <p style={{ fontSize: '18px' }}>
                                                {new Date(E.date_evenement).toLocaleDateString('fr-FR', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </p></div>
                                        <div className="d-flex gap-2"><strong>Lieu de l'évenement : </strong> <p style={{'fontSize':'18px'}}>{E.lieu_evenement}</p></div>
                                        <strong>Déscription de l'évenement : </strong> <br/> <p style={{'fontSize':'20px'}}>{E.decription}</p>
                                    </div>
                                    <div className="col-6" style={{"maxHeight":"300px"}}>
                                        <Carousel>
                                            {imagesArray.map((image, index) => (
                                                <Carousel.Item key={index}>
                                                    <img
                                                        className="d-block w-100"
                                                        src={`${api_url}${image.trim()}`}
                                                        alt={E.evenement}
                                                    />
                                                </Carousel.Item>
                                            ))}
                                        </Carousel>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className='fs-1 text-center'>Aucun Evènement en ce moment</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Evenement;
