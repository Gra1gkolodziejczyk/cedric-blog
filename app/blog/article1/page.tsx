import Image from "next/image";
import PoignetMain from "@/assets/poignetmain.jpeg";
import React from "react";

export default function Article1() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col p-10">
        <h1 className="text-blue-600 flex justify-center text-3xl">Le premier jour</h1>
        <p className="flex text-blue-500 justify-center text-xl">Date: 12/06</p>
        <p className="text-lg pr-48 pl-48 pt-10">
          Lors du premier jour, j&apos;ai eu la chance de rencontrer mon patron, 
          KOLODZIEJCZYK Graig. Il est important pour moi de construire des relations solides et 
          harmonieuses avec mes futurs collègues, afin que tout se déroule au mieux lorsque je débuterai mon stage.
        </p>
          <p className="text-lg pr-48 pl-48 pt-10">
          Je suis arrivé dans les locaux vers 10H30, et on m&apos;a offert un café avant de m’emmener faire le tour des bureaux. 
          Après cette visite, nous sommes allés déjeuner aux alentours de 11H30.
          Ce moment passé ensemble m’a donné l&apos;opportunité de discuter de mes passions et de mes futurs projets avec M. KOLODZIEJCZYK. 
          J&apos;ai également eu la chance d&apos;en apprendre davantage sur lui. Cela m’a renforcé dans ma volonté de ne pas le décevoir et 
          de donner le meilleur de moi-même lors de ce stage.
          </p>
          <p className="text-lg pr-48 pl-48 pt-10">
          Puis, vers 14h, Graig m’a détaillé les missions et les valeurs de son entreprise. 
          L&apos;entreprise de M. KOLODZIEJCZYK est une start-up récente spécialisée dans la création et la maintenance de sites web. 
          En échangeant avec lui, j&apos;ai compris que je pouvais réellement apporter une valeur ajoutée grâce à mon travail, 
          ce qui m&apos;a énormément motivé.
          Nous avons conclu notre journée après cette présentation. Je suis reparti vers 16h, 
          impatient à l&apos;idée de revenir le lendemain pour entamer concrètement mon stage.
          </p>
          <div className="flex justify-center mt-7">
            <Image src={PoignetMain} alt="" width={500} height={500} />
          </div>
      </div>
    </div>
  )
}