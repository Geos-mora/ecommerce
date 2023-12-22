import { useContext } from "react";
import { DataContext } from "../../../../../context/DataProvider";


const ProductDitail = () => {

     const {showDitail, setShowDitail, cardDitail} = useContext(DataContext);
     const { images, title, price, description }=cardDitail

    
   
  
    return (
        <div className={`${showDitail?'asideContainerDitail ':'inactiveDitail'}`}>
            <div className="titleDitail">
                <h1>Ditail</h1>
                <div onClick={()=>setShowDitail(false)} className="symbolCLose">x</div>
            </div>
                
            <div className="productDitailContainer">
                 <figure className="figureContainerDitail">
                    <img className="imgProductsDitail" src={images} />
                 </figure>

                 <div className="contentParagraphDitail">
                    <h1 className="pirceProductDitail">
                      {price}
                    </h1> 
                    <h3 className="nameProductDitail">
                        {title}
                    </h3>  
                    <p className="descriptionDitail">
                        {description}
                    </p>
                </div>
          </div>           
 
                
        </div>
    );
};

export default ProductDitail;