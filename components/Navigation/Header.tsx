import Link from "next/link";
import Logout from "../Authentication/Logout";

const Header = ({ loggedIn }) => {
  return (
    <header className="sticky top-0 bg-white opacity-75">
      <nav className="flex m-auto minmd:w-3/5">
        <ul className="flex py-6">
          <li className="minmd:px-4 sm:px-2">
            {loggedIn ? (
              <Link href="/enter">
                <a>Enter</a>
              </Link>
            ) : (
              <Link href="/users/login">
                <a>Enter</a>
              </Link>
            )}
          </li>
          <li className="minmd:px-4 sm:px-2">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="minmd:px-4 sm:px-2">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
        {!loggedIn ? (
          <ul className="flex justify-end flex-auto py-6 sm:justify-evenly">
            <li className="minmd:px-4">
              <Link href="/users/register">
                <a>register</a>
              </Link>
            </li>
            <li className="minmd:px-4">
              <Link href="/users/login">
                <a>login</a>
              </Link>
            </li>
          </ul>
        ) : (
          <Logout />
        )}
      </nav>
      <Link href="/">
        <a className="pb-4 m-auto top-1/2">
          <h1 className="mb-12 text-4xl text-center font-title">Inventory</h1>
        </a>
      </Link>
    </header>
  );
};

export default Header;
