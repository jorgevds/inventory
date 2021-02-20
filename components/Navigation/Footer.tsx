import Link from "next/link";

const Footer = () => {
  return (
    <footer className="z-10">
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
              <a>Register</a>
            </Link>
          </li>
          <li className="py-4">
            <Link href="/users/login">
              <a>Login</a>
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col justify-center text-sm sm:pl-8">
          <li>
            Copyright &copy; 2020 - {new Date().getUTCFullYear()}. All rights
            reserved.
          </li>
          <li>
            <Link href="/privacy">
              <a>Privacy notice</a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
