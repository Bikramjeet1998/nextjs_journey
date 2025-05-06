export default function handler(req, res) {
    const products = [
      {
        id: 1,
        name: "Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation.",
        price: "$89.99",
      },
      {
        id: 2,
        name: "Smart Watch",
        description: "Track your health and receive notifications on the go.",
        price: "$129.99",
      },
      {
        id: 3,
        name: "Bluetooth Speaker",
        description: "Portable speaker with rich bass and clear sound.",
        price: "$49.99",
      },
      {
        id: 4,
        name: "Gaming Mouse",
        description: "Ergonomic RGB mouse for pro gamers.",
        price: "$39.99",
      },
      {
        id: 5,
        name: "4K Monitor",
        description: "Ultra HD monitor for stunning visuals.",
        price: "$299.99",
      },
      {
        id: 6,
        name: "Mechanical Keyboard",
        description: "Tactile keyboard with customizable RGB lighting.",
        price: "$79.99",
      },
      {
        id: 7,
        name: "External SSD",
        description: "Fast and portable storage solution.",
        price: "$99.99",
      },
      {
        id: 8,
        name: "Webcam",
        description: "1080p HD webcam for clear video calls.",
        price: "$59.99",
        },
    ];
  
    res.status(200).json(products);
  }
  