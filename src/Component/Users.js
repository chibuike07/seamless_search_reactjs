import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { filterSearch, userCollections } from "../Util/usersCollection";
import CustomUser from "./CustomUser";

const Users = () => {
  const [{ query }] = useContext(SearchContext);
  const users =
    userCollections.length > 0 &&
    filterSearch({ users: userCollections, search: query }).map(
      ({ id, name, username, email }, idx) => {
        return (
          <CustomUser
            name={name}
            id={id}
            username={username}
            email={email}
            key={idx}
          />
        );
      }
    );
  return <div>{users}</div>;
};

export default Users;
