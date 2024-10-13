import Link from "next/link";
import { RiArrowDownSLine, RiBriefcase4Fill, RiTodoFill } from "react-icons/ri";
import { Button } from "./ui/button";
import { Send, Download } from "lucide-react";
import Socials from "./Socials";
import DevImg from "./DevImg";
import Badge from "./Badge";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Development
            </div>
            <h1 className="h1">How Web Pages Work</h1>
            <p className="subtitle max-w-[500px] mx-auto xl:mx-0">
              Understand the fundamentals of how web pages are created, how they
              function, and the role of domain names in making web browsing
              possible.
            </p>
            <div className="flex flex-col gap-x-3 mx-auto py-3 md:flex-row gap-y-3 xl:mx-0 mb-12">
              <a href="https://en.wikipedia.org/wiki/Web_page">
                <Button className="gap-x-2">
                  Learn More
                  <Send size={18} />
                </Button>
              </a>
              <a href="ict.pptx" download>
                <Button className="gap-x-2" variant="secondary">
                  Download Guide
                  <Download size={18} />
                </Button>
              </a>
            </div>
          </div>

          <div className="hidden xl:flex relative">
            <Badge
              containerStyles="absolute top-[24%] -left-[5em]"
              icon={<RiBriefcase4Fill />}
              endCountNum={30}
              badgeText="Years of Web Evolution"
            />
            <Badge
              containerStyles="absolute top-[80%] -left-[1em]"
              icon={<RiTodoFill />}
              endCountNum={2}
              endCountText="B"
              badgeText="Websites Created Globally"
            />
            <Badge
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiBriefcase4Fill />}
              endCountNum={1.9}
              endCountText="B"
              badgeText="Active Websites"
            />

            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape_light dark:bg-hero_shape_dark w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/developer.png"
            />
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce dark:fill-black">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
