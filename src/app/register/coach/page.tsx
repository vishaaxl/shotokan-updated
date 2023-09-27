"use client";

import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import { CgLogIn } from "react-icons/cg";

interface CoachRegistrationProps {}

export default function CoachRegistration({}: CoachRegistrationProps) {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-16 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-6/12 w-full p-6 sm:pb-12">
          <div className="flex flex-col items-center">
            <div className="w-full grid gap-3">
              <Image src="/images/logo.png" height={175} width={175} alt="" />
              <h2 className="text-3xl font-bold ">
                <span className="text-blue-700">Coach / Referee </span>
                Registration
              </h2>
              <p className="text-slate-600 text-sm">
                Fill all the details accurately, Administrator has the right to
                reject the registration if details are found wrong or
                not-relatable.
              </p>
            </div>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-[100%] grid md:grid-cols-2 gap-4">
                <input
                  className="w-full px-6 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="First Name"
                />
                <input
                  className="w-full px-6 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Last Name"
                />
                <div className="col-span-2">
                  <select
                    className="w-full px-6 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    placeholder="Select Designation"
                  >
                    <option value="">Chief Instructor</option>
                    <option value="">Instructor</option>
                    <option value="">Assistant Instructor</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <input
                    className="w-full px-6 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="col-span-2">
                  <input
                    className="w-full px-6 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Phone Number"
                  />
                </div>
                <input
                  className="w-full px-6 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Password"
                />
                <input
                  className="w-full px-6 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Confirm Password"
                />
              </div>

              <button
                onClick={() => router.push("/complete-registration/coach")}
                className="mt-5 tracking-wide font-semibold bg-blue-700 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                <CgLogIn className="text-2xl" />
                <span className="ml-3">Complete Registration</span>
              </button>
              <div className="mt-5">
                Already registered on portal?{" "}
                <span className="text-blue-700 hover:underline cursor-pointer">
                  Log in
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            // style="background-image: url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg');"
          ></div>
        </div>
      </div>
    </main>
  );
}
