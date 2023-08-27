import Image from 'next/image';
import ImageConnexion from "@/assets/imageConnexion.png"
import ImageConnexion2 from "@/assets/imageConnexion2.png"
import JWT from "@/assets/Jwt.png";
import Pantalon from "@/assets/pantalon.png";
import React from 'react';

export default function Article3() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col p-10">
        <h1 className="text-blue-600 flex justify-center text-3xl">Les premières fondations</h1>
        <p className="flex text-blue-500 justify-center text-xl">Date: 27/06</p>
        <p className="text-lg pr-48 pl-48 pt-10">
        Au cours des deux dernières semaines, nous avons véritablement plongé dans le vif du projet.
        Nous avons configuré notre environnement de travail en utilisant git, un outil que j&apos;ai l&apos;opportunité d&apos;exploiter 
        de façon professionnelle pour la première fois.
        </p>
          <p className="text-lg pr-48 pl-48 pt-10">
          Ma mission principale était de jeter les bases du back-end pour un site e-commerce. 
          Dans cette optique, j&apos;ai mis en place une page d&apos;authentification et l&apos;ai reliée à notre base de données MySQL. 
          J&apos;ai également été chargé de la gestion des JWT (Jetons Web JSON), qui sont utilisés pour l&apos;authentification.
          </p>
          <p className="text-lg pr-48 pl-48 pt-10">
          Graig m&apos;a par la suite confié la réalisation d&apos;une fonctionnalité de panier, avec l&apos;objectif d&apos;offrir aux clients la 
          flexibilité d&apos;ajouter, consulter, modifier ou supprimer des articles – ce qu&apos;on désigne généralement par le terme CRUD (Create, Read, Update, Delete). 
          La mise en place s&apos;est révélée quelque peu ardue en raison de bugs que je n&apos;avais pas anticipés. Malgré les défis, 
          j&apos;ai persévéré et ai finalement réussi à mettre en place la fonctionnalité.
          Pour les étapes à venir, je me pencherai sur l&apos;élaboration de filtres pour les produits du site. <br />
          voir photo 4 ou l&apos;on peut observer l&apos;affiche des photos des articles.
          </p>
          <div className="flex justify-center mt-10 row">
            <div className='pl-20'>
              <Image src={JWT} alt="" width={200} height={200} />
            </div>
            <div className='pl-20'>
              <Image src={ImageConnexion} alt="" width={200} height={200} />
            </div>
            <div className='pl-20'>
              <Image src={ImageConnexion2} alt="" width={200} height={200} />
            </div>
            <div className='pl-20'>
              <Image src={Pantalon} alt="" width={200} height={200} />
            </div>
          </div>
      </div>
    </div>
  )
}