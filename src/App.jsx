import { useState,useEffect } from 'react'
import { fetchDataFromApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homesSlice'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Searchresult from './pages/searchResult/Searchresult'
import Explore from './pages/explore/Explore'
import Details from './pages/details/Details'
import PagenotFound from './pages/404/PagenotFound'
import { getGenres } from './store/homesSlice'
function App() {
  const dispatch=useDispatch()
  const {url}=useSelector((state)=>state.home);
  useEffect(()=>{
    fetchApiConfig();
    genresCall();
  },[])
const fetchApiConfig=()=>{
   fetchDataFromApi('/configuration').then((res)=>{
    console.log(res);
    const url={
      backdrop: res.images.secure_base_url +"original",
      poster: res.images.secure_base_url +"original",
      profile: res.images.secure_base_url +"original",

    }
    dispatch(getApiConfiguration(url));
   });
};
const genresCall= async ()=>{
  let promises=[]
  let endPoints=["tv","movie"]
  let allGenres={};
  endPoints.forEach((url)=>{
    promises.push(fetchDataFromApi(`/genre/${url}/list`))
  })
  const data=await Promise.all(promises);
   data.map(({genres})=>{
    return genres.map((item)=>(allGenres[item.id]=item))
   });
   dispatch(getGenres(allGenres)); 
}
 return(
  <div>
    <BrowserRouter>
     <Header/> 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:mediaType/:id' element={<Details/>}/>
      <Route path='/search/:query' element={<Searchresult/>}/>
      <Route path='/explore/:mediaType' element={<Explore/>}/>
      <Route path='*' element={<PagenotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </div>
 )
}

export default App
