// ScrollOrNavigate.jsx
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function ScrollOrNavigate({ to, children, className }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  if (isHome) {
    // If already on home page → smooth scroll
    return (
      <ScrollLink
        to={to}
        smooth={true}
        duration={600}
        offset={-80}
        className={className + " cursor-pointer"}
      >
        {children}
      </ScrollLink>
    );
  }

  // If on another page → navigate to Home with hash
  return (
    <Link to={`/#${to}`} className={className}>
      {children}
    </Link>
  );
}
