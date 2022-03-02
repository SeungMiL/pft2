import { FunctionComponent } from "react";
import { Category } from "../types";

const NavItem: FunctionComponent<{
  value: Category | "전체";
  active: string;
  handleFilterCategory: Function;
}> = ({ value, active, handleFilterCategory }) => {
  var className = "capitalize cursor-pointer hover:text-green";
  if (active === value) className += " text-green";

  return (
    <li className={className} onClick={() => handleFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectNavbar: FunctionComponent<{
  handleFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <nav className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="전체" {...props} />
      <NavItem value="농협" {...props} />
      <NavItem value="국민" {...props} />
      <NavItem value="우리" {...props} />
      <NavItem value="신한" {...props} />
    </nav>
  );
};

export default ProjectNavbar;