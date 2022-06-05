import { Combobox, Dialog, Transition } from '@headlessui/react';
import { TicketIcon } from '@heroicons/react/solid';
import { Fragment, useState } from 'react';

const people = [
  {
    id: '113310188624',
    noMeter: '45081464526',
    namaPel: 'SHELTER MINI-OLT TELKOM ',
  },
  {
    id: '120120331379',
    noMeter: '14362436967',
    namaPel: 'PT.TELKOM BAHOROK KUALA',
  },
  {
    id: '123010584806',
    noMeter: '14362615115',
    namaPel: 'PARLINDUNGAN NASUTION',
  },
  {
    id: '123010584822',
    noMeter: '86014973001',
    namaPel: 'PT TELKOM INDONESIA',
  },
  {
    id: '123010598783',
    noMeter: '86015764235',
    namaPel: 'PT. TELKOM INDONESIA MRA',
  },
  {
    id: '123010598791',
    noMeter: '86015735516',
    namaPel: 'PT. TELKOM INDONESIA MRB',
  },

  // More people...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example({ isOpen, handlerOpen }) {
  const [query, setQuery] = useState('');

  const filteredPeople =
    query === ''
      ? []
      : people.filter((person) => {
          return (
            person.id.toLowerCase().includes(query.toLowerCase()) ||
            person.noMeter.toLowerCase().includes(query.toLowerCase()) ||
            person.namaPel.toLowerCase().includes(query.toLowerCase())
          );
        });

  return (
    <Transition.Root
      show={isOpen}
      as={Fragment}
      afterLeave={() => setQuery('')}
      appear>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => handlerOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">
            <Dialog.Panel className="mx-auto max-w-xl transform rounded-xl bg-white p-2 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              <Combobox onChange={(person) => (window.location = person.id)}>
                <Combobox.Input
                  className="w-full rounded-md border-0 bg-gray-100 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="Search ID Pelanggan, Nama Pelanggan, No Meter..."
                  onChange={(event) => setQuery(event.target.value)}
                />

                {filteredPeople.length > 0 && (
                  <Combobox.Options
                    static
                    className="-mb-2 max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800">
                    {filteredPeople.map((person) => (
                      <Combobox.Option
                        key={person.id}
                        value={person}
                        className={({ active }) =>
                          classNames(
                            'cursor-pointer select-none rounded-md px-4 py-2',
                            active && 'bg-blue-600 text-white',
                          )
                        }>
                        {person.id} - {person.namaPel}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                )}

                {query !== '' && filteredPeople.length === 0 && (
                  <div className="py-14 px-4 text-center sm:px-14">
                    <TicketIcon
                      className="mx-auto h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <p className="mt-4 text-sm text-gray-900">
                      No transaction found using that search term.
                    </p>
                  </div>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
