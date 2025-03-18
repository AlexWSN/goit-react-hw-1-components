import Profile from "./profile/Profile";
import user from './user.json';

export const App = () => {
  console.log(user)
  return (
    <div>
      <Profile/>
    </div>
  );
};
