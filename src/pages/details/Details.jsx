import React from 'react'
import'./style.scss'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import DetailsBanner from './detailsbanner/DetailsBanner'
import Videossection from './videoSection/Videosection'
import Similar from './carousels/similar'
import Recommendation from './carousels/Recommendations'
import Cast from './cast/Cast'
const Details = () => {
  const {mediaType,id}=useParams();
  const {data,loading}=useFetch(`/${mediaType}/${id}/videos`);
  const {data:credits,loading:creditsLoading}=useFetch(`/${mediaType}/${id}/credits`);

  return (

    <div><DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
    <Cast data={credits?.cast} loading={creditsLoading}/>
    <Videossection data={data} loading={loading}/>
    <Similar mediaType={mediaType} id={id}/>
    <Recommendation />
    </div>
)
}

export default Details