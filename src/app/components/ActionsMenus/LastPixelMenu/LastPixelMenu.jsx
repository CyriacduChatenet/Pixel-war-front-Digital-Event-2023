import CloseIcon from "../../../assets/images/close_icon.png";

const LastPixelMenu = ({ isMenuOpen, setIsMenuOpen }) => {
 return ( 
  <div className={isMenuOpen ? "lastPixel menu-active" : "lastPixel"}>
  <div className="lastPixel__content">
    <h2>Test</h2>
    <img
      src={CloseIcon}
     alt=""
     className="close-icon"
      onClick={() => setIsMenuOpen(false)}
    />
  </div>
</div>
  );
}
 
export default LastPixelMenu;