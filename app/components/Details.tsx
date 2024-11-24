import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Pencil, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import Form from "./Form";

// / Define the type for a single user
type User = {
  id: string;
  name?: string;
  companyName?: string;
  avatar: string;
  email: string;
  mobileNumber: string;
  isActive: boolean;
  companyId?: number;
};
// Define the props type for the Details component
type DetailsProps = {
  user: User;
};

const Details = ({ user }: DetailsProps) => {
  return (
    <div
      key={user.id}
      className=" shadow-2xl  m-auto  rounded-lg flex flex-col  w-full p-5  cursor-pointer transition-all my-2"
    >
      {/* Avatar and Name Section */}
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src={"https://github.com/shadcn.png"} />
        </Avatar>
        <div>
          <h2 className="text-xl font-medium text-black">
            Name : {user.name || user.companyName}
          </h2>
          <p className="text-lg text-gray-800"> Email : {user.email}</p>
        </div>
      </div>

      {/* Details Section */}
      <div className="space-y-2  mt-5">
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

        {user.companyId && (
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-700">
              Company :
            </span>
            <span className="text-sm font-semibold text-gray-700">
              {user.companyId}
            </span>
          </div>
        )}
      </div>
      {/* Action Buttons */}
      <div className="flex justify-end items-center m-4 space-x-4">
        {/* Edit icon */}

        <Dialog  >
          <DialogTrigger>
            <Pencil className="hover:text-blue-700" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>Edit Your profile!</DialogHeader>
            <Form user={user} />
          </DialogContent>
        </Dialog>

        <Trash2 className="hover:text-red-700" />
      </div>
    </div>
  );
};

export default Details;
