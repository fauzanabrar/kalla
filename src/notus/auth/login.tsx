import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// layout for page
import Auth from "../../layouts/Auth";

import { LoginTypes } from "../../services/data-types";
import {
  authenticate,
  isAuth,
  sendGoogleToken,
  setLogin,
} from "../../services/auth";

export default function Login() {
  const [focusedEmail, setFocusedEmail] = React.useState(true);
  const [focusedPassword, setFocusedPassword] = React.useState(false);

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const inputReference = useRef<HTMLInputElement>(null);

  const onSubmit = async () => {
    const data: LoginTypes = {
      email,
      password,
    };

    if (!email || !password) {
      // console.log('Error');
      toast.error("Email and Password are required !!!");
    } else {
      const response = await setLogin(data);
      if (response.error) {
        toast.error(response.message);
      } else {
        toast.success("Login Success !!!");
        // localStorage.setItem('user-form', JSON.stringify({name: }));
        console.log(response.data);
        const { accessToken, refreshToken } = response?.data;
        // console.log('response', response);
        // console.log('response.data', response.data);
        // console.log('response.data.data', response.data.data);
        // console.log('token', token);
        // const tokenBase64 = btoa(token);
        const tokenBase64 = Buffer.from(accessToken).toString("base64");
        // console.log('tokenBase64', tokenBase64);
        Cookies.set("token", tokenBase64);
        console.log("token", tokenBase64);
        const jwtBase64 = Buffer.from(refreshToken).toString("base64");
        Cookies.set("jwt", jwtBase64);
        console.log("jwt", jwtBase64);
        router.push("/admin/dashboard");
      }
    }
  };

  const informParent = (response: any) => {
    authenticate(response, () => {
      if (isAuth() && isAuth().role === "admin") {
        router.push("/dashboard");
      } else {
        router.push("/simulator");
      }
    });
  };

  const responseGoogle = async (response: any) => {
    console.log("GOOGLE CLIENT ID", process.env.NEXT_PUBLIC_GOOGLE_CLIENT);
    console.log("responseGoogle", response);
    const res = await sendGoogleToken(response.tokenId);
    informParent(res);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      console.log("enter press here! ");
      onSubmit();
    }
  };

  useEffect(() => {
    if (inputReference.current) {
      inputReference.current.focus();
    }
  }, []);

  return (
    <Auth>
      <div className="container mx-auto h-full px-4">
        <div className="flex h-full content-center items-center justify-center">
          <div className="w-full px-4 lg:w-4/12">
            <div className="bg-blueGray-200 relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 shadow-lg">
              <div className="mb-0 rounded-t px-6 py-6">
                <div className="mb-3 text-center">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign in with
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button
                    className="active:bg-blueGray-50 text-blueGray-700 mr-2 mb-1 inline-flex items-center rounded bg-white px-4 py-2 text-xs font-bold uppercase shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none"
                    type="button"
                  >
                    <Image
                      alt="..."
                      className="mr-1 w-5"
                      src="/img/github.svg"
                      width={20}
                      height={20}
                    />
                    Github
                  </button>
                  <button
                    className="active:bg-blueGray-50 text-blueGray-700 mr-1 mb-1 inline-flex items-center rounded bg-white px-4 py-2 text-xs font-bold uppercase shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none"
                    type="button"
                  >
                    <Image
                      alt="..."
                      className="mr-1 w-5"
                      src="/img/google.svg"
                      width={20}
                      height={20}
                    />
                    Google
                  </button>
                </div>
                <hr className="border-b-1 border-blueGray-300 mt-6" />
              </div>
              <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
                <div className="text-blueGray-400 mb-3 text-center font-bold">
                  <small>Or sign in with credentials</small>
                </div>
                <form>
                  <div className="relative mb-3 w-full">
                    <label
                      className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                      placeholder="Email"
                      ref={inputReference}
                      value={email}
                      onChange={(event) => setemail(event.target.value)}
                      onFocus={() => setFocusedEmail(true)}
                      onBlur={() => setFocusedEmail(true)}
                    />
                  </div>

                  <div className="relative mb-3 w-full">
                    <label
                      className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                      placeholder="Password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      onFocus={() => setFocusedPassword(true)}
                      onBlur={() => setFocusedPassword(true)}
                    />
                  </div>
                  <div>
                    <label className="inline-flex cursor-pointer items-center">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox text-blueGray-700 ml-1 h-5 w-5 rounded border-0 transition-all duration-150 ease-linear"
                      />
                      <span className="text-blueGray-600 ml-2 text-sm font-semibold">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="mt-6 text-center">
                    <button
                      className="bg-blueGray-800 active:bg-blueGray-600 mr-1 mb-1 w-full rounded px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
                      type="button"
                      onClick={(e) => {
                        console.log("Sign in lagi ");
                        // toast.success('Login Process !!!');
                        onSubmit();
                      }}
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="relative mt-6 flex flex-wrap">
              <div className="w-1/2">
                <Link href="/auth/forgot" className="text-blueGray-200">
                  <small>Forgot password?</small>
                </Link>
              </div>
              <div className="w-1/2 text-right">
                <Link href="/auth/register" className="text-blueGray-200">
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Auth>
  );
}
