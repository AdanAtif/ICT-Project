"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: ".Com",
    name: "Commercial",
    description:
      ".Com is used by businesses, organizations, and individuals for various purposes.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: ".Org",
    name: "organization",
    description:
      ".Org is used by non-profit organizations like educational institutions, community groups.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: ".Net",
    name: "Internet",
    description:
      ".Net is used by networking services such as Internet service providers and infrastructure companies.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: ".Mil",
    name: "Military",
    description:
      ".Mil is used by military of different countries for their official websites.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: ".Edu",
    name: "Education",
    description:
      ".Edu is used by educational institutions like schools, colleges, and universities.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: ".Gov",
    name: "Government",
    description:
      ".Gov is used by government agencies and departments of different countries.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: ".Int",
    name: "International",
    description:
      ".Int is used by international organizations like the United Nations.",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Domain Name's</h2>
          <p className="subtitle mb-8">
            A domain name refers to your website address. This is what users
            type in a browser's search bar to directly access your website. A
            domain name is unique and cannot be shared between different sites
          </p>
          <Link href="/">
            <Button>All main domain's</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute xl:right-4 right-0 top-0">
          <Swiper
            className="h-[510px] sm:h-[530px] md:h-[500px] xl:h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
