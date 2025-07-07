'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement signup
    alert('Account creation (to be implemented)');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-8">Create your account</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full rounded-xl border px-4 py-2"
            required
          />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full rounded-xl border px-4 py-2"
            required
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-xl border px-4 py-2"
            required
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 text-white py-2 font-bold hover:bg-blue-700 transition"
          >
            Create Account
          </button>
        </form>
        <div className="flex justify-between mt-4 text-sm">
          <button
            className="text-blue-600 hover:underline"
            onClick={() => router.push('/login')}
          >
            Already have an account?
          </button>
        </div>
      </div>
    </div>
  );
}
