import axios from "axios";
import { useEffect } from "react";


function App() {
  useEffect(()=>{

    const apiKey = 'd42b5d364ccc32d984c3d85290e6dfc9';


    const getMovie = async()=>{
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
      console.log(res.data);
    }

    getMovie();
  },[]);
  
  return (
    <>

    </>
  );
}

export default App;
