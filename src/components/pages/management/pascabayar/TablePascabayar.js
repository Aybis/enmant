import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { Loading, TableBody, TableContent, TableHeading } from '../../../atoms';
import Button from '../../../atoms/Button';
import { dataPascabayar } from './data';

export default function TablePascabayar() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    const timeout = setTimeout(() => {
      setloading(false);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <TableHeading
        theading={[
          'NO',
          'ACTION',
          'ID PLN',
          'NAMA PELANGGAN',
          'TARIF',
          'DAYA',
          'WITEL',
          'AREA',
          ' METER AWAL ',
          ' METER AKHIR ',
          ' TAGIHAN ',
          ' ADMIN ',
        ]}>
        {loading ? (
          <TableBody>
            <TableContent
              addClassChild={'flex justify-center items-center'}
              colSpan={11}
              rowSpan={11}>
              <Loading height={8} width={8} />
            </TableContent>
          </TableBody>
        ) : (
          dataPascabayar.slice(0, 10).map((item, index) => (
            <TableBody key={index}>
              <TableContent>{index + 1}</TableContent>
              <TableContent addClassChild={'flex space-x-3 whitespace-nowrape'}>
                <Button type="danger" moreClass={'text-sm py-2 relative'}>
                  <TrashIcon className="text-white h-4 mr-2" />
                  Bongkar
                </Button>
                <Button type="edit" moreClass={'text-sm py-2 relative'}>
                  <PencilAltIcon className="text-white h-4 mr-2" />
                  Ubah
                </Button>
              </TableContent>
              <TableContent>{item['ID PLN']}</TableContent>
              <TableContent>{item['NAMA PELANGGAN']}</TableContent>
              <TableContent>{item['TARIF']}</TableContent>
              <TableContent>{item['DAYA']}</TableContent>
              <TableContent>{item['WITEL']}</TableContent>
              <TableContent>{item['AREA']}</TableContent>
              <TableContent>{item['METER AWAL']}</TableContent>
              <TableContent>{item['METER AKHIR']}</TableContent>
              <TableContent>{item['TAGIHAN']}</TableContent>
              <TableContent>{item['ADMIN']}</TableContent>
            </TableBody>
          ))
        )}
      </TableHeading>
    </div>
  );
}
