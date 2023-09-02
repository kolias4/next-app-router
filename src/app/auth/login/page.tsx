"use client";
import { handleLogin } from "@/lib/clientApi/userApi";
import { LoginSchema } from "@/lib/validators";
import { useRouter } from "next/navigation";

// import TextInput from "@/components/inputs/TextInput";
import { Button, TextInput, Label } from "flowbite-react";
import { useFormik } from "formik";
import React from "react";

const LoginPage = () => {
  const { push } = useRouter();
  const loginForm = useFormik({
    initialValues: {
      username: "atuny0",
      password: "9uQFF1Lh",
    },
    validationSchema: LoginSchema,
    onSubmit: (values, { setSubmitting }) => {
      handleLogin(values.username, values.password).then((res) => {
        setSubmitting(false);
        push("/");
      });
    },
  });
  return (
    <section className="bg-secondary-light ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Flowbite
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              onSubmit={loginForm.handleSubmit}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="username" value="Username" />
                </div>

                <TextInput
                  color={
                    loginForm.touched.username && loginForm.errors.username
                      ? "failure"
                      : undefined
                  }
                  helperText={
                    loginForm.touched.username && loginForm.errors.username
                      ? loginForm.errors.username
                      : undefined
                  }
                  id="username"
                  type="text"
                  name="username"
                  value={loginForm.values.username}
                  onChange={loginForm.handleChange}
                  onBlur={loginForm.handleBlur}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Password" />
                </div>
                <TextInput
                  color={
                    loginForm.touched.password && loginForm.errors.password
                      ? "failure"
                      : undefined
                  }
                  helperText={
                    loginForm.touched.password && loginForm.errors.password
                      ? loginForm.errors.password
                      : undefined
                  }
                  id="password"
                  type="password"
                  name="password"
                  value={loginForm.values.password}
                  onChange={loginForm.handleChange}
                  onBlur={loginForm.handleBlur}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <Button
                isProcessing={loginForm.isSubmitting}
                disabled={loginForm.isSubmitting}
                className="w-full"
                size="lg"
                type="submit"
              >
                Sign in
              </Button>
              {/* <button
                type="submit"
                className="w-full text-white bg-primary-main hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button> */}
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
