import React from 'react';

export default function TableBody({ children, addClass }) {
  return (
    <tr
      className={[
        'text-sm font-semibold leading-none text-gray-800 bg-white dark:bg-zinc-800 dark:border-b dark:border-t dark:border-zinc-700 dark:hover:bg-zinc-600 hover:bg-gray-50 border-b border-t border-zinc-100',
        addClass,
      ].join(' ')}>
      {children}
    </tr>
  );
}
