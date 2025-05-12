// pages/adminlogin.js
import querystring from 'querystring';
import React from 'react';

export default function AdminLogin({ error }) {
  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '2rem', border: '1px solid #ccc' }}>
      <h2>Admin Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form method="POST" action="/adminlogin">
        <input type="text" name="username" placeholder="Username" required /><br /><br />
        <input type="password" name="password" placeholder="Password" required /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { req, res } = context;

  // Only run logic if it's a POST (form submission)
  if (req.method === 'POST') {
    const body = await new Promise((resolve, reject) => {
      let data = '';
      req.on('data', chunk => {
        data += chunk.toString();
      });
      req.on('end', () => {
        resolve(querystring.parse(data));
      });
    });

    const { username, password } = body;

    // Simple check
    if (username === 'admin' && password === 'admin123') {
      // Set cookie
      res.setHeader('Set-Cookie', `admin_token=secure123; Path=/; HttpOnly`);

      // Redirect to dashboard
      return {
        redirect: {
          destination: '/admin/dashboard',
          permanent: false,
        },
      };
    } else {
      // Return error message
      return {
        props: { error: 'Invalid username or password' },
      };
    }
  }

  return { props: {} };
}
