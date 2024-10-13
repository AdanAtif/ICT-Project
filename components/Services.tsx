import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Html",
    description:
      "HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "CSS",
    description:
      "CSS stands for “Cascading Style Sheets”. CSS is used for laying out and structuring web pages.It is used for styling web pages.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "JavaScript",
    description:
      "JavaScript is a scripting or programming language that allows you to implement complex features on web pages.",
  },
];
const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          What are web page's made of?
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 xl:gap-x-8 justify-center gap-y-12 xl:gap-y-24">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative "
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px] ">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center ">
                  <CardTitle className="mb-4 ">{item.title}</CardTitle>
                  <CardDescription className="text-lg ">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
