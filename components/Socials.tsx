"use client";
import Link from "next/link";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";
const icons =[
  {
    path:"/",
    name:<RiYoutubeFill/>
  },
  {
    path:"/",
    name:<RiLinkedinFill/>
  },
  {
    path:"/",
    name:<RiGithubFill/>
  },
  {
    path:"/",
    name:<RiFacebookFill/>
  },
  {
    path:"/",
    name:<RiInstagramFill/>
  },

]
interface SocialsProps{
  containerStyles:String;
  iconStyles:String;
}
const Socials:React.FC<SocialsProps> = ({containerStyles,iconStyles}) => {
  return <div className={`${containerStyles}`}>
{icons.map((icon,index)=>{
  return <Link href={icon.path} key={index}>
  <div className={`${iconStyles}`}>{icon.name}</div>
  </Link>
})}
  </div>;
};

export default Socials;
