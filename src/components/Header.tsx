import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <header
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        <nav
          className={`relative flex w-full items-center text-slate-50 justify-between bg-white py-2 shadow-dark-mild dark:bg-body-dark lg:flex-wrap lg:justify-start lg:py-4`}
          data-twe-navbar-ref  style={{
            backgroundColor: theme === "light" ? "lightgray" : "black",
            color: theme === "light" ? "#000" : "#fff"
          }}
        >
          <div className="flex w-full flex-wrap items-center justify-between px-3">
            <div className="flex items-center">
              <button
                className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                type="button"
                data-twe-collapse-init
                data-twe-target="#navbarSupportedContentY"
                aria-controls="navbarSupportedContentY"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <div
              className="!visible hidden grow basis-[100%] items-center text-center lg:!flex lg:basis-auto lg:text-left"
              id="navbarSupportedContentY"
              data-twe-collapse-item
            >
              <ul
                className="me-auto flex flex-col lg:flex-row"
                data-twe-navbar-nav-ref
              >
                <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                  <a
                    className={`block text-${theme === "dark" ? "#000" : "#fff"} lg:px-2`}
                    href="#!"
                    data-twe-nav-link-ref
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-2 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                  <a
                    className={`block text-${theme === "dark" ? "#000" : "#fff"} lg:px-2`}
                    href="#!"
                    data-twe-nav-link-ref
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className={`px-6 py-20 text-center text-surface bg-${theme === "dark" ? "gray-400" : "orange-900"}`}>
          <h1 className="mb-6 text-5xl font-bold">Heading</h1>
          <h3 className="mb-8 text-3xl font-bold">Subheading</h3>
          <a
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            href="#!"
            role="button"
            onClick={toggleTheme}
          >
            Toggle Theme
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
