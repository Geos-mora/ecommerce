import PropTypes from 'prop-types'

const MyOrdersMiniCards = ({data}) => {
 
    return (

        <>
          <div key={data.id} className="productOrdersContainer">
                                   
                    <figure className="figureContainerOrder">
                       <img className="imgProductsOrder" src={data.images} />
                    </figure>
                <div className="contentParagraphOrder">
                     
                      <div className="nameProductOrder">
                        <h1 >
                            {data.title}
                        </h1>  
                      </div>
                      <div className="pirceProductOrder">
                         
                        <h2 className="priceProduct">
                          {data.price}
                        </h2> 
                       
                      </div>
                     
                 </div>
           </div> 
        </>
    );
};

export default MyOrdersMiniCards;

MyOrdersMiniCards.propTypes={
    data:PropTypes.any.isRequired
}