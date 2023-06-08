import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      {/* <Profile
        avatar={user.avatar}
        location={user.location}
        tag={user.tag}
        stats={user.stats}
        username={user.username}
      /> */}
      {/* <Statistics title={'Upload stats'} stats={data} /> */}
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />
      {/* <TransactionHistory items={transactions} /> */}
    </div>
  );
};
