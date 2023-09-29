"use client";

import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import { CgLogIn } from "react-icons/cg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { updateCoachInformation } from "../../../../redux/features/coach.slice";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  designation: Yup.string().required("Designation is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export default function CoachRegistration() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const coachState = useAppSelector((state) => state.coachReducer);

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

            <Formik
              initialValues={{
                firstName: coachState.firstName || "",
                lastName: coachState.lastName || "",
                designation: coachState.designation || "",
                email: coachState.email || "",
                phoneNumber: coachState.phoneNumber || "",
                password: coachState.password || "",
                confirmPassword: coachState.confirmPassword || "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                const { confirmPassword, ...rest } = values;
                dispatch(updateCoachInformation(rest));
                router.push("/complete-registration/coach");
              }}
            >
              {() => (
                <Form className="w-full flex-1 mt-8 mx-auto max-w-[100%] grid md:grid-cols-2 gap-4">
                  <div>
                    <Field
                      name="firstName"
                      placeholder="First Name"
                      className="w-full px-6 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="span"
                      className="text-red-500 text-sm mt-2 block"
                    />
                  </div>

                  <div>
                    <Field
                      name="lastName"
                      placeholder="Last Name"
                      className="w-full px-6 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="span"
                      className="text-red-500 text-sm mt-2 block"
                    />
                  </div>

                  <div className="col-span-2">
                    <Field
                      as="select"
                      name="designation"
                      className="w-full px-6 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    >
                      <option value="" label="Select Designation"></option>
                      <option
                        value="Chief Instructor"
                        label="Chief Instructor"
                      ></option>
                      <option value="Instructor" label="Instructor"></option>
                      <option
                        value="Assistant Instructor"
                        label="Assistant Instructor"
                      ></option>
                    </Field>
                    <ErrorMessage
                      name="designation"
                      component="span"
                      className="text-red-500 text-sm mt-2 block"
                    />
                  </div>

                  <div className="col-span-2">
                    <Field
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="w-full px-6 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="text-red-500 text-sm mt-2 block"
                    />
                  </div>

                  <div className="col-span-2">
                    <Field
                      name="phoneNumber"
                      placeholder="Phone Number"
                      className="w-full px-6 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="span"
                      className="text-red-500 text-sm mt-2 block"
                    />
                  </div>

                  <div>
                    <Field
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="w-full px-6 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    />
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="text-red-500 text-sm mt-2 block"
                    />
                  </div>

                  <div>
                    <Field
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      className="w-full px-6 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="span"
                      className="text-red-500 text-sm mt-2 block"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-blue-700 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none col-span-2"
                  >
                    <CgLogIn className="text-2xl" />
                    <span className="ml-3">Complete Registration</span>
                  </button>
                </Form>
              )}
            </Formik>

            <div className="mt-5">
              Already registered on portal?{" "}
              <Link
                href="/"
                className="text-blue-700 hover:underline cursor-pointer"
              >
                Log in
              </Link>
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
