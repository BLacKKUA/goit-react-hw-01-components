import { Profile } from "components/Profile/Profile";
import { Statics } from "components/Statics/Statics"
import { FriendList } from "./FriendList/FriendList";
import { Transactions } from "./Transaction/Transaction";
import data from "components/Profile/user.json"
import staticsData from "components/Statics/data.json"
import dataFriends from "components/FriendList/friends.json"
import transactionData from "./Transaction/transactions.json"

export const App = () => {
  return (
    <>
    <Profile profile={data} />
      <Statics title="Upload stats" staticsData={staticsData} />
      <FriendList friendsData={dataFriends} />
      <Transactions transactionData={transactionData} />
    </>
  );
};
