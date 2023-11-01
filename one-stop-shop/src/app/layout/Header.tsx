import { Switch } from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

export default function Header({ darkMode, handleThemeChange }: Props) {
  return (
    <div>
      <div className="mb-10 bg-yellow-200 sm:px-6 sm:py-4 flex justify-between items-center">
        <div className="flex justify-between ">
          <div className="mt-2 mr-4">ONESTOPSHOP</div>
          <Switch
            checked={darkMode}
            onChange={handleThemeChange}
            defaultChecked
          />
        </div>
        <div className="mt-2">
          {midLinks.map(({ title, path }) => (
            <NavLink
              className="mr-2 hover:bg-fuchsia-600"
              to={path}
              key={title}
            >
              {title.toUpperCase()}
            </NavLink>
          ))}
        </div>

        <div>
          {rightLinks.map(({ title, path }) => (
            <NavLink
              className="mr-2 hover:bg-fuchsia-600"
              to={path}
              key={title}
            >
              {title.toUpperCase()}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
