import FunnelGraph from 'funnel-graph-js';
import React, { useEffect } from 'react';
import './main.css';
import './theme.css';

export default function Funnel() {
  useEffect(() => {
    const data2 = {
      labels: [
        'F1 (Opportunity)',
        `F2 (Proposal)`,
        'F3 (Bidding)',
        'F4 (Negotiation)',
        'F5 (Contract)',
      ],
      subLabels: [' Dalam Miliar Rupiah'],
      // colors: [
      //   ['#FF3C8E', '#FF78B1', '#FF3C8E'],
      //   ['#A0BBFF', '#EC77FF'],
      //   ['#A0F9FF', '#7795FF'],
      // ],
      colors: [['#1e40af', '#93c5fd']],
      values: [[2000], [1800], [1600], [1400], [1000]],
    };

    const graph = new FunnelGraph({
      container: '.funnel',
      gradientDirection: 'horizontal',
      data: data2,
      direction: 'vertical',
      width: 200,
      height: 650,
      subLabelValue: 'currency',
    });

    graph.draw();
  }, []);

  return (
    <div className="relative flex justify-center items-center">
      <div className="funnel w-full" />
    </div>
  );
}
