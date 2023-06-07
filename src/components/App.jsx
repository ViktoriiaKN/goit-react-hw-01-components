import { Profile } from "./Profile/Profile";
import user from "../data/user.json";
import { Statistics } from "./Statistics/Statistics";

export const App = () => {
  return (
    <div>
      <Profile avatar={user.avatar} location={user.location}
        tag={user.tag} stats={user.stats} username={user.username} />
      <Statistics />
    </div>
  );
};
