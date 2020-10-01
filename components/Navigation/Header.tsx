import Link from "next/link";
import { useState } from "react";
import fire from "../../config/fire-config";

const Header = ({ loggedIn }) => {
  const [notification, setNotification] = useState("");

  const handleLogout = () => {
    fire
      .auth()
      .signOut()
      .then(() => {
        setNotification("Logged out");
        setTimeout(() => {
          setNotification("");
        }, 2000);
      });
  };
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
            <button onClick={handleLogout}>Logout</button>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
