import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";

// Define the type for a single user
type User = {
  id: string;
  name: string;
  avatar: string;
  email: string;
  mobileNumber: string;
  isActive: boolean;
};

const Users = async () => {
  const res = await fetch("https://673736a9aafa2ef222330e54.mockapi.io/users");
  const data = await res.json();

  return (
    <div className=" flex flex-row flex-wrap justify-center m-auto gap-4 p-2">
      {data.map((user: User) => (
        <div
          key={user.id}
          className="bg-green-500 max-w-sm w-full shadow-md rounded-lg flex flex-row justify-around  items-center p-2 hover:text-white hover:bg-black cursor-pointer
          "
        >
          {/* avatar */}
          <Avatar>
            <AvatarImage src={`https://github.com/shadcn.png` || user.avatar} />
          </Avatar>

          <h2 className="text-lg font-medium text-gray-800">{user.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Users;
