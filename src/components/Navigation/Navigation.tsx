import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  return (
    <NavigationStyled>
      <ul className="navigation">
        <li>
          <NavLink to="/robots/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/robots/new">Add robot</NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
