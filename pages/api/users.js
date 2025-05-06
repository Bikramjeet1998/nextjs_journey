// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const users = [
    { id: 1, name: 'Bikramjeet Singh', email: 'Bikram@example.com', website: 'Bikram@example.com' },
    { id: 2, name: 'Navkiran Singh', email: 'Navkiran@example.com', website: 'Navkiran@example.com' },
    { id: 3, name: 'Jasmail Singh', email: 'Jasmail@example.com', website: 'Jasmail@example.com' },
    { id: 3, name: 'Amanpreet Singh', email: 'Amanpreet@example.com', website: 'Amanpreet@example.com' },
  ];

  res.status(200).json(users);
}
