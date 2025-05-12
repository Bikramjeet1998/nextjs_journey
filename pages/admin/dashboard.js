// pages/admin/dashboard.js
import { parse } from 'cookie';

export async function getServerSideProps(context) {
  const cookies = parse(context.req.headers.cookie || '');

  if (cookies.admin_token !== 'secure123') {
    return {
      redirect: {
        destination: '/adminlogin',
        permanent: false,
      },
    };
  }

  return { props: {} };
}

export default function Dashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to Admin Dashboard</h1>
      <p>You are now logged in.</p>
    </div>
  );
}
