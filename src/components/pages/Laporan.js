import React from 'react';
import { TableHeading, Tabs } from '../atoms';
import { Layout } from './includes';

export default function Laporan() {
  return (
    <Layout>
      <div className="relative container my-4">
        {/* Heading Container */}
        <div className="relative">
          <h1 className="text-2xl font-semibold text-zinc-800">Laporan</h1>
        </div>
        {/* Content Container */}
        <div className="relative mt-6">
          <div className="relative mx-auto container max-w-md flex justify-center items-center"></div>
          {/* Navigation Tabs */}
          <Tabs />

          {/* Section Table Pascbayar */}
          <div className="relative mt-8 bg-white rounded-lg p-4 overflow-auto">
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
        </div>
      </div>
    </Layout>
  );
}
