import axios from "axios";
const BASE_URL="https://api.themoviedb.org/3";
const TMDB_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWI2MGRmYWJhY2M4YjMwOTc3MGJiZTIyZTc4ZjQ3YSIsInN1YiI6IjY1MDFhODAwZTBjYTdmMDEyZWI5M2FlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A-8lgsSgX0067xIiBDRrW05yh1D_Kl4f6uRdvcOJgqI"
const headers={
    Authorization:"bearer " + TMDB_TOKEN,
};
export const fetchDataFromApi=async(url,params)=>{
  try{
   const {data}=await axios.get(BASE_URL+url,{
     headers,
     params
   })
   return data;
  }
  catch(err){
     console.log(err)
     return err;    
  }
}

