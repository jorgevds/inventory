import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <nav className="flex justify-center">
        <ul className="inline-block px-6">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/enter">
              <a>Enter</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>Copyright © 2020. All rights reserved.</li>
          </ul>
          <ul className="inline-block">
          <li className="py-4">
            <Link href="/users/register">
              <a>register</a>
            </Link>
          </li>
          <li>
            <Link href="/users/login">
              <a>login</a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
