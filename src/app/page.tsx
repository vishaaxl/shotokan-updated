"use client";

import Image from "next/image";
import { useRouter } from "next-nprogress-bar";
import { CgLogIn } from "react-icons/cg";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ImageWithForeground from "@/components/common/ImageWithForeground";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-16 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:pb-12 w-full">
          <div className="flex flex-col items-center">
            <Image src="/images/logo.png" height={175} width={175} alt="" />
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-md">
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                >
                  {() => {
                    return (
                      <Form>
                        <div>
                          <Field
                            name="email"
                            className="w-full px-6 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="email"
                            placeholder="Email"
                          />
                          <ErrorMessage
                            name="email"
                            component="span"
                            className="text-red-500 text-sm mt-2"
                          />
                        </div>

                        <div className="mt-5">
                          <Field
                            name="password"
                            className="w-full px-6 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="password"
                            placeholder="Password"
                          />
                          <ErrorMessage
                            name="password"
                            component="span"
                            className="text-red-500 text-sm mt-2"
                          />
                        </div>

                        <button
                          type="submit"
                          className="mt-5 tracking-wide font-semibold bg-blue-700 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                        >
                          <CgLogIn className="text-2xl" />
                          <span className="ml-3">Log In</span>
                        </button>

                        <div className="my-12 border-b text-center">
                          <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                            Or register as new user
                          </div>
                        </div>

                        <div className="flex flex-col items-center">
                          <button
                            type="button"
                            onClick={() => router.push("/register/student")}
                            className="w-full max-w-md font-semibold shadow-sm rounded-lg py-4 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                          >
                            <span className="ml-4">Register as Student</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => router.push("/register/coach")}
                            className="w-full max-w-md font-semibold shadow-sm rounded-lg py-4 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5"
                          >
                            <span className="ml-4">
                              Register as Coach / Referee
                            </span>
                          </button>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>

                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by portal's{" "}
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Terms of Service
                  </a>{" "}
                  and its{" "}
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <ImageWithForeground />
        </div>
      </div>
    </main>
  );
}
