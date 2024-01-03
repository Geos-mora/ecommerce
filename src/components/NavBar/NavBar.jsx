import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import { NavLink } from "react-router-dom";
import NavMenu from "./NavMenu";



const NavBar = () => {

  const {count,setSearchByTitle,setSearchByCategory,} = useContext(DataContext);
  const [open, setOpen] = useState(false);
  const [anchoDEventana, setAnchoDEventana] = useState(window.innerWidth);
console.log(open);
console.log(anchoDEventana);
   const handleAllandShopi=()=>{
    setSearchByTitle(null)
    setSearchByCategory(null)
   }

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
              <div className="menu-desplegable" onClick={()=>{setOpen(!open)}}>
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
                <NavMenu handleAllandShopi={handleAllandShopi}   />
                )
                
            }else if(anchoDEventana>=1114){
                return(
                    <NavMenu handleAllandShopi={handleAllandShopi}   />
                )
            }
                
            
        

   }


    return (  

        <nav  className="navContainer">  

        <RenderMenu />
          

        <NavLink to='/'>
        <div className="logo" onClick={()=>{handleAllandShopi()}}><h1> <span className="ten">Ten</span><span className="den">den</span><span className="cias">cias</span> </h1></div>
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