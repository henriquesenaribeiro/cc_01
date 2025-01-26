//Task 1: Employee Information
let employeeName = "Henrique";
const employeeID = 001;
var isActive = true 

console.log("Employee Name:" employeeName, "Type:", typeof employeeName);
console.log("Employee ID:" employeeID, "Type:", typeof employeeID);
console.log("Is Active:" isActive, "Type:" typeof isActive);

//Task 2: Product Details
let productName = "Computer";
const productPrice = 799.99;
var isAvailable = true;

console.log("Product Name:", productName, "Type:", typeof productName);
console.log("Product Price:", productPrice, "Type:", typeof productPrice);
console.log("Is Available:", isAvailable, "Type:", typeof isAvailable);

//Task 3: Financial Transactions
let accountBalance = 1000;

accountBalance += 500;
console.log("After Deposit:", accountBalance);

accountBalance -= 300;
console/log("After Withdrawl:", accountBalance);

accountBalance *= 1.05;
console.log("After Interest:", accountBalance);

accountBalance /= 2;
console.log("After Halving:", accountBalance);

//Task 4: Customer Messaging
let customerName = "Henry";

let welcomeMessage = "Welcome to our plaform," + customerName + "!";
console.log(welcomeMessage);

//Task 5: Access Control
let isLoggedIn = false;

if (isLoggedIn) {
    console.log("Acess granted.");
} else {
    console.log("Acess denied. Please log in.");
}