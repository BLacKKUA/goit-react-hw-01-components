import { Profile } from "components/Profile/Profile";
import { Statics } from "components/Statics/Statics"
import data from "components/Profile/user.json"
import staticsData from "components/Statics/data.json"

export const App = () => {
  return (
    <>
    <Profile key={data.username} profile={data} />
    <Statics title="Upload stats" staticsData={staticsData} />
    </>
  );
};
