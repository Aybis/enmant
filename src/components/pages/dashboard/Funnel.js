import FunnelGraph from 'funnel-graph-js';
import React, { useEffect } from 'react';
import './main.css';
import './theme.css';

export default function Funnel() {
  useEffect(() => {
    const data2 = {
      labels: [
        'F0 (Lead)',
        'F1 (Opportunity)',
        'F2 (Proposal)',
        'F3 (Bidding)',
        'F4 (Negotiation)',
        'F5 (Contract)',
      ],
      subLabels: [' Rupiah'],
      colors: [
        ['#FFB178', '#FF78B1', '#FF3C8E'],
        ['#A0BBFF', '#EC77FF'],
        ['#A0F9FF', '#7795FF'],
      ],
      values: [[2500], [2500], [1000], [900], [800], [400]],
    };

    const graph = new FunnelGraph({
      container: '.funnel',
      gradientDirection: 'horizontal',
      data: data2,
      displayPercent: true,
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