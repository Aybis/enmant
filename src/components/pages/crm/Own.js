import React from 'react';
import RenderIf from '../../../utils/hooks/RenderIf';

export default function Own({ data, dataHeader, name, children }) {
  return (
    <div className="relative p-4 col-span-2 bg-white dark:bg-zinc-900 rounded">
      <h1 className="text-zinc-800 dark:text-zinc-100 font-semibold text-lg leading-relaxed capitalize">
        Table By {name}
      </h1>
      <div className="relative mt-4 text-zinc-400 dark:bg-zinc-700 dark:text-zinc-400 rounded p-2 text-sm font-medium">
        {children}

        <table className="w-full">
          <thead className="border-b-2 border-zinc-200 dark:border-zinc-400">
            <tr className="text-center font-medium">
              <th></th>
              {dataHeader.map((item, index) => (
                <th
                  key={index}
                  className="py-2 bg-gradient-to-b from-blue-800 to-blue-500 text-white dark:bg-zinc-500 dark:text-zinc-100 leading-relaxed text-right px-2">
                  <div className="relative flex flex-col justify-end space-y-2">
                    <p>{item.name}</p>
                    <RenderIf isTrue={item.alias}>
                      <div className="relative font-light text-xs capitalize text-clip w-full flex justify-end h-7">
                        <div className="w-32 ">({item.alias})</div>
                      </div>
                    </RenderIf>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) =>
              item?.data?.map((tr, trIndex) => (
                <tr key={trIndex} className=" border-white">
                  <RenderIf isTrue={trIndex === 0}>
                    <th
                      className="leading-relaxed w-24 bg-gradient-to-r from-blue-800  to-blue-300 p-4 text-left text-white capitalize border-b-2 border-dashed"
                      rowSpan={item?.data?.length}>
                      <p className="w-fit">{item.name.title}</p>

                      <p className="w-fit">{item.name.sub}</p>
                    </th>
                  </RenderIf>
                  {tr.map((data, indexData) => (
                    <td
                      className={[
                        'bg-zinc-100/70 dark:bg-zinc-700 dark:text-zinc-100 py-1 px-4 whitespace-nowrap text-right leading-relaxed',
                        trIndex + 1 === item.data.length
                          ? 'border-b-2 border-zinc-400/80 dark:border-zinc-200 border-dashed'
                          : 'border-none',
                      ].join(' ')}
                      key={indexData}>
                      <RenderIf
                        isTrue={item.name.title !== 'Convertion Ratio (F5/F3)'}>
                        <p
                          className={[
                            ' text-zinc-500 dark:text-zinc-100',

                            trIndex + 1 !== item.data.length
                              ? 'font-medium'
                              : 'font-light',
                          ].join(' ')}>
                          {data}{' '}
                          <RenderIf isTrue={trIndex + 1 === item.data.length}>
                            <span> Project</span>
                          </RenderIf>
                          <RenderIf isTrue={trIndex + 1 !== item.data.length}>
                            <span> M</span>
                          </RenderIf>
                        </p>
                      </RenderIf>

                      <RenderIf
                        isTrue={item.name.title === 'Convertion Ratio (F5/F3)'}>
                        <div className="relative flex justify-end">
                          <p
                            className={[
                              'font-semibold tracking-wide w-20 text-zinc-100 leading-relaxed p-2 rounded text-center text-base',

                              data > 80 && 'bg-green-500',
                              data <= 80.0 && data > 50 && 'bg-yellow-500',
                              data <= 50.0 && 'bg-red-500',
                            ].join(' ')}>
                            {data.toFixed(1)}%
                          </p>
                        </div>
                      </RenderIf>
                    </td>
                  ))}
                </tr>
              )),
            )}
          </tbody>
        </table>
      </div>

      <div className="relative mt-4 flex justify-center items-center space-x-4">
        <div className="relative flex space-x-2 items-center">
          <div className="bg-green-500 h-3 w-3"></div>
          <p className="text-xs text-zinc-500 leading-relaxed tracking-wide">
            {' '}
            {'> 80%'}
          </p>
        </div>
        <div className="relative flex space-x-2 items-center">
          <div className="bg-yellow-500 h-3 w-3"></div>
          <p className="text-xs text-zinc-500 leading-relaxed tracking-wide">
            {' '}
            {' 50% > x ≤ 80%'}
          </p>
        </div>
        <div className="relative flex space-x-2 items-center">
          <div className="bg-red-500 h-3 w-3"></div>
          <p className="text-xs text-zinc-500 leading-relaxed tracking-wide">
            {' '}
            {'≤ 50%'}
          </p>
        </div>
      </div>
    </div>
  );
}
