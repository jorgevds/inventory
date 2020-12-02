import Link from "next/link";
import { useRouter } from "next/router";
import Logout from "../Authentication/Logout";

const Header = ({ loggedIn }) => {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-10 bg-white">
      <nav className="flex m-auto minmd:w-3/5">
        <ul className="flex py-4">
          <li>
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
          <li className="px-2">
            <Link href="/contact">
              <a className={router.pathname == "/contact" ? "active" : null}>
                Contact
              </a>
            </Link>
          </li>
        </ul>
        {!loggedIn ? (
          <ul className="flex justify-end flex-auto py-4">
            <li className="px-2">
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
            <li className="px-2">
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
        <a
          className="m-auto minlg:absolute minlg:left-auto minlg:top-0 minlg:w-full top-1/2"
          title="Homepage"
        >
          <h1 className="pb-2 text-3xl text-center minlg:text-4xl font-title">
            Inventory
          </h1>
        </a>
      </Link>
    </header>
  );
};

export default Header;
