"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, Code, Cloud, GlobeIcon } from "lucide-react";

const processSteps = [
  {
    icon: <Globe size={20} />,
    text: "Register a Domain Name",
    description:
      "The first step to create a webpage is to register a domain name. This is the address people use to find your site.",
  },
  {
    icon: <Cloud size={20} />,
    text: "Set Up Hosting",
    description:
      "Web hosting services store your website files and make them accessible online.",
  },
  {
    icon: <Code size={20} />,
    text: "Develop the Website",
    description:
      "Using HTML, CSS, and JavaScript, developers create the structure, design, and functionality of a website.",
  },
  {
    icon: <GlobeIcon size={20} />,
    text: "Launch and Maintain",
    description:
      "After development, the site is launched and maintained with updates, security patches, and optimizations.",
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML & CSS",
        explanation:
          "HTML structures the webpage, while CSS styles it to ensure it looks appealing and responsive.",
      },
      {
        name: "JavaScript & React",
        explanation:
          "JavaScript adds interactivity to the site, while React is a framework that simplifies building dynamic user interfaces.",
      },
      {
        name: "Responsive Design",
        explanation:
          "Ensures websites look and function well on all device sizes, including phones, tablets, and desktops.",
      },
      {
        name: "Back-end Development",
        explanation:
          "Handles the server, database, and application logic, using technologies like Node.js and databases like MongoDB.",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const HowWebpagesWork = () => {
  const getData = (arr: any, title: string) => {
    return arr.find((item: any) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24 ">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          How Webpages Are Made
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <Image
              src="/about/developer.png"
              alt="Web Development Process"
              width={505}
              height={505}
              className="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              priority
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="steps">
              {/* Tab List */}
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="steps">
                  Process Steps
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="tools">
                  Tools
                </TabsTrigger>
              </TabsList>
              {/* Tab Content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* Process Steps */}
                <TabsContent value="steps">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Building a Website in 4 Steps</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Creating a webpage involves several steps, from securing a
                      domain name to writing code and launching the site.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {processSteps.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div>
                            <div className="font-medium">{item.text}</div>
                            <div className="text-muted-foreground">
                              {item.description}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">
                      Skills Needed for Web Development
                    </h3>
                    <div className="mb-16">
                      {getData(skillData, "skills").data.map(
                        (item: any, index: number) => {
                          return (
                            <div key={index} className="mb-8">
                              <div className="font-semibold text-lg">
                                {item.name}
                              </div>
                              <div className="text-muted-foreground">
                                {item.explanation}
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </TabsContent>

                {/* Tools */}
                <TabsContent value="tools">
                  <div>
                    <h4 className="text-4xl font-semibold mb-2 xl:text-left">
                      Tools
                    </h4>
                    <div className="border-b bode-border mb-4" />
                    {/* tools list */}
                    <div className="flex gap-x-8 justify-center xl:justify-start">
                      {getData(skillData, "tools").data.map(
                        (item: any, index: number) => {
                          const { imgPath } = item;
                          return (
                            <div key={index} className="">
                              <Image
                                src={imgPath}
                                width={48}
                                height={49}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWebpagesWork;
