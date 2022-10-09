//IMPORTS
import { useState } from "react";
import arrow from "../images/icon-arrow.svg";
import desktop from "../images/desktop-image-hero-1.jpg";
import desktop2 from "../images/desktop-image-hero-2.jpg";
import desktop3 from "../images/desktop-image-hero-3.jpg";
import mobile from "../images/mobile-image-hero-1.jpg";
import mobile2 from "../images/mobile-image-hero-2.jpg";
import mobile3 from "../images/mobile-image-hero-3.jpg";

const data = [
  {
    id: 1,
    title: "Discover innovative ways to decorate",
    desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    mobile: mobile,
    desktop: desktop,
  },
  {
    id: 2,
    title: "We are available all  across the globe",
    desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    mobile: mobile2,
    desktop: desktop2,
  },
  {
    id: 3,
    title: "Manufactured with the best materials",
    desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    mobile: mobile3,
    desktop: desktop3,
  },
];

const Slider = () => {
  //STATE
  const [items, setItems] = useState(data);
  const [slide, setSlide] = useState(1);
  //FUNCTIONS
  function next() {
    if (slide !== items.length) {
      setSlide((prev) => prev + 1);
    } else if (slide === items.length) {
      setSlide(1);
    }
  }

  function previous() {
    if (slide !== 1) {
      setSlide((prev) => prev - 1);
    } else if (slide === 1) {
      setSlide(items.length);
    }
  }

  return (
    <section>
      {items.map((item, index) => {
        return (
          <article
            key={item.id}
            className={
              slide === index + 1 ? "grid grid-cols-1 lg:grid-cols-2" : "hidden"
            }
          >
            <div className="relative">
              <picture>
                <source media="(min-width: 768px)" srcSet={item.desktop} />
                <img src={item.mobile} alt="" className="w-full lg:h-full" />
              </picture>
              <div className="flex bottom-0 right-0 absolute xl:right-[-14rem]">
                <div
                  className="prev bg-no-repeat bg-center bg-black w-16 h-16 hover:opacity-80 xl:w-28"
                  onClick={previous}
                ></div>
                <div
                  className="next bg-no-repeat bg-center bg-black w-16 h-16 hover:opacity-80 xl:w-28"
                  onClick={next}
                ></div>
              </div>
            </div>
            <div className="p-8 xl:p-16">
              <h2 className=" text-slate-900 text-3xl lg:text-5xl font-semibold">
                {item.title}
              </h2>
              <p className="text-slate-900 opacity-75 my-6">{item.desc}</p>
              <div className="flex gap-8">
                <span
                  className="text-lg text-slate-900 "
                  style={{
                    letterSpacing: "0.4rem",
                  }}
                >
                  SHOP NOW
                </span>
                <img className="self-center" src={arrow} alt="arrow" />
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Slider;
