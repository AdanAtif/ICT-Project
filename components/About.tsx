import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Adan Aitf",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+92 302 6894322",
  },
  {
    icon: <MailIcon size={20} />,
    text: "adanatif60@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 7 Sep,2004",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Intermidate in Computer Science and Ongoing bachelor in Software Engneering",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Block 13B, New Garden Block, Saeed Coloney 2,FSD,Pk",
  },
];
const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML,CSS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "Javascript ,Typesrcipt",
      },
      {
        name: "Back-end Deveploment",
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
const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Virtual University",
        qualification: "Bachelor of Software Engneering",
        years: "2023 - ongoing",
      },
      {
        university: "Punjab College",
        qualification: "Intermidate in ICS",
        years: "2021 - 2023",
      },
      {
        university: "Kohinoor Grammmer School",
        qualification: "Board of Secondary Education",
        years: "2008 - 2021",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Techloset",
        role: "Web & Mobile development",
        years: "2023 - Present",
      },
      {
        company: "Salayni Welfare",
        role: "Web & Mobile development",
        years: "2022 - 2023",
      },
    ],
  },
];

const About = () => {
  const getData = (arr: any, title: string) => {
    return arr.find((item: any) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24 ">
      <div className="container mx-atuo">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          <div className="flex-1 ">
            <Tabs defaultValue="personal">
              {/* Tablists */}
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Presonal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* Tab content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4 ">
                      Unmatched Service Quality for Over 2 Years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specialize in cafting intvitive websites with
                      cutting-edge technoloy, delivering dynamic and engaging
                      user experience.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border" />
                      <div className="flex md:flex-row flex-col items-center">
                        <div>English,Urdu,</div>
                        <div>Chinese,japanese{"(partically)"}</div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Qualification */}
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h2 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* experience & education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item: any, index: number) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item: any, index: number) => {
                              const { university, qualification, years } = item;
                              return (
                                <div
                                  className="flex gap-x-8 group "
                                  key={index}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8 odd:">Tools I Use Exeryday</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"/>
                        {/* Skills list */}
                        <div>
                          {getData(skillData, "skills").data.map(
                            (item: any, index: number) => {
                              const { name } = item;
                              return (
                                <div
                                key={index}
                                 className="w-2/4 text-center xl:text-left  mx-auto xl:mx-0">
                                  <div className="font-medium">{name}</div>
                                </div>
                              );
                            }
                          )}
                        </div>
                    </div>
                    <div>
                      <h4 className="text-4xl font-semibold mb-2 xl:text-left">Tools</h4>
                      <div className="border-b bode-border mb-4"/>
                        {/* tools list */}
                        <div className="flex gap-x-8 justify-center xl:justify-start">
                          {getData(skillData,"tools").data.map((item:any,index:number)=>{
                            const {imgPath} = item;
                            return <div 
                            key={index}
                            className="">
                                   <Image src={imgPath} width={48} height={49} alt="" priority/>
                            </div>
                          })}
                        </div>
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

export default About;
