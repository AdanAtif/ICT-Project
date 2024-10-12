import Link from "next/link";
import { RiArrowDownSLine, RiBriefcase4Fill, RiTodoFill } from "react-icons/ri";
import { Button } from "./ui/button";
import { Send, Download } from "lucide-react";
import Socials from "./Socials";
import DevImg from "./DevImg";
import Badge from "./Badge";
const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28  bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col ju\ mx-auto xl:mx-0 text-center xl:text-left ">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1">Hello, my name is Adan Atif</h1>
            <p className="subtitle max-w-[500px] mx-auto xl:mx-0">
              Brief description with insights into myself, my vocational journey
              ,and what I engage in professionally
            </p>
            <div className="flex flex-col gap-x-3 mx-auto p-y-3 md:flex-row gap-y-3 xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me
                  <Send size={18} />
                </Button>
              </Link>
              <Button className="gap-x-2" variant="secondary">
                Download CV
                <Download size={18} />
              </Button>
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all "
            />
          </div>
          <div className="hidden xl:flex relative">
            <Badge
              containerStyles="absolute top-[24%] -left-[5em]"
              icon={<RiBriefcase4Fill />}
              endCountNum={2}
              badgeText="Years Of Experiance"
            />
             <Badge
              containerStyles="absolute top-[80%] -left-[1em]"
              icon={<RiTodoFill />}
              endCountNum={6}
              endCountText="k"
              badgeText="Finished Project"
            />
            <Badge
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiBriefcase4Fill />}
              endCountNum={9}
              endCountText="k"
              badgeText="Happy Clients"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape_light dark:bg-hero_shape_dark w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/developer.png"
            />
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce  dark:fill-black">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
