import { useState } from "react";
import logo from "../../assets/images/Logo_Big_Stroke.png";
import settingsLogo from '../../assets/images/settings-logo.png';
import RulesModal from "../ActionsMenus/RulesModal/RulesModal";

const EndGameScreen = ({time, dateNow, startedAt}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
   {dateNow < startedAt ? <>
   {
    isOpen ?     <RulesModal
    isModalActive={isOpen}
    setIsModalActive={true}
  /> : null
   }
    <div className="container">
      <nav className="navbar">
        <div className="nav-container">
          <img src={logo} alt="" className="logo" />
          <div className="btn-container">
            <button className="user-profile-btn">
                <img src="" alt="" className="avatar" />
                <span>Pierre</span></button>
            <button className="settings-btn" onClick={() => setIsOpen(!isOpen)}>
                <img src={settingsLogo} alt=""/>
            </button>
          </div>
        </div>
      </nav>
      <div className="timer-container">
        <p className="timer-sentence">La prochaine partie commence dans :</p>
        <div className="timer">
            <p>{time}</p>
        </div>
      </div>
    </div>
   </> : null}
    </>
  );
};

export default EndGameScreen;
