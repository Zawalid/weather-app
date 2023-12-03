import LogoImage from "@/assets/Logo.svg";

export default function Logo({ className }) {
  return <img src={LogoImage} alt="Logo" className={className} />;
}
