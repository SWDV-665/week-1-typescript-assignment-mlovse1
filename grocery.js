var Grocery = /** @class */ (function () {
    function Grocery(itemName, itemPrice, itemQuantity) {
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.itemQuantity = itemQuantity;
        this.groceryItem = "Item Name: " + itemName + "Price: " + itemPrice + "Quantity: " + itemQuantity;
    }
    return Grocery;
}());
function inventory(item) {
    return "Grocery Item: " + item.itemName + " <br/> Price: $" + item.itemPrice.toFixed(2) + " <br/> Quantity: " + item.itemQuantity + " <br/><br/>";
}
var itemArray = [{ itemName: "Apple", itemPrice: 0.50, itemQuantity: 2 }, { itemName: "Banana", itemPrice: 0.25, itemQuantity: 4 },
    { itemName: "Milk", itemPrice: 2.00, itemQuantity: 1 }];
for (var _i = 0, itemArray_1 = itemArray; _i < itemArray_1.length; _i++) {
    var listitem = itemArray_1[_i];
    document.body.innerHTML = document.body.innerHTML + inventory(listitem);
}
