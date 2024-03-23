import React, { FC, ReactElement } from "react";
import { Box, Link, Container, IconButton, Menu, MenuItem, Toolbar, Typography, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { routes } from "../Routes/routes";
import { NavLink } from "react-router-dom";


const gradientStyle = {
  backgroundImage: "linear-gradient(to bottom, #ffffff, #000000)",
};

const Navbar: FC = (): ReactElement => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (


    <Box className="NavBar"
      sx={{
        width: "100%",
        height: "150px",
        backgroundColor: "#3A4248",
        padding: "3px",
        marginBottom: "5%",
        borderRadius: "2px",
        borderStyle: "solid",
        borderWidth: "2px",
        borderColor: "#9FA0A0",
      }}
    >
      <Container maxWidth="xl">

        <Toolbar disableGutters>
          <Typography sx={{ gradientStyle, mr: 2, display: { xs: "none", md: "flex" }, }}>
            <img src="https://logos-download.com/wp-content/uploads/2016/12/Guitar_Center_logo_logotipo.png" width="200" />
          </Typography>

          <Box sx={{ flexGrow: 1, fontSize: "5em" }}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >

              <MenuIcon />
            </IconButton>


            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >

              {routes.map((page) => (
                <Link
                  key={page.key}
                  component={NavLink}
                  to={page.path}
                  color="#9FA0A0"
                  underline="none"
                  variant="button"
                >

                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.title}
                    </Typography>

                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>


          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: "#9FA0A0", fontFamily: "Roboto", margin: "20px", fontSize: "50px", flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Guitar Center
          </Typography>


          <Box sx={{ flexGrow: 9, display: { xs: "none", md: "flex" } }}>
            <Box
              sx={{
                maxWidth: "100%",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginLeft: "5rem",

                backgroundColor: "#34495E",
              }}
            >
              {routes.map((page) => (
                <Link
                  key={page.key}
                  component={NavLink}
                  to={page.path}
                  color="#9FA0A0"
                  underline="none"
                  variant="button"
                  sx={{ fontFamily: "chiller", fontSize: "30px", marginLeft: "1rem" }}
                >
                  {page.title}
                </Link>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
};

export default Navbar;