import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import Formation from "./Formation/Formation";
import Filiere from "./Filiere/Filiere";
import Promotion from "./Promotion/Promotion";
import PrixEcolage from "./PrixEcolage/PrixEcolage";
import Cours from "./Cours/Cours.jsx";
import Matiere from "./Matiere/Matiere.jsx";

const Crud = () => {
  const [showModal, setShowModal] = useState(false);
  const [Title, setTitle] = useState('');
  const [ContentModal, setContentModal] = useState(null);

  const openModal = ({ titre, content }) => {
    setShowModal(true);
    setTitle(titre);
    setContentModal(content);
  };

  const closeModal = () => {
    setShowModal(false);
    setContentModal(null);
    setTitle('');
  };

  useEffect(() => {
    console.log("Titre mis à jour:", Title);
    console.log("Contenu du modal mis à jour:", ContentModal);
  }, [Title, ContentModal]);

  return (
    <>
      <div className="container-fluid">
        <h3 className="text-center mt-3 mb-3">
          VOUS POUVEZ FAIRE ICI TOUS LES SIMPLES OPERATIONS
        </h3>
        <button
          onClick={() => openModal({ titre: 'FORMATION', content: <Formation /> })}
          className="btn btn-info"
        >
          FORMATION
        </button>
        <button
          onClick={() => openModal({ titre: 'FILIERE', content: <Filiere /> })}
          className="btn btn-info"
        >
          FILIERE
        </button>
        <button
          onClick={() => openModal({ titre: 'PROMOTION', content: <Promotion /> })}
          className="btn btn-info"
        >
          PROMOTION
        </button>
        <button
          onClick={() => openModal({ titre: 'Prix Ecolage', content: <PrixEcolage /> })}
          className="btn btn-info"
        >
          Prix Ecolage
        </button>
        <button
            onClick={() => openModal({ titre: 'Cours des Promotions', content: <Cours /> })}
            className="btn btn-info"
        >
          Cours Promotion
        </button>
        <button
            onClick={() => openModal({ titre: 'Matiere', content: <Matiere /> })}
            className="btn btn-info"
        >
          Matiere
        </button>
        <Modal showModal={showModal} onClose={closeModal} title={Title}>
          {ContentModal}
        </Modal>
      </div>
    </>
  );
};

export default Crud;
