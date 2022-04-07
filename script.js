let productName = prompt("Enter product name: "); 
let price = prompt("price: "); 
let quantity = prompt("quantity");
    
    console.log( productName,price,quantity);

let total = quantity*price;

if(productName == "Pineapple" && price == "3" && quantity == "2"){
    console.log("In Stock");
    document.write(quantity, " ", productName, "     ", total);
}else{
    document.write("Not In Stock");
}

const taxes=1.2;
    console.log(total, total*taxes);
    document.write()





