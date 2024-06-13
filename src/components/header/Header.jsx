import vfsLogo from "../../assets/vfsLogo.png";
import poland from "../../assets/Poland.jpg";
function Header() {
  return (
    <div className="header__wrapper">
      <div className="logo" title="vfs global complaint management system">
        <img src={vfsLogo} alt="vfs-logo" />
      </div>
      <div className="header__title">
        <span>
          Apply For Visa to Poland
          <span>
            <img className="poland__img" src={poland} alt="poland" />
          </span>
          In India
        </span>
      </div>
    </div>
  );
}

export default Header;
