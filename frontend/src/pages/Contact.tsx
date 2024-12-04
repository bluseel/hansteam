// src/ContactForm.tsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInputs {
  name: string;
  email: string;
  phone: string;
  query: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Only numbers are allowed")
    .required("Phone number is required"),
  query: yup.string().required("Question or Query is required"),
});

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    // handle form submission
  };

  const labelStyling = "max-[600px]:text-xl block text-2xl font-medium";
  const inputStyling =
    "text-xl mt-1 block w-full px-3 py-2 bg-gray-50 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500";

  return (
    <div className="bg-primary-blue pt-24 text-2xl font-normal text-neutral-white max-[600px]:text-xl">
      <div className="container mx-auto p-4 max-[600px]:text-lg max-[600px]:leading-tight">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="p-4">
            <h2 className="mb-4 text-5xl font-bold text-primary-yellow max-[600px]:text-3xl">
              Lets have a Talk
            </h2>
            <div className=": flex flex-col gap-11 max-[600px]:gap-1">
              <div>
                <p className="text-3xl font-bold max-[600px]:text-2xl">
                  Address:
                </p>
                <p>13025 Yonge St</p>
                <p>Richmond Hill, ON</p>
                <p>L4E 1A5.</p>
              </div>
              <div>
                <p className="mt-4 text-3xl font-bold max-[600px]:text-2xl">
                  Phone:
                </p>
                <p>0905-773-7771</p>
              </div>
              <div>
                <p className="mt-4 text-3xl font-bold max-[600px]:text-2xl">
                  Email:
                </p>
                <p>saulrealestate@saulrealestate.ca</p>
              </div>
              <div className="mt-8 flex w-full gap-1 max-[600px]:justify-center">
                <a href="https://bluseel.com/contact">
                  <div className="h-16 w-16">
                    <img
                      src="/socialMedia/whatsapp.svg"
                      className="h-full w-full"
                      alt=""
                    />
                  </div>
                </a>

                <a
                  href="https://bluseel.com/contact"
                  target="_blank"
                  className="text-white"
                >
                  <div className="h-16 w-16">
                    <img
                      src="/socialMedia/fb.svg"
                      className="h-full w-full"
                      alt=""
                    />
                  </div>
                </a>

                <a
                  href="https://bluseel.com/contact"
                  target="_blank"
                  className="text-white"
                >
                  <div className="h-16 w-16">
                    <img
                      src="/socialMedia/instagram.svg"
                      className="h-full w-full"
                      alt=""
                    />
                  </div>
                </a>

                <a
                  href="https://bluseel.com/contact"
                  target="_blank"
                  className="text-white"
                >
                  <div className="h-16 w-16">
                    <img
                      src="/socialMedia/youtube.svg"
                      className="h-full w-full"
                      alt=""
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 p-4">
            <h2 className="mb-4 text-5xl font-bold text-primary-yellow max-[600px]:text-3xl">
              Message Us
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className={labelStyling}>Name</label>
                <input
                  type="text"
                  {...register("name")}
                  className={inputStyling}
                />
                <p className="text-sm text-red-500">{errors.name?.message}</p>
              </div>
              <div>
                <label className={labelStyling}>Email</label>
                <input
                  type="email"
                  {...register("email")}
                  className={inputStyling}
                />
                <p className="text-sm text-red-500">{errors.email?.message}</p>
              </div>
              <div>
                <label className={labelStyling}>Phone</label>
                <input
                  type="tel"
                  {...register("phone")}
                  className={inputStyling}
                />
                <p className="text-sm text-red-500">{errors.phone?.message}</p>
              </div>
              <div>
                <label className={labelStyling}>Question or Query</label>
                <textarea
                  {...register("query")}
                  className="mt-1 block h-32 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-[0.9rem] leading-none text-black shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                />
                <p className="text-sm text-red-500">{errors.query?.message}</p>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary-yellow px-4 py-2 font-bold text-black hover:bg-primary-yellow/80 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
