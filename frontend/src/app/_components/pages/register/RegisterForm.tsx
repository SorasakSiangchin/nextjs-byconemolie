"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  InputAdornment,
  TextField,
} from "@mui/material";
import * as Icons from "@mui/icons-material/";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

interface User {
  username: string;
  password: string;
}

export default function RegisterForm() {
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
          Create
        </Button>

        <Button
          className="mt-4"
          onClick={() => {
            router.push("/login");
          }}
          type="button"
          fullWidth
          variant="outlined"
        >
          Cancel
        </Button>
      </form>
    );
  };

  return (
    <Box className="flex justify-center items-center">
      <Card className="max-w-[345px] mt-[100px]">
        <CardMedia
          sx={{ height: 200 }}
          image="/static/img/next_register.jpg"
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
