/**
 * Copyright (c) 2020, 2021 Visa, Inc.
 *
 * This source code is licensed under the MIT license
 * https://github.com/visa/visa-chart-components/blob/master/LICENSE
 *
 **/

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { applyPolyfills, defineCustomElements as defineBarChart } from '@visa/bar-chart/dist/loader';
import { defineCustomElements as defineBivariateMapboxMap } from '@visa/bivariate-mapbox-map/dist/loader';
import { defineCustomElements as defineCirclePacking } from '@visa/circle-packing/dist/loader';
import { defineCustomElements as defineClusteredBarChart } from '@visa/clustered-bar-chart/dist/loader';
import { defineCustomElements as defineDumbbellPlot } from '@visa/dumbbell-plot/dist/loader';
import { defineCustomElements as defineHeatMap } from '@visa/heat-map/dist/loader';
import { defineCustomElements as defineLineChart } from '@visa/line-chart/dist/loader';
import { defineCustomElements as defineParallelPlot } from '@visa/parallel-plot/dist/loader';
import { defineCustomElements as definePieChart } from '@visa/pie-chart/dist/loader';
import { defineCustomElements as defineScatterPlot } from '@visa/scatter-plot/dist/loader';
import { defineCustomElements as defineStackedBarChart } from '@visa/stacked-bar-chart/dist/loader';
import { defineCustomElements as defineVisaChartsDataTable } from '@visa/visa-charts-data-table/dist/loader';
import { defineCustomElements as defineWorldMap } from '@visa/world-map/dist/loader';
import { defineCustomElements as defineAlluvialDiagram } from '@visa/alluvial-diagram/dist/loader';
import { defineCustomElements as defineKeyboardInstructions } from '@visa/keyboard-instructions/dist/loader';

import { AlluvialDiagram } from './directives/alluvial-diagram';
import { BarChart } from './directives/bar-chart';
import { BivariateMapboxMap } from './directives/bivariate-mapbox-map';
import { CirclePacking } from './directives/circle-packing';
import { ClusteredBarChart } from './directives/clustered-bar-chart';
import { DumbbellPlot } from './directives/dumbbell-plot';
import { HeatMap } from './directives/heat-map';
import { LineChart } from './directives/line-chart';
import { ParallelPlot } from './directives/parallel-plot';
import { PieChart } from './directives/pie-chart';
import { ScatterPlot } from './directives/scatter-plot';
import { StackedBarChart } from './directives/stacked-bar-chart';
import { WorldMap } from './directives/world-map';

const DECLARATIONS = [
  // proxies
  AlluvialDiagram,
  BarChart,
  BivariateMapboxMap,
  CirclePacking,
  ClusteredBarChart,
  DumbbellPlot,
  HeatMap,
  LineChart,
  ParallelPlot,
  PieChart,
  ScatterPlot,
  StackedBarChart,
  WorldMap
];

applyPolyfills().then(() => {
  defineAlluvialDiagram();
  defineBarChart();
  defineBivariateMapboxMap();
  defineCirclePacking();
  defineClusteredBarChart();
  defineDumbbellPlot();
  defineHeatMap();
  defineLineChart();
  defineParallelPlot();
  definePieChart();
  defineScatterPlot();
  defineStackedBarChart();
  defineVisaChartsDataTable();
  defineKeyboardInstructions();
  defineWorldMap();
});

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [CommonModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VisaChartsModule {}
