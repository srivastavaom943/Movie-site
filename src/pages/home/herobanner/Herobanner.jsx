import React, { useEffect } from 'react'
import { useState } from 'react'
import Img from '../../../components/LazyLoadImg/Img'
import ContentWrapper from '../../../components/contentwrapper/ContentWrapper'
import { useSelector } from 'react-redux'
import useFetch from '../../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import'./style.scss'

const Herobanner = () => {
  const[background,setBackground]=useState("");
  const[query,setQuery]=useState("");
  const navigate=useNavigate();
  const {url}=useSelector((state)=>state.home);
  const {data,loading}=useFetch("/movie/upcoming")
  useEffect(()=>{
     const bg=url.backdrop+data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path
     setBackground(bg);
  },[data])
  const searchqQueryHandler=(event)=>{
   if(event.key==="Enter"&&query.length>0){
      navigate(`/search/${query}`)
   }
  }
  return (
    <div className="heroBanner">
      {!loading && <div className="backdrop-img">
        <Img src={background}/>
      </div>}
      <div className="opacity-wrapper">
        
      </div>
     <ContentWrapper>
   
        <div className="heroBannerContent">
          <span className='title'>Welcome.</span>
          <span className="subTitle">Millions of movies,Tv shows and people 
          to discover.Explore now
          </span>
          <div className="searchInput">
            <input type="text" className="text" 
            placeholder='search for movies or tv shows' 
            onChange={(e)=>setQuery(e.target.value)}
            onKeyUp={searchqQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      
    
       </ContentWrapper>
      </div> 
  )
}   
export default Herobanner