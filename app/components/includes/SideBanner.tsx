import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function SideBanner() {
  return (
    <Link href="/academics/admission-enrollment">
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-teal-700 text-white font-semibold px-4 py-2 w-14 hover:w-72 h-14 rounded-md duration-300 ease-in-out flex items-center justify-start cursor-pointer gap-2 hover:bg-gradient-to-tr hover:from-teal-700 hover:to-sky-700 hover:translate-x-3 hover:duration-300">
        <FontAwesomeIcon icon={faBookOpenReader} size="lg" className="pl-1"/>
        <span className="overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out">
          Online Admission 2025-26
        </span>
      </div>
    </Link>
  );
}
