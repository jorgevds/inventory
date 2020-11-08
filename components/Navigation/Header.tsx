import Link from "next/link";
import { useRouter } from "next/router";
import Logout from "../Authentication/Logout";

const Header = ({ loggedIn }) => {
  const router = useRouter();

  return (
    <header className="sticky top-0 bg-white opacity-75">
      <nav className="flex m-auto minmd:w-3/5">
        <ul className="flex py-6">
          <li className="minmd:px-4 sm:px-2">
            {loggedIn ? (
              <Link href="/enter">
                <a className={router.pathname == "/enter" ? "active" : null}>
                  Enter
                </a>
              </Link>
            ) : (
              <Link href="/users/login">
                <a>Enter</a>
              </Link>
            )}
          </li>
          <li className="minmd:px-4 sm:px-2">
            <Link href="/about">
              <a className={router.pathname == "/about" ? "active" : null}>
                About
              </a>
            </Link>
          </li>
          <li className="minmd:px-4 sm:px-2">
            <Link href="/contact">
              <a className={router.pathname == "/contact" ? "active" : null}>
                Contact
              </a>
            </Link>
          </li>
        </ul>
        {!loggedIn ? (
          <ul className="flex justify-end flex-auto py-6 sm:justify-evenly">
            <li className="minmd:px-4">
              <Link href="/users/register">
                <a
                  className={
                    router.pathname == "/users/register" ? "active" : null
                  }
                >
                  Register
                </a>
              </Link>
            </li>
            <li className="minmd:px-4">
              <Link href="/users/login">
                <a
                  className={
                    router.pathname == "/users/login" ? "active" : null
                  }
                >
                  Login
                </a>
              </Link>
            </li>
          </ul>
        ) : (
          <Logout />
        )}
      </nav>
      <Link href="/">
        <a className="pb-4 m-auto top-1/2">
          <h1 className="pb-8 text-4xl text-center font-title">Inventory</h1>
        </a>
      </Link>
    </header>
  );
};

export default Header;
