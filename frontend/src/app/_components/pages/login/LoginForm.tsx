// "use client"

// import { Button, TextField, Typography } from "@mui/material";
// import React, { useState } from "react";
// import { Controller, useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
// import { Metadata } from "next";

// // metadata => ต้องเป็นคำนี้เท่านั้น
// export const metadata: Metadata = {
//   title: "Login page",
//   description: "Generate by create next app",
// };

// type Props = {};

// type User = {
//   username: string;
//   password: string;
//   type?: string;
// };

// const defaultValues: User = {
//   username: "",
//   password: "",
// };

// const LoginForm = (props: Props) => {
//   let _user: User = {
//     // ตัวแปรแบบ non side effect
//     username: "",
//     password: "",
//   };

//   // ตัวแปรแบบ side effect
//   const [user, setUser] = useState<User>({
//     username: "admin",
//     password: "5555",
//   });

//   const formValidateSchema = Yup.object().shape({
//     username: Yup.string().required("Username is required").trim(),
//     password: Yup.string().required("Password is required").trim(),
//   });

//   // formState ใช้ตรวจสอบ error และ อื่นๆ
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<User>({
//     defaultValues, // ค่าเริ่มต้นจะอ้างอิงจาก User Type
//     resolver: yupResolver(formValidateSchema), //resolver => คือตัวตรวจสอบ validate หรือ ข้อผิดพลาด
//   });

//   return (
//     <>
//       <Typography variant="h3" className="mb-4">
//         Login Page
//       </Typography>
//       <form
//         onSubmit={handleSubmit((value) => {
//           alert(JSON.stringify(value));
//         })}
//       >
//         {/* Username */}
//         <Controller
//           control={control}
//           name="username"
//           render={({ field }) => (
//             <TextField
//               error={Boolean(errors.username?.message)}
//               helperText={errors.username?.message}
//               variant="outlined"
//               label="Username"
//               {...field}
//             />
//           )}
//         />
//         <br />
//         <br />
//         {/* Password */}
//         <Controller
//           control={control}
//           name="password"
//           render={({ field }) => (
//             <TextField
//               error={Boolean(errors.password?.message)}
//               helperText={errors.password?.message}
//               variant="outlined"
//               label="Password"
//               {...field}
//             />
//           )}
//         />
//         <br />

//         <Button type="submit" className="mt-10 w-[200px]" variant="contained">
//           Submit
//         </Button>
//       </form>
//     </>
//   );
// };

// export default LoginForm;

"use client";

import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import * as Icons from "@mui/icons-material/";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "@/store/slices/userSlice";

interface User {
  username: string;
  password: string;
}

export default function LoginForm() {
  const { count } = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch();
  const router = useRouter(); // next hook
  const initialValue: User = { username: "admin", password: "" };
  const formValidateSchema = Yup.object().shape({
    username: Yup.string().required("Username is required").trim(),
    password: Yup.string().required("Password is required").trim(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: initialValue,
    resolver: yupResolver(formValidateSchema),
  });

  const showForm = () => {
    return (
      <form onSubmit={handleSubmit(() => {})}>
        {/* Username */}
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              error={(errors.username?.message ?? "") != ""}
              helperText={errors.username?.message?.toString()}
              variant="outlined"
              margin="normal"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icons.Email />
                  </InputAdornment>
                ),
              }}
              label="Username"
              autoComplete="email"
              autoFocus
            />
          )}
        />

        {/* Password */}
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              error={(errors.password?.message ?? "") != ""}
              helperText={errors.password?.message?.toString()}
              variant="outlined"
              margin="normal"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icons.Password />
                  </InputAdornment>
                ),
              }}
              label="Password"
              autoComplete="password"
              autoFocus
            />
          )}
        />

        <Button
          sx={{ mt: 3 }}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Login ({count})
        </Button>

        <Button
          className="mt-4"
          onClick={() => {
            router.push("/register");
          }}
          type="button"
          fullWidth
          variant="outlined"
        >
          Register
        </Button>

        <Stack direction="row" sx={{ mt:4 }}>
          <Button
            type="button"
            fullWidth
            variant="outlined"
            onClick={() => {
              dispatch(add());
            }}
          >
            +
          </Button>
          ({count})
          <Button
            onClick={() => {
              dispatch(remove());
            }}
            type="button"
            fullWidth
            variant="outlined"
          >
            -
          </Button>
        </Stack>
      </form>
    );
  };

  return (
    <Box className="flex justify-center items-center">
      <Card className="max-w-[345px] mt-[100px]">
        <CardMedia
          sx={{ height: 200 }}
          image="/static/img/next_login.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="h2">
            Login ({reducer.count})
          </Typography> */}
          {showForm()}
        </CardContent>
      </Card>
      <style jsx global>
        {`
          body {
            min-height: 100vh;
            position: relative;
            margin: 0;
            background-size: cover;
            background-image: url("/static/img/bg4.jpg");
            text-align: center;
          }
        `}
      </style>
    </Box>
  );
}
