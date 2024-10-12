"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import toast from "react-hot-toast";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loader, setLoader] = useState(false);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("please fill all the fields");
      return;
    }
    try {
      let name = formData.name;
      let email = formData.email;
      let message = formData.message;
      setLoader(true);
      const res = await axios.post("contact/api", { name, email, message });
      if (res.data.status) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log("---------------------------------");
      console.log(error);
      console.log("---------------------------------");
      toast.error("Something went wrong plz try again");
    } finally {
      setLoader(false);
    }
  };

  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
      {/* input */}
      <div className="relative flex items-center">
        <Input
          type="text"
          id="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <User className="absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Textarea
          id="message"
          placeholder="Write a message..."
          value={formData.message}
          onChange={handleChange}
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button
        type="submit"
        disabled={loader}
        className={`flex items-center max-w-[166px] ${loader && "opacity-50"}`}
      >
        Let&apos;s Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
