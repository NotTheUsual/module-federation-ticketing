import { useQuery } from 'react-query';
import { fetchUser } from './userService';
import './UserView.css';

function UserView() {
  const query = useQuery('user', fetchUser);

  const { data: user, isLoading } = query;

  if (isLoading) return <p>Loading...</p>

  return (
    <section className="user__wrapper">
      <h4 className="user-title">{user.name}</h4>
      <p>{user.email}</p>
    </section>
  );
}

export default UserView;
