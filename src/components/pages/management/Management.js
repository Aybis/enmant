import React from 'react';
import { Outlet } from 'react-router-dom';
import { Tabs } from '../../atoms';
import { Layout } from '../includes';

export default function Management() {
  return (
    <Layout>
      <div className="relative container my-4">
        {/* Heading Container */}
        <div className="relative">
          <h1 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
            Management Data
          </h1>
        </div>
        {/* Content Container */}
        <div className="relative mt-6">
          <div className="relative mx-auto container max-w-md flex justify-center items-center"></div>
          {/* Navigation Tabs */}
          <Tabs />
          {/* Filter Month */}
          <div className="relative mx-auto container max-w-md grid grid-cols-2 gap-4 mt-6">
            <select className="px-4 py-2 rounded-sm bg-white dark:bg-zinc-600 dark:text-zinc-200 border-2 pr-8 border-transparent focus:border-blue-500 cursor-pointer">
              <option value="">June</option>
            </select>
            <select className="px-4 py-2 rounded-sm bg-white dark:bg-zinc-600 dark:text-zinc-200 border-2 pr-8 border-transparent focus:border-blue-500 cursor-pointer">
              <option value="">2022</option>
            </select>
          </div>
        </div>

        <div className="relative mt-8">
          <Outlet />
        </div>
      </div>
    </Layout>
  );
}
