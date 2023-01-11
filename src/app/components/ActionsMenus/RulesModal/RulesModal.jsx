import CloseIcon from "../../../assets/images/close_icon.png";

const RulesModal = ({ isModalActive, setIsModalActive }) => {
  return (
    <div className={isModalActive ? "rules-modal modal-active" : "rules-modal"}>
      <div className="rules-modal__content">
        <img src={CloseIcon} alt="" onClick={() => setIsModalActive(false)} />
        <div className="rules-modal__content__header">
          <h2>
            Consignes<span>Consignes</span>
          </h2>
        </div>

        <div className="rules-modal__content__body">
          <p>
            Sélectionne une couleur puis place ton pixel sur la fresque.
            L’objectif est de placer le plus de pixels possibles au cours de la
            période de jeu. Attention, il te faudra patienter{" "}
            <span>une minute</span> entre deux poses de pixels, le sélecteur de
            couleur changé en chronomètre te l’indiquera.
          </p>
          <p>
            Tous les 20 pixels placés, tu gagneras un . Afin d’être éligible au
            tirage au sort, il te faudra avoir gagné au mois
            <span> 10 coins</span>.
          </p>
          <p>Que la bataille des pixels commence ! </p>
        </div>
      </div>
    </div>
  );
};

export default RulesModal;
