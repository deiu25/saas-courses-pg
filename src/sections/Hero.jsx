import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 upercase text-p3">500+ Cursuri</div>
            <h1 className="mb-6 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Simplu și eficient
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              {" "}
              Înscrie-te acum și transformă învățarea într-o experiență
              captivantă, accesibilă oricui - fie pentru tine, prietenii sau
              familia ta!
            </p>
            <LinkScroll to="preturi" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Vezi Planurile</Button>
            </LinkScroll>
          </div>

          <div className="absolute -top-20 left-[calc(50%-610px)] w-[1800px] pointer-events-none hero-img_res">
            <img
              src="/images/112.webp"
              className="max-lg:h-auto"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
