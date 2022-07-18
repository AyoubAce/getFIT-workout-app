import React,{useRef} from 'react'
import arrow from "../../assets/arrow.svg";
import Card from "../card/Card"
const HorizontalScroll = ({data}) => {
    const leftArrow=useRef()
    const rightArrow=useRef()
    const container=useRef()

    const handleScrollLeft=()=>{
      container.current.scrollTo({
        left:container.current.scrollLeft- container.current.offsetWidth,
        behavior:"smooth"
      })
    }
    const handleScrollRight=()=>{
        container.current.scrollTo({
            left:container.current.offsetWidth+container.current.scrollLeft,
            behavior:"smooth"
        })
    }
  return (
    <div className='horizontal-scroll'>
    <img
        ref={leftArrow}
        src={arrow}
        alt="arrow-left"
        className="arrow arrow-left"
        onClick={handleScrollLeft}
      />
      <img
        ref={rightArrow}
        src={arrow}
        alt="arrow-right"
        className="arrow arrow-right"
        onClick={handleScrollRight}
      />
      <div ref={container} className='items-container'>
        {data?.map((item,index)=>{
            return <Card exercise={item} key={index}/>
        })}
      </div>
    </div>
  )
}

export default HorizontalScroll