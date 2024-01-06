import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import { NavLink } from "react-router-dom";
import NavMenu from "./NavMenu";



const NavBar = () => {

  const {open, setOpen,count,setShowDitail} = useContext(DataContext);
 
  const [anchoDEventana, setAnchoDEventana] = useState(window.innerWidth);

  

   const actualizarAnchoDeVentana=()=>{
    setAnchoDEventana(window.innerWidth)
   }
   
   useEffect(() => {
    window.addEventListener('resize',actualizarAnchoDeVentana)
    return  () => {
        window.removeEventListener('resize',actualizarAnchoDeVentana);
    }
   }, []);

 
 
   const RenderMenu=()=>{    
        if (anchoDEventana<=1114) {
          return(
              <div className="menu-desplegable" onClick={()=>{setOpen(!open),setShowDitail(false)}}>
                     &#9776;
                 </div>  
               )
         }else{
             return(
                 setOpen(false)  
             )
         }   
   }

   const RenderMenuBar=()=>{

    
            if (open===true&&anchoDEventana<=1114) {
                return(
                <NavMenu   />
                )
                
            }else if(anchoDEventana>=1114){
                return(
                    <NavMenu   />
                )
            }
                
            
        

   }


    return (  

        <nav  className="navContainer">  

        <RenderMenu />
          

        <NavLink to='/'>
        <div className="logo" ><h1 className="titleLogo"> <span className="ten">Ten</span><span className="den">den</span><span className="cias">cias</span> </h1></div>
        </NavLink>

       
        <RenderMenuBar/>
          
            
        
        
            <figure className="imgContainer">
              <span>{count}</span>
              {<img width={50} src="/src/assets/shopping-cart.png" alt="" />}
              </figure>  
                    
        </nav>
    );
};

export default NavBar;