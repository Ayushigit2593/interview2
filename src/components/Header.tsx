import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import type { RootState } from "../store/store";
import { useSelector } from "react-redux";

const Header = () => {
  const [header, setHeader] = useState("Star Wars Explorer");
  const category = useSelector((state: RootState) => state.storedata.category);
  const page = useSelector((state: RootState) => state.storedata.category);
  useEffect(() => {
    category === ""
      ? setHeader("Star Wars Explorer")
      : setHeader(`${category[0].toUpperCase() + category.slice(1)}`);
    const backFunction = (): any => {
      window.location.pathname === "/"
        ? setHeader("Star Wars Explorer")
        : setHeader(`${category[0].toUpperCase() + category.slice(1)}`);
    };
    window.addEventListener("popstate", backFunction);
    return () => {
      window.removeEventListener("popstate", backFunction);
    };
  }, [category, page]);
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {header}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
