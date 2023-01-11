import LastPixel from "../../assets/images/last-pixel.png";
import OpenEye from "../../assets/images/open-eye.png";
import CloseEye from "../../assets/images/close-eye.png";
import Consigne from "../../assets/images/icon_consigne.png";
import RulesModal from "./RulesModal/RulesModal";
import { useState } from "react";
import LastPixelMenu from "./LastPixelMenu/LastPixelMenu";

const ActionMenus = ({ setHide, hide }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="action-menus">
        <div className="action-menus__menu">
          <div
            className={!hide ? "action-menus__menu__item" : "hide"}
            onClick={() => setIsMenuOpen(true)}
          >
            <img src={LastPixel} alt="" className="menu" />
          </div>

          <div
            className={!hide ? "action-menus__menu__item" : "hide"}
            onClick={() => setIsModalActive(!isModalActive)}
          >
            <img src={Consigne} alt="" className="menu" />
          </div>

          <div
            className="action-menus__menu__item"
            onClick={() => setHide(!hide)}
          >
            <img src={!hide ? OpenEye : CloseEye} alt="" className="menu" />
          </div>
        </div>
      </div>

      <RulesModal
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
      />
      <LastPixelMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};

export default ActionMenus;
