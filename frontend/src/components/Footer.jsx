import { Footer, FooterCopyright, FooterDivider } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterComp = () => {
  return (
    <div>
      <Footer container className="border border-t-8 border-blue-500">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            <div className="mt-5">
              <Link
                to="/"
                className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
              >
                <span className="px-2 py-1 bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 rounded-lg text-white">
                  Blog
                </span>
                os
              </Link>
            </div>
            <div className="grid gap-8  mt-4 sm: grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="About" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="#"
                    target="_blank"
                    rel="noopner noreferrer"
                  >
                    Blogs
                  </Footer.Link>
                  <Footer.Link
                    href="/about"
                    target="_blank"
                    rel="noopner noreferrer"
                  >
                    About Blogos
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Useful Links" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="#"
                    target="_blank"
                    rel="noopner noreferrer"
                  >
                    Contact
                  </Footer.Link>
                  <Footer.Link
                    href="/contact"
                    target="_blank"
                    rel="noopner noreferrer"
                  >
                    Stay in touch
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Social links" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="https://github.com/zohir96os"
                    target="_blank"
                    rel="noopner noreferrer"
                  >
                    <FaGithub className="lg: text-md sm: text-lg " />
                  </Footer.Link>
                  <Footer.Link href="mailto:zohir96os@gmail.com">
                    <FaEnvelope className="lg: text-md sm: text-lg " />
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <FooterDivider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <FooterCopyright
              href="#"
              by="zohiros"
              year={new Date().getFullYear()}
            />
            <div className="flex gap-6  sm:mt-0 mt-4 sm:justify-center">
              <Footer.Icon
                href="https://github.com/zohir96os"
                target="_blank"
                icon={FaGithub}
              />
              <Footer.Icon
                href="https://twitter.com/zohir96os"
                target="_blank"
                icon={FaXTwitter}
              />
              <Footer.Icon
                href="https://www.facebook.com/zo4os"
                target="_blank"
                icon={FaFacebook}
              />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default FooterComp;
