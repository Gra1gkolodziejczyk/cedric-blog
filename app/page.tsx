import Image from "next/image";
import ImageAccueil from "@/assets/codeur-developpeur-web.jpg";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="flex justify-center p-32">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold flex justify-center pb-10">Le Blog de Cédric</h1>
            <Image src={ImageAccueil} alt="image-accueil" width={900} height={900} />
          </div>
      </div>
    </>
  )
}
