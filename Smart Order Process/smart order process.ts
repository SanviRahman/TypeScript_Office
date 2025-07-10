import * as readline from 'readline'

//Menu List
const menu: any = {
    "burger": { price: 5 },
    "pizza": { price: 8 },
    "salad": { price: 4 },
    "pasta": { price: 7 },
    "soda": { price: 2 },
}


//Order alias
type Order = {
    item: string;
    quantity: number;
}



//Show menu
console.log("Menu:");
let index = 1;

for (let item in menu) {
    console.log(`${index}. ${item}: Price:${menu[item].price}`);
    index++;
}



//Get input form user using interface
const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});



//call function for input=>retrun promise
const ask = (question: string): Promise<any> => {
    return new Promise(resolve => readLine.question(question, resolve));
}



//Prepared item
const prepareItem = (item: string, price: number) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`${item} is ready`);
        })
    })
}


//main function 
const mainProcess = async () => {
    const orders: Order[] = [];


    //order from user
    let diffItems: number;
    while (true) {
        diffItems = parseInt(await ask("How many different item you want order:"));

        if (diffItems < 1) {
            console.log("Enter a valid number.Please try again.");
        }
        else {
            break;
        }
    }

    for (let i = 1; i <= diffItems; i++) {
        const item = await ask(`Enter the item name: ${i}.`);

        if (!menu[item]) {
            console.log("This item is not present in menu.Please try again!");
            i--;
            continue;
        }

        const quantity: number = await ask(`Your item order is: ${item} and quantity of ${item}:`);
        if (quantity < 1) {
            console.log("Invalid quantity.Please try again.");
            i--;
            continue;
        }

        orders.push({ item, quantity });
    }
    readLine.close();


    //Order process
    console.log("\nYours order are preparing...");
    for (const order of orders) {
        const orderPrice = order.quantity * 500;
        const orderItem = await prepareItem(order.item, orderPrice);//Pepared order
        console.log(`${orderItem} and quantity:${order.quantity}`);
    }



    //Order summary and total amount
    let total = 0;
    console.log("\nOrder Summary:");

    for (const order of orders) {
        const price = menu[order.item].price;
        const totalTaka = price * order.quantity;
        total += totalTaka;
        console.log(`${order.item}:${price}Tk x${order.quantity}=${totalTaka}Tk`);
    }




    //Discount
    let discount=0;
    if(total>20){
        discount=total*0.1;
        console.log(`You get 10% discount.`);
    }
    else{
        console.log("You not get any discount.");
    }


    //Total cost after discount
    let finalAmount=0;
    finalAmount=total-discount;
    console.log(`Final amount after discount:${finalAmount.toFixed(2)}tk`);

}

mainProcess();