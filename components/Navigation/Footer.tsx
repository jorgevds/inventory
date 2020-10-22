import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <nav className="pt-8 pb-12 mt-16 text-white minmd:flex minlg:px-20 minmd:px-10 minmd:justify-evenly bg-blue">
        <ul className="text-2xl font-title sm:text-center">
          <li>Inventory</li>
        </ul>
        <ul className="flex flex-col justify-center px-6 sm:px-8">
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
        </ul>
        <ul className="flex flex-col px-6 sm:px-8">
          <li className="py-4">
            <Link href="/users/register">
              <a>register</a>
            </Link>
          </li>
          <li className="py-4">
            <Link href="/users/login">
              <a>login</a>
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col justify-center text-sm sm:pl-8">
          <li>Copyright © 2020. All rights reserved.</li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
