import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import { useEffect } from "react";

const MainLayout = () => {


  const location = useLocation()

  console.log(location);

  useEffect(() => {
    console.log(location.pathname);

    if(location.pathname === '/'){
      document.title = `Phone-home`;
    }
    else{
      document.title = `Phone ${location.pathname.replace("/", '-')}`;
    }


    if(location.state){
      document.title = `${location.state}`;
    }

    
  }, [location.pathname])


  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar></Navbar>
      <div className="py-10">
        <Outlet context={"this is outlet global context"}></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
