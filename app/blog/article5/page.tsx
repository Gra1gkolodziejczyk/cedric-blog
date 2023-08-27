import FinStage from "@/assets/fin de stage.jpeg"
import Image from 'next/image'
import Motivation from "@/assets/motivation.jpeg"
import React from 'react'

export default function Article5() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col p-10">
        <h1 className="text-blue-600 flex justify-center text-3xl">Fin de L&apos;aventure</h1>
        <p className="flex text-blue-500 justify-center text-xl">Date: 28/07</p>
        <p className="text-lg pr-48 pl-48 pt-10">
          Lors de mon dernier jour, M. KOLODZIEJCZYK m&apos;a invité au restaurant afin de dresser un bilan de mon stage. 
          Globalement, il se montre satisfait de la contribution que j&apos;ai apportée à son entreprise, 
          et je ressens une certaine fierté à l&apos;entendre dire qu&apos;il ne regrette pas de m&apos;avoir accueilli en tant que stagiaire.
        </p>
          <p className="text-lg pr-48 pl-48 pt-10">
            J&apos;ai vraiment apprécié effectuer mon stage au sein de cette structure. 
            J&apos;ai eu le sentiment d&apos;être utile et j&apos;ai beaucoup appris en me confrontant à un environnement professionnel réel. 
            Toutefois, je ressens une pointe de déception de ne pas voir le projet aboutir entièrement durant mes six semaines de présence. 
            Je comprends néanmoins qu&apos;il demeure des ajustements à finaliser avec le client avant la mise en ligne définitive du site.
          </p>
          <p className="text-lg pr-48 pl-48 pt-10">
            En conclusion, ce stage a été une expérience enrichissante. 
            J&apos;ai découvert plusieurs facettes du développement web, notamment la partie liée à la sécurité, 
            un domaine que j&apos;ai trouvé particulièrement captivant. Bien que je n&apos;envisage pas de poursuivre une carrière dans le développement web, 
            je tire un bilan positif de cette immersion et suis reconnaissant pour cette opportunité d&apos;apprentissage. 
          </p>
          <div className="flex justify-center mt-7">
            <div className="mr-10">
              <Image src={FinStage} alt="" width={500} height={500} />
            </div>
            <Image src={Motivation} alt="" width={500} height={500} />
          </div>
      </div>
    </div>
  )
}