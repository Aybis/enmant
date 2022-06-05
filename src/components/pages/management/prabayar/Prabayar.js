import { PlusIcon, SearchIcon, TrashIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { TableBody, TableContent, TableHeading } from '../../../atoms';
import Button from '../../../atoms/Button';

export default function Prabayar() {
  const [showModal, setshowModal] = useState(false);

  const data = [
    {
      NO: '1',
      'ID PELANGGAN': '113310188624',
      'NO METER': '45081464526',
      'NAMA PEL': 'SHELTER MINI-OLT TELKOM  ',
      WITEL: 'ACEH',
      AREA: 'SUMATERA',
      ' TARIF ': 'B1T',
      ' DAYA ': ' 2,200 ',
      cek: 'DIBELIKAN TOKEN',
    },
    {
      NO: '2',
      'ID PELANGGAN': '120120331379',
      'NO METER': '14298158495',
      'NAMA PEL': 'PT. TELKOM               ',
      WITEL: 'SUMUT BARAT',
      AREA: 'SUMATERA',
      ' TARIF ': 'B1T',
      ' DAYA ': ' 3,500 ',
      cek: 'DIBELIKAN TOKEN',
    },
    {
      NO: '3',
      'ID PELANGGAN': '122010567752',
      'NO METER': '56402275129',
      'NAMA PEL': 'PT.TELEKOMUNIKASI',
      WITEL: 'SUMUT BARAT',
      AREA: 'SUMATERA',
      ' TARIF ': 'B1T',
      ' DAYA ': ' 3,500 ',
      cek: 'DIBELIKAN TOKEN',
    },
    {
      NO: '4',
      'ID PELANGGAN': '122130663483',
      'NO METER': '45034847702',
      'NAMA PEL': 'PT.TELKOM BAHOROK KUALA',
      WITEL: 'SUMUT BARAT',
      AREA: 'SUMATERA',
      ' TARIF ': 'B1T',
      ' DAYA ': ' 2,200 ',
      cek: 'DIBELIKAN TOKEN',
    },
    {
      NO: '5',
      'ID PELANGGAN': '122150529733',
      'NO METER': '32179365625',
      'NAMA PEL': 'PARLINDUNGAN NASUTION',
      WITEL: 'SUMUT TIMUR',
      AREA: 'SUMATERA',
      ' TARIF ': 'R1T',
      ' DAYA ': ' 2,200 ',
      cek: 'DIBELIKAN TOKEN',
    },
    {
      NO: '6',
      'ID PELANGGAN': '123010584806',
      'NO METER': '14362436967',
      'NAMA PEL': 'PT TELKOM INDONESIA',
      WITEL: 'SUMUT TIMUR',
      AREA: 'SUMATERA',
      ' TARIF ': 'B1T',
      ' DAYA ': ' 3,500 ',
      cek: 'DIBELIKAN TOKEN',
    },
    {
      NO: '7',
      'ID PELANGGAN': '123010584822',
      'NO METER': '14362615115',
      'NAMA PEL': 'PT TELKOM INDONESIA',
      WITEL: 'SUMUT TIMUR',
      AREA: 'SUMATERA',
      ' TARIF ': 'B1T',
      ' DAYA ': ' 3,500 ',
      cek: 'DIBELIKAN TOKEN',
    },
    {
      NO: '8',
      'ID PELANGGAN': '123010598775',
      'NO METER': '86014973001',
      'NAMA PEL': 'PT. TELKOM INDONESIA MRJ',
      WITEL: 'SUMUT TIMUR',
      AREA: 'SUMATERA',
      ' TARIF ': 'B1T',
      ' DAYA ': ' 3,500 ',
      cek: 'DIBELIKAN TOKEN',
    },
    {
      NO: '9',
      'ID PELANGGAN': '123010598783',
      'NO METER': '86015764235',
      'NAMA PEL': 'PT. TELKOM INDONESIA MRA',
      WITEL: 'SUMUT TIMUR',
      AREA: 'SUMATERA',
      ' TARIF ': 'B1T',
      ' DAYA ': ' 3,500 ',
      cek: 'DIBELIKAN TOKEN',
    },
    {
      NO: '10',
      'ID PELANGGAN': '123010598791',
      'NO METER': '86015735516',
      'NAMA PEL': 'PT. TELKOM INDONESIA MRB',
      WITEL: 'SUMUT TIMUR',
      AREA: 'SUMATERA',
      ' TARIF ': 'B1T',
      ' DAYA ': ' 3,500 ',
      cek: 'DIBELIKAN TOKEN',
    },
  ];

  return (
    <div className="relative mt-8 bg-white dark:bg-zinc-800 rounded-sm p-4">
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

        <div className="relative">
          <Button moreClass={'text-sm py-2 space-x-2 relative'}>
            <PlusIcon className="h-5 mr-2" />
            Pasang Baru
          </Button>
        </div>
      </div>
      <div className="relative overflow-auto">
        <TableHeading
          theading={[
            'No',
            'Action',
            'ID PELANGGAN',
            'NO METER',
            'NAMA PEL',
            'WITEL',
            'AREA',
            'TARIF',
            'DAYA',
            'KETERANGAN',
            'CEK',
          ]}>
          {data?.map((item, index) => (
            <TableBody key={index}>
              <TableContent>{index + 1}</TableContent>
              <TableContent addClassChild={'flex space-x-3 whitespace-nowrape'}>
                <Button type="danger" moreClass={'text-sm py-2 relative'}>
                  <TrashIcon className="text-white h-4 mr-2" />
                  Bongkar
                </Button>
                <Button type="edit" moreClass={'text-sm py-2 relative'}>
                  <TrashIcon className="text-white h-4 mr-2" />
                  Ubah
                </Button>
              </TableContent>

              <TableContent>{item['ID PELANGGAN']}</TableContent>
              <TableContent>{item['NAMA PEL']}</TableContent>
              <TableContent>{item['NAMA PEL']}</TableContent>
              <TableContent>{item['WITEL']}</TableContent>
              <TableContent>{item['AREA']}</TableContent>
              <TableContent>{item['TARIF']}</TableContent>
              <TableContent>{item['DAYA']}</TableContent>
              <TableContent>{item['KETERANGAN']}</TableContent>
              <TableContent>{item['CEK']}</TableContent>
            </TableBody>
          ))}
        </TableHeading>
      </div>
    </div>
  );
}
