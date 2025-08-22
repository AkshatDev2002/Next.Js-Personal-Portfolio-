import React from "react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <div className="flex flex-col gap-4 mb-12">
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="flex flex-col gap-4"
      >
        <input
          type="hidden"
          name="access_key"
          value="21f2f38e-b0ff-4195-a016-da0a48247c55"
        />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="bg-transparent border-b border-gray-500 dark:border-gray-400 py-2 px-1 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-red-400"
          style={{ fontFamily: "var(--font-inria-sans)" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="bg-transparent border-b border-gray-500 dark:border-gray-400 py-2 px-1 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-red-400"
          style={{ fontFamily: "var(--font-inria-sans)" }}
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="bg-transparent border border-gray-500 dark:border-gray-400 py-2 px-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-red-400 resize-none"
          style={{ fontFamily: "var(--font-inria-sans)" }}
        ></textarea>

        <div className="flex justify-center">
          <Button variant="default" type="submit">
            Send
          </Button>
        </div>
      </form>

      <p
        className="text-base mt-4 text-gray-900 dark:text-white"
        style={{
          fontFamily: "var(--font-inria-sans)",
          lineHeight: "1.6",
        }}
      >
        You can also connect with me via
        <a
          href="https://www.linkedin.com/in/akshat-dev-14ad/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-400 transition ml-1"
        >
          LinkedIn
        </a>
        .
      </p>
    </div>
  );
};

export default Contact;
