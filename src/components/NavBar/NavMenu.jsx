import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import PropTypes from "prop-types";


const NavMenu = ({handleAllandShopi}) => {

    const {setSendOrderBack, setShowOrders, setSearchByTitle,setSearchByCategory} = useContext(DataContext);
        
  const handleShopiAll=()=>{
    setSendOrderBack({})
    setShowOrders(false)
    setSearchByTitle(null)
 }

    return (
        <div className='menuContainer'>
    
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
                     <div className="Forniture" onClick={()=>{handleShopiAll(),setSearchByCategory('Furniture')}}><p>forniture</p></div>
                 </NavLink>
                 <NavLink to='/'>
                     <div className="Toys" onClick={()=>{handleShopiAll(),setSearchByCategory('Toys')}}><p>Toys</p></div>
                 </NavLink>
                 <NavLink to='/'>
                     <div className="Other" onClick={()=>{handleShopiAll(),setSearchByCategory('Others')}}><p>Others</p></div>
                 </NavLink>
                  
                </ul>     
                 
                
                <ul  className="navContentRight"> 
               
                    <div className="email" ><p>geos.991@gmail.com</p></div>
                 
                 <NavLink to='/My-Oreders'>
                     <div className="MyOrders" onClick={()=>{handleShopiAll() }}><p>My Orders</p></div>
                 </NavLink>
                 <NavLink to='/My-Account'>
                     <div className="MyAccount " onClick={()=>{handleShopiAll()}}><p>My Account </p></div>
                 </NavLink>
                 <NavLink to='/Signin'>
                     <div className="SingIn  " onClick={()=>{handleShopiAll()}}><p>Sing in  </p></div>
                 </NavLink>
                   <NavLink to='/Out'>
                     <div className="Out  " onClick={()=>{handleShopiAll()}}><p> Out </p></div>
                 </NavLink>
          
                </ul>    
        </div>
    );
};

export default NavMenu;


NavMenu.propTypes={
    handleAllandShopi:PropTypes.any
}