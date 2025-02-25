import { LOGO_URL } from "../utils/constants";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <NavItems />
    </div>
  );
};

export default Header;
