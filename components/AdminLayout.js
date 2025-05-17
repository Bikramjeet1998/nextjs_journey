// components/AdminLayout.js
import Link from 'next/link';

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
        <nav className="flex flex-col space-y-2">
          <Link href="/admin/dashboard">Dashboard</Link>
          <Link href="/admin/users">User List</Link>
          <Link href="/admin/users/create">Create User</Link>
          {/* Add more admin links here */}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-100 p-6">{children}</main>
    </div>
  );
}
