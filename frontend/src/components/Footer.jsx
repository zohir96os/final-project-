import { Footer, FooterCopyright, FooterDivider } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Logo from "./Logo";

const FooterComp = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div>
      <Footer container className="border border-t-8 border-blue-500">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            <div className="mt-5">
              <Logo />
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
                  {currentUser && currentUser.isAdmin ? (
                    <Footer.Link href="/dashboard?tab=posts">Posts</Footer.Link>
                  ) : (
                    ""
                  )}
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Useful Links" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="/dashboard?tab=profile"
                    rel="noopner noreferrer"
                  >
                    Profile
                  </Footer.Link>
                  {currentUser && currentUser.isAdmin ? (
                    <Footer.Link href="/create-post">Create Post</Footer.Link>
                  ) : (
                    ""
                  )}
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
