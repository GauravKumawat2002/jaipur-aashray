"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import SectionTitle from "./section-title";

interface ContactFormProps {
  heading?: string;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ heading, className }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    location: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      location: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        `mx-auto w-full max-w-3xl rounded-lg border bg-white p-4 shadow-md`,
        className,
      )}
    >
      {heading && (
        <SectionTitle
          title={"Get In Touch"}
          className="mb-4 text-3xl md:text-4xl"
        />
      )}
      <div className="mb-4">
        <Label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full focus:ring-red-200 focus-visible:ring-red-200"
        />
      </div>
      <div className="mb-4">
        <Label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full focus:ring-red-200 focus-visible:ring-red-200"
        />
      </div>
      <div className="mb-4">
        <Label
          htmlFor="contactNumber"
          className="block text-sm font-medium text-gray-700"
        >
          Contact Number
        </Label>
        <Input
          type="text"
          id="contactNumber"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          required
          className="mt-1 block w-full focus:ring-red-200 focus-visible:ring-red-200"
        />
      </div>
      <div className="mb-4">
        <Label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700"
        >
          Location
        </Label>
        <Input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          className="mt-1 block w-full focus:ring-red-200 focus-visible:ring-red-200"
        />
      </div>
      <div className="mb-4">
        <Label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 block w-full focus:ring-red-200 focus-visible:ring-red-200"
        ></Textarea>
      </div>
      <Button
        type="submit"
        className="w-full bg-red-700 text-lg font-semibold hover:bg-red-800 focus:ring-red-700"
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
