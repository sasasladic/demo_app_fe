import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Demo app
        </Typography>
        <Button onClick={logoutHandler} variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavigation;
