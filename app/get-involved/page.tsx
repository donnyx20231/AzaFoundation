// app/get-involved/page.tsx
'use client';

import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';

export default function GetInvolved() {
  const [amount, setAmount] = useState('other');
  const [customAmount, setCustomAmount] = useState('');

  const presetAmounts = ['5000', '10000', '25000', '50000', '100000'];

  return (
    <div className="py-20 bg-neutral-light">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionTitle
          title2="Get Involved"
          subtitle="Your support changes lives. Choose how you'd like to help today." title={''} />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Ways to Help */}
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">Ways to Support Us</h3>
            <ul className="space-y-4 text-2xl text-gray-700">
              <li>• Donations and sponsorships</li>
              <li>• Volunteering your time and expertise</li>
              <li>• Partnering with us on projects and outreach programs</li>
            </ul>
            <div className="mt-18">
              <h4 className="text-3xl font-semibold mb-4">Our Bank Details</h4>
              <p className="text-gray-700 text-2xl">
                Bank:Opay Bank <br />
                Account Number:7012929144<br />
                Account Name: Caleb Asuquo<br />
              </p>
            </div>
             <div className="mt-18">
              <h4 className="text-3xl font-semibold mb-4">Our Foreign Bank Details</h4>
              <p className="text-gray-700 text-2xl">
                Bank:UBA <br />
                Account Number:1020144251<br />
                Account Name: Caleb Asuquo<br />
              </p>
            </div>
          </div>

          {/* Donation Form UI */}
          <div className="bg-white p-10 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-black mb-8 text-center">Make a Donation</h3>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {presetAmounts.map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setAmount(val)}
                  className={`py-4 rounded-lg font-medium transition ${
                    amount === val
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  ₦{Number(val).toLocaleString()}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setAmount('other')}
                className={`py-4 rounded-lg font-medium transition ${
                  amount === 'other'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                Other
              </button>
            </div>

            {amount === 'other' && (
              <div className="mb-8">
                <label className="block text-gray-700 mb-2 font-medium">Custom Amount (₦)</label>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            )}

            <button className="w-full bg-pink-500 hover:bg-pink-600 text-secondary py-5 rounded-lg text-xl font-bold transition">
              Donate ₦{amount !== 'other' ? Number(amount).toLocaleString() : customAmount || '___'}
            </button>

            <p className="text-center text-sm text-gray-500 mt-6">
              Secure donation • Tax deductible where applicable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}