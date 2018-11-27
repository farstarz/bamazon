const inquirer = require('inquirer');
const mysql = require('mysql');
require('dotenv').config();
let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.DB_Pass,
    database: 'bamazon'
});

connection.connect(function(err){
    if(err) throw err;
    // console.log(connection.threadId);
    console.log('connected as id '+connection.threadId+'\n');
    currentStock();
});

function currentStock(){
    console.log('Items available are: ')
    connection.query(
        'SELECT * FROM products', (err, res)=>{
            if(err) throw err;
            console.log(res);
        
            takeOrder(res);
        }
    );
}

function takeOrder(curStock){
    inquirer
        .prompt([
            {name: 'productID',
            type: 'input',
            message: 'Which product do you want to order?'},
            {name: 'nooUnits',
            type: 'input',
            message: 'How many unts of the product do you want?'}
        ])
        .then(order=>{
            console.log(order);
            let orderID = order.productID;
            let units = order.nooUnits;
            console.log(orderID);
            console.log(units);
            let found = false;
            curStock.forEach(element=> {
                if(element.item_id==orderID){
                    found = true;
                    if(units<=element.stock_quantity){
                        console.log('Product ordered!')
                        let newStockQuantity = element.stock_quantity-units;
                        updateStock(orderID, newStockQuantity);
                    }else{
                        console.log('Insufficient quantity!');
                    }
                }
            });
            if(found === false){
                console.log('order ID entered is incorrect');
            }
                   
        });
}

function updateStock(itemID, units){
    connection.query(
        'UPDATE products SET stock_quantity = ? WHERE item_id = ?', [units, itemID]
    );
}


