import Docker from "@/assets/docker.png";
import Image from 'next/image';
import MySQL from "@/assets/Mysql.jpeg";
import NestJs from "@/assets/nestJs.png";
import React from 'react';

export default function Article2() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col p-10">
        <h1 className="text-blue-600 flex justify-center text-3xl">Le commencement</h1>
        <p className="flex text-blue-500 justify-center text-xl">Date: 13/06</p>
        <p className="text-lg pr-48 pl-48 pt-10">
        Mon stage se déroulera principalement à distance. Toutefois, 
        pour son commencement, nous avons décidé d&apos;une phase en présentiel. 
        Durant cette matinée, nous avons procédé à l&apos;installation des 
        diverses technologies requises pour la réalisation de mon stage. 
        Parmi elles, on retrouve : le CLI de nestjs, mysql, aws et docker. Cette étape s&apos;est avérée longue et complexe, 
        car non seulement les installations prennent du temps, mais la configuration a aussi demandé une attention particulière. 
        Cela m&apos;a occupé une grande partie de la matinée.
        </p>
          <p className="text-lg pr-48 pl-48 pt-10">
          L&apos;après-midi, M. KOLODZIEJCZYK m&apos;a détaillé le contrat qu&apos;il avait signé avec une boutique de 
          vêtements située à Agen, juste avant mon intégration. Son objectif est de développer un site e-commerce complet, 
          intégrant tant le back-end que le front-end. Le design nous étant fourni par le magasin, nous pourrons 
          nous focaliser pleinement sur le développement. Pour ma part, je me chargerai de la partie back-end tandis 
          que Graig prendra en main le front-end, tout en me soutenant dans mes missions. Grâce à ce briefing, j&apos;ai saisi 
          l&apos;ampleur et les enjeux de mes responsabilités à venir. 
          </p>
          <div className="flex justify-center mt-10">
            <div className='pr-20'>
              <Image src={Docker} alt="image-docker" width={200} height={200} />
            </div>
            <div className='pr-20'>
              <Image src={NestJs} alt="image-nestjs" width={200} height={200} />
            </div>
            <div className='pr-20'>
              <Image src={MySQL} alt="image-sql" width={200} height={500} />
            </div>
          </div>
      </div>
    </div>
  )
}