import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { createUser } from "@/lib/actions";
import SubmitButton from "./button/SubmitButton";

export default function SignupForm() {
  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your information to create an account
        </p>
      </div>
      <form action={createUser} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            placeholder="Enter your username"
            name="username"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input name="password" id="password" required type="password" />
        </div>
        <div className="space-y-2">
          <Checkbox id="terms" />
          <Label className="ml-2 leading-none" htmlFor="terms">
            Accept terms and conditions
          </Label>
        </div>
        <SubmitButton title="signup" />
      </form>
    </div>
  );
}
