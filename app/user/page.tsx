import React from "react";

export async function getServerSideProps() {
  const res = await fetch("https://673736a9aafa2ef222330e54.mockapi.io/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
}
const Users = ({ users }) => {
  return <div>Users are : {users?.length || 0}</div>;
};

export default Users;
