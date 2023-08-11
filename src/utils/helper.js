export const priceFormat=(price)=>{
    const newPrice=Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'USD',
    }).format(price/100);
    return newPrice;
}