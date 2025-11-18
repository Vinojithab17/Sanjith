'use client';

import { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    const doLogout = async () => {
      await axios.get('/api/auth/logout');
      router.push('/login');
    };
    doLogout();
  }, [router]);

  return <p>Logging out...</p>;
}
