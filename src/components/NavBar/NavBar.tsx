import { useState } from "react"
import { Menu } from "../Icons"

export const NavBar = () => {
  let [open, setOpen] = useState(false)

  return (
    <div>
      
      {
        open ? (
          <div className="fixed w-full h-full">
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
          <div className="fixed w-full">
            <div className=" w-full h-[10%] flex justify-between items-center px-3 sm:px-10 md:px-16 py-3 bg-yellow-500">
              <h1 className="font-bold text-3xl md:text-4xl">RIFULI</h1>
              <button onClick={()=> setOpen(!open)} className="md:hidden"><Menu/></button>
              <div className="hidden md:flex md:gap-2 lg:gap-10">
                <p className="hover:bg-yellow-600 md:p-2 lg:py-2 lg:px-4 md:text-lg rounded">Inicio</p>
                <p className="hover:bg-yellow-600 md:p-2 lg:py-2 lg:px-4 md:text-lg rounded">Boletos</p>
                <p className="hover:bg-yellow-600 md:p-2 lg:py-2 lg:px-4 md:text-lg rounded">Verificador</p>
                <p className="hover:bg-yellow-600 md:p-2 lg:py-2 lg:px-4 md:text-lg rounded">Contacto</p>
                <p className="hover:bg-yellow-600 md:p-2 lg:py-2 lg:px-4 md:text-lg rounded">Administrados</p>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}