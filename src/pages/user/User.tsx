import Single from "../../components/single/Single";
import { singleUser } from "../../data";
import "./user.scss";

export const User = () => {
  // Fetch Data and send to single component
  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
};
