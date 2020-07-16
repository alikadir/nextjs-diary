import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { getUser, login } from '../operations/userOperation';
import { useRouter } from 'next/router';

export default props => {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const redirect = () => {
    router.push(props.url?.query?.path || '/');
  };

  useEffect(() => {
    if (getUser()) {
      redirect();
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    const username = userNameRef.current.value;
    const password = passwordRef.current.value;
    setLoading(true);
    login(username, password)
      .then(() => {
        redirect();
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div>
        <form onSubmit={onSubmit}>
          <input ref={userNameRef} type="text" placeholder="User Name" />
          <br />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <br />
          <button type="submit" disabled={loading}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};
