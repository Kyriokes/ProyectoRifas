"use client";
import { Calendar, Clock, Minus, Plus, Search } from "@/components/Icons";
import { NavBar } from "@/components/NavBar/NavBar";
import { useState } from "react";

export default function Home() {
  const [quantity, setQuantity] = useState(1);
  const generarArray = (n:number) => Array.from({ length: n }, (_, i) => i + 1);
  const [numbers, setNumbers] = useState(generarArray(100));
  const [selected, setSelected] = useState([])

  const changeNuber = ()=> {
    if (quantity === 1) return
    setQuantity(quantity-1);
  }

  return (
    <div className="w-full h-screen">
      <NavBar />
      <div className=" w-full h-[10%] flex justify-between items-center px-3 sm:px-10 md:px-24 py-5 "></div>
      <main className="px-3 sm:px-10 md:px-24 flex flex-col gap-16 pt-5 pb-10">
        <section className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">El caballo de la Ford</h2>
          <div className="flex flex-col gap-5 md:flex-row">
            <img src="https://img.freepik.com/foto-gratis/gatito-pared-monocromatica-detras-ella_23-2148955132.jpg" alt="" className="w-screen h-96 sm:h-[700px] md:w-96 md:h-[500px] rounded object-cover" />
            <div className="flex flex-col gap-5">
              <div className="flex justify-between">
                <div className="flex gap-2"><Calendar/> 28 FEB 2025</div>
                <div className="flex gap-2"><Clock/> 11:59 PM</div>
              </div>
              <div>
                <p className="text-lg font-bold">Descripcion Rifa</p>
                <p>EL CABALLO DE LA FORD  <br /> 
                  Ford bronco automática 4x4 con cauchos Goodrich, quema coco, tapicería de piel + 2.000 en la guantera.   <br />
                  Premios pronto pago: <br />
                  1.000$ 24/02/25 <br />
                  1.000$ 25/02/25 <br />
                  1.000$ 26/02/25 <br />
                  1.000$ 27/02/24  <br />
                  Valor del boleto 15 dolaritosss. <br />
                  Puedes comprar de un boleto en adelante peeeeeroooo si llevas más de 3 boletos  Doblas los premios en efectivo.   <br />
                  Si llevas más de 10 boletos cuando te ganes la camioneta te llevamos a los Roques y te damos 2 iPhone 16 pro max! <br />
                  Valor del boleto 15 dolaritos  <br />
                  Promo: 3 boletos x 30 dolaritos.   <br />
                  Fecha del sorteo viernes 28 de febrero a media noche por la lott de Medellín.   <br />
                  BUENA SUERTE🙏🏻💚
              </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">Comprar de Boletos</h2>
          <div>
            <h3 className="text-lg font-bold">Cantidad</h3>
            <div className="flex flex-col items-center">
              <div className="flex w-full">
                <button onClick={()=> changeNuber()} disabled={quantity === 1} ><Minus /></button>
                  <input 
                    className="w-full bg-yellow-100 p-1 text-center text-3xl rounded"
                    type="number"
                    value={quantity}
                    min={1} 
                    />
                <button onClick={()=> setQuantity(quantity+1)}><Plus/></button>
              </div>
              <p>Boleto</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">Boletos Disponibles</h3>
            <div className="flex h-96 overflow-y-auto flex-wrap gap-2 border border-yellow-500 py-5 items-center rounded">
              { numbers.length > 0 ? (
                numbers.map((n, i) => <div key={i} className="hover:bg-yellow-500 w-16 p-2  text-center rounded">
                  {n}
                </div>)
              )
              : (
                <p className="text-center">No quedan numeros disponibles</p>
              )
              }
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">Boletos Seleccionados</h3>
            <div className="flex h-36 overflow-y-auto flex-wrap gap-2 border border-yellow-500 py-5 items-center rounded"> 
              
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">Tus Datos:</h3>
            <label htmlFor="">Nombre y Apellido*</label>
            <input type="text" className="w-full bg-yellow-100 p-1 text-base rounded" />
            <label htmlFor="">Cedula/DNI*</label>
            <input type="text" className="w-full bg-yellow-100 p-1 text-base rounded" />
            <label htmlFor="phone">
            Enter your phone number:<br />
          </label>

          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required  className="w-full bg-yellow-100 p-1 text-base rounded"/>
            
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">Verificar Boletos</h2>
          <div>
            <input type="text" className="w-full bg-yellow-100 p-1 text-base rounded" />
            <p>Número de Teléfono o #Boleto</p>
          </div>
          <button className="flex justify-center gap-2 bg-yellow-900 rounded hover:bg-yellow-500 p-2"><Search/>Buscar</button>
        </section>
      </main>
      <footer className="flex justify-center bg-yellow-500 pb-5 pt-10">
        <p className="flex gap-3">
          Hecho con amor por:  
          <a 
            href="https://github.com/Kyriokes" 
            target="_blank"
            rel="noopener noreferrer" 
            className="text-violet-900 underline font-bold">
            Kyriokes
          </a> & 
          <a 
            href="https://github.com/caaroliina" 
            className="text-violet-900 underline font-bold"
            target="_blank"
            rel="noopener noreferrer" 
          >
            Caaroliina
          </a>
        </p>
      </footer>
    </div>
  );
}
