export default function handler(req, res) {
    const products = [
        { id: 1, name: "Laptop", price: 999.99, category: "Electronics" },
        { id: 2, name: "Smartphone", price: 699.99, category: "Electronics" },
        { id: 3, name: "Headphones", price: 199.99, category: "Accessories" },
        { id: 4, name: "Desk Chair", price: 149.99, category: "Furniture" },
        { id: 5, name: "Monitor", price: 249.99, category: "Electronics" },
        { id: 6, name: "Keyboard", price: 49.99, category: "Accessories" },
        { id: 7, name: "Mouse", price: 29.99, category: "Accessories" },
        { id: 8, name: "Backpack", price: 89.99, category: "Travel" },
    ];

    res.status(200).json(products);
}