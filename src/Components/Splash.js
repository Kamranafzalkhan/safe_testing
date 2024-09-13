import React,{useState,useEffect} from 'react';
import HashLoader from "react-spinners/HashLoader";
export const Splash = () => {
    const [loading,setLoading]=useState(false);
  
  useEffect(()=>
  {
    setLoading(true);
    setTimeout(()=>
    {
      setLoading(false);
    },3000)
  },[])
  return (
    <div className='splash-screen'>
        <HashLoader
        //css={override}
        color={"#7f1ba6ff"}
        loading={loading}
        size={150}
        allign={"center"}
        />
    </div>
  )
};
export default Splash;
