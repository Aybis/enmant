import React from 'react';
import { TableHeading } from '../../../atoms';

export default function Pascabayar() {
  return (
    <div className="relative mt-8 bg-white dark:bg-zinc-800 rounded-sm p-4 overflow-auto">
      <TableHeading
        theading={[
          'No',
          'ID PELANGGAN',
          'NO METER',
          'NAMA PEL',
          'WITEL',
          'AREA',
          'TARIF',
          'DAYA',
          'KETERANGAN',
          'CEK',
        ]}></TableHeading>
    </div>
  );
}
