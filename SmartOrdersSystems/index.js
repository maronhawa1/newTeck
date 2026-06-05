const menu = [
  {
    id: 1,
    name: "Burger",
    category: "Food",
    price: 35,
    available: true,
  },
  {
    id: 2,
    name: "Pizza",
    category: "Food",
    price: 45,
    available: true,
  },
  {
    id: 3,
    name: "Salad",
    category: "Food",
    price: 28,
    available: false,
  },
  {
    id: 4,
    name: "Cola",
    category: "Drinks",
    price: 10,
    available: true,
  },
  {
    id: 5,
    name: "Orange Juice",
    category: "Drinks",
    price: 15,
    available: true,
  },
  {
    id: 6,
    name: "Fries",
    category: "Food",
    price: 18,
    available: true,
  },
  {
    id: 7,
    name: "Ice Cream",
    category: "Desserts",
    price: 20,
    available: false,
  },
  {
    id: 8,
    name: "Chocolate Cake",
    category: "Desserts",
    price: 50,
    available: true,
  },
];
const customers = [
  { name: "Yael", budget: 120, isStudent: true },
  { name: "Omar", budget: 250, isStudent: false },
  { name: "Dana", budget: 40, isStudent: true },
  { name: "Eli", budget: 300, isStudent: false },
  { name: "Noa", budget: 150, isStudent: true },
  { name: "Avi", budget: 200, isStudent: false },
  { name: "Tamar", budget: 90, isStudent: true },
  { name: "Rami", budget: 180, isStudent: false },
  { name: "Shira", budget: 110, isStudent: true },
  { name: "Lior", budget: 350, isStudent: false },
];
const order = [1, 3, 5];

const DisplayMenu = () => {
  menu.forEach((items) => {
    console.log(
      items.id,
      " - ",
      items.name,
      " - ",
      items.category,
      " - ",
      items.price,
      " - ",
      items.available ? "Available" : "Not Available",
    );
  });
};

DisplayMenu();
const getAvailableItems = () => {
  return menu.filter((item) => item.available);
};

console.log(getAvailableItems());

const findItemById = (idMenu) => {
  return menu.find((item) => item.id === idMenu) || "item not found";
};
console.log(findItemById(6));

const getOrderItems = order.map((id) => {
  return menu.find((item) => item.id === id);
});

console.log(getOrderItems);
const validateOrder = (order) => {
  let isValid = true;

  order.forEach((id) => {
    const item = menu.find((item) => item.id === id);

    if (!item) {
      console.log("This item does not exist.");
      isValid = false;
    } else if (!item.available) {
      console.log("Sorry, this item is currently not available.");
      isValid = false;
    }
  });

  return isValid;
};
console.log(validateOrder(order));
const calculateTotal = (order) => {
  const total = order.reduce((currentTotal, id) => {
    const item = menu.find((item) => item.id === id);
    return currentTotal + item.price;
  }, 0);
  return total;
};

console.log(calculateTotal(order));
const applyDiscount = (order, customer) => {
  const total = calculateTotal(order);
  let discount = 0;
  if (customer.isStudent) {
    discount = 10;
  }
  if (total > 100) {
    discount = 15;
  }
  if (total > 150) {
    discount = 20;
  }
  const discountAmount = total * (discount / 100);
  const finalTotal = total - discountAmount;
  return {
    originalTotal: total,
    discountPercentage: discount,
    discountAmount: discountAmount.toFixed(2),
    finalTotal: finalTotal,
  };
};

console.log(
  applyDiscount([1, 3, 5], { name: "Yael", budget: 120, isStudent: true }),
);
const canCustomerPay = (order, customer) => {
  let custBudget = customer.budget;
  let finalTotal = calculateTotal(order);
  if (custBudget < finalTotal) return false;
  return true;
};

console.log(canCustomerPay(order, customers[2]));
const printReceipt = (order, customer) => {
  const total = calculateTotal(order);
  const disc = applyDiscount(order, customer);
  const canPay = canCustomerPay(order, customer);

  console.log("========== RECEIPT ==========");
  console.log("Restaurant: JavaScript Burger House");
  console.log("Customer: " + customer.name);
  console.log("Items:");

  order.forEach((id) => {
    const item = menu.find((m) => m.id === id);
    console.log("- " + item.name + ": " + item.price + " NIS");
  });

  console.log("Original Total: " + total + " NIS");
  console.log("Discount: " + disc.discountPercentage + "%");
  console.log("Discount Amount: " + disc.discountAmount + " NIS");
  console.log("Final Total: " + disc.finalTotal + " NIS");
  console.log("Customer Budget: " + customer.budget + " NIS");
  console.log(
    "Payment Status: " + (canPay ? "Paid Successfully" : "Not Enough Budget"),
  );
  console.log("=============================");
};
customers.forEach((customer) => {
  printReceipt(order, customer);
});
