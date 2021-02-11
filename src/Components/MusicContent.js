import React from "react";
import Figure from 'react-bootstrap/Figure';
import FigureCaption from 'react-bootstrap/FigureCaption';


function  MusicContent(props) {

  return (

    <div className = "news-border">
     
     <Figure classname = "card">
     
     {<iframe className = "musVid" title = "musVid" src = {props.Video} scrolling="no" width="25%" height="52" scrollbars="no" frameborder="0"></iframe>}
    
  <FigureCaption>
    <a className = "musTitle" href = "/" > {props.title} </a>
  </FigureCaption>
</Figure>
  
         </div>

  
  

        )
}


// https://naijaloaded.store/wp-content/uploads/2021/02/Opelempe-Ft.-Mc-Galaxy-Jolly-Jolly.mp3


export default MusicContent; 
