class Grocery {
    groceryItem : string;
    constructor(
        public itemName: string,
        public itemPrice: number,
        public itemQuantity: number
    ) {
        this.groceryItem ="Item Name: " + itemName  + "Price: " + itemPrice + "Quantity: " + itemQuantity
    }
}


interface Item {
    itemName: string;
    itemPrice: number;
    itemQuantity: number; 
}

function inventory( item: Item) {
    return `Grocery Item: ${item.itemName} <br/> Price: $${item.itemPrice.toFixed(2)} <br/> Quantity: ${item.itemQuantity} <br/><br/>`;
}

let itemArray: Array<Item> = [{itemName: "Apple", itemPrice: 0.50, itemQuantity: 2}, {itemName: "Banana", itemPrice: 0.25, itemQuantity: 4}, 
    {itemName: "Milk", itemPrice: 2.00, itemQuantity: 1 }];

for (let listitem of itemArray) {
    document.body.innerHTML = document.body.innerHTML + inventory(listitem);
}