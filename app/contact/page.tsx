import Image from "next/image";
import MailIcon from "@/assets/email-removebg-preview.png";
import PhoneIcon from "@/assets/phone-removebg-preview.png";
import React from "react";

export default function Contact() {
  return (
    <>
      <div className="flex justify-center items-center mt-20">
      <div className="flex flex-col space-y-6 bg-blue-300 w-full max-w-4xl p-8 rounded-xl text-white">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="font-bold text-4xl space-y-8 tracking-wide">Contactez moi</h1>
            </div>
            <div className="flex flex-col space-y-6">
              <div className='inline-flex space-x-2 items-center'>
                <Image src={PhoneIcon} width={50} height={50} alt="" />
                <span>06 35 19 26 70</span>
              </div>
            <div className='inline-flex space-x-2 items-center'>
                <Image src={MailIcon} width={50} height={50} alt="" />
                <span>cedric.vidalie@ynov.com</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600">
           <form action="" className="flex flex-col space-y-4">
              <div>
                <label className="text-sm ">Votre nom</label>
                <input type="text" placeholder="Votre nom" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-900"/>
              </div>
              <div>
                <label className="text-sm ">Votre adresse e-mail</label>
                <input type="text" placeholder="Votre adresse e-mail" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-900"/>
              </div>
              <div>
                <label className="text-sm ">Votre message</label>
                <textarea placeholder="Votre message" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-900"/>
              </div>
              <button className="inline-block self-center bg-blue-600 text-white font-bold rounded-lg px-6 py-2 uppercase">
                Envoyer
              </button>
           </form>
        </div>
      </div>
    </div>
    </>
  )
}