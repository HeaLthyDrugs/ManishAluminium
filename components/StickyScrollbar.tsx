import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Button } from "./ui/moving-border";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
];

const StickyScrollbar = () => {
  return (
    <div className="p-10 justify-center items-center">
      <div className="my-10">
        <TextGenerateEffect
          words="Specifications"
          className="text-center 0md:text-5xl lg:text-3xl"
        />
      </div>
      <div className="w-full">
        <StickyScroll content={content} />
      </div>
      <div className="flex justify-center relative my-10 z-10">
        <a href="/gallery">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Know more
          </Button>
        </a>
      </div>
    </div>
  );
};

export default StickyScrollbar;
