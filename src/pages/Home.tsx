import { FC, useState} from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import { hover } from '@testing-library/user-event/dist/hover';

import Typography from '@mui/material/Typography';
import ReactPlayer from 'react-player';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';




const items = [
  {
    src: "https://images.pexels.com/photos/63695/pexels-photo-63695.jpeg?auto=compress&cs=tinysrgb&w=600", 
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://images.pexels.com/photos/68710/pexels-photo-68710.jpeg?auto=compress&cs=tinysrgb&w=600',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://images.pexels.com/photos/144428/pexels-photo-144428.jpeg?auto=compress&cs=tinysrgb&w=600',
    altText: 'Slide 3',
    caption: 'Slide 3'
    
  }
];

const Home: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
     
      <CarouselItem     
        onExiting={onExiting}
        onExited={onExited}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={{
                   
          width:'100%',
          paddingBlock:'50px',
      
        }}
          />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
   
    );
  });

  return (


    
  
   
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
       /*
        pause={'hover'}
        interval={4}
        */
       style={{
        backgroundColor:'white',        
       
        paddingTop:"30px",
        paddingBottom:"30px",
        marginTop:'100px',
        marginBottom:"100px",
        
      }}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
  );
};


function Bodyses(){
return(




<Box sx={{
  padding:"30px",
  
  
}}>
 <h2>Marcas</h2>
 <hr />
 <Typography sx={{
  justifyContent:"center",
  display:"flex",

 }}>
  <div>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Fender_logo.png/640px-Fender_logo.png" width="200" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Schecter_guitar_logo.png" width="200" />
  <img src="https://1000marcas.net/wp-content/uploads/2020/02/Logo-Ibanez.png" width="200" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Jackson_guitars_logo.svg/1200px-Jackson_guitars_logo.svg.png" width="200" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Gibson_Guitar_logo.svg/1280px-Gibson_Guitar_logo.svg.png" width="200" />
  </div>
  </Typography>
<hr />




<Box 
className="caja"
sx={{
  paddingTop:"50px",
  display:"flex",
  justifyContent:"center",
  alignItems:"cener",
  gap: 10,
  
  
}} maxWidth="xs">


                  
      <ReactPlayer
          style={{ marginBottom:"50px"}}
          url="https://www.youtube.com/watch?v=OJJfXYwL7Pg" 
          width="auto"
         
          controlsplaying
          muted
        />


<ReactPlayer
          style={{ marginBottom:"50px"}}
          url="https://www.youtube.com/watch?v=DzOV_FBVORk" 
          width="auto"
         
          controlsplaying
          muted
        />


     <ReactPlayer
          style={{ marginBottom:"50px"}}
          url="https://www.youtube.com/watch?v=NEp4IA3Yy80" 
          width="auto"
         
          controlsplaying
          muted
        />

    </Box>

    </Box>

);

}

  


function App2(){

return(

  <div style={{
   
    marginBottom: "30px", 
  }}>

<Home/>
            
   
   <Bodyses/>
</div>
);

}

export default App2;


