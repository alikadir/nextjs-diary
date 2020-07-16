import AuthHOC from '../../components/AuthHOC';
import UserCard from '../../components/UserCard';

export default AuthHOC(props => {
  return (
    <div>
      <UserCard />
      <p>{props?.url?.query?.username}</p>
    </div>
  );
});
