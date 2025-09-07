import React, { useState } from 'react';

const TrackOrderPage = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [trackingNumber, setTrackingNumber] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleOrderTrack = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with real tracking logic
    setResult('Tracking details for Order Number: ' + orderNumber);
  };

  const handleTrackingNumberTrack = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with real tracking logic
    setResult('Tracking details for Tracking Number: ' + trackingNumber);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-orange-700 mb-6 text-center">Track Your Order</h2>
        <form onSubmit={handleOrderTrack} className="mb-6">
          <label className="block mb-2 font-medium text-gray-700">Order Number</label>
          <input
            type="text"
            value={orderNumber}
            onChange={e => setOrderNumber(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
            required
          />
          <label className="block mb-2 font-medium text-gray-700">Email or Phone Number</label>
          <input
            type="text"
            value={emailOrPhone}
            onChange={e => setEmailOrPhone(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition"
          >
            Track
          </button>
        </form>
        <div className="text-center text-gray-500 mb-4">OR</div>
        <form onSubmit={handleTrackingNumberTrack}>
          <label className="block mb-2 font-medium text-gray-700">Tracking Number</label>
          <input
            type="text"
            value={trackingNumber}
            onChange={e => setTrackingNumber(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition"
          >
            Track
          </button>
        </form>
        {result && (
          <div className="mt-6 p-4 bg-amber-100 rounded text-orange-800 text-center">{result}</div>
        )}
      </div>
    </div>
  );
};

export default TrackOrderPage;