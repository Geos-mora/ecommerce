

const SumaTotal = (product) => {
    return (
        product.reduce((acc,element)=>(acc+element.price),0)
    )
};

export default SumaTotal;