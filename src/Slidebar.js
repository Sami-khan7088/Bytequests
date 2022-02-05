import React,{useState} from 'react';
import { SlidebarData } from './SlidbarData';

const Slidebar = ({slide}) => {
    const [current,setData]=useState(0);
    var length=slide.length;
function next() {
    setData(current === length-1 ? 0 : current+1)
   
}
function prev() {
    setData(current === 0 ? length-1: current-1)
   
}

  return <div className='Slider_contener'>
  {
      SlidebarData.map((curr,index)=>{
          return(
              <div className={index===current ? "active":"slide"}>
            <img src={curr.image} alt='' className='main_image'/>
            </div>
          )
      })
  }
  <i className="fas fa-chevron-left left " onClick={prev}></i>
    <i className="fas fa-chevron-right right" onClick={next}></i>
  </div>;
};

export default Slidebar;
