"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faChalkboardTeacher,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";

export default function Speciality() {
  return (
    <section className="px-6 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
        {/* Student Count Box */}
        <div className="w-full max-w-xs p-6 bg-teal-800 rounded-lg text-white flex flex-col items-center justify-center shadow-lg transition-transform transform hover:scale-105 hover:bg-teal-700">
          <FontAwesomeIcon icon={faUserGraduate} size="2x" className="mb-4" />
          <h3 className="text-2xl font-semibold mb-2">1000+ Students</h3>
          <p className="text-center text-sm">
            Proud to nurture over 1000 aspiring minds toward success.
          </p>
        </div>

        {/* Teacher Count Box */}
        <div className="w-full max-w-xs p-6 bg-red-800 rounded-lg text-white flex flex-col items-center justify-center shadow-lg transition-transform transform hover:scale-105 hover:bg-red-700">
          <FontAwesomeIcon icon={faChalkboardTeacher} size="2x" className="mb-4" />
          <h3 className="text-2xl font-semibold mb-2">50+ Expert Teachers</h3>
          <p className="text-center text-sm">
            Our dedicated faculty ensures each student reaches their full potential.
          </p>
        </div>

        {/* Award Count Box */}
        <div className="w-full max-w-xs p-6 bg-purple-800 rounded-lg text-white flex flex-col items-center justify-center shadow-lg transition-transform transform hover:scale-105 hover:bg-purple-700">
          <FontAwesomeIcon icon={faMedal} size="2x" className="mb-4" />
          <h3 className="text-2xl font-semibold mb-2">100+ Awards</h3>
          <p className="text-center text-sm">
            Recognized for excellence in academics, sports, and more.
          </p>
        </div>
      </div>
    </section>
  );
}
