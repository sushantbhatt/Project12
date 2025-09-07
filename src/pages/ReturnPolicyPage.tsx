import React from 'react';

const ReturnPolicyPage = () => (
  <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-8">
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-3xl font-bold text-orange-700 mb-6 text-center">Return & Refund Policy</h1>
      <p className="mb-4 text-amber-800">
        At Shuddh Swad, we’re dedicated to making you love every purchase. If something isn’t quite right, don’t worry – we’ve designed a simple and stress-free return process just for you!
      </p>
      <h2 className="text-xl font-semibold text-orange-600 mt-8 mb-2">How to Return an Item</h2>
      <ul className="list-disc pl-6 mb-4 text-amber-800">
        <li>
          <span className="font-semibold">Eligibility for Returns:</span> You can return your purchase within <span className="font-semibold">2 days</span> from the date of purchase. Please ensure the item is unused, in its original condition, and includes all tags and labels.
        </li>
        <li>
          <span className="font-semibold">Starting the Return Process:</span> To begin, send us a quick email at <a href="mailto:contact@shuddhswad.shop" className="text-orange-600 underline">contact@shuddhswad.shop</a> to request a Return Merchandise Authorization (RMA) number. This number is essential for processing your return.
        </li>
        <li>
          <span className="font-semibold">Sending Back Your Item:</span> Once you have your RMA number, carefully pack the item in its original packaging. Ship it to:
          <div className="bg-amber-100 rounded p-3 mt-2 mb-2 text-sm">
            Shuddh Swad,<br />
            Building No./Flat No.: Math Garib,<br />
            Road/Street: Panchayat - Madhurapur,<br />
            Nearby Landmark: High School,<br />
            Locality/Sub Locality: Chakia,<br />
            City/Town/Village: Math Garib,<br />
            District: Purbi Champaran,<br />
            State: Bihar,<br />
            PIN Code: 845412, India
          </div>
          Don&apos;t worry – we’ll cover the return shipping costs or reimburse you for them!
        </li>
      </ul>
      <h2 className="text-xl font-semibold text-orange-600 mt-8 mb-2">Processing Refunds or Exchanges</h2>
      <p className="mb-4 text-amber-800">
        After we receive and inspect your return, we’ll process your refund or exchange within <span className="font-semibold">3 business days</span>. Refunds will be credited to your original payment method within 5 to 7 business days. You’ll get an email confirmation as soon as it’s done.
      </p>
      <h2 className="text-xl font-semibold text-orange-600 mt-8 mb-2">What If My Item Is Damaged or Defective?</h2>
      <p className="mb-4 text-amber-800">
        No problem at all! If you receive a faulty or damaged product, please reach out to us right away. If the damaged/defective product is inspected and accepted, a replacement will be delivered within 3 to 5 business days.
      </p>
      <div className="mb-4 text-amber-800">
        <span className="font-semibold">Contact us via:</span>
        <ul className="list-none pl-0 mt-2">
          <li className="flex items-center gap-2">
            <span className="font-semibold">📞</span> <a href="tel:+918016380734" className="text-orange-600 underline">+91 8016380734</a>
          </li>
          <li className="flex items-center gap-2">
            <span className="font-semibold">✉️</span> <a href="mailto:contact@shuddhswad.shop" className="text-orange-600 underline">contact@shuddhswad.shop</a>
          </li>
        </ul>
      </div>
      <div className="mb-4 text-amber-800">
        <span className="font-semibold">Quick Note:</span> For damaged items, kindly include photos when contacting us – this helps us resolve things much faster!
      </div>
      <p className="mb-4 text-amber-800">
        We understand that sometimes things don’t go as planned. We are committed to making your experience as smooth as possible. If you have any questions, our friendly customer support team is always ready to help.
      </p>
      <p className="text-center text-orange-700 font-semibold mt-8">Thank you for choosing Shuddh Swad!</p>
    </div>
  </div>
);

export default ReturnPolicyPage;