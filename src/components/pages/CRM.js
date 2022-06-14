import React, { useState } from 'react';
import { convertDate } from '../../utils/helpers/convertDate';
import RenderIf from '../../utils/hooks/RenderIf';
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
      ubis: 'MSS',
      nilai: 123456000,
      date: convertDate('now'),
    },
    {
      ubis: 'MSS',
      nilai: 123456000,
      date: convertDate('yesterday'),
    },
    {
      ubis: 'MSS',
      nilai: 123456000,
      date: convertDate('now'),
    },
    {
      ubis: 'MSS',
      nilai: 123456000,
      date: convertDate('now'),
    },
    {
      ubis: 'MSS',
      nilai: 123456000,
      date: convertDate('now'),
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
        [31.59, 2.18, 312.73, 17.69, 364.19],
        [12, 3, 53, 7, 75],
      ],
    },
    {
      name: {
        title: 'Convertion Ratio',
        sub: '',
      },
      data: [[37.69, 100.0, 92.95, 48.44, 79.47]],
    },
  ];
  return (
    <Layout>
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
            className="px-4 py-2 text-sm w-full rounded mt-1 bg-white dark:bg-zinc-700 dark:text-zinc-50 pr-4 focus:border-blue-500 cursor-pointer border-transparent"
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
            className="px-4 py-2 text-sm w-full rounded mt-1 bg-white dark:bg-zinc-700 dark:text-zinc-50 pr-4 focus:border-blue-500 cursor-pointer border-transparent"
          />
        </div>
      </div>

      <div className="relative mt-12 mb-4 grid grid-cols-3 gap-4">
        <div className="relative col-span-1 p-4 w-full rounded">
          <h1 className="text-zinc-800 dark:text-zinc-100 font-semibold text-lg leading-relaxed mb-8">
            Sales Funnel
          </h1>
          <Funnel />
        </div>
        <div className="relative rounded col-span-2">
          <div className="relative grid grid-cols-2 gap-4">
            {/* Table Top 5 Win  */}
            <div className="relative p-4 bg-white dark:bg-zinc-900 rounded">
              <h1 className="text-zinc-800 dark:text-zinc-100 font-semibold text-lg leading-relaxed">
                Top 5 Win Project
              </h1>
              <div className="relative bg-white text-zinc-400 dark:bg-zinc-700 dark:text-zinc-400 rounded p-2 text-sm font-medium mt-4">
                <table className="w-full">
                  <thead className="border-b-2 border-zinc-200 dark:border-zinc-600">
                    <tr className="text-center font-medium">
                      <th className="py-2">No</th>
                      <th className="py-2">UBIS</th>
                      <th className="py-2">Nilai Project</th>
                      <th className="py-2">Tanggal Win</th>
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
                          <td>{item.nilai.toLocaleString('id-ID')}</td>
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
                    <tr className="text-center font-medium">
                      <th className="py-2">No</th>
                      <th className="py-2">UBIS</th>
                      <th className="py-2">Nilai Project</th>
                      <th className="py-2">Tanggal Win</th>
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
                          <td>{item.nilai.toLocaleString('id-ID')}</td>
                          <td>{item.date}</td>
                        </tr>
                      ))}
                    </RenderIf>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table Funnel  */}
            <div className="relative p-4 col-span-2 bg-white dark:bg-zinc-900 rounded">
              <h1 className="text-zinc-800 dark:text-zinc-100 font-semibold text-lg leading-relaxed">
                Table Sales Funnel
              </h1>
              <div className="relative mt-4 text-zinc-400 dark:bg-zinc-700 dark:text-zinc-400 rounded p-2 text-sm font-medium">
                <table className="w-full">
                  <thead className="border-b-2 border-zinc-200 dark:border-zinc-400">
                    <tr className="text-center font-medium">
                      <th></th>
                      <th className="py-3 bg-zinc-100 dark:bg-zinc-500 dark:text-zinc-300 leading-relaxed text-right px-2">
                        New GTMA
                      </th>
                      <th className="py-3 bg-zinc-100 dark:bg-zinc-500 dark:text-zinc-300 leading-relaxed text-right px-2">
                        GTMA
                      </th>
                      <th className="py-3 bg-zinc-100 dark:bg-zinc-500 dark:text-zinc-300 leading-relaxed text-right px-2">
                        Own Channel
                      </th>
                      <th className="py-3 bg-zinc-100 dark:bg-zinc-500 dark:text-zinc-300 leading-relaxed text-right px-2">
                        TGU
                      </th>
                      <th className="py-3 bg-zinc-100 dark:bg-zinc-500 dark:text-zinc-300 leading-relaxed text-right px-2">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataTesting?.map((item, index) =>
                      item?.data?.map((tr, trIndex) => (
                        <tr key={trIndex} className=" border-white">
                          <RenderIf isTrue={trIndex === 0}>
                            <th
                              className="leading-relaxed w-24 bg-blue-500 p-4 text-left text-white capitalize border-b-2 border-dashed"
                              rowSpan={item?.data?.length}>
                              <p className="w-fit">{item.name.title}</p>

                              <p className="w-fit">{item.name.sub}</p>
                            </th>
                          </RenderIf>
                          {tr.map((data, indexData) => (
                            <td
                              className={[
                                'bg-zinc-100/70 dark:bg-zinc-700 dark:text-zinc-100  p-2 whitespace-nowrap text-right',
                                trIndex + 1 === item.data.length
                                  ? 'border-b-2 border-zinc-200 border-dashed'
                                  : 'border-none',
                              ].join(' ')}
                              key={indexData}>
                              <RenderIf
                                isTrue={
                                  item.name.title === 'F5' && trIndex === 1
                                }>
                                <p className="font-medium text-zinc-500 dark:text-zinc-100">
                                  Rev FY 2022
                                </p>
                              </RenderIf>

                              <RenderIf
                                isTrue={item.name.title !== 'Convertion Ratio'}>
                                <p className="font-medium text-zinc-500 dark:text-zinc-100">
                                  {data}{' '}
                                  <RenderIf
                                    isTrue={trIndex + 1 === item.data.length}>
                                    <span> Project</span>
                                  </RenderIf>
                                  <RenderIf
                                    isTrue={trIndex + 1 !== item.data.length}>
                                    <span> M</span>
                                  </RenderIf>
                                </p>
                              </RenderIf>

                              <RenderIf
                                isTrue={item.name.title === 'Convertion Ratio'}>
                                <p className="font-medium text-zinc-500 dark:text-zinc-100">
                                  {data}%
                                </p>
                              </RenderIf>
                            </td>
                          ))}
                        </tr>
                      )),
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
