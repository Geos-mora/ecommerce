
import  { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'




export const DataContext=createContext()


const DataProvider = ({children}) => {
    const [data, setData] = useState(null);
  
    //manda los datos del fech

    const [loading, setLoading] = useState(true);
    //muestra "cargando " mientras carga toda los datos del fech
    
    useEffect(() => {

        setLoading(true)
        fetch("https://api.escuelajs.co/api/v1/products")
        .then((response)=>response.json())
        .then(data=>setData(data))
        .finally(()=>setLoading(false))
    }, []);   
    
    
    const [filteredItems, setFilteredItems] = useState(null);
    const [searchByTitle, setSearchByTitle] = useState(null);
    const [searchByCategory, setSearchByCategory] = useState(null);

   
   
    
    //------------------------------*****-------------------------


    const [count, setCount] = useState(0);
    //cuenta el numero de productos en el carro

    const [showDitail, setShowDitail] = useState(false);
    // abre la ventana de ditail
    
    const [cardDitail, setCardDitail] = useState({});
    // envia los datos del producto a ditail

    const [showOrders, setShowOrders] = useState(false);
    // abre la ventana del my orders
    
    const [cardOrder, setCardOrder] = useState([]);
    // envia los datos del producto a my orders  
     
    const [quantity, setQuantity] = useState(0);
    // define la cantidad de los productos a comprar
    
    const [purchaseOrder, setPurchaseOrder] = useState([]);
    //manda los datos de toda la orden de compra
    
    const [sendOrderBack, setSendOrderBack] = useState([]);
    // manda la orden comprada a un review

    const [stateOrderBack, setStateOrderBack] = useState(false);
    // pone falso o verdadero un estado de orderback

//------------------------------------------------------------------------------------------------------------

    const filterItemsByTitle=(data,searchByTitle)=>(

        data?.filter(item=>item.title.toLowerCase().includes(searchByTitle?.toLowerCase()))

    
    )  
    
    
    const filterItemsByCategory=(data,searchByCategory)=>(

        data?.filter(items=>items.category.name.toLowerCase().includes(searchByCategory?.toLowerCase()))
        
    
    )  
    

    
    useEffect(() => {

            if (searchByTitle===null) {
                searchByCategory?setFilteredItems(filterItemsByCategory(data,searchByCategory)):data   
            }else{
                searchByTitle?setFilteredItems(filterItemsByTitle(data,searchByTitle)):data
            }
        }, [data,searchByTitle,searchByCategory]);

          
     
        //-----------------------------------------------------------------------------------------------------
 
    
    return (
        
            <DataContext.Provider value={{
                data,
                setData,
                loading,
                setLoading,
                searchByTitle, 
                setSearchByTitle,
                quantity, 
                setQuantity,
                setCount,
                count,
                setShowDitail,
                showDitail,
                setCardDitail,
                cardDitail,
                setShowOrders,
                showOrders,
                setCardOrder,
                cardOrder,
                purchaseOrder,
                setPurchaseOrder,
                sendOrderBack,
                setSendOrderBack,
                stateOrderBack, 
                setStateOrderBack,
                filteredItems, 
                setFilteredItems,
                searchByCategory,
                setSearchByCategory
              

            }}>
                {children}
            </DataContext.Provider>
        
    );
};
export default DataProvider;

DataProvider.propTypes={
    children:PropTypes.any
}


