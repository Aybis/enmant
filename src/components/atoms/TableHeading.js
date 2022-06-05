import React from 'react';

export default function Tables({ theading, children, addClass, footer }) {
  return (
    <div className="overflow-visible border-b border-gray-200 dark:border-zinc-700 sm:rounded-lg transition-all duration-300 ease-in-out shadow-lg dark:shadow-none shadow-slate-200/50 min-h-full">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-zinc-700 relative h-64 transition-all duration-300 ease-in-out">
        <thead className="bg-blue-100 dark:bg-zinc-600 sticky top-0">
          <tr className="sticky top-0 h-16 w-full leading-none text-gray-400 border-b-2 border-gray-200">
            {theading.map((item) => (
              <th
                key={Math.random()}
                scope="col"
                className={[
                  'px-6 py-3 text-left text-xs font-semibold text-gray-900 dark:text-zinc-50  uppercase tracking-wider whitespace-nowrap',
                  addClass,
                ].join(' ')}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:divide-zinc-700">
          {children}
        </tbody>
        <tfoot className="bg-white divide-y divide-zinc-500 dark:divide-zinc-700 sticky bottom-0">
          {footer}
        </tfoot>
      </table>
    </div>
  );
}
