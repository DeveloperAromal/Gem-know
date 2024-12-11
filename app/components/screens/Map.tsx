"use client";

export default function Map() {
  return (
    <section className="py-8 ">
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-center text-3xl text-gray-700 font-bold pb-10">
            <span className="border-l-4 border-1 border-teal-800 mr-2 h-full"></span>
           Walk in 
        </h2>
        <div className="flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.7675859876185!2d76.73664877458351!3d8.71360679133567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e935d9f0fb21%3A0x7fd7eab6a9334f74!2sGem%20Know%20Model%20H%20S%20S%20Varkala!5e0!3m2!1sen!2sin!4v1730419817183!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{border:0}}
            allowFullScreen={true}
            loading="lazy"
            className="rounded-md"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
