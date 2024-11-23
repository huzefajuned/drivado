import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Drawer, DrawerTrigger } from "./ui/drawer";
import Details from "./Details";

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
      {data.map((user: User, i: number) => (
        <Drawer key={i * 2}>
          <DrawerTrigger asChild>
            <div
              key={user.id}
              className=" max-w-sm w-full shadow-md rounded-lg flex flex-row justify-around  items-center p-2 hover:text-white hover:bg-gray-200 cursor-pointer
          "
            >
              {/* avatar */}
              <Avatar>
                <AvatarImage src={"https://github.com/shadcn.png"} />
              </Avatar>

              <h2 className="text-lg  text-gray-900 truncate  font-bold w-full text-end">
                {user.name}
              </h2>
            </div>
          </DrawerTrigger>
          {/* single user details... */}
          <Details user={user} />
        </Drawer>
      ))}
    </div>
  );
};

export default Users;
