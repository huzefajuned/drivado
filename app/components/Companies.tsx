import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import Details from "./Details";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { apiRoutes } from "@/lib/utils";
import { Company } from "../_types/typsx";

const Companies = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${apiRoutes.companies}`
  );
  const data = await res.json();

  return (
    <div className=" flex flex-row flex-wrap justify-center m-auto gap-4 p-2 ">
      {data.map((user: Company, i: number) => (
        <Dialog key={i * 2}>
          <DialogTrigger>
            <div
              key={user.id}
              className=" max-w-sm w-full shadow-md rounded-lg flex flex-row justify-around  items-center p-4 hover:text-white hover:bg-green-200 cursor-pointer
          "
            >
              {/* avatar */}
              <Avatar key={i}>
                <AvatarImage src={`https://i.pravatar.cc/150?img=${i + 2}`} />
              </Avatar>

              <h2 className="text-lg  text-gray-900 truncate  font-bold w-full text-end">
                {user.companyName}
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

export default Companies;
