import {
  AdjustmentsIcon,
  ChartBarIcon,
  LogoutIcon,
  TableIcon,
  SearchIcon,
  BellIcon,
} from '@heroicons/react/outline';
import {
  ChartBarIcon as ChartBarIconSolid,
  TableIcon as TableIconSolid,
  AdjustmentsIcon as AdjustmentsIconSolid,
} from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  getImageFromAssets,
  imageApi,
} from '../../../utils/helpers/assetHelpers';
import { CommandPallete } from '../../atoms';

export default function Layout({ children }) {
  const location = useLocation();
  const [showCommand, setshowCommand] = useState(false);

  const listMenu = [
    {
      name: 'Dashboard',
      link: '/',
      isActive: true,
      icon: ChartBarIcon,
      iconActive: ChartBarIconSolid,
    },
    {
      name: 'Laporan',
      link: '/laporan',
      isActive: true,
      icon: TableIcon,
      iconActive: TableIconSolid,
    },
    {
      name: 'Management',
      link: '/management',
      isActive: true,
      icon: AdjustmentsIcon,
      iconActive: AdjustmentsIconSolid,
    },
  ];

  return (
    <div className="relative min-h-screen inset-x-0 bg-zinc-50 dark:bg-zinc-900 overflow-auto">
      {/* Sidebar Dekstop */}
      <nav className="fixed w-64 h-screen backdrop-blur-md bg-white dark:bg-zinc-800 border-r border-gray-200 dark:border-zinc-700">
        {/* Title Navbar */}
        <div className="relative p-4">
          <div className="relative flex items-center space-x-3 p-2">
            <img
              src={getImageFromAssets('/assets/svg/enmant.svg')}
              className="h-8"
              alt=""
            />
            <div className="relative">
              <h1 className="text-base font-extrabold text-zinc-800 dark:text-zinc-50">
                ENMANT
              </h1>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Energy Management Telkom
              </p>
            </div>
          </div>
          {/* List Menu */}
          <div className="relative flex flex-col space-y-3 mt-14">
            {listMenu.map((item, index) => (
              <Link
                to={item.link}
                className={[
                  'relative flex leading-relaxed items-center space-x-3 font-medium cursor-pointer group transition-all duration-300 ease-in-out hover:bg-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-50 dark:hover:bg-blue-600 px-4 py-3 text-base',
                  location.pathname === item.link
                    ? 'text-zinc-800 dark:text-zinc-300 font-semibold border-l-4 border-blue-500 dark:border-blue-600 bg-gradient-to-r from-zinc-100 via-zinc-100 to-white dark:bg-gradient-to-r dark:from-zinc-700 dark:via-zinc-700 dark:to-zinc-800'
                    : 'text-zinc-300 font-base',
                ].join(' ')}
                key={index}>
                <div>
                  {location.pathname === item.link ? (
                    <item.iconActive className="h-5 " />
                  ) : (
                    <item.icon className="h-5 " />
                  )}
                </div>
                <p className="">{item.name}</p>
              </Link>
            ))}
          </div>
        </div>
        {/* Logout */}
        <div className="absolute bottom-0 p-4 w-full">
          <div className="relative flex items-center space-x-2 group p-3 hover:bg-red-100 dark:hover:bg-red-100/40 w-full rounded-sm transition-all duration-300 ease-in-out cursor-pointer">
            <LogoutIcon className="text-red-800/50 h-5 group-hover:scale-105 transition-all dark:text-red-300/50 dark:group-hover:text-red-300 group-hover:text-red-800 duration-300 ease-in-out" />
            <span className="font-regular text-sm text-red-800/50 group-hover:text-red-800 dark:text-red-300/50 dark:group-hover:text-red-300 group-hover:font-medium transition-all duration-300 ease-in-out">
              Logout
            </span>
          </div>
        </div>
      </nav>

      <main className="ml-64 bg-zinc-50 dark:bg-zinc-900 relative">
        {/* Section Header */}
        <header className="relative py-5 px-8 bg-white dark:bg-zinc-800 border-b border-gray-200 dark:border-zinc-700 backdrop-blur-sm inset-x-0">
          <div className="relative flex justify-between items-center">
            <div className="relative text-left">
              <p className="text-sm font-light text-zinc-400 dark:text-zinc-300">
                Welcome back,
              </p>
              <p className="text-lg font-semibold text-zinc-700 dark:text-zinc-200 mt-1">
                Abdul Muchtar Astria
              </p>
            </div>

            <div className="relative flex flex-shrink w-1/2">
              <button
                onClick={() => setshowCommand(true)}
                className="bg-zinc-100 rounded-lg py-3 w-full pr-4 pl-12 dark:bg-zinc-600 border-zinc-300 focus:to-blue-400 text-zinc-400 text-left text-base">
                <p>Type to search ..</p>
                <SearchIcon className="text-zinc-400 h-5 top-3 absolute left-4" />
              </button>
            </div>

            <div className="relative flex space-x-4 items-center ">
              <div className="relative group cursor-pointer bg-transparent hover:bg-zinc-100 transition-all duration-300 ease-in-out p-2 rounded">
                <div className="absolute h-2 right-2.5 w-2 bg-red-500 group-hover:shadow-red-500/50 group-hover:shadow-lg rounded-full"></div>
                <BellIcon className="h-5 text-zinc-400 group-hover:text-zinc-700 transition-all duration-300 ease-in-out" />
              </div>

              <div className="rounded-lg">
                <img
                  src={imageApi('AM')}
                  className="h-10 w-10 rounded hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
                  alt=""
                />
              </div>
            </div>
          </div>
        </header>
        <div className="relative py-4 px-8 mx-auto container bg-zinc-50 dark:bg-zinc-900">
          {children}
        </div>
      </main>

      <CommandPallete isOpen={showCommand} handlerOpen={setshowCommand} />
    </div>
  );
}
