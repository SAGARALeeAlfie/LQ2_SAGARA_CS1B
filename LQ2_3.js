const priceList = {
    A: { name: "Pepsi Cola", price: 1.50 },
    B: { name: "Coca Cola", price: 1.75 },
    C: { name: "Apple (per kg)", price: 3.00 },
    D: { name: "Orange (per kg)", price: 2.50 },
    E: { name: "Hotdogs (per kg)", price: 5.00 }
};

console.log("Available Items:");
for (let key in priceList) {
    console.log(`${key}. ${priceList[key].name} - $${priceList[key].price.toFixed(2)}`);
}

let itemChoice = prompt("Enter the letter of your item choice (A-E):").toUpperCase();

let qty = parseInt(prompt("Enter the quantity:"), 10);

if (priceList[itemChoice]) {
    let itemName = priceList[itemChoice].name;
    let price = priceList[itemChoice].price;
    let totalPrice = price * qty;

    alert(`Total Price of the order: ${itemName} x ${qty}: $${totalPrice.toFixed(2)}`);
    
    console.log(`Total Price: ${itemName} x ${qty} = $${totalPrice.toFixed(2)}`);
} else {
    alert("No matching Item! Try to re-run the program.");
}
