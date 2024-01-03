import { useContext } from "react";
import { DataContext } from "../../../../context/DataProvider";
import MyOrdersMiniCards from "./MyOrdersMiniCards";
import { NavLink } from "react-router-dom";


const MyOrder = () => {

    const {purchaseOrder,sendOrderBack, setSendOrderBack} = useContext(DataContext);

    
    
    const reviewItem=sendOrderBack.state===true?sendOrderBack.list:sendOrderBack.list=[];
    const lastItem= purchaseOrder[purchaseOrder.length-1]
    
    
    
    const orderItem=sendOrderBack.state===true?reviewItem[0]:lastItem



 
    return (
        <div className="myOrderContainer">
            <div className="titleMyOrder">
                <NavLink to='/My-Oreders'>
                <button className="arrow" onClick={()=>setSendOrderBack({})} >&#8249;</button>
                </NavLink>

                <h1>My order</h1>
            </div>
            <div className="productsBox">
            <div className="containerMiniCards">
                {
                    orderItem?.products.map((item,id)=>(
                        <MyOrdersMiniCards key={id} data={item}/>
                    ))
                }
     
                  </div>
            </div>
        </div>
    );
};

export default MyOrder;