import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
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
      </nav>
    </footer>
  );
};

export default Footer;
