import Logo from "@/assets/Logo.svg";
import { Link } from "react-router-dom";
import { Button } from "@/ui/Button";

export default function HomePage() {
  return (
    <div className="grid md:grid-cols-2 items-center bg-background-primary h-full p-5">
      <div className="bg-background-secondary h-full flex-1 rounded-xl hidden md:grid place-content-center">
        <img src={Logo} alt="Logo" className="w-1/2 mx-auto" />
      </div>
      <div className=" h-full flex-1 text-center gap-4 grid place-content-center justify-items-center">
        <img src={Logo} alt="Logo" className="w-20 mx-auto" />
        <h1 className="text-text-primary font-bold text-4xl">BreezyBuzz</h1>
        <p className="text-text-secondary  text-lg mb-7">
          A weather app for the modern age
        </p>
        <Link to="/app">
          <Button />
        </Link>
      </div>
    </div>
  );
}
