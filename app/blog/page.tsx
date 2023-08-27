import Link from "next/link";
import React from "react";

export default function Blog() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col text-xl">
        <h1 className="flex justify-center p-10 text-3xl font-bold">Blog</h1>
        <div className="flex flex-row pb-2">
        <Link href="/blog/article1" className="bg-blue-300 hover:bg-blue-500 hover:text-white rounded-xl p-10 flex flex-col justify-between">
          <div className="flex justify-center">
            <h1 className="text-2xl">Le premier jour</h1>
          </div>
          <div className="text-xl flex flex-row">
            <p className=" mr-4">date : 12/06</p>
            <p className="">Auteur : Cedric Vidalie</p>
          </div>
        </Link>
        <div className="pl-2">
        <Link href="/blog/article2" className="bg-blue-300 hover:bg-blue-500 hover:text-white rounded-xl rounded-b-2 p-10 flex flex-col justify-between">
          <div className="flex justify-center">
          <h1 className="text-2xl">Le commencement</h1>
          </div>
          <div className="text-xl flex flex-row">
            <p className=" mr-4">date : 12/06</p>
            <p className="">Auteur : Cedric Vidalie</p>
          </div>
        </Link>
        </div>
        </div>
        <div className="flex flex-row pb-2">
        <div>
        <Link href="/blog/article3" className="bg-blue-300 hover:bg-blue-500 hover:text-white rounded-xl p-10 flex flex-col justify-between">
          <div className="flex justify-center">
            <h1 className="text-2xl">Les premières fondations</h1>
          </div>
          <div className="text-xl flex flex-row">
            <p className=" mr-4">date : 12/06</p>
            <p className="">Auteur : Cedric Vidalie</p>
          </div>
        </Link>
        </div>
        <div className="pl-2">
        <Link href="/blog/article4" className="bg-blue-300 hover:bg-blue-500 hover:text-white rounded-xl p-10 flex flex-col justify-between">
          <div className="flex justify-center">
            <h1 className="text-2xl"></h1>
          </div>
          <div className="text-xl flex flex-row">
            <p className=" mr-4">date : 12/06</p>
            <p className="">Auteur : Cedric Vidalie</p>
          </div>
        </Link>
        </div>
        </div>
        <div className="flex justify-center">
        <Link href="/blog/article5" className="bg-blue-300 hover:bg-blue-500 hover:text-white rounded-xl p-10 flex flex-col justify-between">
          <div className="flex justify-center">
            <h1 className="text-2xl">Fin de mon stage</h1>
          </div>
          <div className="text-xl flex flex-row">
            <p className=" mr-4">date : 12/06</p>
            <p className="">Auteur : Cedric Vidalie</p>
          </div>
        </Link>
        </div>
      </div>
    </div>
  )
}