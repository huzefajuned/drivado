"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { apiRoutes } from "@/lib/utils";
import React, { useState } from "react";
import toast from "react-hot-toast";

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

type DetailsProps = {
  user: User;
};

const Form = ({ user }: DetailsProps) => {
  const [formData, setFormData] = useState<User>({ ...user });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "isActive" ? e.target.checked : value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      companyId: parseInt(value, 10),
    }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const api = `${process.env.NEXT_PUBLIC_BASE_URL}/${apiRoutes.users}/${
        formData.id || ""
      }`;

      const response = await fetch(api, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Failed to update user: ${response.statusText}`);
      }

      //   const updatedUser = await response.json();

      if (response.ok) {
        toast.success("Details updated!");
      }
    } catch (err: unknown) {
      console.log("err", err);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);

      //delay the window loading!!
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };
  return (
    <div className="p-4 space-y-4">
      <Input
        placeholder="Enter Name "
        value={formData.name || formData.companyName || ""}
        name="name"
        onChange={handleChange}
      />

      <Input
        placeholder="Enter Email"
        value={formData.email}
        name="email"
        onChange={handleChange}
      />
      <Input
        placeholder="Enter Mobile Number"
        value={formData.mobileNumber}
        name="mobileNumber"
        onChange={handleChange}
      />
      <Input
        placeholder="Enter Avatar URL"
        value={formData.avatar}
        name="avatar"
        onChange={handleChange}
      />
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="isActive"
          name="isActive"
          checked={formData.isActive}
          onChange={handleChange}
        />
        <label htmlFor="isActive" className="text-gray-700">
          Is Active
        </label>
      </div>

      {formData.companyId && (
        <div className="p-4 space-y-4 flex flex-row gap-2 items-center ">
          <Input
            placeholder="Enter Company ID"
            value={`Company ID: ${formData.companyId?.toString()}`}
            name="companyId"
            onChange={handleChange}
            disabled
            className="mt-4"
          />

          <Select
            onValueChange={handleSelectChange}
            value={formData.companyId?.toString() || ""}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a Company ID" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 20 }, (_, i) => (
                <SelectItem key={i + 1} value={(i + 1).toString()}>
                  {i + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <button
        onClick={isLoading ? () => {} : handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        disabled={isLoading}
      >
        {isLoading ? "Saving..." : "Save or Update"}
      </button>
    </div>
  );
};

export default Form;
