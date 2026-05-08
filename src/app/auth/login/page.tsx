import { Metadata } from "next";

import LoginForm from "@/src/features/auth/components/login-form";

export const metadata: Metadata = {
  title: "LOGIN"
};

export default function Page() {
  return (
    <div className="grid h-screen place-items-center">
      <LoginForm />
    </div>
  );
}
