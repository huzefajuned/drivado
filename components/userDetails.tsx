import React from "react";
import { DrawerContent } from "./ui/drawer";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Pencil, Trash2 } from "lucide-react";

// / Define the type for a single user
type User = {
  id: string;
  name?: string;
  companyName?: string;
  avatar: string;
  email: string;
  mobileNumber: string;
  isActive: boolean;
};
// Define the props type for the Details component
type DetailsProps = {
  user: User;
};

const Details = ({ user }: DetailsProps) => {
  return (
    <DrawerContent className=" h-1/2">
      <div
        key={user.id}
        className=" shadow-2xl w-11/12 m-auto  rounded-lg flex flex-col space-y-4 p-4 hover:text-white hover:bg-black cursor-pointer transition-all"
      >
        {/* Avatar and Name Section */}
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={"https://github.com/shadcn.png"} />
          </Avatar>
          <div>
            <h2 className="text-lg font-medium text-gray-800">{user.name || user.companyName}</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
        </div>

        {/* Details Section */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-700">
              Mobile Number:
            </span>
            <span className="text-sm text-gray-600">{user.mobileNumber}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-700">Status:</span>
            <span
              className={`text-sm font-medium ${
                user.isActive ? "text-green-600" : "text-red-600"
              }`}
            >
              {user.isActive ? "Active" : "Inactive"}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end items-center space-x-2">
          {/* Edit icon */}

          <Pencil />
          {/* Delete Button */}
          <Trash2 />
        </div>
      </div>
    </DrawerContent>
  );
};

export default Details;
