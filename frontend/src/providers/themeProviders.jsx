
import { useEffect, useState } from "react";
import ThemeContext from "../contexts/themecontext";

export function ThemeProvider ({children}){
    
  const [theme , setTheme] = useState("dark")

     useEffect(()=>{
      const saved = localStorage.setItem("theme")
      if(saved){
        setTheme(saved)
      }
     },[])

     useEffect(()=>{
      document.documentElement.classList.toggle("dark" ,theme === "dark")
      localStorage.setItem("theme" , theme)
     },[theme])

     const toggletheme = ()=>{
      setTheme((t)=>(t=== "dark" ? "light" : "dark"))
     }

     return (
       <ThemeContext.Provider value={{theme , toggletheme}}>
        {children}
        </ThemeContext.Provider>
     )
}