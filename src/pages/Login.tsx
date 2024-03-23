import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, TextField, Button, Link, Typography, useMediaQuery, AlertTitle, Collapse } from '@mui/material';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Alert } from "@mui/material";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (



    <Box
      sx={{
        width: "80%",
        margin: "auto",
        borderRadius: "10%",
        boxShadow: "5px 5px 25px ",
        marginBottom: "50px",
        marginTop: "50px",
        padding: "30px"



      }}
    >
      <Typography
        sx={{
          paddingTop: "5em",



          fontFamily: "Roboto",

        }}>
        <h2>
          ¡Únete a nuestra comunidad de amantes de la música y encuentra tu guitarra perfecta!
        </h2>
      </Typography>

      <Typography
        sx={{
          marginTop: '2em',
          marginLeft: '60px',
          marginRight: '60px',
          position: 'initial',
          marginBottom: '0',
          fontFamily: 'Roboto',
          fontSize: '15px',
          textAlign: "center"
        }}
      >
        <h4>
          ¡Bienvenido a Guitar Center, el destino perfecto para los amantes de la música y
          aquellos que buscan sumergirse en un universo lleno de melodías y sonidos cautivadores!
          En nuestra página, te invitamos a embarcarte en un viaje musical sin igual, donde podrás
          descubrir y explorar un vasto mundo de posibilidades.<br />
          En Guitar Center, nos apasiona la música en todas sus formas y expresiones.
          Nuestro objetivo es brindarte una experiencia enriquecedora, tanto si eres un músico experimentado
          como si estás dando tus primeros pasos en el mundo de la música. Aquí encontrarás todo lo que
          necesitas para nutrir tu pasión y llevar tu talento al siguiente nivel.
        </h4>
      </Typography>

      <Typography
        sx={{ position: "center", width: '20%', height: '20%', marginTop: '2em', marginLeft: "auto", marginRight: "auto" }}
        color="black"
        fontFamily="roboto"
        fontSize="40px"
        gutterBottom
      >
        Login
      </Typography>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '2em'
      }}>
        <form onSubmit={handleLogin} style={{ width: '100%' }}>
          <TextField
            sx={{
              fontFamily: 'Roboto',
              fontSize: '30px',
              marginBottom: '30px',
            }}
            required
            fullWidth
            id="username"
            label="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            size="small"
          />
          <TextField
            sx={{
              fontFamily: 'Roboto',
              fontSize: '30px',
              marginBottom: '30px',
            }}
            required
            fullWidth
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            size="small"
          />

          <Button type="submit" variant="contained" color="error" sx={{ width: '100%' }}>
            Login
          </Button>
        </form>
        <Typography style={{ marginTop: '1em' }}>
          Don't have an account yet?{' '}
          <Link component={RouterLink} to="/register">
            Register
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

function App() {
  const isMobile = useMediaQuery('(max-width: 900px)');
  const [open, setOpen] = useState(true)
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gap: "1rem"
        }}>

        <Collapse in={open}>
          <Alert
            severity="error"
            onClose={() => { setOpen(false) }} >

            <AlertTitle>OLOLO
            </AlertTitle>

            Aun no estas conectado a la base de datos!!!

          </Alert>
        </Collapse>
      </Box>
      <Login />

    </>

  )



}

export default App;