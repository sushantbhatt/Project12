import React from 'react';

const ContactPage = () => (
  <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-8">
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-3xl font-bold text-orange-700 mb-6 text-center">Contact Us</h1>
      <p className="mb-6 text-center text-amber-800">
        You can meet us here or give us a call.
      </p>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-orange-600 mb-2">Contact Information</h2>
        <div className="mb-2">
          <span className="font-semibold">Shuddh Swad</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Address:</span> Building No./Flat No.: Math Garib, Road/Street: Panchayat - Madhurapur, Nearby Landmark: High School, Locality/Sub Locality: Chakia, City/Town/Village: Math Garib, District: Purbi Champaran, State: Bihar, PIN Code: 845412, India.
        </div>
        <div className="mb-2">
          <span className="font-semibold">Phone:</span>{' '}
          <a href="tel:+918016380734" className="text-orange-600 underline">+91 8016380734</a>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Email:</span>{' '}
          <a href="mailto:contact@shuddhswad.shop" className="text-orange-600 underline">contact@shuddhswad.shop</a>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-orange-600 mb-2">Find Us on Map</h2>
        <div className="rounded-lg overflow-hidden shadow-lg border border-orange-100">
          <iframe
            title="Shuddh Swad Location"
            src="https://www.google.com/maps?q=Math+Garib,+Chakia,+Purbi+Champaran,+Bihar+845412,+India&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;