import React, { useState, useEffect, useMemo } from 'react';
import { ChevronDown, ChartPie, Flame, ArrowRight, Settings, LogOut } from 'lucide-react';
import Link from "next/link";
import { cursos } from "../dados/cursos";

const NavBarRight = () => {
  
  const [userProgress, setUserProgress] = useState(null);
  const [recommendedCourse, setRecommendedCourse] = useState(null);

  
  useEffect(() => {
  
    const reactCourse = cursos.find(c => c.id === 'react');
    let currentProgress = { hasProgress: false, percentage: 0, courseTitle: '', courseId: '' };

    if (reactCourse) {
      const totalVideos = reactCourse.aulas.reduce((acc, aula) => acc + aula.videos.length, 0);
      const completedVideos = reactCourse.aulas.reduce((acc, aula) => acc + aula.videos.filter(v => v.completo).length, 0);
      const percentage = totalVideos === 0 ? 0 : Math.round((completedVideos / totalVideos) * 100);

      currentProgress = {
        hasProgress: completedVideos > 0,
        percentage: percentage,
        courseTitle: reactCourse.titulo,
        courseId: reactCourse.id
      };
    }
    setUserProgress(currentProgress);

    
    const availableCourses = cursos.filter(c => c.id !== currentProgress.courseId);
    if (availableCourses.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableCourses.length);
      setRecommendedCourse(availableCourses[randomIndex]);
    } else {
      setRecommendedCourse(null);
    }
  }, []); 

  if (!userProgress) {
    return (
      <aside className='fixed top-0 right-0 w-[350px] px-6 py-8 h-full border-l border-zinc-200 bg-white flex flex-col justify-between z-40 overflow-y-auto'>
        <div className="flex items-center justify-center h-full text-zinc-500">
          Carregando informações...
        </div>
      </aside>
    );
  }

  return (
    <aside className='fixed top-0 right-0 w-[350px] hidden lg:flex px-6 py-8 h-full border-l border-zinc-200 bg-white flex-col justify-between z-40 overflow-y-auto'>
      <div>
        
        <div className='flex items-center justify-between p-3 rounded-lg hover:bg-zinc-100 cursor-pointer transition'>
          <div className='flex items-center gap-4'>
            
            <img
              src="https://ui-avatars.com/api/?name=André+Lucas&background=2563eb&color=fff&size=48"
              alt="Avatar de André Lucas"
              className="h-12 w-12 rounded-full border border-zinc-200"
            />
            <div>
              <h1 className='font-semibold text-zinc-800'>André Lucas</h1>
              <h2 className='text-sm text-zinc-500 font-medium'>Estudante</h2>
            </div>
          </div>
          <ChevronDown className='text-zinc-500' size={20} />
        </div>

        
        <div className='mt-8 p-4 bg-white rounded-lg border border-zinc-200 shadow-sm'>
          <div className='flex items-center gap-2 mb-3'>
            <ChartPie strokeWidth={2} className='text-blue-600' size={20} />
            <h1 className='font-bold text-lg text-zinc-700'>Seu Progresso</h1>
          </div>
          {userProgress.hasProgress ? (
            <div>
              <p className='text-sm text-zinc-600 mb-2'>Continue seu aprendizado em <span className="font-semibold text-blue-700">{userProgress.courseTitle}</span>!</p>
              <div className='relative w-full rounded-full h-2.5 bg-zinc-200 overflow-hidden'>
                <div
                  className='bg-blue-600 h-full rounded-full transition-all duration-500 ease-in-out'
                  style={{ width: `${userProgress.percentage}%` }}
                  aria-valuenow={userProgress.percentage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  role="progressbar"
                  aria-label="Progresso do curso"
                />
              </div>
              <p className="text-xs text-zinc-500 mt-1.5 text-right">{userProgress.percentage}% Concluído</p>
              <Link href={`/curso/${userProgress.courseId}`} className=" mt-3 text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center justify-end">
                Continuar Curso <ArrowRight className='ml-1 w-4 h-4' />
              </Link>
            </div>
          ) : (
            <p className='text-sm text-zinc-500'>Você ainda não iniciou nenhum curso.</p>
          )}
        </div>

        
        <div className='mt-10 p-4 bg-white rounded-lg border border-zinc-200 shadow-sm'>
          <div className='flex items-center gap-2 mb-3'>
            <Flame className='text-orange-500' size={20} />
            <h2 className='font-semibold text-zinc-700'>Curso Recomendado</h2>
          </div>

          {recommendedCourse ? (
            <div className='bg-zinc-100 p-4 rounded-lg shadow hover:bg-zinc-200 transition-all duration-200'>
              <h3 className='text-md font-bold text-zinc-800 mb-1'>{recommendedCourse.titulo}</h3>
              <p className='text-xs text-zinc-600 mb-2 line-clamp-2'>{recommendedCourse.subtitulo}</p>
              <Link href={`/curso/${recommendedCourse.id}`} className='flex items-center text-sm text-blue-600 font-semibold hover:underline mt-2'>
                Acessar curso
                <ArrowRight className='ml-1 w-4 h-4' />
              </Link>
            </div>
          ) : (
            <p className='text-sm text-zinc-500'>Nenhuma recomendação disponível no momento.</p>
          )}
        </div>
      </div>

      <div className=' flex-col gap-2 xl:hidden flex text-base text-zinc-60 ' >

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
  );
};

export default NavBarRight;