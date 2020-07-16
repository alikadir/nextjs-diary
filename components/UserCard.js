import { getUser, logout } from '../operations/userOperation';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default props => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setUser(getUser());
  }, []);
  return (
    user && (
      <p>
        Welcome: {user.username}{' '}
        <button
          onClick={() => {
            logout();
            router.reload();
          }}>
          logout
        </button>
      </p>
    )
  );
};
