
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./Routes/routes";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";




function App() {
  // define tema global, al igual como en las mismas paginas
  const theme = createTheme({
    
  });

  return (
    <ThemeProvider  theme={theme}>
      
      <CssBaseline />
      <Box sx={{  paddingBottom:'2 rem', height:"50"}}>
        <Router>
          <Navbar/>
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        
          <Footer />
        </Router>
      </Box>
    </ThemeProvider>

    
  );
}

export default App;