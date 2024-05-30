function shop(items) {
    console.log("Welcome to our shop!");
    // Add your shop functionality here
    // For example:
    let newItems = ["Soap", "Floss", "Toothpaste", "Toothbrush", "Mouthwash"];
    for (let i = 0; i < newItems.length; i++) {
        add_item(items, newItems[i]);
    }
    console.log("Items in the shop now:", items);

    // Buying items
    bought_item(items, "Floss"); // Legitimate item
    bought_item(items, "Towels"); // Non-existent item

    console.log("Thank you for shopping!");
}

function add_item(items, item) {
    items.push(item);
}

function bought_item(items, item) {
    let index = items.indexOf(item);
    if (index !== -1) {
        items.splice(index, 1);
        console.log(`You have bought ${item}.`);
    } else {
        console.log(`${item} does not exist in the store.`);
    }
}

// Example usage:
let items = ["Peroxide", "Tissue", "Papertowl"];
shop(items);
