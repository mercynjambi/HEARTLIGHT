import { Link } from "react-router-dom";
import hero from "../assets/hero.png";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-transparent bg-opacity-50"></div>

      <div className="relative max-w-3xl text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Show Support. Strength in Unity.
        </h1>

        <p className="text-lg md:text-xl mb-4">
          HeartLight Services — We offer the best welfare services and support you during unforeseen eventualities.
        </p>

        <p className="text-lg md:text-xl mb-8">
          We work together with our members to enable them access financial support and give their loved ones a decent send-off.
        </p>

        <Link to="/register">
          <button className="bg-primary text-secondary font-semibold px-8 py-3 rounded-2xl shadow-lg hover:bg-teal-300 transition-all">
            Register
          </button>
        </Link>
      </div>
    </section>
  );
}
