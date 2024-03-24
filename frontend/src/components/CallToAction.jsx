import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Do you want to advertise with us?</h2>
        <p className="text-gray-500 my-2">
          Contact us now to secure your spot and start maximizing your impact.
        </p>
        <Button
          gradientDuoTone="greenToBlue"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="mailto:zohir96os@gmail.com"
            target="_blank"
            rel="noopener noreferer"
          >
            Get in touch
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          src="https://blog.admixer.com/wp-content/uploads/2020/06/sellads-1616x790-1.png"
          alt="ad-space"
        />
      </div>
    </div>
  );
}
