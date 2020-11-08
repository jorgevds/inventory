const Detail = () => {
  return (
    <section className="flex justify-between min-h-screen sm:flex-col bg-blue align-center">
      <article className="flex flex-col self-center w-2/5 m-auto text-white md:text-center ">
        <h2 className="py-8 text-2xl">
          Grocery lists on <span className="text-mauve">command</span>
        </h2>
        <h3 className="py-8 text-xl">
          Every item in red is <span className="text-mauve">automatically</span>{" "}
          put on your grocery list
        </h3>
        <h3 className="py-8 text-xl">
          Just one click will bring you to your grocery list, just click on the
          <span className="text-mauve">"Groceries"</span> tab!
        </h3>
      </article>
      <article className="flex flex-col self-center w-5/12 md:pb-8 minlg:mr-12 minmd:mr-6">
        <img
          src="groceries.png"
          className="w-full h-auto bg-white rounded-lg"
        />
      </article>
    </section>
  );
};

export default Detail;
