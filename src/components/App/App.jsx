import Profile from '../Profile/Profile.jsx';
import userData from '../../data/userData.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';
import FriendList from '../FriendList/FriendList.jsx';
import styles from './App.module.css';
import TransactionHistory from '../TransactionHistory/TransactionHistory.jsx';

function App() {
  return (
    <div className={styles.appContainer}>
      <Profile {...userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
