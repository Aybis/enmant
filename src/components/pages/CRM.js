import React, { useState } from 'react';
import { convertDate } from '../../utils/helpers/convertDate';
import RenderIf from '../../utils/hooks/RenderIf';
import Own from './crm/Own';
import Funnel from './dashboard/Funnel';
import { Layout } from './includes';

export default function CRM() {
  const [formPeriode, setformPeriode] = useState({
    start: convertDate('ymd'),
    end: convertDate('ymd'),
  });

  const handlerChangePeriode = (event) => {
    setformPeriode({
      ...formPeriode,
      [event.target.name]: event.target.value,
    });
  };

  const dataTop = [
    {
      ubis: 'ENT',
      nilai: 123456000,
      date: convertDate('ymden'),
    },
    {
      ubis: 'GOV',
      nilai: 123456000,
      date: convertDate('ymden'),
    },
    {
      ubis: 'TSB',
      nilai: 123456000,
      date: convertDate('ymden'),
    },
    {
      ubis: 'E-COM',
      nilai: 123456000,
      date: convertDate('ymden'),
    },
    {
      ubis: 'TSB',
      nilai: 123456000,
      date: convertDate('ymden'),
    },
  ];

  const dataTesting = [
    {
      name: {
        title: 'F1',
        sub: '(Opportunity)',
      },
      data: [
        [126.94, 253, 553.94, 70.14, 753.56],
        [51, 3, 106, 15, 175],
      ],
    },
    {
      name: {
        title: 'F2',
        sub: '(Proposal)',
      },
      data: [
        [126.94, 253, 553.94, 70.14, 753.56],
        [51, 3, 106, 15, 175],
      ],
    },
    {
      name: {
        title: 'F3',
        sub: '(Bidding)',
      },
      data: [
        [85.42, 2.53, 353.95, 38.09, 480.0],
        [23, 3, 63, 9, 98],
      ],
    },
    {
      name: {
        title: 'F4',
        sub: '(Negotiation)',
      },
      data: [
        [54.37, 2.53, 329.03, 17.69, 403.63],
        [17, 3, 53, 7, 80],
      ],
    },
    {
      name: {
        title: 'F5',
        sub: '(Contract)',
      },
      data: [
        [32.19, 2.53, 329.03, 17.69, 381.45],
        [12, 3, 53, 7, 75],
      ],
    },
    {
      name: {
        title: 'Convertion Ratio (F5/F3)',
        sub: '',
      },
      data: [[50.00000000001, 100.0, 50, 80, 80.01]],
    },
  ];

  const dataHeaderOc = [
    {
      name: 'New GTMA',
    },
    {
      name: 'GTMA',
    },
    {
      name: 'Own Channel',
    },
    {
      name: 'TGU',
    },
    {
      name: 'TOTAL',
    },
  ];

  const dataHeaderUbis = [
    {
      name: 'ENT',
      alias: 'Enterprise',
    },
    {
      name: 'GOV',
      alias: 'Goverment',
    },
    {
      name: 'TSB',
      alias: 'Telco & SME Business',
    },
    {
      name: 'E-COM',
      alias: 'E-Commerce',
    },
    {
      name: 'TOTAL',
      alias: '',
    },
  ];
  return (
    <Layout>
      {/* Heading Container */}
      <div className="relative">
        <h1 className="text-3xl font-semibold text-zinc-800 dark:text-zinc-100">
          Sales Funnel
        </h1>
      </div>

      {/* Filter Periode */}
      <div className="relative mx-auto container max-w-md grid grid-cols-2 gap-4">
        <div className="relative">
          <label
            htmlFor="start"
            className="text-zinc-700 dark:text-zinc-100 font-medium text-sm leading-relaxed">
            Start Date
          </label>
          <input
            type="date"
            name="start"
            onChange={handlerChangePeriode}
            value={formPeriode.start}
            className="px-4 py-2 text-sm w-full rounded mt-1 bg-white shadow-lg shadow-gray-200/90 dark:bg-zinc-700 dark:text-zinc-50 pr-4 focus:border-blue-500 cursor-pointer border-transparent"
          />
        </div>
        <div className="relative">
          <label
            htmlFor="end"
            className="text-zinc-700 dark:text-zinc-100 font-medium text-sm leading-relaxed">
            End Date
          </label>
          <input
            type="date"
            name="end"
            onChange={handlerChangePeriode}
            value={formPeriode.end}
            max={formPeriode.end}
            className="px-4 py-2 text-sm w-full rounded mt-1 bg-white shadow-lg shadow-gray-200/90 dark:bg-zinc-700 dark:text-zinc-50 pr-4 focus:border-blue-500 cursor-pointer border-transparent"
          />
        </div>
      </div>

      <div className="relative mx-auto container mt-12 w-fit">
        <h1 className="text-zinc-700 text-2xl font-medium tracking-wider leading-relaxed text-center uppercase">
          LOP Performance{'   '}
          <span className="capitalize">
            ({convertDate('ymden', formPeriode.start)} -{' '}
            {convertDate('ymden', formPeriode.end)})
          </span>
        </h1>
        <hr className="border-b border-zinc-200/70 mt-2 -mx-12" />
      </div>

      <div className="relative mt-12 mb-4 grid grid-cols-3 gap-4">
        <div className="relative col-span-1 p-4 w-full rounded">
          <h1 className="text-zinc-800 dark:text-zinc-100 font-semibold text-lg leading-relaxed mb-8 hidden">
            Sales Funnel
          </h1>
          <Funnel />
        </div>
        <div className="relative rounded col-span-2">
          <div className="relative grid grid-cols-2 gap-4">
            {/* Table Funnel Channel  */}
            <div className="relative p-4 col-span-2 bg-white dark:bg-zinc-900 rounded">
              <Own
                dataHeader={dataHeaderOc}
                data={dataTesting}
                name="Channel"
              />
            </div>

            {/* Table Funnel UBIS */}
            <div className="relative p-4 col-span-2 bg-white dark:bg-zinc-900 rounded">
              <Own dataHeader={dataHeaderUbis} data={dataTesting} name="UBIS" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-12 grid grid-cols-2 gap-4">
        {/* Table Top 5 Win  */}
        <div className="relative p-4 bg-white dark:bg-zinc-900 rounded">
          <h1 className="text-zinc-800 dark:text-zinc-100 font-semibold text-lg leading-relaxed">
            Top 5 Win Project
          </h1>
          <div className="relative bg-white text-zinc-400 dark:bg-zinc-700 dark:text-zinc-400 rounded p-2 text-sm font-medium mt-4">
            <table className="w-full">
              <thead className="border-b-2 border-zinc-200 dark:border-zinc-600">
                <tr className="bg-gradient-to-b from-blue-800 to-blue-500 text-white dark:bg-zinc-500 dark:text-zinc-100 leading-relaxed">
                  <th className="py-2">No</th>
                  <th className="py-2">UBIS</th>
                  <th className="py-2">Nilai Project (Rp)</th>
                  <th className="py-2">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                <RenderIf isTrue={dataTop.length > 0}>
                  {dataTop.map((item, index) => (
                    <tr
                      key={index}
                      className="text-center py-4 px-2 line text-zinc-500 border-zinc-200 dark:text-zinc-50 font-medium text-sm leading-10 border-b dark:border-zinc-600">
                      <td>{index + 1}</td>
                      <td>{item.ubis}</td>
                      <td>Rp {item.nilai.toLocaleString('id-ID')}</td>
                      <td>{item.date}</td>
                    </tr>
                  ))}
                </RenderIf>
              </tbody>
            </table>
          </div>
        </div>

        {/* Table Top 5 Lose  */}
        <div className="relative p-4 bg-white dark:bg-zinc-900 rounded">
          <h1 className="text-zinc-800 dark:text-zinc-100 font-semibold text-lg leading-relaxed">
            Top 5 Lose Project
          </h1>
          <div className="relative text-zinc-400 dark:bg-zinc-700 dark:text-zinc-400 rounded p-2 text-sm font-medium mt-4">
            <table className="w-full">
              <thead className="border-b-2 border-zinc-200 dark:border-zinc-600">
                <tr className="bg-gradient-to-b from-blue-800 to-blue-500 text-white dark:bg-zinc-500 dark:text-zinc-100 leading-relaxed">
                  <th className="py-2">No</th>
                  <th className="py-2">UBIS</th>
                  <th className="py-2">Nilai Project (Rp)</th>
                  <th className="py-2">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                <RenderIf isTrue={dataTop.length > 0}>
                  {dataTop.map((item, index) => (
                    <tr
                      key={index}
                      className="text-center py-4 px-2 line text-zinc-500 border-zinc-200 dark:text-zinc-50 font-medium text-sm leading-10 border-b dark:border-zinc-600">
                      <td>{index + 1}</td>
                      <td>{item.ubis}</td>
                      <td>Rp {item.nilai.toLocaleString('id-ID')}</td>
                      <td>{item.date}</td>
                    </tr>
                  ))}
                </RenderIf>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
