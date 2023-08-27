import Image from "next/image";
import cv from "@/assets/CV.png";

export default function CV() {
  return (
    <div className="flex justify-center mt-20">
      <Image src={cv} alt="CV" width={500} height={1000}/>
    </div>
  )
}