/* This example requires Tailwind CSS v2.0+ */
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function Table({ data }) {
  let sumA = 0;
  let sumB = 0;
  let sumC = 0;

  return (
    <div className="relative">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-lg font-semibold text-gray-800 dark:text-zinc-100">
            Summary All TREG
          </h1>
          <p className="mt-1 text-sm text-gray-700 dark:text-zinc-400">
            A list of all transaction.
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden ring-1 ring-black dark:ring-zinc-700 dark:ring-opacity-100 ring-opacity-5 md:rounded-sm">
              <table className="min-w-full divide-y divide-gray-300 dark:divide-zinc-100">
                <thead className="bg-zinc-50 dark:bg-zinc-700">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-zinc-100 sm:pl-6">
                      <div className="group inline-flex">
                        TREG
                        <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                          <ChevronDownIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 dark:text-zinc-100">
                      <div className="group inline-flex">
                        Prabayar
                        <span className="ml-2 flex-none cursor-pointer rounded bg-gray-200 text-gray-900 group-hover:bg-gray-300">
                          <ChevronDownIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 dark:text-zinc-100">
                      <div className="group inline-flex">
                        Pascabayar
                        <span className="ml-2 flex-none cursor-pointer rounded bg-gray-200 text-gray-900 group-hover:bg-gray-300">
                          <ChevronDownIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-sm text-center font-semibold text-gray-900 dark:text-zinc-100">
                      <div className="group inline-flex tec">Total</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 bg-white dark:bg-zinc-800">
                  {data.map((person, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-zinc-100 sm:pl-6">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-zinc-50 dark:font-medium text-center">
                        {person.vala}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-zinc-50 dark:font-medium text-center">
                        {person.valb}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-zinc-50 dark:font-medium text-center">
                        {parseInt(person.vala) + parseInt(person.valb)}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="divide-y divide-gray-200 border-b bg-gray-50 dark:bg-zinc-700">
                  <tr>
                    <td className="dark:text-zinc-100 text-zinc-700 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-semibold text-center">
                      Total
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-semibold text-zinc-700 dark:text-zinc-100 dark:font-semibold text-center">
                      {data?.forEach((item) => {
                        sumA += parseInt(item.vala);
                      })}
                      {sumA}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-semibold text-zinc-700 dark:text-zinc-100 dark:font-semibold text-center">
                      {data?.forEach((item) => {
                        sumB += parseInt(item.valb);
                      })}
                      {sumB}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-semibold text-zinc-700 dark:text-zinc-100 dark:font-semibold text-center">
                      {data?.forEach((item) => {
                        sumC += parseInt(item.vala) + parseInt(item.valb);
                      })}
                      {sumC}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
