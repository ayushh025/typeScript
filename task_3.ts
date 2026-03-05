function fnc(a: { name: string; price: number; category: string }[]) {
  let total: number = 0;

  // Calculate total amount
  for (let item of a) {
    total += item.price;
  }
  console.log("Your total amount is Rs.", total);
  
  // Apply 10% discount if total amount is more that 5000
  if (total >= 500) {
    let disc = (total * 10) / 100;
    console.log("Amount after discount is", total - disc);
  }

  // Filter electronics items 
  let b: { name: string; price: number; category: string }[] = a.filter(
    (item) => {
      return item.category === "Electronics";
    }
  );

  console.log("Electronics items in your cart:");
  for (let item of b) {
    console.log(`Name: ${item.name}`);
    console.log(`Price: ${item.price}`);
  }

  // Filter non electronic items
  a = a.filter((item) => {
    return item.category !== "Electronics";
  });

  let tot = 0;

  // Calculate total amount of non electronic items
  for(let item of a){
    tot += item.price;
  }

  console.log("Total amount except electronics items", tot);
}

const cart: { name: string; price: number; category: string }[] = [
  { name: "Laptop", price: 50000, category: "Electronics" },
  { name: "Shirt", price: 800, category: "Clothing" },
  { name: "Watch", price: 1200, category: "Accessories" },
  { name: "USB Cable", price: 300, category: "Electronics" },
  { name: "Shoes", price: 2000, category: "Clothing" },
];

fnc(cart);
