"use client"
import { useParams } from 'next/navigation'
import React, { useState, useEffect, useMemo } from 'react'
import { cursos } from "../../dados/cursos"
import HeaderXL from '@/app/header/headerxl'
import Navbar from "../../navbar/page"
import { ChevronDown, ChevronUp, Heart, Play, CheckCircle2 } from 'lucide-react'

const Page = () => {
  const params = useParams();
  const { id } = params;

  const [curso, setCurso] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [topicoAberto, setTopicoAberto] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const foundCurso = cursos.find(item => item.id === id);
    if (foundCurso) {
      setCurso(foundCurso);
      setTopicoAberto(0);
    }
    setIsLoading(false);
  }, [id]);

  const totalVideos = useMemo(() => {
    return curso?.aulas.reduce((acc, aula) => acc + aula.videos.length, 0) || 0;
  }, [curso]);

  const videosCompletos = useMemo(() => {
    return curso?.aulas.reduce((acc, aula) => acc + aula.videos.filter(video => video.completo).length, 0) || 0;
  }, [curso]);

  const progressoPorcentagem = totalVideos === 0 ? 0 : Math.round((videosCompletos / totalVideos) * 100);

  const totalMinutos = useMemo(() => {
    return curso?.aulas.reduce((acc, aula) => {
      return acc + aula.videos.reduce((videoAcc, video) => videoAcc + video.duracao, 0);
    }, 0) || 0;
  }, [curso]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-100">
        <h1 className="text-2xl font-semibold text-zinc-700">Carregando curso...</h1>
      </div>
    );
  }

  if (!curso) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-100">
        <h1 className="text-2xl font-semibold text-zinc-700">Curso não encontrado.</h1>
      </div>
    );
  }

  const toggleTopico = (index) => {
    setTopicoAberto((prev) => (prev === index ? null : index));
  };

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${remainingMinutes}min`;
    }
    return `${remainingMinutes}min`;
  };

  return (
    <div>
        <Navbar />
        <HeaderXL />

      <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white px-6 py-8 md:px-10 md:py-12 xl:ml-72">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2">{curso.titulo}</h1>
        <p className="text-md sm:text-lg text-zinc-300">{curso.subtitulo}</p>
        <p className="mt-4 text-sm text-zinc-400">Com <span className="font-semibold">{curso.professor}</span></p>
      </div>

      <main className="px-6 py-8 md:px-8 md:py-10 text-zinc-800 xl:ml-72 lg:flex lg:justify-between lg:gap-8">

        <div className="lg:w-3/5">
          <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8 text-sm text-zinc-600">
            <div>
              <p className="font-medium text-zinc-500">Dificuldade</p>
              <p className="text-base font-bold capitalize text-zinc-800">{curso.dificuldade}</p>
            </div>
            <div>
              <p className="font-medium text-zinc-500">Duração</p>
              <p className="text-base font-bold text-zinc-800">{formatDuration(totalMinutos)}</p>
            </div>
            <div>
              <p className="font-medium text-zinc-500">Aulas</p>
              <p className="text-base font-bold text-zinc-800">{totalVideos} vídeos</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3 border-b-2 border-blue-600 pb-1 inline-block">Sobre o Curso</h2>
            <p className="text-zinc-700 leading-relaxed text-justify">{curso.descricao}</p>
          </section>

          <div className="mt-8 p-4 bg-white rounded-xl shadow-lg border border-zinc-200">
            <p className="text-3xl font-extrabold text-blue-700 mb-4">R$ {curso.valor.toFixed(2)}</p>

            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center gap-4">

                <button className="flex-1 bg-blue-600 hover:bg-blue-700 rounded-lg py-3 text-white font-bold text-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-400 active:scale-98">
                  Adicionar ao carrinho
                </button>
                <button className="flex-none flex items-center justify-center p-3 border-2 border-blue-600 rounded-lg text-blue-600 hover:bg-blue-100 transition-colors duration-300 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-400">
                  <Heart size={24} />
                </button>
              </div>

              <button className="w-full py-3 border-2 border-blue-600 rounded-lg text-blue-600 font-semibold hover:bg-blue-50 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400">
                Comprar agora
              </button>
            </div>
          </div>
        </div>

        <section className='lg:w-2/5 mt-10 lg:mt-0'>
          <h2 className="text-xl font-bold mb-4 border-b-2 border-blue-600 pb-1 inline-block">Conteúdo do Curso</h2>

          <div className='border rounded-lg bg-white p-4 mb-6 shadow-sm'>
            <div className='flex justify-between items-center mb-2'>
              <span className='font-semibold text-zinc-700'>Seu Progresso:</span>
              <span className='font-bold text-blue-600'>{progressoPorcentagem}% Concluído</span>
            </div>
            <div className='relative w-full rounded-full h-3 bg-zinc-300 overflow-hidden'>
              <div className='bg-blue-600 h-full rounded-full transition-all duration-500 ease-in-out'
                style={{ width: `${progressoPorcentagem}%` }}
                aria-valuenow={progressoPorcentagem}
                aria-valuemin={0}
                aria-valuemax={100}
                role="progressbar"
                aria-label="Progresso do curso"
              />
            </div>
            <p className="text-sm text-zinc-500 mt-2">{videosCompletos} de {totalVideos} vídeos completos</p>
          </div>

          {curso.aulas.map((aula, index) => (
            <div key={index} className="mb-4 border border-zinc-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <button onClick={() => toggleTopico(index)}
                className="w-full cursor-pointer text-left px-6 py-4 bg-zinc-100 hover:bg-zinc-200 transition-colors flex justify-between items-center"
                aria-expanded={topicoAberto === index}
                aria-controls={`topico-${index}`}
                id={`topico-button-${index}`}
              >
                <h3 className="text-lg font-semibold text-blue-700">{aula.topico}</h3>
                <span className="text-2xl text-blue-600 select-none">
                  {topicoAberto === index ? <ChevronUp /> : <ChevronDown />}
                </span>
              </button>

              {topicoAberto === index && (
                <div id={`topico-${index}`}
                  aria-labelledby={`topico-button-${index}`}
                  className="px-6 py-4 bg-white text-zinc-700 border-t border-zinc-200">
                  <ul className="space-y-3">
                    {aula.videos.map((video) => (
                      <li key={video.id}
                        className={`flex items-center justify-between gap-3 p-3 rounded-md transition-colors duration-200 
                                  ${video.completo ? 'bg-green-50 text-green-700' : 'bg-zinc-100 hover:bg-blue-50 cursor-pointer'}`}>
                        <div className="flex items-center gap-3 flex-1">
                          {video.completo ? (
                            <CheckCircle2 size={20} className="text-green-600 flex-shrink-0" />
                          ) : (
                            <Play size={20} className="text-blue-500 flex-shrink-0" />
                          )}
                          <h4 className={`font-medium leading-snug ${video.completo ? 'line-through text-zinc-500' : 'text-zinc-900'}`}>{video.titulo}</h4>
                        </div>
                        <span className={`text-sm ${video.completo ? 'text-green-600' : 'text-zinc-500'} flex-shrink-0`}>
                          {formatDuration(video.duracao)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Page;