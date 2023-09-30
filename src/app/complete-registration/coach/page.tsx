"use client";

import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import { CgLogIn } from "react-icons/cg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { updateCoachInformation } from "../../../../redux/features/coach.slice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { signupUser } from "../../../../utils/user/saveToDb";
import toast from "react-hot-toast";
import ImageWithForeground from "@/components/common/ImageWithForeground";

interface CoachCompleteRegistrationProps {}

export default function CoachCompleteRegistration({}: CoachCompleteRegistrationProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const coachState = useAppSelector((state) => state.coachReducer);

  const initialValues = {
    belt: coachState.belt || "",
    dob: coachState.dob || "",
    coachName: coachState.coachName || "",
    address: coachState.address || "",
    state: coachState.state || "",
    city: coachState.city || "",
    pincode: coachState.pincode || "",
    photoId: coachState.photoId || "",
    agreeTerms: coachState.agreeTerms || false,
  };

  const validationSchema = Yup.object({
    belt: Yup.string().required("Belt is required"),
    dob: Yup.string().required("Date of Birth is required"),
    coachName: Yup.string().required("Coach Name is required"),
    address: Yup.string().required("Address is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
    pincode: Yup.string().required("Pin-code is required"),
    photoId: Yup.mixed().required("Photo ID is required"),
    agreeTerms: Yup.boolean().oneOf([true], "Agreement to terms is required"),
  });

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
              <p className="text-slate-600 text-sm pb-4">
                Fill all the details accurately, Administrator has the right to
                reject the registration if details are found wrong or
                not-relatable.
              </p>
            </div>
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (values, { setSubmitting }) => {
                // setSubmitting(true);
                dispatch(updateCoachInformation(values));

                const response = await fetch("/api/payment");
                const { data } = await response.json();

                if (response.status !== 200) {
                  toast(response.statusText);
                  return;
                }

                router.push(data.data.instrumentResponse.redirectInfo.url);

                // const { email, password, ...additionalDetails } = coachState;
                // await signupUser(email, password, {
                //   ...additionalDetails,
                //   email,
                //   user: "coach",
                // })
                //   .then((message) => {
                //     toast.success(message);
                //   })
                //   .catch(({ message }) => {
                //     toast.error(message.replace("Firebase:", ""));
                //   })
                //   .finally(() => {
                //     setSubmitting(false);
                //   });
              }}
            >
              {({ setFieldValue, isSubmitting }) => (
                <Form className="w-full">
                  <div className="mx-auto max-w-[100%] grid md:grid-cols-2 gap-4">
                    <div>
                      <Field
                        as="select"
                        name="belt"
                        className="w-full px-6 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      >
                        <option value="" label="Select Belt" />
                        <option value="White">White</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Orange">Orange</option>
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                        <option value="Purple 1">Purple 1</option>
                        <option value="Purple 2">Purple 2</option>
                        <option value="Brown 1">Brown 1</option>
                        <option value="Brown 2">Brown 2</option>
                        <option value="Brown 3">Brown 3</option>
                        <option value="Black 1st Dan">Black 1st Dan</option>
                        <option value="Black 2nd Dan">Black 2nd Dan</option>
                        <option value="Black 3rd Dan">Black 3rd Dan</option>
                        <option value="Black 4th Dan">Black 4th Dan</option>
                        <option value="Black 5th Dan">Black 5th Dan</option>
                        <option value="Black 6th Dan">Black 6th Dan</option>
                        <option value="Black 7th Dan">Black 7th Dan</option>
                      </Field>
                      <ErrorMessage
                        name="belt"
                        component="span"
                        className="text-red-500 text-sm mt-2"
                      />
                    </div>
                    <div>
                      <Field
                        name="dob"
                        type="date"
                        className="w-full px-6 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        placeholder="Date of Birth"
                      />
                      <ErrorMessage
                        name="dob"
                        component="span"
                        className="text-red-500 text-sm mt-2"
                      />
                    </div>
                    <div className="col-span-2">
                      <Field
                        name="coachName"
                        type="text"
                        className="w-full px-6 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        placeholder="Coach Name"
                      />
                      <ErrorMessage
                        name="coachName"
                        component="span"
                        className="text-red-500 text-sm mt-2"
                      />
                    </div>
                    <div className="col-span-2">
                      <Field
                        name="address"
                        type="text"
                        className="w-full px-6 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        placeholder="Complete Address (House no, Locality, street)"
                      />
                      <ErrorMessage
                        name="address"
                        component="span"
                        className="text-red-500 text-sm mt-2"
                      />
                    </div>
                    <div>
                      <Field
                        name="state"
                        type="text"
                        className="w-full px-6 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        placeholder="State"
                      />
                      <ErrorMessage
                        name="state"
                        component="span"
                        className="text-red-500 text-sm mt-2"
                      />
                    </div>
                    <div>
                      <Field
                        name="city"
                        type="text"
                        className="w-full px-6 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        placeholder="City"
                      />
                      <ErrorMessage
                        name="city"
                        component="span"
                        className="text-red-500 text-sm mt-2"
                      />
                    </div>
                    <div className="col-span-2">
                      <Field
                        name="pincode"
                        type="text"
                        className="w-full px-6 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        placeholder="Area Pin-code"
                      />
                      <ErrorMessage
                        name="pincode"
                        component="span"
                        className="text-red-500 text-sm mt-2"
                      />
                    </div>
                    <div className="col-span-2">
                      <Field
                        value={undefined}
                        name="photoId"
                        type="file"
                        className="w-full px-6 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        placeholder="Upload Photo Id"
                        accept="image/png, image/jpeg, image/jpg, image/gif"
                        onChange={(e: any) => {
                          setFieldValue("photoId", e.target.files[0]);
                        }}
                      />
                      <ErrorMessage
                        name="photoId"
                        component="span"
                        className="text-red-500 text-sm mt-2"
                      />
                    </div>
                    <div className="grid col-span-2">
                      <div className="mt-4 col-span-2 flex items-center gap-2">
                        <Field type="checkbox" name="agreeTerms" />
                        <div>
                          I agree to all the{" "}
                          <span className="text-blue-700 hover:underline cursor-pointer">
                            terms and conditions
                          </span>{" "}
                          &{" "}
                          <span className="text-blue-700 hover:underline cursor-pointer">
                            privacy policy
                          </span>
                        </div>
                      </div>
                      <ErrorMessage
                        name="agreeTerms"
                        component="span"
                        className="text-red-500 text-sm mt-2"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="disabled:opacity-30 mt-5 tracking-wide font-semibold bg-blue-700 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <CgLogIn className="text-2xl" />
                    <span className="ml-3">
                      {isSubmitting ? "Please wait" : "Continue With Payment"}
                    </span>
                  </button>
                  <div className="mt-5">
                    Already registered on portal?{" "}
                    <Link
                      href="/"
                      className="text-blue-700 hover:underline cursor-pointer"
                    >
                      Log in
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <ImageWithForeground />
        </div>
      </div>
    </main>
  );
}
