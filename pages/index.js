import Head from 'next/head';
import UserCard from '../components/UserCard';
import AuthHOC from '../components/AuthHOC';

export default props => {
  return (
    <div className="container">
      <Head>
        <title>Diary</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <textarea>Sevgili Günlük ;</textarea>
      </main>

      <style jsx>{`
        main {
          background-image: url('/images/diary.jpg');
          width: 1024px;
          height: 768px;
          margin-left: auto;
          margin-right: auto;
        }
        textarea {
          margin-top: 326px;
          margin-left: 117px;
          width: 632px;
          height: 357px;
          border-color: #0000;
          background-color: #0000;
          resize: none;
          font-family: 'Comic Sans MS', cursive, sans-serif;
          font-size: 20px;
          font-weight: bold;
          padding-left: 10px;
          outline: none;
        }
      `}</style>

      <style jsx global>{`
        body {
          background-color: black;
          margin: 0;
          padding: 0;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};
