import { SearchIcon } from '@heroicons/react/solid';
import React from 'react';
import Button from '../../../atoms/Button';
import TablePascabayar from './TablePascabayar';

export default function Pascabayar() {
  return (
    <div className="relative mt-8 bg-white dark:bg-zinc-800 rounded-sm p-4 overflow-auto">
      <div className="relative flex justify-between mb-6 items-center space-x-3">
        {/* Search Section */}
        <div className="relative flex space-x-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari ID Pelanggan"
              className="rounded pr-4 pl-10 py-2 text-sm placeholder:text-zinc-300 border border-zinc-300 dark:border-zinc-500 dark:bg-zinc-600 dark:text-white text-zinc-800"
            />
            <div className="absolute left-2 top-2">
              <SearchIcon className="text-zinc-300 dark:text-zinc-400 h-6" />
            </div>
          </div>
          <Button isAnimated={true} moreClass={'text-sm py-2'} type="primary">
            Search
          </Button>
        </div>
        {/* End Search Section */}
      </div>
      <div className="relative overflow-x-auto">
        <TablePascabayar />
      </div>
    </div>
  );
}
