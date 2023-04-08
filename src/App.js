import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup"
import Landing from "./scenes/Landing"
import LineGradiant from './component/LineGradiant'
import Project from "./component/Project";
import Myskills from "./component/Myskills";
import Testmonials from "./component/Testmonials";
import Contact from "./component/Contact";
import Footer from "./component/Footer";



function App() {
  const [selectedpage,setselectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isTopOfPage,setIsTopOfPage] = useState(true);
  useEffect(() => {
    const Handlechange = () => {
      if(window.scrollY === 0) setIsTopOfPage(true);
      if(window.scrollY !==0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll",Handlechange);
    return () => window.removeEventListener("scroll",Handlechange)
  },[])
  return (
    <div className="app bg-black">
       <Navbar isTopOfPage={isTopOfPage} selectedpage={selectedpage} setselectedPage={setselectedPage} />
       <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
            <DotGroup 
              selectedpage={selectedpage}
              setselectedPage={setselectedPage}
            />
        )}
        <Landing 
          setselectedPage={setselectedPage}
        />
       </div>
       <LineGradiant />
       <div className="w-5/6 mx-auto md:mb-30 md:h-full">
          <Myskills />
       </div>
       <LineGradiant margin="md:mt-[90px]"/>
       <div className="w-5/6 mx-auto">
          <Project />
       </div>
       <div className="w-5/6 mx-auto">
          <Testmonials />
       </div>
       <div className="mx-auto">
          <Contact />
       </div>
       <div>
          <Footer />
       </div>
    </div>
  );
}

export default App;
