import { socials } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
          
          {/* Coloană 1: Informații despre platformă */}
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-70">
              © {new Date().getFullYear()}{" "}
              <a
                href="https://andrei-design.ro/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-500 hover:text-p1 cursor-pointer"
              >
                andrei-design
              </a>
              . All rights reserved.
            </p>
            <div className="flex items-center justify-center sm:ml-auto">
              <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1 cursor-pointer">
                Privacy Policy
              </p>
              <p className="text-p5 transition-all duration-500 hover:text-p1 cursor-pointer">
                Terms of Use
              </p>
            </div>
          </div>

          {/* Coloană 2: Pictograme de social media */}
          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a 
                  href={url} 
                  className="social-icon" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={title}
                >
                  <img
                    src={icon}
                    alt={`${title} icon`}
                    className="size-1/3 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
