import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-10 h-30 w-full bg-orange-500">
      <div className="container mx-auto md:flex-row flex flex-col gap-7 md:justify-between items-center">
        {/*site name */}
        <Link to="/" className="font-bold text-2xl text-white tracking-tight">
          NourEats.com
        </Link>
        {/*privacy + terms of service */}
        <div className="flex gap-5">
          <span className="text-white text-md font-bold cursor-pointer">
            Privacy Policy
          </span>
          <span className="text-white text-md font-bold cursor-pointer">
            Terms of Service
          </span>
        </div>
      </div>
    </footer>
  );
}
