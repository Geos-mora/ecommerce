import {  useContext } from "react";
import { DataContext } from "../../../../context/DataProvider";
import { NavLink } from "react-router-dom";
const MyOrders = () => {

    const {purchaseOrder,setSendOrderBack,stateOrderBack, setStateOrderBack} = useContext(DataContext);

    
    const handleBack=(id)=>{
       const itemBack= purchaseOrder.filter((orden,idx)=>{
            

            if (idx===id) {
                return orden
            }
            
       })

            
            setStateOrderBack(true)
            setSendOrderBack({
                state:stateOrderBack,
                list:itemBack
            })
          
    }
 
    return (
        <div className="myOrdersContainer">
            <h1 className="titleMyOrders">My Orders</h1>          
            {
                 purchaseOrder?.map((orden,id)=>(
                   <div key={id} className="myOrdersContent">
                       <p className="dateAndarticulos"><span>{orden.date}</span> <span>{orden.totalProducts} articulos</span></p>
                       <h1 className="priceMyOrders">$ {orden.totalprice}</h1>
                       <NavLink to='/My-Oreders/last/'>
                       <button className="arrowBack" onClick={()=>handleBack(id)}>&#8250;</button> 
                       </NavLink>
                  </div>   

                 ))
            }                 
        </div>
    );
};

export default MyOrders;