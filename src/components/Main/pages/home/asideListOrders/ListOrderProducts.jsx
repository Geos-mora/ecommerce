
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import MiniCard from './MiniCard'
import { useContext } from 'react';
import { DataContext } from '../../../../../context/DataProvider';
import SumaTotal from '../../../../../assets/SumaTotal';



const ListOrderProducts = () => {

    const {showOrders,setShowOrders,cardOrder,setCardOrder,purchaseOrder, setPurchaseOrder,setCount} = useContext(DataContext);


    const handleCompra=()=>{
        const orderToAdd={
        
        date:'27/10/2023',
        products:cardOrder,
        totalProducts:cardOrder.length,
        totalprice:SumaTotal(cardOrder)
      }

      setPurchaseOrder([...purchaseOrder,orderToAdd])
      setCardOrder([])
      setCount(0)
     
    }

    return (

            <div  className={`${showOrders? 'ordersContainerAside':'inactiveOrders'}`}>
                    <div className="titleOrderContent">
                        <h1>My Order</h1>
                        <div onClick={()=>{setShowOrders(false)}} className="symbolCLose">x</div>
                    </div>
                  <div className="containerMiniCards">
                         {
                           cardOrder.map((cardItem)=>(
                    
                             <MiniCard key={cardItem.id} cardItem={cardItem} />
                    
                          
                          ))
                        }
                  </div>
                   <div className='footerAside'>
                    <div className='total'>
                         <p>Total:</p> 
                         <h2>${SumaTotal(cardOrder)}</h2>
                     </div>
                        <NavLink to='/My-Oreders/last' >
                          <button type='button' className='buttonCheckOut' onClick={()=>handleCompra()} > COMPRAR</button>
                        </NavLink>

                   </div>
                   
                  </div> 
        
       
    );
};

export default ListOrderProducts;

ListOrderProducts.propTypes={
  card:PropTypes.any
}