import CloseIcon from "../../../assets/images/close_icon.png";

const RulesModal = ({ isModalActive, setIsModalActive }) => {
  return (
    <div className={isModalActive ? "rules-modal modal-active" : "rules-modal"}>
      <div className="rules-modal__content">
        <img src={CloseIcon} alt="" onClick={() => setIsModalActive(false)} />
        <div className="rules-modal__content__header">
          <h2>Consignes</h2>
        </div>
      </div>
    </div>
  );
};

export default RulesModal;
