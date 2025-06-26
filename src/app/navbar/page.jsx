import React, { useState } from 'react';
import {
  House,
  BookOpenText,
  ChartPie,
  ChartColumn,
  LogOut,
  Settings,
  Menu 
} from 'lucide-react';
import Link from "next/link";

const Sidebar = () => {

  const [menu, setMenu] = useState(false)
  return (

    <div>
      {!menu && (
    
    <aside className='fixed top-0 left-0 h-screen w-72 bg-white border-r border-zinc-200 xl:flex flex-col justify-between px-6 py-8 z-50 hidden'>

      
      <div>


        
        <h1 className='text-3xl font-extrabold text-blue-600 mb-10 tracking-tight'>UpCourse</h1>

        <ul className='flex flex-col gap-2 text-zinc-700'>

          <li className='text-base px-3 py-2 font-semibold rounded-md cursor-pointer bg-zinc-100 text-blue-600 transition-all'>
            <Link href="/" className='flex gap-3 items-center'>
              <House size={20} /> 
              <span>Overview</span>
            </Link>
          </li>

          <li className='flex items-center font-semibold gap-3 text-base px-3 py-2 rounded-md cursor-pointer hover:bg-zinc-100 hover:text-blue-600 transition-all'>
            <BookOpenText size={20} />
            <span>Courses</span>
          </li>

          <li className='flex items-center font-semibold gap-3 text-base px-3 py-2 rounded-md cursor-pointer hover:bg-zinc-100 hover:text-blue-600 transition-all'>
            <ChartPie size={20} /> 
            <span>Planning</span>
          </li>

          <li className='flex items-center gap-3 font-semibold text-base px-3 py-2 rounded-md cursor-pointer hover:bg-zinc-100 hover:text-blue-600 transition-all'>
            <ChartColumn size={20} /> 
            <span>Statistics</span>
          </li>

        </ul>
      </div>

      <div className='flex flex-col gap-2 text-base text-zinc-60 ' >

        <div className='flex items-center font-semibold gap-3 text-base px-3 py-2 rounded-md cursor-pointer hover:bg-zinc-100 hover:text-blue-600 transition-all'>
            <Settings size={20} />
            <h1>Configuração</h1>
          </div>
        
        <div className='flex items-center gap-3 px-3 hover:text-red-500 cursor-pointer transition'>
          <LogOut size={20} /> 
          <span className='font-semibold'>Sair</span>
        </div>
        
      </div>

      
    </aside>

    )}
      </div>
  );
};

export default Sidebar;