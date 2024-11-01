"use client";

// import { FC } from "react";
// import { useForm } from "react-hook-form";
// import { sendEmail } from "../../../utils/contact-send-email";
// import { toast } from "react-toastify";

// export type FormData = {
//   name: string;
//   phonenumber: number;
//   email: string;
//   message: string;
// };

const Contact = () => {
  //   const { register, handleSubmit } = useForm<FormData>();

  //   function onSubmit(data: FormData) {
  //     sendEmail(data);
  //     toast.success("Your response has been sent");
  //   }

  return (
    <section className="py-8 bg-white" id="contact">
      <div className="max-w-7xl mx-auto p-6 bg-neutral-900 rounded-lg shadow-md flex flex-wrap">
        <div className="w-full lg:w-1/2 p-6 text-white">
          <h2 className="text-2xl text-justify font-bold mb-4 text-teal-600">
            Our Office Address
          </h2>
          <p className="text-justify">
           Gem Know Model Hss, Mel-Vettoor PO, Varkala Thiruvananthapuram, Kerala 695311
          </p>
          <h2 className="text-2xl text-justify font-bold mt-6 mb-4 text-teal-600">
            General Enquiries
          </h2>
          <p className="text-justify">gkmhss@gmail.com</p>
          <h2 className="text-2xl text-justify font-bold mt-6 mb-4 text-teal-600">
            Call Us
          </h2>
          <p className="text-justify">0470 2600601 | 0470 2600603</p>
          <p className="text-justify">80860 23123</p>
          <h2 className="text-2xl text-justify font-bold mt-6 mb-4 text-teal-600">
            Our Timing
          </h2>
          <p className="text-justify">
            Mon - Fri : 07:30 AM - 04:30 PM / 12:00 AM - 12:00 AM
          </p>
          <p className="text-justify">
            Sat - Sun : Closed / 12:00 AM - 12:00 AM
          </p>
        </div>
        <div className="w-full lg:w-1/2 p-6">
          <h1 className="text-3xl text-teal-600 text-center font-bold mb-6">
            Contact Us
          </h1>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 rounded-md border border-teal-600 focus:outline-none focus:border-orange-500 text-black"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-md border border-teal-600 focus:outline-none focus:border-orange-500 text-black"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                maxLength={10}
                className="w-full px-4 py-2 rounded-md border border-teal-600 focus:outline-none focus:border-orange-500 text-black"
              />
            </div>
            <div>
              <textarea
                id="message"
                cols={30}
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded-md border border-teal-600 focus:outline-none focus:border-orange-500 text-black"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-40 bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
