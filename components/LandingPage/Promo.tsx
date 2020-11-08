import Link from "next/link";

const Promo = () => {
  return (
    <section className="flex justify-between min-h-screen bg-white align-center">
      <article className="flex flex-col self-center w-3/6 m-auto text-center text-black">
        <h2 className="py-8 text-xl">Making grocery lists is boring work</h2>
        <h3 className="py-8 text-2xl">But it no longer needs to be</h3>
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
    </section>
  );
};

export default Promo;
