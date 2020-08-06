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

      <form onSubmit={onSubmit}>
        <div>
          <label>Kullanıcı</label>
          <input ref={userNameRef} type="text" />

          <label>Şifre</label>
          <input ref={passwordRef} type="password" />

          <button type="submit" disabled={loading}>
            <img src="/xp-icons/212.ico"  alt=""/> Giriş
          </button>
        </div>
      </form>

      <style jsx>{`
        form {
          background-image: url(/images/diary_login.png);
          width: 367px;
          height: 184px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin-top: -75px;
        }
        button {
          background-color: #d3d3d3;
          margin-top: 5px;
          display: inline-flex;
          align-items: center;
          border-width: 2px;
          border-color: #8abdc0;
        }
        img {
          margin: -3px;
          width: 36px;
        }
        label,
        input {
          display: block;
          font-family: verdana, sans-serif;
          margin-bottom: 3px;
          outline: none;
          height: 19px;
        }
      `}</style>
      <style jsx global>
        {`
          body {
            background-color: black;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </>
  );
};
