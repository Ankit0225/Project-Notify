
import React from "react";
// import { Link } from "next/link";
import { BackgroundBeams } from "./UI/beams.jsx";
import { Users } from "./user/users.jsx";
import { SignUp } from "../components/component/signup.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BackgroundBeams/>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="flex flex-col items-center justify-between">
        <h1 className="font-bold text-5xl mb-8">Notify</h1>
        <p className="text-xl">
          Notify is a simple notification system that allows you to send
          notifications to your users.
        </p>
        <Users/>  
      </div>
        {/* <SignUp/> */}
      </div>
    </main>
  );
}
