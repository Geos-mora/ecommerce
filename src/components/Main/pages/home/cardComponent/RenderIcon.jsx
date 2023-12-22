import PropTypes from 'prop-types'
import { useContext } from "react";
import { DataContext } from "../../../../../context/DataProvider";


const RenderIcon = ({data}) => {

    const {count,setCount,setShowDitail,setShowOrders,cardOrder,setCardOrder,showOrders,quantity, setQuantity } = useContext(DataContext);
   
    const addProductsToCar=(dataOrder)=>{
        setShowDitail(false)
        setCardOrder([...cardOrder,dataOrder])
        setShowOrders(true)
        setCount(count+1)
      }

  
        const IsProductInCar=cardOrder.filter(product=>product.id===data.id).length>0



       const sumAndDifferenceOfProducts=(parametro,idx)=>{
            setShowOrders(true)
            setShowDitail(false)
            
        
           parametro==="sumar"&&idx===data.id?setQuantity(quantity+1):setQuantity((prev)=>prev===1?prev=1:prev-1)
     
         
          
        }
    
          
          return(
            <>
                {
                    IsProductInCar? 
                     <div className="containerCheck"  >
                         <div onClick={()=>  {setShowOrders(true),setShowDitail(false)}} className={`${showOrders?'checkProduct':'activeCheckProduct'}`}>
                             &#10003;
                         </div>
         
                          <ul  className='sumaProducts'  >
                          <div className=' incrementDecrementContainer'>
                               <li onClick={()=>sumAndDifferenceOfProducts('sumar',data.id)} className="increment">+</li>
                               <li onClick={()=>sumAndDifferenceOfProducts('restar',data.id)} className="decrement">-</li>
                          </div>
                         </ul>
                    </div>  :

                    <div onClick={()=>addProductsToCar(data)} className='addProducts' >
                        x
                    </div>
           
                }           
                  
          
        
          
            
            </>
          )
        
    
};

export default RenderIcon;

RenderIcon.propTypes={
    data:PropTypes.any
}