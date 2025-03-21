import { useEffect, useState } from "react";

import Main from "./widgets/Main/Main";
import NavBar from "./widgets/NavBar/NavBar";
import Projects from "./widgets/Projects/Projects";
import AboutMe from "./widgets/AboutMe/AboutMe";
import Contacts from "./widgets/Contacts/Contacts";
import Footer from "./widgets/Footer/Footer";

const App = () => {
  
  const savedTheme=localStorage.getItem('theme')
  const [theme,setTheme]= useState(savedTheme)
  useEffect(()=>{
     localStorage.setItem('theme',theme)
     
     if (theme==='light') {
      document.documentElement.style.setProperty('--background','#F0F8FF')
      document.documentElement.style.setProperty('--text-color','#282c33')
      document.documentElement.style.setProperty('--white','#282c33')
      document.documentElement.style.setProperty('--gray','#000')
      document.documentElement.style.setProperty('--icon-color','invert(100%)')
      document.documentElement.style.setProperty('--primary','#388722')

      

      
      
     }else{

      document.documentElement.style.setProperty('--background','#282c33')
      document.documentElement.style.setProperty('--text-color','#fff')
      document.documentElement.style.setProperty('--white','#fff')
      document.documentElement.style.setProperty('--gray','#abb2bf')
      document.documentElement.style.setProperty('--icon-color','invert(0%)')
      document.documentElement.style.setProperty('--primary','#c778dd')

       
      
     }
  },[theme])
  // const onScroll=()=>{
  //   document.documentElement.style.setProperty('--navBG','var(--background)')
    
  // }
  return (
    
    <>
      <NavBar theme={theme} setTheme={setTheme} />
      <Main  />
      <Projects />
      <AboutMe />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;