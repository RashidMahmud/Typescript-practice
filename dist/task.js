"use strict";
// Task 1
Object.defineProperty(exports, "__esModule", { value: true });
function calculateTotal(item) {
    const { price, quantity = 1 } = item;
    return price * quantity;
}
const total = calculateTotal({
    name: "Laptop",
    price: 100000,
    quantity: 2
});
console.log(total);
//# sourceMappingURL=task.js.map