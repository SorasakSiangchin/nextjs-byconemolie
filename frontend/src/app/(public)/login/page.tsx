

import React from "react";
import { Metadata } from "next";
import LoginForm from "@/app/_components/pages/login/LoginForm";

// metadata => ต้องเป็นคำนี้เท่านั้น
export const metadata: Metadata = {
  title: "Login page",
  description: "Generate by create next app",
};


const LoginPage = () => {
  return <LoginForm/>
};

export default LoginPage;
