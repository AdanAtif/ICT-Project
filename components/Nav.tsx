import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavProps {
  containerStyles: String;
  linkStyles: String;
  underlineStyles?: String;
}
const link = [
  { path: "/", name: "home" },
  { path: "/contact", name: "example" },
];
const Nav: React.FC<NavProps> = ({
  containerStyles,
  linkStyles,
  underlineStyles,
}) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {link.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
