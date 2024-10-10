"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import axios from "axios";
import { toast } from "sonner";

export function SignupFormDemo() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const promise = axios.post(
      "https://my-app.pictisschool.workers.dev/v1/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    toast.promise(promise, {
      loading: "Submiting...",
      success: (data) => {
        setLoading(false);
        return `Message received`;
      },
      error: (err) => {
        setLoading(false);
        return `Email is required`;
      },
    });
  };

  return (
    <div className="max-w-[600px] rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black sm:w-[80vw] sm:mx-auto mb-20">
      <h2 className="font-bold text-5xl text-neutral-800 dark:text-neutral-200">
        Let&apos;s connect
      </h2>

      <form className="my-8 w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4"></div>
        <LabelInputContainer className="mb-10">
          <Label htmlFor="name" className="text-2xl">
            Your Name
          </Label>
          <Input name="name" id="name" placeholder="Chilli Flex" type="text" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-10">
          <Label htmlFor="email" className="text-2xl">
            Email
          </Label>
          <Input
            id="email"
            placeholder="cristianoronaldo@suiii.com"
            type="email"
            name="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-10">
          <Label htmlFor="message" className="text-2xl">
            Message
          </Label>
          <Textarea
            name="message"
            id="message"
            placeholder="Suiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"
          />
        </LabelInputContainer>

        <button
          className={`bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] mt-8 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          type="submit"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
