"use client";
import { Calendar, Clock, Minus, Plus } from "@/components/Icons";
import { NavBar } from "@/components/NavBar/NavBar";
import { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState(1)

  return (
    <div className="w-full h-screen">
      <NavBar />
      <main className="px-3 flex flex-col gap-16 pt-5 pb-10">
        <section className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">El caballo de la Ford</h2>
          <div className="flex justify-between">
            <div className="flex gap-2"><Calendar/> 28 FEB 2025</div>
            <div className="flex gap-2"><Clock/> 11:59 PM</div>
          </div>
          <img src="https://img.freepik.com/foto-gratis/gatito-pared-monocromatica-detras-ella_23-2148955132.jpg" alt="" className="w-screen h-64 rounded object-cover" />
          <div>
            <p className="text-lg font-bold">Descripcion Rifa</p>
            <p>EL CABALLO DE LA FORD   

              Ford bronco automática 4x4 con cauchos Goodrich, quema coco, tapicería de piel + 2.000 en la guantera.   
              <br />
              Premios pronto pago: 
              1.000$ 24/02/25 
              1.000$ 25/02/25 
              1.000$ 26/02/25 
              1.000$ 27/02/24  

              <br />
              Valor del boleto 15 dolaritosss.  
              <br />

              Puedes comprar de un boleto en adelante peeeeeroooo si llevas más de 3 boletos  Doblas los premios en efectivo.   
              <br />

              Si llevas más de 10 boletos cuando te ganes la camioneta te llevamos a los Roques y te damos 2 iPhone 16 pro max!  
              <br />

              Valor del boleto 15 dolaritos  
              <br />

              Promo: 3 boletos x 30 dolaritos.   
              <br />

              Fecha del sorteo viernes 28 de febrero a media noche por la lott de Medellín.   
              <br />

              BUENA SUERTE🙏🏻💚
          </p>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">Lista de Boletos</h2>
          <p className="text-lg font-bold">Cantidad</p>
          <div className="flex">
            <button onClick={()=> setNumber(number-1)}><Minus /></button>
            <input 
              className="bg-yellow-100 text-center rounded"
              type="number"
              value={number}
              min={1} 
            />
            <button onClick={()=> setNumber(number+1)}><Plus/></button>
          </div>
        </section>
      </main>
      {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main> */}
      <footer className="flex justify-center bg-yellow-500 pb-5 pt-10">
        <p className="flex gap-3">
          Hecho con amor por:  <a href="https://github.com/Kyriokes" className="text-violet-900 underline font-bold">Kyriokes</a> & <a href="https://github.com/caaroliina" className="text-violet-900 underline font-bold">Caaroliina</a>
        </p>
      </footer>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
