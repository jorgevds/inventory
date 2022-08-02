import Logout from "../Authentication/Logout";
import { useAuth } from "../Authentication/AuthContext";
import { ActiveLink } from "./ActiveLink";
import { HomeLink } from "./HomeLink";

const Header = () => {
    const { loggedIn } = useAuth();
    const homeLinkClasses = "pb-2 font-title";

    return (
        <header className="sticky top-0 z-10 bg-white shadow-sm">
            <nav className="flex m-auto minmd:w-3/5">
                <ul className="flex py-4">
                    <li className="minmd:px-4 sm:px-8">
                        <ActiveLink url="/about" label="About" />
                    </li>
                    <li>
                        <ActiveLink url="/contact" label="Contact" />
                    </li>
                </ul>
                <ul className="flex flex-auto w-full md:hidden ">
                    <li className="m-auto">
                        <HomeLink className={`text-4xl ${homeLinkClasses}`} />
                    </li>
                </ul>
                {!loggedIn ? (
                    <ul className="flex justify-end py-4 md:flex-auto ">
                        <li className="pr-2 minlg:ml-auto">
                            <ActiveLink
                                url="/users/signup"
                                label="Sign&nbsp;up"
                            />
                        </li>
                        <li className="px-2">
                            <ActiveLink url="/users/login" label="Login" />
                        </li>
                    </ul>
                ) : (
                    <Logout />
                )}
            </nav>
            <ul className="minlg:hidden">
                <li className="m-auto">
                    <HomeLink
                        className={`text-3xl text-center ${homeLinkClasses}`}
                    />
                </li>
            </ul>
        </header>
    );
};

export default Header;
