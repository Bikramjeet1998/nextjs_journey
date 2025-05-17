// pages/admin/users/create-api.js
import db from '@/lib/db';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const { name, email, website } = req.body;

  try {
    await db.query('INSERT INTO users (name, email, website) VALUES (?, ?, ?)', [
      name,
      email,
      website,
    ]);

    res.writeHead(302, { Location: '/admin/users' }); // Redirect to user list
    res.end();
  } catch (err) {
    res.status(500).send('Database Insert Failed');
  }
}
