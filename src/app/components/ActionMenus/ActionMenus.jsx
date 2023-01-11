import LastPixel from "../../assets/images/last-pixel.png";
import OpenEye from "../../assets/images/open-eye.png";
import Consigne from "../../assets/images/icon_consigne.png";

const ActionMenus = () => {
  return (
    <div className="action-menus">
      <div className="action-menus__menu">
        <div className="action-menus__menu__item">
          <img src={LastPixel} alt="" className="menu" />
        </div>

        <div className="action-menus__menu__item">
          <img src={Consigne} alt="" className="menu" />
        </div>

        <div className="action-menus__menu__item">
          <img src={OpenEye} alt="" className="menu" />
        </div>
      </div>
    </div>
  );
};

export default ActionMenus;
