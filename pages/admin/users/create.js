// pages/admin/users/create.js
import { getSession } from '@/lib/auth'; // Your custom session check
import db from '@/lib/db';
import { useState } from 'react';

export async function getServerSideProps(context) {
  const session = getSession(context.req);
  if (!session || !session.isAdmin) {
    return { redirect: { destination: '/adminlogin', permanent: false } };
  }

  return { props: {} };
}

export default function CreateUser() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create User</h1>
      <form method="POST" action="/admin/users/create-api" className="space-y-4">
        <input name="name" placeholder="Name" required className="w-full p-2 border" />
        <input name="email" type="email" placeholder="Email" required className="w-full p-2 border" />
        <input name="website" placeholder="Website" className="w-full p-2 border" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Create</button>
      </form>
    </div>
  );
}
