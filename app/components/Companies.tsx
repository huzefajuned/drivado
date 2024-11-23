import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Drawer, DrawerTrigger } from "./ui/drawer";
import Details from "./Details";

// Define the type for a single user
type Company = {
  id: string;
  companyName: string;
  avatar: string;
  email: string;
  mobileNumber: string;
  isActive: boolean;
};

const Companies = async () => {
  const res = await fetch(
    "https://673736a9aafa2ef222330e54.mockapi.io/company"
  );
  const data = await res.json();

  return (
    <div className=" flex flex-row flex-wrap justify-center m-auto gap-4 p-2">
      {data.map((company: Company, i: number) => (
        <Drawer key={i * 2}>
          <DrawerTrigger asChild>
            <div
              key={company.id}
              className=" max-w-sm w-full shadow-md rounded-lg flex flex-row justify-between  items-center p-2 hover:text-white hover:bg-gray-200 cursor-pointer
          "
            >
              {/* avatar */}
              <Avatar>
                <AvatarImage src={"https://github.com/shadcn.png"} />
              </Avatar>

              <h2 className="text-lg  text-gray-900 truncate   font-bold  w-full text-end">
                {company.companyName}
              </h2>
            </div>
          </DrawerTrigger>
          {/* single user details... */}
          <Details user={company} />
        </Drawer>
      ))}
    </div>
  );
};

export default Companies;
