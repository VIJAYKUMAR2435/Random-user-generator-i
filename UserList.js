import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import userStore from "../stores/userStore";

const UserList = observer(() => {
  useEffect(() => {
    userStore.fetchUsers();
  }, []);

  if (userStore.isLoading) return <p>Loading...</p>;
  if (userStore.error) return <p>{userStore.error}</p>;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {userStore.users.map((user) => (
          <li key={user.login.uuid}>
            {user.name.first} {user.name.last} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default UserList;
