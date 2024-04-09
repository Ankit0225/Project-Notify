import React from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const Signup = () => {
  return (
    <div key="1" className="w-full max-w-4xl px-4 py-10 space-y-6">
      <div className="mx-auto space-y-4">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome</h1>
        </div>
        <div className="grid gap-4">
          <div className="hidden space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" type="email" />
          </div>
          <div className="hidden space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <Button className="hidden w-full" type="submit">
            Submit
          </Button>
        </div>
      </div>
      <div className="border-t border-b rounded-md overflow-hidden">
        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" required type="password" />
          </div>
          <Button className="w-full" type="submit">
            Sign up
          </Button>
          <Button className="w-full" variant="outline">
            Sign up with Google
          </Button>
        </div>
        <div className="p-4 text-center text-sm">
          Already have an account?
          <Link className="underline" href="#">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}
