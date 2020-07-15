import React, { useRef } from 'react';
import Head from 'next/head';
import useSWR from 'swr';

export default props => {
  const userNameRef = useRef();
  const passwordRef = useRef();

  useSWR(``, url => fetch(url).then(data => data.json()));

  const onSubmit = e => {
    e.preventDefault();
    const username = userNameRef.current.value;
    const password = passwordRef.current.value;

    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(data => data.json())
      .then(data => {
        alert(data.token);
      })
      .catch(err => {
        alert(err);
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
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};
