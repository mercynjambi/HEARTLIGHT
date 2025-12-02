import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.jpg";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${hero1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-transparent bg-opacity-50"></div>

      <div className="relative max-w-3xl text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Show Support. Strength in Unity.
        </h1>

        <p className="text-xl md:text-2xl text-white mb-8">
          Our mission is to ensure that no one in our community ever grieves alone. We offer financial support, practical help, and making sure we walk beside our members with accountability, kindness and hope for as long as they need us.
        </p>

        <Link to="/register">
          <button className="bg-primary text-secondary font-semibold px-8 py-3 rounded-2xl shadow-lg hover:bg-primary transition-all">
            Register
          </button>
        </Link>
      </div>
    </section>
  );
}
