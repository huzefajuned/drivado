import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import Details from "./Details";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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
    <div className=" flex flex-row flex-wrap justify-center m-auto gap-4 p-2 ">
      {data.map((user: User, i: number) => (
        <Dialog key={i * 3}>
          <DialogTrigger>
            <div
              key={user.id}
              className=" max-w-sm w-full shadow-md rounded-lg flex flex-row justify-around  items-center p-4 hover:text-white hover:bg-green-200 cursor-pointer
          "
            >
              {/* avatar */}
              <Avatar key={i}>
                <AvatarImage src={`https://i.pravatar.cc/150?img=${i + 1}`} />
              </Avatar>

              <h2 className="text-lg  text-gray-900 truncate  font-bold w-full text-end">
                {user.name}
              </h2>
            </div>
          </DialogTrigger>
          <DialogContent>
            <Details user={user} />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default Users;
