import React from 'react';
import { Layout } from './includes';

export default function CRM() {
  let width = 22;
  let temp = 10;
  let reverse = 8;
  let reverseTemp = 2;
  const listData = [
    {
      color: 'bg-blue-700',
      border: '#1d4ed8',
      name: 'Prospect / Lead',
      shadow: 'shadow-blue-700/50',
      value: '2,257.93 M',
    },
    {
      color: 'bg-blue-600',
      shadow: 'shadow-blue-600/50',
      border: '#2563eb',
      name: 'Qualified LOP',
      value: '1,637.35 M',
    },
    {
      color: 'bg-blue-500',
      shadow: 'shadow-blue-500/50',
      border: '#3b82f6',
      name: 'Submission',
      value: '1,272.18 M',
    },
    {
      color: 'bg-blue-400',
      shadow: 'shadow-blue-400/50',
      border: '#60a5fa',
      name: 'Win',
      value: '1,063.27 M',
    },
    {
      color: 'bg-blue-300',
      shadow: 'shadow-blue-300/50',
      border: '#93c5fd',
      name: 'Billcomp',
      value: '702.62 M',
    },
  ];

  return (
    <Layout>
      {/* Filter Month */}
      <div className="relative mx-auto container max-w-md grid grid-cols-2 gap-4">
        <select className="px-4 py-2 rounded bg-white border-2 pr-8 border-transparent focus:border-blue-500 cursor-pointer">
          <option value="">May</option>
        </select>
        <select className="px-4 py-2 rounded bg-white border-2 pr-8 border-transparent focus:border-blue-500 cursor-pointer">
          <option value="">2022</option>
        </select>
      </div>

      <div className="relative my-8">
        <div className="grid grid-cols-3 gap-4 relative">
          <div className="relative overflow-auto">
            <div className="relative bg-white pb-10 px-4 overflow-auto rounded-lg w-full h-fit shadow-lg shadow-zinc-200">
              <h1 className="text-lg font-semibold text-zinc-800">
                LOP Performance YTD Q3 2021
              </h1>

              <p className="text-sm divide-x-2 divide-white  font-medium text-zinc-500 mt-1">
                Sales Funnel
              </p>
              {/* Chart */}

              <div className="relative flex items-center flex-col space-y-3 divide-y-2 divide-red-500 w-fit mt-8">
                {listData.map((item, index) => (
                  <div
                    style={{
                      borderTop: `2.8rem solid ${item.border}`,
                      borderLeft: '1.5rem solid transparent',
                      borderRight: '1.5rem solid transparent',
                      width: (width = width - 3) + 'rem',
                    }}
                    className={[
                      'relative flex justify-center text-sm font-semibold rounded-b-full',
                      index > 2 ? 'text-black' : 'text-white',
                    ].join(' ')}
                    key={index}>
                    <div
                      className="absolute flex justify-end -top-6 z-10"
                      style={{
                        width: (reverse = reverse + 2) + 'rem',
                        right: '-' + (reverseTemp = reverseTemp + 1.5) + 'rem',
                      }}>
                      <hr
                        className="border-2 z-0"
                        style={{
                          borderColor: item.border,
                          width: reverse / 3 + index + 'rem',
                        }}
                      />
                    </div>
                    <div
                      className={[
                        'absolute -top-11 py-3 shadow-md rounded-md text-center w-32 z-10',
                        item.shadow,
                      ].join(' ')}
                      style={{
                        right:
                          index === 0
                            ? '-' + (temp = temp + 1) + 'rem'
                            : '-' + (temp = temp + 1.4) + 'rem',
                        backgroundColor: item.border,
                      }}>
                      {item.value}
                    </div>
                    <p className="-mt-8 z-10">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative bg-white p-4 rounded-lg col-span-2 overflow-auto shadow-lg shadow-zinc-200/50">
            <h1 className="text-lg font-semibold text-zinc-800">
              LOP Performance YTD Q3 2021
            </h1>

            <p className="text-sm divide-x-2 divide-white  font-medium text-zinc-500 mt-1">
              Table
            </p>

            <table className="w-full divide-x-4 divide-y-4 divide-white">
              <thead>
                <tr className="text-sm divide-x-2 divide-white">
                  <th></th>
                  <th className="bg-blue-200 text-zinc-800 text-center py-3">
                    GTMA0
                  </th>
                  <th className="bg-blue-200 text-zinc-800 text-center py-3">
                    New GTMA
                  </th>
                  <th className="bg-blue-200 text-zinc-800 text-center py-3">
                    OC BUS
                  </th>
                  <th className="bg-blue-200 text-zinc-800 text-center py-3">
                    TGU
                  </th>
                  <th className="bg-blue-200 text-zinc-800 text-center py-3">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="divide-x-4 divide-y-4 divide-white">
                {/* <!-- Prospect Lead --> */}
                <tr className="text-sm divide-x-2 divide-white">
                  <th
                    rowSpan="2"
                    className="bg-blue-700 font-semibold text-white text-center text-base">
                    Prospect / Lead
                  </th>
                  <td className="bg-zinc-100 text-zinc-800 font-semibold text-center p-4 whitespace-nowrap">
                    1,073.89 M
                  </td>
                  <td className="bg-zinc-100 text-zinc-800 font-semibold text-center p-4 whitespace-nowrap">
                    1,073.89 M
                  </td>
                  <td className="bg-zinc-100 text-zinc-800 font-semibold text-center p-4 whitespace-nowrap">
                    1,073.89 M
                  </td>
                  <td className="bg-zinc-100 text-zinc-800 font-semibold text-center p-4 whitespace-nowrap">
                    1,073.89 M
                  </td>
                  <td className="bg-zinc-100 text-zinc-800 font-semibold text-center p-4 whitespace-nowrap">
                    1,073.89 M
                  </td>
                </tr>
                <tr className="text-sm divide-x-2 divide-white ">
                  <td className="bg-zinc-100 text-zinc-600 p-2 text-center whitespace-nowrap">
                    5 prj
                  </td>
                  <td className="bg-zinc-100 text-zinc-600 p-2 text-center whitespace-nowrap">
                    400 prj
                  </td>
                  <td className="bg-zinc-100 text-zinc-600 p-2 text-center whitespace-nowrap">
                    72 prj
                  </td>
                  <td className="bg-zinc-100 text-zinc-600 p-2 text-center whitespace-nowrap">
                    104 prj
                  </td>
                  <td className="bg-zinc-100 text-zinc-600 p-2 text-center whitespace-nowrap">
                    581 prj
                  </td>
                </tr>
                {/* <!-- Qualified LOP --> */}
                <tr className="text-sm divide-x-2 divide-white ">
                  <th
                    rowSpan="2"
                    className="bg-blue-700 font-semibold text-white text-center text-base">
                    Qualified LOP
                  </th>
                  <td className="bg-zinc-100 text-zinc-800 font-semibold text-center p-4 whitespace-nowrap">
                    1,073.89 M
                  </td>
                  <td className="bg-zinc-100 text-zinc-800 font-semibold text-center p-4 whitespace-nowrap">
                    1,073.89 M
                  </td>
                  <td className="bg-zinc-100 text-zinc-800 font-semibold text-center p-4 whitespace-nowrap">
                    1,073.89 M
                  </td>
                  <td className="bg-zinc-100 text-zinc-800 font-semibold text-center p-4 whitespace-nowrap">
                    1,073.89 M
                  </td>
                  <td className="bg-zinc-100 text-zinc-800 font-semibold text-center p-4 whitespace-nowrap">
                    1,073.89 M
                  </td>
                </tr>
                <tr className="text-sm divide-x-2 divide-white ">
                  <td className="bg-zinc-100 text-zinc-600 p-2 text-center whitespace-nowrap">
                    5 prj
                  </td>
                  <td className="bg-zinc-100 text-zinc-600 p-2 text-center whitespace-nowrap">
                    400 prj
                  </td>
                  <td className="bg-zinc-100 text-zinc-600 p-2 text-center whitespace-nowrap">
                    72 prj
                  </td>
                  <td className="bg-zinc-100 text-zinc-600 p-2 text-center whitespace-nowrap">
                    104 prj
                  </td>
                  <td className="bg-zinc-100 text-zinc-600 p-2 text-center whitespace-nowrap">
                    581 prj
                  </td>
                </tr>
                {/* <!-- Submission --> */}
                <tr className="text-sm divide-x-2 divide-white ">
                  <th
                    rowSpan="2"
                    className="bg-blue-500 font-semibold text-white text-center text-base">
                    Submisson
                  </th>
                  <td className="bg-zinc-100 text-zinc-800 font-semibold text-center p-4 whitespace-nowrap">
                    1,073.89 M
                  </td>
                  <td className="bg-zinc-100 text-zinc-800 font-semibold text-center p-4 whitespace-nowrap">
                    1,073.89 M
                  </td>
                  <td className="bg-zinc-100 text-zinc-800 font-semibold text-center p-4 whitespace-nowrap">
                    1,073.89 M
                  </td>
                  <td className="bg-zinc-100 text-zinc-800 font-semibold text-center p-4 whitespace-nowrap">
                    1,073.89 M
                  </td>
                  <td className="bg-zinc-100 text-zinc-800 font-semibold text-center p-4 whitespace-nowrap">
                    1,073.89 M
                  </td>
                </tr>
                <tr className="text-sm divide-x-2 divide-white ">
                  <td className="bg-zinc-100 text-zinc-600 p-2 text-center whitespace-nowrap">
                    5 prj
                  </td>
                  <td className="bg-zinc-100 text-zinc-600 p-2 text-center whitespace-nowrap">
                    400 prj
                  </td>
                  <td className="bg-zinc-100 text-zinc-600 p-2 text-center whitespace-nowrap">
                    72 prj
                  </td>
                  <td className="bg-zinc-100 text-zinc-600 p-2 text-center whitespace-nowrap">
                    104 prj
                  </td>
                  <td className="bg-zinc-100 text-zinc-600 p-2 text-center whitespace-nowrap">
                    581 prj
                  </td>
                </tr>
                {/* <!-- Win --> */}
                <tr className="text-sm divide-x-2 divide-white ">
                  <th
                    rowSpan="3"
                    className="bg-blue-400 font-semibold text-zinc-800 text-center ">
                    Win
                  </th>
                  <td className="bg-zinc-100 text-zinc-800 font-semibold text-center p-4 whitespace-nowrap">
                    1,073.89 M
                  </td>
                  <td className="bg-zinc-100 text-zinc-800 font-semibold text-center p-4 whitespace-nowrap">
                    1,073.89 M
                  </td>
                  <td className="bg-zinc-100 text-zinc-800 font-semibold text-center p-4 whitespace-nowrap">
                    1,073.89 M
                  </td>
                  <td className="bg-zinc-100 text-zinc-800 font-semibold text-center p-4 whitespace-nowrap">
                    1,073.89 M
                  </td>
                  <td className="bg-zinc-100 text-zinc-800 font-semibold text-center p-4 whitespace-nowrap">
                    1,073.89 M
                  </td>
                </tr>
                <tr className="text-sm divide-x-2 divide-white ">
                  <td className="bg-zinc-100 text-sm font-light text-center">
                    <p>Roy FY 2021</p>
                    <p>39.29 M</p>
                  </td>
                  <td className="bg-zinc-100 text-sm font-light text-center">
                    <p>Roy FY 2021</p>
                    <p>39.29 M</p>
                  </td>
                  <td className="bg-zinc-100 text-sm font-light text-center">
                    <p>Roy FY 2021</p>
                    <p>39.29 M</p>
                  </td>
                  <td className="bg-zinc-100 text-sm font-light text-center">
                    <p>Roy FY 2021</p>
                    <p>39.29 M</p>
                  </td>
                  <td className="bg-zinc-100 text-sm font-light text-center">
                    <p>Roy FY 2021</p>
                    <p>39.29 M</p>
                  </td>
                </tr>
                <tr className="text-sm divide-x-2 divide-white ">
                  <td className="bg-zinc-100 text-zinc-600 p-2 text-center whitespace-nowrap">
                    5 prj
                  </td>
                  <td className="bg-zinc-100 text-zinc-600 p-2 text-center whitespace-nowrap">
                    400 prj
                  </td>
                  <td className="bg-zinc-100 text-zinc-600 p-2 text-center whitespace-nowrap">
                    72 prj
                  </td>
                  <td className="bg-zinc-100 text-zinc-600 p-2 text-center whitespace-nowrap">
                    104 prj
                  </td>
                  <td className="bg-zinc-100 text-zinc-600 p-2 text-center whitespace-nowrap">
                    581 prj
                  </td>
                </tr>

                {/* <!-- Billcomp --> */}
                <tr className="text-sm divide-x-2 divide-white ">
                  <th
                    rowSpan="2"
                    className="bg-blue-300 font-semibold text-zinc-800 text-center text-base">
                    Billcomp
                  </th>
                  <td className="bg-zinc-100 text-zinc-800 font-semibold text-center p-4 whitespace-nowrap">
                    1,073.89 M
                  </td>
                  <td className="bg-zinc-100 text-zinc-800 font-semibold text-center p-4 whitespace-nowrap">
                    1,073.89 M
                  </td>
                  <td className="bg-zinc-100 text-zinc-800 font-semibold text-center p-4 whitespace-nowrap">
                    1,073.89 M
                  </td>
                  <td className="bg-zinc-100 text-zinc-800 font-semibold text-center p-4 whitespace-nowrap">
                    1,073.89 M
                  </td>
                  <td className="bg-zinc-100 text-zinc-800 font-semibold text-center p-4 whitespace-nowrap">
                    1,073.89 M
                  </td>
                </tr>
                <tr className="text-sm divide-x-2 divide-white ">
                  <td className="bg-zinc-100 text-zinc-600 p-2 text-center whitespace-nowrap">
                    5 prj
                  </td>
                  <td className="bg-zinc-100 text-zinc-600 p-2 text-center whitespace-nowrap">
                    400 prj
                  </td>
                  <td className="bg-zinc-100 text-zinc-600 p-2 text-center whitespace-nowrap">
                    72 prj
                  </td>
                  <td className="bg-zinc-100 text-zinc-600 p-2 text-center whitespace-nowrap">
                    104 prj
                  </td>
                  <td className="bg-zinc-100 text-zinc-600 p-2 text-center whitespace-nowrap">
                    581 prj
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
