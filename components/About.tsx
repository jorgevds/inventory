import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="flex justify-center flex-1 min-h-screen pb-8 sm:flex-col align-center">
        <article className="flex flex-col self-center w-3/6 text-4xl sm:w-4/6 sm:py-8 minmd:mr-10">
          <h1>
            Hi there, I'm <span className="text-blue">Jorge</span>
          </h1>
          <h2 className="sm:py-4">
            And this is my <span className="text-blue">app</span>
          </h2>
          <p className="pt-8 text-xl minmd:mr-12">
            I created this app because I was tired of going grocery shopping,
            forgetting what I still had at home, and then coming home with too
            much or too little.
          </p>
          <p className="pt-4 text-xl minmd:mr-12">
            <span className="text-blue">Inventory</span> keeps track of your
            fridge and cupboard, and gives you realtime feedback so you can make
            informed decisions at every step in the shop.
          </p>
          <p className="pt-4 text-xl minmd:mr-12">
            All it takes is a little upkeep. Ask for your receipt and update
            your inventory as you put your groceries away. Then go back next
            time and only buy what you need. Or be freely impulsive and then add
            your haul after the fact.
          </p>
        </article>
        <article className="flex flex-col self-center w-3/12 sm:w-3/6 sm:py-8">
          <img
            src="img/profile.jpg"
            className="w-full h-auto border-2 border-solid rounded-full border-blue"
            alt="Profile picture of the creator, Jorge"
          />
        </article>
      </section>
      <article className="flex flex-col self-center w-3/6 m-auto text-center text-black">
        <h3 className="py-8 text-xl">
          Get started on your journey to a (more) peaceful grocery shopping
          experience!
        </h3>

        <Link href="/order">
          <a>
            <button className="w-full py-4 m-auto my-8 text-xl text-white transition-all duration-300 ease-in-out transform border-2 border-solid rounded-lg bg-blue focus:outline-none focus:shadow-outline hover:transition-all hover:scale-105 border-burgundy">
              Register now
            </button>
          </a>
        </Link>
      </article>
    </>
  );
};

export default About;
