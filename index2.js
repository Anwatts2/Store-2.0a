function shop() {
    console.log("Welcome to our shop!");

    let store_details = {
        items: ["Buns", "Rolls", "Bread", "Pita"],
        sales: 0,
        add_item: function(item) {
            this.items.push(item);
        },
        bought_item: function(item) {
            let index = this.items.indexOf(item);
            if (index !== -1) {
                this.items.splice(index, 1);
                console.log(`You have bought ${item}.`);
                
                this.sales++;
            } else {
                console.log(`${item} does not exist in the store.`);
            }
        }
    };

    console.log("Store details:", store_details);
    
    let newItems = ["Hotdogs", "Hamburger", "Brat", "Sausage"];
    for (let i = 0; i < newItems.length; i++) {
        store_details.add_item(newItems[i]);
    }
    console.log("Updated items in the shop:", store_details.items);


    store_details.bought_item("Frog legs"); 
    store_details.bought_item("Snails"); 

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
        
        store_details.sales++;
    } else {
        console.log(`${item} does not exist in the store.`);

        console.log(`Today we had ${store_details.sales} sales!`);
    }
}

shop();
