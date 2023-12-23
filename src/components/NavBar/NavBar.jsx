import { useContext } from "react";
import { NavItemsLeft, NavItemsRight } from "../../assets/NavItemsLeft";
import { DataContext } from "../../context/DataProvider";
import NavContent from "./NavContent";
import { NavLink } from "react-router-dom";



const NavBar = () => {

  const {count,setSendOrderBack,setShowOrders,setSearchByTitle,setSearchByCategory,} = useContext(DataContext);
  
  const handleShopiAll=()=>{
      setSendOrderBack({})
      setShowOrders(false)
      setSearchByTitle(null)
   }
   const handleAllandShopi=()=>{
    setSearchByTitle(null)
    setSearchByCategory(null)
   }

 
    return (  

        <nav  className="navContainer">  
        <NavLink to='/'>
        <div className="logo" onClick={()=>{handleAllandShopi()}}><h1>Shopi</h1></div>
        </NavLink>
        

           <ul  className="navContentLeft"> 
              <NavLink to='/'>
                 <div className="all" onClick={()=>handleAllandShopi()}><p>All</p></div>
             </NavLink>
             <NavLink to='/'>
                 <div className="Clothes" onClick={()=>{handleShopiAll(),setSearchByCategory('Clothes')}}><p>Clothes</p></div>
             </NavLink>
             <NavLink to='/'>
                 <div className="Electronics" onClick={()=>{handleShopiAll(),setSearchByCategory('Electronics')}}><p>Electronics</p></div>
             </NavLink>
             <NavLink to='/'>
                 <div className="Forniture" onClick={()=>{handleShopiAll(),setSearchByCategory('Furniture')}}><p>Forniture</p></div>
             </NavLink>
             <NavLink to='/'>
                 <div className="Toys" onClick={()=>{handleShopiAll(),setSearchByCategory('Toys')}}><p>Toys</p></div>
             </NavLink>
             <NavLink to='/'>
                 <div className="Other" onClick={()=>{handleShopiAll(),setSearchByCategory('Others')}}><p>Other</p></div>
             </NavLink>
              <NavContent navItemsLeft={NavItemsLeft}  />
            </ul>     
             
            
            <ul  className="navContentRight"> 
              <NavContent navItemsRight={NavItemsRight}/>
            </ul>    
            <figure className="imgContainer">
              <span>{count}</span>
              {<img width={50} src="/src/assets/shopping-cart.png" alt="" />}
              </figure>  
                    
        </nav>
    );
};

export default NavBar;