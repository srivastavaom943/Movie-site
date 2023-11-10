import React from 'react'
import'./style.scss'
import Herobanner from './herobanner/Herobanner'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import Toprated from './toprated/Toprated'
const Home = () => {
  return (
    <div className='homepage'>
  <Herobanner/>
  <Trending/>
  <Popular/>
  <Toprated/>
  {/* <div style={{height:1000}}></div> */}
    </div>
  )
}

export default Home