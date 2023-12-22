import PropTypes from 'prop-types'
import { useContext} from 'react';
import { DataContext } from '../../../../../context/DataProvider';


const MiniCard = ({cardItem}) => {
    
  const {cardOrder,setCardOrder, setState,setCount,count,quantity} = useContext(DataContext);

  

  const handleDelete=(id)=>{
    const filterOrder=cardOrder.filter(items=>items.id!=id)
    setCardOrder(filterOrder)
    setCount(count-1)
    setState(false)
  }




  return (
        <>
              <div  className="productOrdersContainer">
                                   
                       <figure className="figureContainerOrder">
                          <img className="imgProductsOrder" src={cardItem.images} />
                       </figure>
                   <div className="contentParagraphOrder">
                        
                         <div className="nameProductOrder">
                           <h1 >
                               {cardItem.title}
                           </h1>  
                         </div>
                         <div className="pirceProductOrder">

                       {   /* <h1>{quantity}</h1>*/}

                            
                           <h2 className="priceProduct">
                             {cardItem.price}
                           </h2> 
                           <span onClick={()=>{handleDelete(cardItem.id)}} className="eraseProduct">&#10007;</span>
                         </div>
                        
                    </div>
              </div> 
        </>
    );
};

export default MiniCard;

MiniCard.propTypes={
  cardItem:PropTypes.any,
  quantity:PropTypes.any
}