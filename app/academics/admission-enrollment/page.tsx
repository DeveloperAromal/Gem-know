import CustomHeader from "@/app/components/includes/CustomHeader";
import { Metadata } from "next";
import Footer from "@/app/components/screens/Footer";

export const metadata: Metadata = {
  title: "Online Application - Gem Know Model HSS",
};

export default function AdmissionEnrollment() {
  return (
    <section>
      <CustomHeader />
      <section className="pt-40 bg-gray-50 min-h-screen">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-teal-700">
            Application for Admission
          </h2>
          <p className="text-gray-500 mt-2">
            We are excited to assist you with your enquiry! Please fill out the
            details below to help our admissions team connect with you.
          </p>
        </div>
        <form className="max-w-4xl mx-auto p-8 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-700 font-medium"
              >
                First Name of the child{" "}
                <span className="text-xl text-red-600">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full border border-teal-300 rounded-md p-2 focus:ring-2 focus:ring-teal-600"
                placeholder="Enter child's first name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-700 font-medium"
              >
                Surname <span className="text-xl text-red-600">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full border border-teal-300 rounded-md p-2 focus:ring-2 focus:ring-teal-600"
                placeholder="Enter child's last name"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="standard"
                className="block text-gray-700 font-medium"
              >
                Standard to which admission is sought{" "}
                <span className="text-xl text-red-600">*</span>
              </label>
              <select
                id="standard"
                className="w-full border border-teal-300 rounded-md p-2 focus:ring-2 focus:ring-teal-600"
                required
              >
                <option value="">Select Standard</option>
                <option value="UKG">UKG</option>
                <option value="LKG">LKG</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="+1">+1</option>
                <option value="+2">+2</option>
              </select>
            </div>
            <div>
              <label htmlFor="dob" className="block text-gray-700 font-medium">
                Date of Birth <span className="text-xl text-red-600">*</span>
              </label>
              <input
                type="date"
                id="dob"
                className="w-full border border-teal-300 rounded-md p-2 focus:ring-2 focus:ring-teal-600"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Gender <span className="text-xl text-red-600">*</span>
            </label>
            <div className="flex items-center gap-4">
              <div>
                <input type="radio" id="male" name="gender" value="Male" />
                <label htmlFor="male" className="ml-2 text-gray-600">
                  Male
                </label>
              </div>
              <div>
                <input type="radio" id="female" name="gender" value="Female" />
                <label htmlFor="female" className="ml-2 text-gray-600">
                  Female
                </label>
              </div>
              <div>
                <input type="radio" id="other" name="gender" value="Other" />
                <label htmlFor="other" className="ml-2 text-gray-600">
                  Other
                </label>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-gray-700 font-medium"
            >
              Residential Address{" "}
              <span className="text-xl text-red-600">*</span>
            </label>
            <textarea
              id="address"
              className="w-full border border-teal-300 rounded-md p-2 focus:ring-2 focus:ring-teal-600"
              placeholder="Enter your address"
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="fatherName"
                className="block text-gray-700 font-medium"
              >
                Father&apos;s Name{" "}
                <span className="text-xl text-red-600">*</span>
              </label>
              <input
                type="text"
                id="fatherName"
                className="w-full border border-teal-300 rounded-md p-2 focus:ring-2 focus:ring-teal-600"
                placeholder="Enter Father's Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="fatherPhone"
                className="block text-gray-700 font-medium"
              >
                Father&apos;s Phone No{" "}
                <span className="text-xl text-red-600">*</span>
              </label>
              <input
                type="tel"
                id="fatherPhone"
                className="w-full border border-teal-300 rounded-md p-2 focus:ring-2 focus:ring-teal-600"
                placeholder="Enter Father's Phone No"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="motherName"
                className="block text-gray-700 font-medium"
              >
                Mother&apos;s Name{" "}
                <span className="text-xl text-red-600">*</span>
              </label>
              <input
                type="text"
                id="motherName"
                className="w-full border border-teal-300 rounded-md p-2 focus:ring-2 focus:ring-teal-600"
                placeholder="Enter Mother's Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="motherPhone"
                className="block text-gray-700 font-medium"
              >
                Mother&apos;s Phone No{" "}
                <span className="text-xl text-red-600">*</span>
              </label>
              <input
                type="tel"
                id="motherPhone"
                className="w-full border border-teal-300 rounded-md p-2 focus:ring-2 focus:ring-teal-600"
                placeholder="Enter Mother's Phone No"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="nationality"
                className="block text-gray-700 font-medium"
              >
                Nationality <span className="text-xl text-red-600">*</span>
              </label>
              <input
                type="text"
                id="nationality"
                className="w-full border border-teal-300 rounded-md p-2 focus:ring-2 focus:ring-teal-600"
                placeholder="Enter Nationality"
                required
              />
            </div>
            <div>
              <label
                htmlFor="motherTongue"
                className="block text-gray-700 font-medium"
              >
                Mother Tongue <span className="text-xl text-red-600">*</span>
              </label>
              <input
                type="text"
                id="motherTongue"
                className="w-full border border-teal-300 rounded-md p-2 focus:ring-2 focus:ring-teal-600"
                placeholder="Enter Mother Tongue"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="religion"
                className="block text-gray-700 font-medium"
              >
                Religion <span className="text-xl text-red-600">*</span>
              </label>
              <input
                type="text"
                id="religion"
                className="w-full border border-teal-300 rounded-md p-2 focus:ring-2 focus:ring-teal-600"
                placeholder="Enter Religion"
                required
              />
            </div>
            <div>
              <label
                htmlFor="standard"
                className="block text-gray-700 font-medium"
              >
                Standard to which admission is sought{" "}
                <span className="text-xl text-red-600">*</span>
              </label>
              <select
                id="standard"
                className="w-full border border-teal-300 rounded-md p-2 focus:ring-2 focus:ring-teal-600"
                required
              >
                <option value="">Select Category</option>
                <option value="General">General</option>
                <option value="OBC">OBC</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
                <option value="EWS">EWS</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="Previous School( if any )"
                className="block text-gray-700 font-medium"
              >
                Previous School ( if any ){" "}
                <span className="text-xl text-red-600">*</span>
              </label>
              <input
                type="text"
                id="School"
                className="w-full border border-teal-300 rounded-md p-2 focus:ring-2 focus:ring-teal-600"
                placeholder="Enter School"
                required
              />
            </div>
            <div>
              <label
                htmlFor="Grade in which last studied"
                className="block text-gray-700 font-medium"
              >
                Grade in which last studied{" "}
                <span className="text-xl text-red-600">*</span>
              </label>
              <input
                type="text"
                id="Grade"
                className="w-full border border-teal-300 rounded-md p-2 focus:ring-2 focus:ring-teal-600"
                placeholder="Enter Religion"
                required
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              Submit Application
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </section>
  );
}
