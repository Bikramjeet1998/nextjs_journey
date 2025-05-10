import AdminLayout from '@/components/AdminLayout';

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/users');
  const users = await res.json();

  return {
    props: { users },
  };
}

export default function Dashboard({ users }) {
  return (
    <AdminLayout>
      <div style={{ padding: '2rem' }}>
        <h1 style={{ fontSize: '24px', marginBottom: '1rem' }}>All Registered Users</h1>

        {users.map(user => (
          <div key={user.id} style={{
            border: '1px solid #ccc',
            padding: '1rem',
            borderRadius: '10px',
            marginBottom: '1rem',
            backgroundColor: '#f9f9f9'
          }}>
            <h2>{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></p>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
