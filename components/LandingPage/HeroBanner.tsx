const Hero = () => {
  return (
    <section className="flex justify-between min-h-screen sm:flex-col bg-blackMuted align-center">
      <article className="flex flex-col self-center w-5/12 minlg:ml-12 minmd:ml-6 sm:w-5/6">
        {/* change the image below to png and add box shadow then*/}
        <img
          src="img/inventory.png"
          className="w-full h-auto"
          alt="Inventory app, an image of the inventory screen on the homepage"
        />
      </article>
      <article className="flex flex-col self-center m-auto">
        <h2 className="py-8 text-3xl md:text-center">
          Inventory management made <span className="text-blue">easy</span>
        </h2>
        <article className="flex flex-col m-auto text-center md:pb-8 sm:self-center">
          <h3 className="text-xl">No fuss</h3>
          <h3 className="text-xl">No mess</h3>
          <h3 className="mt-8 text-2xl">And just one click away!</h3>
        </article>
      </article>
    </section>
  );
};

export default Hero;
