import { useState } from "react"

export const NavBar = () => {
  let [open, setOpen] = useState(false)

  return (
    <div>
      
      {
        open ? (
          <div className="absolute w-full h-full">
          <div className="h-full bg-black/50 flex justify-end">
            <li className="w-[80%] bg-black text-white ">
              <ul className="px-5 py-2 hover:bg-slate-500" onClick={()=> setOpen(!open)}>Volver</ul>
              <ul className="px-5 py-2 hover:bg-slate-500">Inicio</ul>
              <ul className="px-5 py-2 hover:bg-slate-500">Boletos</ul>
              <ul className="px-5 py-2 hover:bg-slate-500">Verificador</ul>
              <ul className="px-5 py-2 hover:bg-slate-500">Contacto</ul>
            </li>
          </div>

          </div>
        )
        : (
          <div className=" w-full h-[10%] flex justify-between items-center px-3 bg-yellow-500">
            <p className="font-bold ">RIFAS </p>
            <button onClick={()=> setOpen(!open)}>press</button>
          </div>
        )
      }
    </div>
  )
}