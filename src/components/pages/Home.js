import {
  CreditCardIcon,
  CurrencyDollarIcon,
  ShoppingCartIcon,
  TicketIcon,
} from '@heroicons/react/solid';
import React from 'react';
import { Table } from '../atoms';
import { ChartBar } from '../molecules';
import { Layout } from './includes';

export default function Home() {
  const listCard = [
    {
      name: 'Prabayar',
      value: 250,
      type: 'pelanggan',
      icon: CurrencyDollarIcon,
      bgColor: 'bg-indigo-500/10 dark:bg-indigo-600',
      color: 'bg-indigo-500',
      isColor: 'from-white',
    },
    {
      name: 'Pascabayar',
      value: 250,
      type: 'pelanggan',
      icon: CreditCardIcon,
      bgColor: 'bg-yellow-500/10 dark:bg-yellow-600',
      color: 'bg-yellow-500',
      isColor: 'from-white',
    },
    {
      name: 'Transaksi',
      value: 870,
      type: 'pelanggan',
      icon: TicketIcon,
      bgColor: 'bg-green-500/10 dark:bg-green-600',
      color: 'bg-green-500',
      isColor: 'from-white',
    },
    {
      name: 'Pembelian',
      value: 'Rp 123.456.789',
      type: 'transaksi',
      icon: ShoppingCartIcon,
      bgColor: 'bg-blue-500/10 dark:bg-blue-600',
      color: 'bg-blue-500',
      isColor: 'from-white',
    },
  ];

  const dataTreg = [
    {
      name: 'TREG 1',
      vala: (1 + Math.random() * (99 - 20)).toFixed(0),
      valb: (1 + Math.random() * (99 - 12)).toFixed(0),
    },
    {
      name: 'TREG 2',
      vala: (1 + Math.random() * (99 - 20)).toFixed(0),
      valb: (1 + Math.random() * (99 - 12)).toFixed(0),
    },
    {
      name: 'TREG 3',
      vala: (1 + Math.random() * (99 - 20)).toFixed(0),
      valb: (1 + Math.random() * (99 - 12)).toFixed(0),
    },
    {
      name: 'TREG 4',
      vala: (1 + Math.random() * (99 - 20)).toFixed(0),
      valb: (1 + Math.random() * (99 - 12)).toFixed(0),
    },
    {
      name: 'TREG 5',
      vala: (1 + Math.random() * (99 - 20)).toFixed(0),
      valb: (1 + Math.random() * (99 - 12)).toFixed(0),
    },
    {
      name: 'TREG 6',
      vala: (1 + Math.random() * (99 - 20)).toFixed(0),
      valb: (1 + Math.random() * (99 - 12)).toFixed(0),
    },
    {
      name: 'TREG 7',
      vala: (1 + Math.random() * (99 - 20)).toFixed(0),
      valb: (1 + Math.random() * (99 - 12)).toFixed(0),
    },
    // More people...
  ];

  return (
    <Layout>
      {/* Heading Container */}
      <div className="relative">
        <h1 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
          Dashboard
        </h1>
      </div>

      {/* Filter Month */}
      <div className="relative mx-auto container max-w-md grid grid-cols-2 gap-4 mt-6">
        <select className="px-4 py-2 rounded-sm bg-white dark:bg-zinc-700 dark:text-zinc-50 border-2 pr-8 border-transparent focus:border-blue-500 cursor-pointer">
          <option value="">June</option>
        </select>
        <select className="px-4 py-2 rounded-sm bg-white dark:bg-zinc-700 dark:text-zinc-50 border-2 pr-8 border-transparent focus:border-blue-500 cursor-pointer">
          <option value="">2022</option>
        </select>
      </div>

      {/* Section Card */}
      <div className="relative mx-auto mt-8">
        <h1 className="text-xl leading-relaxed tracking-wide font-semibold text-zinc-800 dark:text-zinc-100">
          Summary
        </h1>

        <div className="relative grid grid-cols-4 gap-4 mt-4">
          {listCard.map((item, index) => (
            <div
              className={[
                'relative flex flex-col p-4 rounded-md cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out',
                item.bgColor,
              ].join(' ')}
              key={index}>
              <div className="relative -mr-4">
                <div
                  className={[
                    'absolute -top-10 flex -right-5 bg-gradient-to-tr opacity-80 h-24 w-24 rounded-full',
                    `${item.isColor} via-transparent to-transparent z-0`,
                  ].join(' ')}></div>
                <div
                  className={[
                    'absolute -top-10 flex -right-5 bg-gradient-to-tr h-28 w-28 rounded-full opacity-80',
                    `${item.isColor} via-transparent to-transparent z-0`,
                  ].join(' ')}></div>
              </div>
              <div
                className={[
                  'relative flex justify-center  rounded-lg items-center p-2 w-fit',
                  item.color,
                ].join(' ')}>
                <item.icon className="text-white/90 h-6" />
              </div>
              <p className="text-2xl font-bold text-zinc-700 dark:text-zinc-100 mt-3">
                {item.value}{' '}
                <small className="text-xs font-normal text-zinc-400 dark:text-zinc-300 capitalize">
                  {item.type !== 'transaksi' && item.type}
                </small>
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-400 dark:text-zinc-200">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative my-8">
        <div className="grid grid-cols-5 gap-4">
          <div className="relative p-4 col-span-3 bg-white dark:bg-zinc-800 rounded-sm">
            <h1 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 capitalize">
              Summary This Month
            </h1>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <ChartBar dataChart={dataTreg} />
          </div>
          <div className="relative col-span-2 bg-white rounded-sm dark:bg-zinc-800 p-4">
            <Table data={dataTreg} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
