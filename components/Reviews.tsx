"use client";

import Image from "next/image";
import { Card, CardHeader, CardDescription, CardTitle } from "./ui/card";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// Data for how webpages work
const webPageData = [
  {
    image: `/about/domain.png`,
    title: `What is a Domain Name?`,
    description: `A domain name is your website's address on the internet (like www.example.com). When a user types it in the browser, it translates into an IP address and leads them to your website.`,
  },
  {
    image: `/about/hosting.png`,
    title: `What is Web Hosting?`,
    description: `Web hosting is where your website's files are stored. A hosting provider gives you the server space to store and serve these files to visitors.`,
  },
  {
    image: `/about/browser-server.png`,
    title: `How Browsers and Servers Work`,
    description: `When you enter a website URL, the browser sends a request to the web server. The server responds by sending back the necessary files (HTML, CSS, JS), and the browser assembles them to display the webpage.`,
  },
  {
    image: `/about/html-css-js.png`,
    title: `HTML, CSS, and JavaScript`,
    description: `Webpages are created using HTML for structure, CSS for styling, and JavaScript for interactivity. These three are the building blocks of any website.`,
  },
  {
    image: `/about/ssl.png`,
    title: `What is SSL and Why is it Important?`,
    description: `SSL (Secure Sockets Layer) encrypts data sent between the browser and the server, ensuring secure communication. Websites with SSL certificates show a padlock in the address bar.`,
  },
  {
    image: `/about/responsive-design.png`,
    title: `Responsive Web Design`,
    description: `Responsive design ensures that your website looks good on all devices, from phones to desktops. It's achieved using flexible layouts, images, and CSS media queries.`,
  },
];

const AboutWebPage = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">
          How Web Pages Work
        </h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[365px] sm:h-[400px] md:h-[350px]"
        >
          {webPageData.map((section, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      {/* image */}

                      {/* title */}
                      <div className="flex flex-col">
                        <CardTitle>{section.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {section.description}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default AboutWebPage;
