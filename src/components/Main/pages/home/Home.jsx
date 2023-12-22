
import Card from "./cardComponent/Card";
import ListOrderProducts from "./asideListOrders/ListOrderProducts";
import ProductDitail from "./asideProductDitail/ProductDitail";
import { DataContext } from "../../../../context/DataProvider";
import { useContext } from "react";




const Home = () => {
 
    const {data,loading, setSearchByTitle, searchByTitle,filteredItems,searchByCategory} = useContext(DataContext); 

    const renderView=()=>{
        if (searchByCategory||searchByTitle?.length>0) {

            if (searchByCategory || searchByTitle?.length>0) {
              return(
                filteredItems?.map((item)=>(
      
                  <Card key={item.id } data={item}/>
                ))
              )
              
            }else{
              return(
                <div>producto no disponible o no exciste </div>
              )
            }
        }else{
          return(
            data?.map((item)=>(
  
              <Card key={item.id } data={item}/>
            ))
          )

        }
    }

   
    return (
      <div className="containerHome">
          <div className="contentTitle">
             <div className="containerTitle">
              <h1>Exclusive Products</h1>
              <p>the best place to find your favorite products</p>
             </div>
             <form className="formContent">
                  <input onChange={(event)=>setSearchByTitle(event.target.value) } className="inputProducts" type="text" placeholder="search a product"/>
             </form>
          </div>
        
             <div className="cardsContainer">
                
                  {loading &&  <span>Loading ...</span>}
                   {
                    renderView()
                   }
                   <aside className="productDitailAside" >
                      <ProductDitail/>
                   </aside>

                   
                   <aside className=" productOrderAside">
                        <ListOrderProducts />
                   </aside>
                   

                  
            </div>
      </div>
    );
};

export default Home;