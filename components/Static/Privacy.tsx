export const Privacy = () => {
    const tableOfContents = [
        { id: 1, name: "What data do we collect?", href: "#what-data" },
        { id: 2, name: "How do we collect your data?", href: "#collect-data" },
        { id: 3, name: "How will we use your data?", href: "#use-data" },
        { id: 4, name: "How do we store your data?", href: "#store-data" },

        {
            id: 5,
            name: "What are your data protection rights?",
            href: "#data-protection",
        },
        { id: 6, name: "What are cookies?", href: "#what-cookies" },
        { id: 7, name: "How do we use cookies?", href: "#how-cookies" },
        {
            id: 8,
            name: "What types of cookies do we use?",
            href: "#types-cookies",
        },
        { id: 9, name: "How to manage your cookies", href: "#manage-cookies" },
        {
            id: 10,
            name: "Privacy policies of other websites",
            href: "#other-sites",
        },
        {
            id: 11,
            name: "Changes to our privacy policy",
            href: "#changes-privacy",
        },
        { id: 12, name: "How to contact us", href: "#contact-us" },
        {
            id: 13,
            name: "How to contact the appropriate authorites",
            href: "#contact-authorities",
        },
    ];

    return (
        <article className="flex justify-between flex-1 mt-12">
            <section className="flex flex-col justify-between w-3/5 m-auto minmd:px-12 sm:w-full sm:px-4">
                <article className="my-4">
                    <h2 className="mb-2 text-2xl">Inventory Privacy Policy</h2>
                    <h3>
                        This privacy policy will explain how our organization
                        uses the personal data we collect from you when you use
                        our website.
                    </h3>
                </article>
                <article className="my-4">
                    <h2 className="mt-2 text-2xl">Topics</h2>
                    <ul>
                        {tableOfContents.map((tableOfContentsItem) => (
                            <li
                                key={tableOfContentsItem.id}
                                className="mt-8 text-lg list-disc list-inside"
                            >
                                <a
                                    href={tableOfContentsItem.href}
                                    className="hover:text-blue"
                                >
                                    {tableOfContentsItem.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </article>
                <article id="what-data" className="my-4 ">
                    <h2 className="text-2xl">What data do we collect?</h2>
                    <p className="mb-4">
                        Inventory collects the following data:
                    </p>
                    <ul>
                        <li className="list-disc list-inside">
                            Personal identification information (Name, email
                            address)
                        </li>
                        <li className="list-disc list-inside">
                            Password information
                        </li>
                    </ul>
                </article>
                <article id="collect-data" className="my-4">
                    <h2 className="text-2xl">How do we collect your data?</h2>
                    <p className="mb-4">
                        You directly provide Inventory with most of the data we
                        collect. We collect data and process data when you:
                    </p>
                    <ul>
                        <li className="list-disc list-inside">
                            Register online
                        </li>
                        <li className="list-disc list-inside">
                            Use or view our website via your browser's cookies
                        </li>
                        <li className="list-disc list-inside">
                            Submit a contact form on our contact page for which
                            we require your email address
                        </li>
                    </ul>
                </article>
                <article id="use-data" className="my-4">
                    <h2 className="text-2xl">How will we use your data?</h2>
                    <p className="mb-4">
                        Inventory collects your data so that we can:
                    </p>
                    <ul>
                        <li className="list-disc list-inside">
                            Allow access to our application
                        </li>
                        <li className="list-disc list-inside">
                            Contact you back on any questions or feedback you
                            may have
                        </li>
                        <li className="list-disc list-inside">
                            Provide an intuitive login system that remembers
                            your login session even after you close the browser
                            window
                        </li>
                    </ul>
                </article>
                <article id="store-data" className="my-4">
                    <h2 className="text-2xl">How do we store your data?</h2>
                    <p>
                        Inventory securely stores your data in the same
                        database, viz. Firebase, as the information entered by
                        users who use the application. This data is stored in a
                        separate part of the database, known as a "collection,"
                        and thus cannot be accessed, edited, modified, or
                        deleted by users.
                    </p>
                </article>
                <article id="data-protection" className="my-4">
                    <h2 className="text-2xl">
                        What are your protection rights?
                    </h2>
                    <p className="mb-4">
                        Inventory would like to make sure you are fully aware of
                        all of your data protection rights. Every user is
                        entitled to the following:
                    </p>
                    <p>
                        <span className="font-bold">The right to access</span> -
                        You have the right to request Inventory for copies of
                        your personal data. We may charge you a small fee for
                        this service.
                    </p>
                    <p>
                        <span className="font-bold">
                            The right to rectification
                        </span>{" "}
                        - You have the right to request that Inventory correct
                        any information you believe is inaccurate. You also have
                        the right to request Inventory to complete information
                        you believe is incomplete.
                    </p>
                    <p>
                        <span className="font-bold">The right to erasure</span>{" "}
                        - You have the right to request that Inventory erase
                        your personal data, under certain conditions.
                    </p>
                    <p>
                        <span className="font-bold">
                            The right to restrict processing
                        </span>{" "}
                        - You have the right to request that Inventory restrict
                        the processing of your personal data, under certain
                        conditions.
                    </p>
                    <p>
                        <span className="font-bold">
                            The right to object to processing
                        </span>{" "}
                        - You have the right to object to Inventory's processing
                        of your personal data, under certain conditions.
                    </p>
                    <p>
                        <span className="font-bold">
                            The right to data portability
                        </span>{" "}
                        - You have the right to request that Inventory transfer
                        the data that we have collected to another organization,
                        or directly to you, under certain conditions.
                    </p>
                    <p className="mt-4">
                        If you make a request, we have one month to respond to
                        you. If you would like to exercise any of these rights,
                        please contact us via our contact form.
                    </p>
                </article>
                <article id="what-cookies" className="my-4">
                    <h2 className="text-2xl">What are cookies?</h2>
                    <p className="mb-4">
                        Cookies are text files placed on your computer to
                        collect standard Internet log information and visitor
                        behavior information. When you visit our websites, we
                        may collect information from you automatically through
                        cookies or similar technology.
                    </p>
                    <p>
                        For further information, visit{" "}
                        <a
                            href="http://allaboutcookies.org"
                            className="text-blue"
                        >
                            allaboutcookies.org
                        </a>
                        .
                    </p>
                </article>
                <article id="how-cookies" className="my-4">
                    <h2 className="text-2xl">How do we use cookies?</h2>
                    <p>
                        Inventory uses cookies to improve your experience on our
                        website, by keeping you signed in after the initial sign
                        in.
                    </p>
                </article>
                <article id="types-cookies" className="my-4">
                    <h2 className="text-2xl">
                        What types of cookies do we use?
                    </h2>
                    <p className="mb-4">
                        There are a number of different types of cookies,
                        however, our website uses:
                    </p>
                    <ul>
                        <li className="list-disc list-inside">
                            <span className="font-black">Functionality</span> -
                            Inventory uses cookies so that we recognize you on
                            our website. These cookies, known as JWT tokens, are
                            generated upon sign in and are then stored in the
                            network headers of the website in order to remember
                            you the next time you access the website.
                        </li>
                    </ul>
                </article>
                <article id="manage-cookies" className="my-4">
                    <h2 className="text-2xl">How to manage cookies</h2>
                    <p>
                        You can set your browser not to accept cookies, and the
                        above website tells you how to remove cookies from your
                        browser. However, in a few cases, some of our website
                        features may not function as a result.
                    </p>
                </article>
                <article id="other-sites" className="my-4">
                    <h2 className="text-2xl">
                        Privacy policies of other websites
                    </h2>
                    <p>
                        The Inventory website contains links to other websites.
                        Our privacy policy applies only to our website, so if
                        you click on a link to another website, you should read
                        their privacy policy.
                    </p>
                </article>
                <article id="changes-privacy" className="my-4">
                    <h2 className="text-2xl">Changes to our privacy policy</h2>
                    <p>
                        Inventory keeps it privacy policy under regular review
                        inline with the functionality we provide, and places any
                        updates on this web page. This privacy policy was last
                        updated on 2 December 2020.
                    </p>
                </article>
                <article id="contact-us" className="my-4">
                    <h2 className="text-2xl">How to contact us</h2>
                    <p>
                        If you have any questions about Inventory's privacy
                        policy, the data we hold on you, or you would like to
                        exercise one of your data protection rights, please do
                        not hesitate to contact us via our contact page.
                    </p>
                </article>
                <article id="contact-authorities" className="my-4">
                    <h2 className="text-2xl">
                        How to contact the appropriate authority
                    </h2>
                    <p>
                        Should you wish to report a complaint or if you feel
                        that Our Company has not addressed your concern in a
                        satisfactory manner, you may contact the Information
                        Commissioner's Office.
                    </p>
                    <p className="my-4">
                        You can call the ICO on 0303 123 1113 or contact them
                        via live chat on their{" "}
                        <a href="https://ico.org.uk/global/contact-us/">
                            website
                        </a>
                        .
                    </p>
                </article>
            </section>
        </article>
    );
};
