"use client";
import { Calendar, Clock, Minus, Plus, Search } from "@/components/Icons";
import { NavBar } from "@/components/NavBar/NavBar";
import { useState } from "react";

export default function Home() {
  const [quantity, setQuantity] = useState(1);
  const generarArray = (n:number) => Array.from({ length: n }, (_, i) => i + 1);
  const [numbers, setNumbers] = useState(generarArray(100));
  const [selected, setSelected] = useState([])
  const [methods, setMethods] = useState([
    {
      name: "Binance",
      image: 'https://public.bnbstatic.com/image/cms/blog/20230629/c7aab51a-b67b-48fe-83dc-f839a8e441d2.png',
      dataPay: 'hola'
    },
    {
      name: "Mercado Pago",
      image: 'https://images.seeklogo.com/logo-png/19/2/mercado-pago-logo-png_seeklogo-198430.png',
      dataPay: 'hola'
    }
  ])

  const changeNuber = ()=> {
    if (quantity === 1) return
    setQuantity(quantity-1);
  }

  return (
    <div className="w-full h-screen">
      <NavBar />
      <div className=" w-full h-[10%] flex justify-between items-center px-3 sm:px-10 md:px-16 py-5 "></div>
      <main className="px-3 sm:px-10 md:px-16 flex flex-col gap-16 pt-5 md:pt-10 pb-10 md:pb-24">
        <section className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold md:text-3xl">El caballo de la Ford</h2>
          <div className="flex flex-col gap-5 md:flex-row">
            <img src="https://img.freepik.com/foto-gratis/gatito-pared-monocromatica-detras-ella_23-2148955132.jpg" alt="" className="w-screen h-96 sm:h-[700px] md:w-96 md:h-[500px] rounded object-cover" />
            <div className="flex flex-col gap-5">
              <div className="flex justify-between">
                <div className="flex gap-2 text-base md:text-lg lg:text-xl"><Calendar/> 28 FEB 2025</div>
                <div className="flex gap-2 text-base md:text-lg lg:text-xl"><Clock/> 11:59 PM</div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold">Descripcion Rifa</h3>
                <p className="text-base md:text-lg">EL CABALLO DE LA FORD <br /> 
                  Ford bronco automática 4x4 con cauchos Goodrich, quema coco, tapicería de piel + 2.000 en la guantera. <br />
                  Premios pronto pago: <br />
                  1.000$ 24/02/25 <br />
                  1.000$ 25/02/25 <br />
                  1.000$ 26/02/25 <br />
                  1.000$ 27/02/24 <br />
                  Valor del boleto 15 dolaritosss. <br />
                  Puedes comprar de un boleto en adelante peeeeeroooo si llevas más de 3 boletos  Doblas los premios en efectivo. <br />
                  Si llevas más de 10 boletos cuando te ganes la camioneta te llevamos a los Roques y te damos 2 iPhone 16 pro max! <br />
                  Valor del boleto 15 dolaritos <br />
                  Promo: 3 boletos x 30 dolaritos. <br />
                  Fecha del sorteo viernes 28 de febrero a media noche por la lott de Medellín. <br />
                  BUENA SUERTE🙏🏻💚
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold md:text-3xl">Comprar de Boletos</h2>
          <div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold">Cantidad</h3>
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
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold">Boletos Disponibles</h3>
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
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold">Boletos Seleccionados</h3>
            <div className="flex h-36 overflow-y-auto flex-wrap gap-2 border border-yellow-500 py-5 items-center rounded"> 
              
            </div>
          </div>
          <div>
            <h3 className="text-lg md:text-xl lg:t1ext-2xl font-bold">Tus Datos:</h3>
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
          <div>
            <h3 className="text-lg md:text-xl lg:t1ext-2xl font-bold">Metodo de Pago</h3>
            <div className="flex flex-wrap gap-5">
              {methods.length > 0 && methods.map((m) => <button><img src={m.image} alt="" className="w-24 h-24 rounded object-cover opacity-70 hover:opacity-100" /></button>)
              }
            </div>
          </div>
          <div>
            <h3 className="text-lg md:text-xl lg:t1ext-2xl font-bold">Comprobante de Pago</h3>
            <input type="file" />
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
            href="https://www.linkedin.com/in/sergiofb/" 
            target="_blank"
            rel="noopener noreferrer" 
            className="text-violet-900 underline font-bold">
            Kyriokes
          </a> 
          {/* & 
          <a 
            href="https://github.com/caaroliina" 
            className="text-violet-900 underline font-bold"
            target="_blank"
            rel="noopener noreferrer" 
          >
            Caaroliina
          </a> */}
        </p>
      </footer>
    </div>
  );
}
