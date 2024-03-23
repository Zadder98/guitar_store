
import { useState } from 'react';
import{Box} from "@mui/material"
import { Alert, AlertTitle, Typography } from "@mui/material";
import { Collapse } from "reactstrap";



function About() {
    
    const [open, setOpen] = useState(true)
    return (
      



        
  <Box
 
>

    <Typography variant="h1" color="initial">
    <img width="100%" src="https://media.istockphoto.com/id/1293901441/es/foto/reproducci%C3%B3n-de-fondo-de-pantalla-de-guitarra.jpg?s=612x612&w=0&k=20&c=kiNlGYhmZc5FJIeiUwTwSjaoPZ1IHvKybs37s1TXDMw=" alt="" />
    </Typography>
  
    <Collapse in={open}>
    <Alert 
    severity="error"
    onClose={() => {setOpen(false)}} >
  
  
  
    Aun no estas conectado a la base de datos!!!
   
    </Alert>
    </Collapse>
    </Box>
      
  
     
  
        )
        
      
    
    }
export default About  
