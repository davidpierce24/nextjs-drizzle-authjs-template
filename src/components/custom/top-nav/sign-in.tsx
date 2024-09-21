import React from "react";
import { signIn } from "@/server/auth/auth";
import { Button } from "../../ui/button";
import { IconBrandGithub } from "@tabler/icons-react";

export enum Providers {
  GITHUB = "github",
  GOOGLE = "google",
  DISCORD = "discord",
}

type SignInProps = {
  provider: Providers;
};

const SignIn : React.FC<SignInProps> = ({provider}) => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <Button className="w-fit bg-emerald-500" type="submit"><IconBrandGithub className="w-6 h-6" /> Sign in with {provider}</Button>
    </form>
  );
}

export default SignIn;
