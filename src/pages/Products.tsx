import React, { ReactElement, FC } from "react";
import {
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Box,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
  Container,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Products: FC<any> = (): ReactElement => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return ( 
    <Box sx={{ 
     maxWidth:"600px",
      gap:3,
      marginLeft:"50px",
      marginRight:"50px", 
      padding:"30px", 
      borderRadius: "10%",
      boxShadow:"5px 5px 25px ", 
      display:"flex",
      backgroundImage: 'url("https://media.istockphoto.com/id/1385170622/es/foto/el-guitarrista-toca-la-guitarra-en-una-habitaci%C3%B3n-oscura-manos-de-un-guitarrista-tocando-la.jpg?s=612x612&w=0&k=20&c=VKwdr3thkrCqtfXUSdiBYjjurYPFxow1l21JoOufuSA=")',
      justifyContent: isMobile ? "center" : "flex-end", 
      borderStyle:"solid", }}>
      <Card sx={{
       
        maxWidth: 200, height: "", borderRadius: "2%  10%",boxShadow:"5px 5px 25px "}}>
        <Box>
          <Typography>
            <img width="100%" src="https://images.unsplash.com/photo-1550291652-6ea9114a47b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
          </Typography>
        </Box>
        <CardContent>
          <Typography gutterBottom fontSize="30px" fontFamily="Roboto">
            Gibson
          </Typography>
          <Typography fontSize="15px" fontFamily="Roboto">
            Lizards are a widespread group 
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Compartir</Button>
          <Button size="small">Ver Mas</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 200, height: "auto" , borderRadius: "2%  10%",boxShadow:"5px 5px 25px " }}>
        <Typography>
          <img width="100%" src="https://images.unsplash.com/photo-1568193755668-aae18714a9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
        </Typography>
        <CardContent>
          <Typography gutterBottom fontSize="30px" fontFamily="Roboto">
            Schecter
          </Typography>
          <Typography fontSize="15px" fontFamily="Roboto">
            Lizards are a widespread group of squamate reptiles, 
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Compartir</Button>
          <Button size="small">Ver Mas</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 200, height: "auto" , borderRadius: "2%  10%",boxShadow:"5px 5px 25px " }}>
        <Typography>
          <img width="100%" src="https://images.unsplash.com/photo-1583679670198-85272e600ed2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
        </Typography>
        <CardContent>
          <Typography gutterBottom fontSize="30px" fontFamily="Roboto">
            Flying V
          </Typography>
          <Typography fontSize="15px" fontFamily="Roboto">
            Lizards are a widespread group of squamate reptiles
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Compartir</Button>
          <Button size="small">Ver Mas</Button>
        </CardActions>
      </Card>





    </Box>
  );
};


const Products2: FC<any> = (): ReactElement => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return ( 
    <Box sx={{ 
     maxWidth:"600px",
      gap:3,
      marginLeft:"50px",
      marginRight:"50px", 
      marginTop:"50px",
      padding:"30px", 
      borderRadius: "10%",
      boxShadow:"5px 5px 25px ", 
      display:"flex",
      backgroundImage: 'url("https://media.istockphoto.com/id/121889175/es/foto/banda-de-rock.jpg?s=612x612&w=0&k=20&c=TRfe_BiX9ar4IQhlr0TL8Oq1o9Rra9jbLTtAobm-SL0=")',


      justifyContent: isMobile ? "center" : "flex-start", 
      borderStyle:"solid", }}>


      <Card sx={{ maxWidth: 200, height: "", borderRadius: "2%  10%",boxShadow:"5px 5px 25px "}}>
        <Box>
          <Typography>
            <img width="100%" src="https://images.unsplash.com/photo-1550291652-6ea9114a47b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
          </Typography>
        </Box>
        <CardContent>
          <Typography gutterBottom fontSize="30px" fontFamily="Roboto">
            Gibson
          </Typography>
          <Typography fontSize="15px" fontFamily="Roboto">
            Lizards are a widespread group 
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Compartir</Button>
          <Button size="small">Ver Mas</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 200, height: "auto" , borderRadius: "2%  10%",boxShadow:"5px 5px 25px " }}>
        <Typography>
          <img width="100%" src="https://images.unsplash.com/photo-1568193755668-aae18714a9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
        </Typography>
        <CardContent>
          <Typography gutterBottom fontSize="30px" fontFamily="Roboto">
            Schecter
          </Typography>
          <Typography fontSize="15px" fontFamily="Roboto">
            Lizards are a widespread group of squamate reptiles, 
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Compartir</Button>
          <Button size="small">Ver Mas</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 200, height: "auto" , borderRadius: "2%  10%",boxShadow:"5px 5px 25px " }}>
        <Typography>
          <img width="100%" src="https://images.unsplash.com/photo-1583679670198-85272e600ed2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
        </Typography>
        <CardContent>
          <Typography gutterBottom fontSize="30px" fontFamily="Roboto">
            Flying V
          </Typography>
          <Typography fontSize="15px" fontFamily="Roboto">
            Lizards are a widespread group of squamate reptiles
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Compartir</Button>
          <Button size="small">Ver Mas</Button>
        </CardActions>
      </Card>

    </Box>
  );
};


const Products3: FC<any> = (): ReactElement => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return ( 
    <Box sx={{ 
     maxWidth:"600px",
      gap:3,
      marginLeft:"30px",
      marginRight:"50px", 
      marginTop:"50px",
      padding:"30px", 
      borderRadius: "10%",
      boxShadow:"5px 5px 25px ", 
      display:"flex",
      backgroundImage: 'url("https://media.istockphoto.com/id/183349497/es/foto/guitarrista.jpg?s=612x612&w=0&k=20&c=jmoFV-lXMkjWB0U-Xvhoe352xwJEtfBOHbSJW0x6JDE=")',


      justifyContent: isMobile ? "center" : "flex-start", 
      borderStyle:"solid", }}>


      <Card sx={{ maxWidth: 200, height: "", borderRadius: "2%  10%",boxShadow:"5px 5px 25px "}}>
        <Box>
          <Typography>
            <img width="100%" src="https://images.unsplash.com/photo-1550291652-6ea9114a47b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
          </Typography>
        </Box>
        <CardContent>
          <Typography gutterBottom fontSize="30px" fontFamily="Roboto">
            Gibson
          </Typography>
          <Typography fontSize="15px" fontFamily="Roboto">
            Lizards are a widespread group 
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Compartir</Button>
          <Button size="small">Ver Mas</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 200, height: "auto" , borderRadius: "2%  10%",boxShadow:"5px 5px 25px " }}>
        <Typography>
          <img width="100%" src="https://images.unsplash.com/photo-1568193755668-aae18714a9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
        </Typography>
        <CardContent>
          <Typography gutterBottom fontSize="30px" fontFamily="Roboto">
            Schecter
          </Typography>
          <Typography fontSize="15px" fontFamily="Roboto">
            Lizards are a widespread group of squamate reptiles, 
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Compartir</Button>
          <Button size="small">Ver Mas</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 200, height: "auto" , borderRadius: "2%  10%",boxShadow:"5px 5px 25px " }}>
        <Typography>
          <img width="100%" src="https://images.unsplash.com/photo-1583679670198-85272e600ed2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
        </Typography>
        <CardContent>
          <Typography gutterBottom fontSize="30px" fontFamily="Roboto">
            Flying V
          </Typography>
          <Typography fontSize="15px" fontFamily="Roboto">
            Lizards are a widespread group of squamate reptiles
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Compartir</Button>
          <Button size="small">Ver Mas</Button>
        </CardActions>
      </Card>

    </Box>
  );
};





function FormPropsTextFields() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      component="form"
      sx={{
        padding:"30px",
        
 
       
        borderRadius: "10%",
        boxShadow:"5px 5px 25px ",
   
        backgroundColor:"#F9F5F4",
        display: isMobile ? "none" : "block", 
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        



      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
      <div>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          disabled
          id="filled-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
        />
      </div>
    </Box>
  );
        }










function Carrusel() {
  const isMobile = useMediaQuery('(max-width: 900px)');

  return (
    <div style={{ 
      

       
       padding: "30px", 
      

  
       
       flexDirection: isMobile ? 'column' : 'row' }}>

        
      {!isMobile && (
        <div style={{  
        
        borderStyle:"solid", 
        padding:"50px",       
        margin: "30px", 
        display: 'fixed', 
        flexGrow: 1, 
        marginBottom: '10em', 
        borderRadius: '50% 20% / 10% 40%', 
        justifyContent: 'center', 
       
       
        paddingTop: '30px' }}>

          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            autoPlay
            infiniteLoop
            stopOnHover
            interval={5000}
          >
            <div>
              <img src="https://i0.wp.com/losmejoresrock.com/wp-content/uploads/2018/03/Captura_de_pantalla_2015-10-28_a_las_09.51.59-big.png?fit=820%2C509&ssl=1" alt="Imagen 1" />
            </div>
            <div>
              <img src="https://e1.pxfuel.com/desktop-wallpaper/486/234/desktop-wallpaper-vintage-guitar.jpg" alt="Imagen 2" />
            </div>
            <div>
              <img src="https://img.kytary.com/eshop_es/velky_v2/na/638152665750100000/245161c3/65079873/marshall.jpg" alt="Imagen 3" />
            </div>
          </Carousel>
        </div>
      )}

    </div>
  );
}


        
function Contenido() {
  return (
   
    <Box sx={{  paddingTop: "100px",paddingLeft:"35px",paddingBottom:"100px", display: "flex", justifyContent: "normal", alignItems: "center", }}>
     


      <Box>
      <Carrusel/>
      <FormPropsTextFields />

      </Box>



      <Box>
      <div >
       <Button
       style={{
        fontFamily:"roboto",
        fontSize:"50px",
        textAlign:"center",
        color:"#9FA0A0",
        marginLeft:"30px",
        marginBottom:"30px"
      }}> Productos en Oferta</Button>
      <Products />
      </div>

      <div >
       <Button
       style={{
        fontFamily:"roboto",
        fontSize:"50px",
        textAlign:"center",
        color:"#9FA0A0",
        marginLeft:"25%",
        marginTop:"50px"
    
      }}> 
        Novedades</Button>
      <Products2 />
      </div>

      <div >
       <Button
       style={{
        fontFamily:"roboto",
        fontSize:"50px",
        textAlign:"center",
        color:"#9FA0A0",
        marginLeft:"17%",
        marginTop:"50px"
      }}>  Lo mas llevado </Button>
      <Products3 />  
      </div>
      </Box>
      </Box>
   
    

  );
}

export default Contenido;
