import { users } from "./users";
import User from "./User";

const DisplayUser = () => {
  return (
    <div>
      {users.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </div>
  );
};
export default DisplayUser;
