"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { ChevronDown, House, BookOpenText, ChartColumn, ChartPie, Flame, ArrowRight, Settings, LogOut, Menu, X } from 'lucide-react';
import { cursos } from "../dados/cursos";

const HeaderXL = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isProfileMenuOpen) setIsProfileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutsideProfile = (event) => {
      if (isProfileMenuOpen && !event.target.closest('.profile-menu-container')) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutsideProfile);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideProfile);
    };
  }, [isProfileMenuOpen]);

  useEffect(() => {
    const handleClickOutsideMobile = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutsideMobile);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMobile);
    };
  }, [isMobileMenuOpen]);


  return (
    <header className='w-full xl:hidden  h-20 bg-white border-b border-zinc-200 flex items-center justify-between px-6 gap-4 z-50 relative'>
      
      <div className='md:hidden'>
        <button  onClick={toggleMobileMenu}  className='p-2 rounded-md cursor-pointer hover:bg-zinc-100 transition'
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className='flex items-center gap-10 md:gap-40 w-full'>
        <h1 className='text-2xl font-extrabold text-blue-600 tracking-tight'>UpCourse</h1>
        
        <nav className='hidden md:flex xl:hidden gap-6 w-full justify-around text-zinc-700 font-semibold'>
          <Link href="/" className='flex items-center gap-2 text-lg hover:text-blue-600 transition'>
            <span>Overview</span>
          </Link>
          <Link href="/courses" className='flex items-center gap-2 text-lg hover:text-blue-600 cursor-pointer transition'>
            <span>Courses</span>
          </Link>
          <Link href="/planning" className='flex text-lg items-center gap-2 hover:text-blue-600 cursor-pointer transition'>
            <span>Planning</span>
          </Link>
          <Link href="/statistics" className='flex items-center gap-2 text-lg hover:text-blue-600 cursor-pointer transition'>
            <span>Statistics</span>
          </Link>
        </nav>
      </div>

      <div className='relative profile-menu-container lg:hidden'>
        <div className='flex items-center gap-2 p-2 rounded-lg hover:bg-zinc-100 cursor-pointer transition'
          onClick={toggleProfileMenu}
        >
          <img src="https://ui-avatars.com/api/?name=André+Lucas&background=2563eb&color=fff&size=36"
            alt="Avatar de André Lucas"
            className="h-9 w-9 rounded-full border border-zinc-200"
          />
          <ChevronDown className={`text-zinc-500 transition-transform ${isProfileMenuOpen ? 'rotate-180' : ''}`} size={32} />
        </div>

        {isProfileMenuOpen && (
          <div className='absolute top-full right-0 mt-2 w-[300px] p-4 bg-white rounded-lg border border-zinc-200 shadow-lg z-50'>
            <div className='flex items-center gap-3 mb-4 p-2 rounded-lg bg-zinc-50'>
              <img src="https://ui-avatars.com/api/?name=André+Lucas&background=2563eb&color=fff&size=48"
                alt="Avatar de André Lucas"
                className="h-12 w-12 rounded-full border border-zinc-200"
              />
              <div>
                <h1 className='font-semibold text-zinc-800'>André Lucas</h1>
                <h2 className='text-sm text-zinc-500 font-medium'>Estudante</h2>
              </div>
            </div>

            <div className='p-3 bg-white rounded-lg border border-zinc-200 shadow-sm mb-4'>
              <div className='flex items-center gap-2 mb-3'>
                <ChartPie strokeWidth={2} className='text-blue-600' size={20} />
                <h1 className='font-bold text-md text-zinc-700'>Seu Progresso</h1>
              </div>
              {userProgress && userProgress.hasProgress ? (
                <div>
                  <p className='text-sm text-zinc-600 mb-2'>Continue seu aprendizado em <span className="font-semibold text-blue-700">{userProgress.courseTitle}</span>!</p>
                  <div className='relative w-full rounded-full h-2 bg-zinc-200 overflow-hidden'>
                    <div className='bg-blue-600 h-full rounded-full transition-all duration-500 ease-in-out'
                      style={{ width: `${userProgress.percentage}%` }}
                      aria-valuenow={userProgress.percentage}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      role="progressbar"
                      aria-label="Progresso do curso"
                    />
                  </div>
                  <p className="text-xs text-zinc-500 mt-1 text-right">{userProgress.percentage}% Concluído</p>
                  <Link href={`/curso/${userProgress.courseId}`} className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center justify-end">
                    Continuar Curso <ArrowRight className='ml-1 w-3 h-3' />
                  </Link>
                </div>
              ) : (
                <p className='text-sm text-zinc-500'>Você ainda não iniciou nenhum curso.</p>
              )}
            </div>

            <div className='p-3 bg-white rounded-lg border border-zinc-200 shadow-sm mb-4'>
              <div className='flex items-center gap-2 mb-3'>
                <Flame className='text-orange-500' size={20} />
                <h2 className='font-semibold text-md text-zinc-700'>Curso Recomendado</h2>
              </div>

              {recommendedCourse ? (
                <div className='bg-zinc-100 p-3 rounded-lg shadow hover:bg-zinc-200 transition-all duration-200'>
                  <h3 className='text-sm font-bold text-zinc-800 mb-1'>{recommendedCourse.titulo}</h3>
                  <p className='text-xs text-zinc-600 mb-2 line-clamp-2'>{recommendedCourse.subtitulo}</p>
                  <Link href={`/curso/${recommendedCourse.id}`} className='flex items-center text-xs text-blue-600 font-semibold hover:underline mt-2'>
                    Acessar curso
                    <ArrowRight className='ml-1 w-3 h-3' />
                  </Link>
                </div>
              ) : (
                <p className='text-sm text-zinc-500'>Nenhuma recomendação disponível no momento.</p>
              )}
            </div>

            <div className='flex flex-col gap-2 border-t pt-4 border-zinc-100'>
              <Link href="/settings" className='flex items-center font-semibold gap-3 text-sm px-3 py-2 rounded-md cursor-pointer hover:bg-zinc-100 hover:text-blue-600 transition-all'>
                  <Settings size={18} />
                  <h1>Configuração</h1>
              </Link>
              <div className='flex items-center gap-3 px-3 py-2 hover:text-red-500 cursor-pointer transition'>
                <LogOut size={18} /> 
                <span className='font-semibold'>Sair</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0  bg-opacity-50 z-40 md:hidden" 
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          <nav className='fixed top-0 left-0 h-full w-[280px] bg-white p-6 shadow-lg flex flex-col gap-4 z-50 mobile-menu-container transform transition-transform duration-300 ease-in-out'>
            <div className='flex justify-between items-center mb-6'>
              <h1 className='text-2xl font-extrabold text-blue-600 tracking-tight'>UpCourse</h1>
              <button 
                onClick={toggleMobileMenu} 
                className='p-2 rounded-md hover:bg-zinc-100 transition'
                aria-label="Close menu"
              >
                <X className='cursor-pointer' size={24} />
              </button>
            </div>

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

            <div className='mt-auto flex flex-col gap-2 border-t pt-4 border-zinc-100'>
              <Link href="/settings" className='flex items-center font-semibold gap-3 text-base px-3 py-2 rounded-md cursor-pointer hover:bg-zinc-100 hover:text-blue-600 transition-all' onClick={() => setIsMobileMenuOpen(false)}>
                  <Settings size={20} />
                  <h1>Configuração</h1>
              </Link>
              <div className='flex items-center gap-3 px-3 py-2 hover:text-red-500 cursor-pointer transition' onClick={() => setIsMobileMenuOpen(false)}>
                <LogOut size={20} /> 
                <span className='font-semibold'>Sair</span>
              </div>
            </div>
          </nav>
        </>
      )}
      
    </header>
  );
};

export default HeaderXL;