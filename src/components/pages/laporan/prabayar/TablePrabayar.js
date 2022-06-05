import { ClipboardIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { Loading, TableBody, TableContent, TableHeading } from '../../../atoms';
import Button from '../../../atoms/Button';
import { data } from './data';

export default function TablePrabayar() {
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
        data?.map((item, index) => (
          <TableBody key={index}>
            <TableContent>{index + 1}</TableContent>
            <TableContent addClassChild={'flex space-x-3 whitespace-nowrape'}>
              <Button type="view" moreClass={'text-sm py-2 relative'}>
                <ClipboardIcon className="text-white h-4 mr-2" />
                View
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
        ))
      )}
    </TableHeading>
  );
}
