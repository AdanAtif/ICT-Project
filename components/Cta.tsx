import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="py-24 bg-tertiary dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className=" h2 max-w-xl text-center mb-8">
            Prepared to look at an example on a JavaScript framework? and how it
            works?
          </h2>
          <Link href="/contact">
            <Button>Example</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
