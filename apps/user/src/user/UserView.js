import { useQuery } from 'react-query';
import { fetchUser } from './userService';
import classNames from 'classnames';
import './UserView.css';

function UserView({ className }) {
  const query = useQuery('user', fetchUser);

  const { data: user, isLoading } = query;

  if (isLoading) return <p>Loading...</p>

  return (
    <section className={classNames('user__wrapper', className)}>
      <img src="http://localhost:7001/api/user/profile-image" alt="" />
      <h4 className="user__title">{user.name}</h4>
      <p className="user__email">{user.email}</p>
    </section>
  );
}

export default UserView;
