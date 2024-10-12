import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/dashboard">
      <Image src="/logo.svg" width={48} height={48} priority alt="Logo" />{" "}
    </Link>
  );
};

export default Logo;
