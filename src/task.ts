// Task 1

type CartItem = { 
    name: string; 
    price: number; 
    quantity?: number; };

function calculateTotal(item: CartItem): number {
  const { price, quantity = 1 } = item; 
  return price * quantity;
}

const total =calculateTotal({
  name: "Laptop",
  price: 100000,
  quantity: 2
})
console.log(total)


