import Link from "next/link";
import Logout from "../Authentication/Logout";

const Header = ({ loggedIn }) => {
  return (
    <header>
      <nav className="flex w-3/5 m-auto">
        <ul className="flex py-4">
          <li className="px-4">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>

          <li className="px-4">
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
          <li className="px-4">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="px-4">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          </ul>
          {!loggedIn ? (
            <ul className="flex justify-end flex-auto py-4">
              <li className="px-4">
                <Link href="/users/register">
                  <a>register</a>
                </Link>
              </li>
              <li className="px-4">
                <Link href="/users/login">
                  <a>login</a>
                </Link>
              </li>
            </ul>
          ) : (
            <Logout />
          )}
      </nav>
    </header>
  );
};

export default Header;
