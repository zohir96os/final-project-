import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link to="/" className=" font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 rounded-lg text-white">
              Blog
            </span>
            os
          </Link>
          <p className="text-sm mt-5">
            Welcome to Blogos, You can sign up with email and password, Or
            continue using your Google account.
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Username:" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Email:" />
              <TextInput
                type="mail"
                placeholder="example@example.com"
                id="email"
              />
            </div>
            <div>
              <Label value="Password:" />
              <TextInput type="password" placeholder="Password" id="password" />
            </div>
            <Button
              className="bg-gradient-to-r from-cyan-500 to-blue-500"
              type="submit"
            >
              Sign up
            </Button>
          </form>
          <div className="flex  gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sing-in" className="text-blue-500">
              Sing in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
