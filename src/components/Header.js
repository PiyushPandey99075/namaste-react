import { LOGO_URL } from "../utils/constants";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <div className="flex justify-between items-center border-b-1 border-[#FFA500]">
      <div className="logo-container">
        <img className="w-30" src={LOGO_URL}></img>
      </div>
      <NavItems />
    </div>
  );
};

export default Header;
