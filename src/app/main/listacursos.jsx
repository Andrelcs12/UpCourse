import React from 'react';
import {useState } from "react"
import { cursos } from "../dados/cursos";
import Link from "next/link";
import { Flame } from 'lucide-react';

const Listacursos = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const getTotalVideos = (aulas) => {
    return aulas.reduce((acc, aula) => acc + aula.videos.length, 0);
  };

  const getTotalDuration = (aulas) => {
    const totalMinutes = aulas.reduce((acc, aula) => {
      return acc + aula.videos.reduce((videoAcc, video) => videoAcc + video.duracao, 0);
    }, 0);
    const hours = Math.floor(totalMinutes / 60);
    const remainingMinutes = totalMinutes % 60;
    if (hours > 0) {
      return `${hours}h ${remainingMinutes}min`;
    }
    return `${remainingMinutes}min`;
  };

  return (
    <div>
      <div className="w-full px-6 py-6 border-b border-zinc-200">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

        <div>
          <h1 className="2xl:text-3xl text-2xl font-extrabold text-zinc-800">Todos os cursos</h1>
        </div>

        <nav>
          <ul className="flex gap-6  ">
            <li>
              <button className={`relative cursor-pointer text-sm sm:text-base transition ${activeFilter === 'all' ? 'text-blue-600 font-semibold' : 'text-zinc-500 hover:text-zinc-800 font-medium'}`}
                onClick={() => setActiveFilter('all')}
              >Todos
                {activeFilter === 'all' && <span className="block h-[2px] w-full bg-blue-600 mt-1 rounded-full absolute bottom-0 left-0 transform translate-y-full" />}
              </button>
            </li>
            <li>
              <button className={`relative cursor-pointer text-sm sm:text-base transition ${activeFilter === 'ongoing' ? 'text-blue-600 font-semibold' : 'text-zinc-500 hover:text-zinc-800 font-medium'}`}
                onClick={() => setActiveFilter('ongoing')}
              >Em Andamento
                {activeFilter === 'ongoing' && <span className="block h-[2px] w-full bg-blue-600 mt-1 rounded-full absolute bottom-0 left-0 transform translate-y-full" />}
              </button>
            </li>
            <li>
              <button className={`relative cursor-pointer text-sm sm:text-base transition ${activeFilter === 'favorite' ? 'text-blue-600 font-semibold' : 'text-zinc-500 hover:text-zinc-800 font-medium'}`}
                onClick={() => setActiveFilter('favorite')}
              >Favoritos
                {activeFilter === 'favorite' && <span className="block h-[2px] w-full bg-blue-600 mt-1 rounded-full absolute bottom-0 left-0 transform translate-y-full" />}
              </button>
            </li>
            <li>
              <button className={`relative cursor-pointer text-sm sm:text-base transition ${activeFilter === 'complete' ? 'text-blue-600 font-semibold' : 'text-zinc-500 hover:text-zinc-800 font-medium'}`}
                onClick={() => setActiveFilter('complete')}
              >Completos
                {activeFilter === 'complete' && <span className="block h-[2px] w-full bg-blue-600 mt-1 rounded-full absolute bottom-0 left-0 transform translate-y-full" />}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    
    <div className="px-4 py-8 sm:px-6 sm:py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-8 text-zinc-800">Cursos Disponíveis</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6 sm:gap-8">
        {cursos.map((item) => (
          <li key={item.id}>
            <Link href={`/curso/${item.id}`} className="block h-full">
              <div className="group bg-white border border-zinc-200 hover:border-blue-500 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col overflow-hidden">

                <div className="h-36 bg-gradient-to-br from-zinc-900 to-zinc-700 flex items-end px-4 pb-3 relative">
                  <div className="flex items-center gap-2 text-white text-xs font-semibold bg-black/30 backdrop-blur-sm rounded-full py-1 px-3">
                    <Flame size={16} className="text-orange-400" />
                    {item.dificuldade.toUpperCase()}
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h2 className="text-xl font-bold text-zinc-800 group-hover:text-blue-600 transition mb-2">
                      {item.titulo}
                    </h2>
                    <p className="text-sm text-zinc-600 mb-4 line-clamp-2">{item.subtitulo}</p>

                    <div className="flex items-center gap-3">
                      <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(item.professor)}&background=random&color=fff&size=40`}
                        alt={`Avatar de ${item.professor}`}
                        className="h-10 w-10 rounded-full border border-zinc-200"
                      />
                      <p className="text-sm font-medium text-zinc-600">{item.professor}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-zinc-200 text-xs text-zinc-500">
                    <div className="flex items-center gap-1 text-sm">
                      <span className="font-bold text-sm text-zinc-700">{getTotalVideos(item.aulas)}</span>
                      vídeos
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <span className="font-bold text-sm text-zinc-700">{getTotalDuration(item.aulas)}</span>
                      duração
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3  border-t border-zinc-100">
                  <p className="text-sm text-zinc-500">Preço</p>
                  <h3 className="text-xl font-bold text-zinc-800 group-hover:text-blue-600 transition">R$ {item.valor.toFixed(2)}</h3>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>

    </div>
  );
};

export default Listacursos;