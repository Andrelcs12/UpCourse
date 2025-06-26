import React from 'react';
import { Search, Bell } from "lucide-react";

const Header = () => {

  return (
    <header className='h-20 w-full border-b border-zinc-200 bg-white px-6 md:px-8 flex items-center justify-between z-30'>

      <div className='w-full max-w-xl'>
        <label className='sr-only' htmlFor="search">Buscar</label>
        <div className='flex items-center bg-zinc-100 border border-zinc-300 rounded-lg px-4 py-2 gap-3 shadow-inner'>
          <Search className='text-zinc-500 w-5 h-5' />
          <input type="text" className='w-full bg-transparent outline-none text-sm text-zinc-700 placeholder:text-zinc-400' placeholder='Buscar cursos, professores, tópicos...'
            value={searchTerm} onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className='relative ml-6'>
        <Bell className='cursor-pointer text-zinc-600 hover:text-blue-600 hover:scale-110 transition-all duration-300 ease-in-out' size={22} />
      </div>

    </header>
  );
};

export default Header;