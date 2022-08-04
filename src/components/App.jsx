import { Profile } from "components/Profile";
import data from "components/user.json"

export const App = () => {
  return (
    <Profile key={data.username} profile= {data} />
  );
};
