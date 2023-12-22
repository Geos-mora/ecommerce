import PropTypes from "prop-types"
import { useContext} from "react";
import { DataContext } from "../../../../../context/DataProvider";
import RenderIcon from "./RenderIcon";



const Card = ({data}) => {

  const {setShowDitail,setCardDitail,setShowOrders } = useContext(DataContext);

  

  const sendProducDitail=(ProductDitail)=>{
    setShowOrders(false)
    setShowDitail(true)
    setCardDitail(ProductDitail)
    
  }

  
  
    return (
        <div className="cardContent">
             <figure  className="contentFigure">
            {
              <RenderIcon data={data}/>
            }
                 <span className="typeProducts">{data.category.name}</span>
                 <img onClick={()=>sendProducDitail(data)} className="imgProducts" src={data.images} />
                        
           </figure>  
           
           <p className="contentParagraph">
                <span className="nameProduct">
                    {data.title}
                </span>  
                <span className="pirceProduct">
                  {data.price}
                </span> 
           </p>
        </div>
  );
};

export default Card;

Card.propTypes={
  data:PropTypes.object.isRequired,


}