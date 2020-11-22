import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../css/Portfolio.css';
import img1 from '../img/1.png';
import img2 from '../img/2.png';
import img3 from '../img/3.png';
import img4 from '../img/4.png';
import img5 from '../img/5.png';
import img6 from '../img/6.png';
import img7 from '../img/7.png';




const Portfolio=()=>{
  return (
    <div id='portfolio'>
      <Carousel autoPlay infiniteLoop={true}>
      <div className='img-portfolio' style={{ height: "100%", color: "#fff" }}>
        <a className="img-link" href="https://ecopay.netlify.app/"><img src={img1} alt="404.png"/></a>
      </div>
      <div className='img-portfolio' style={{ height: "100%", color: "#fff" }}>
        <a className="img-link" href="https://dubis78.github.io/Tecnical/"><img src={img2} alt="404.png"/></a>
      </div>
      <div className='img-portfolio' style={{ height: "100%", color: "#fff" }}>
        <a className="img-link" href="https://dubis78.github.io/Tribute-Page/Index.html"><img src={img3} alt="404.png"/></a>
      </div>
      <div className='img-portfolio' style={{ height: "100%", color: "#fff" }}>
        <a className="img-link" href="https://dubis78.github.io/Reto-1/"><img src={img4} alt="404.png"/></a>
      </div>
      <div className='img-portfolio' style={{ height: "100%", color: "#fff" }}>
        <a className="img-link" href="https://dubis78.github.io/tienda-f/"><img src={img5} alt="404.png"/></a>
      </div>
      <div className='img-portfolio' style={{ height: "100%", color: "#fff" }}>
        <a className="img-link" href="https://dubenis-pokedex.netlify.app"><img src={img6} alt="404.png"/></a>
      </div>
      <div className='img-portfolio' style={{ height: "100%", color: "#fff" }}>
        <a className="img-link" href="https://dubis78.github.io/formulario/Index.html"><img src={img7} alt="404.png"/></a>
      </div>
    </Carousel>
    </div>
  );
}
export default Portfolio;
