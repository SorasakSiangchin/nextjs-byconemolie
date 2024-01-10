

import React from "react";
import { Metadata } from "next";
import RegisterForm from "@/app/_components/pages/register/RegisterForm";

// metadata => ต้องเป็นคำนี้เท่านั้น
export const metadata: Metadata = {
  title: "Register page",
  description: "Generate by create next app",
};


const RegisterPage = () => {
  return <RegisterForm/>
};

export default RegisterPage;
