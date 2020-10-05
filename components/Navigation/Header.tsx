import Link from "next/link";
import Logout from "../Authentication/Logout";

const Header = ({ loggedIn }) => {
  return (
    <header>
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
          {!loggedIn ? (
            <ul>
              <li>
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
          ) : (
            <Logout />
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
