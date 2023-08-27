import Image from 'next/image'
import React from 'react'
import Security from "@/assets/security.jpeg"
import Stripe from "@/assets/stripe.png";

export default function Article4() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col p-10">
        <h1 className="text-blue-600 flex justify-center text-3xl">On avance lentement mais sûrement</h1>
        <p className="flex text-blue-500 justify-center text-xl">Date: 11/07</p>
        <p className="text-lg pr-48 pl-48 pt-10">
          Au cours de ces deux dernières semaines, 
          j&apos;ai rencontré des défis significatifs dans l&apos;accomplissement de mes tâches. La correction des bugs divers m&apos;a pris beaucoup de temps, 
          l&apos;aspect le plus ardu étant d&apos;identifier précisément l&apos;origine de mes erreurs afin de les rectifier. 
          Ces difficultés ont pesé sur mon moral. J&apos;ai souvent ressenti que je dérangeais Graig en lui posant constamment des questions. 
          Cependant, selon lui, je me débrouille plutôt bien et fais preuve d&apos;une certaine autonomie. Cette reconnaissance de mes efforts renforce ma motivation, 
          et je m&apos;en réjouis.
        </p>
          <p className="text-lg pr-48 pl-48 pt-10">
          Ma mission actuelle se concentre sur la sécurisation du site, 
          en particulier sur le chiffrement des données. Comme c&apos;est une première pour moi, 
          je consacre beaucoup de temps à cette tâche, sachant combien il est crucial d&apos;être méticuleux dans ce domaine. 
          Nous avons opté pour un mode de travail principalement en distanciel, ponctué d&apos;une journée en présentiel afin de maintenir un contact direct. 
          Cette approche me convient bien, d&apos;autant plus que les déplacements sont chronophages pour moi.
          </p>
          <p className="text-lg pr-48 pl-48 pt-10">
          Une fois cette mission de sécurisation accomplie, je me pencherai sur l&apos;intégration de Stripe, 
          afin d&apos;implémenter une solution de paiement en ligne pour le site. 
          </p>
          <div className="flex justify-center mt-7">
            <div className='mr-10'>
              <Image src={Stripe} alt="" width={300} height={300} />
            </div>
            <Image src={Security} alt="" width={300} height={300} />
          </div>
      </div>
    </div>
  )
}