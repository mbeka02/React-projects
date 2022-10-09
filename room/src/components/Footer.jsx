import light from "../images/image-about-light.jpg";
import dark from "../images/image-about-dark.jpg";
export default function Footer() {
  return (
    <footer className="grid  lg:grid-cols-2 lg:mt-6  xl:grid-cols-3 xl:mt-0 ">
      <div>
        <img src={dark} alt="dark" className="w-full" />
      </div>

      <article className="p-4 lg:p-7">
        <h2
          className="uppercase text-lg  text-slate-900 font-semibold"
          style={{
            letterSpacing: "0.4rem",
          }}
        >
          about our furniture
        </h2>
        <p className="text-slate-900 opacity-75 mt-2">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </article>
      <div>
        <img src={light} alt="light" className=" w-full" />
      </div>
    </footer>
  );
}
