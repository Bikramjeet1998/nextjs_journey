import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function login() {
const [countryCode, setCountryCode] = useState('+91');
const [mobile, setMobile] = useState('');
const [error, setError] = useState('');
const [loading, setLoading] = useState(false);
const router = useRouter();

const handleSubmit = async (e) => {
e.preventDefault();
setError('');
setLoading(true);

if (!countryCode || !mobile) {
  setError('Please enter both country code and mobile number');
  setLoading(false);
  return;
}
const fullMobile = countryCode + mobile;

try {
  // Step 1: Send biometric notification
  const notifyRes = await fetch(
    'https://api.ivalt.com/admin/public/api/send/global/notification',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-api-key': 'eRf5eFjJ9X5LQdK8CXs9W6oibhAvUz4C8R4ptMFe'
      },
      body: JSON.stringify({ mobile: fullMobile })
    }
  );

  const notifyData = await notifyRes.json();
  if (!notifyRes.ok) throw new Error(notifyData.message || 'Notification failed');

  alert('Notification sent. Waiting for biometric verification...');

  // Step 2: Poll biometric status
  const interval = setInterval(async () => {
    try {
      const verifyRes = await fetch(
        'https://api.ivalt.com/admin/public/apivalidate-geo-fence-auth',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-api-key': 'eRf5eFjJ9X5LQdK8CXs9W6oibhAvUz4C8R4ptMFe'
          },
          body: JSON.stringify({ mobile: fullMobile })
        }
      );

      const verifyData = await verifyRes.json();

      if (verifyRes.ok && verifyData.status === true) {
        clearInterval(interval);
        alert('Biometric verified!');
        router.push('/dashboard');
      }
    } catch (err) {
      console.log('Polling error:', err.message);
    }
  }, 2000); // every 2 seconds
} catch (err) {
  setError(err.message);
  setLoading(false);
}

};

return (
<div className="min-h-screen flex items-center justify-center bg-gray-100">
<form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
<h2 className="text-xl font-semibold text-center mb-4">Biometric Login</h2>
    <label className="block mb-1 text-sm font-medium">Country Code</label>
    <input
      type="text"
      value={countryCode}
      onChange={(e) => setCountryCode(e.target.value)}
      className="w-full border p-2 rounded mb-4"
    />

    <label className="block mb-1 text-sm font-medium">Mobile Number</label>
    <input
      type="text"
      value={mobile}
      onChange={(e) => setMobile(e.target.value)}
      className="w-full border p-2 rounded mb-4"
    />

    {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

    <button
      type="submit"
      disabled={loading}
      className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
    >
      {loading ? 'Verifying...' : 'Send Biometric Request'}
    </button>
  </form>
</div>
);
}

