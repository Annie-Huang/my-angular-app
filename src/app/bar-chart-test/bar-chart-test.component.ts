import { Component } from '@angular/core';

@Component({
  selector: 'app-bar-chart-test',
  templateUrl: './bar-chart-test.component.html',
  styleUrls: ['./bar-chart-test.component.scss']
})
export class BarChartTestComponent {
  defaultSelectObjSimple = null;
  defaultSelectObj = null;

  chartSample = {
    topLeftLegend: 'kWh',
    topRightLegend: 'Used from grid',
    bottomLeftLegend: 'month',
    bottomRightLegend: 'Sold to grid',
    defaultSelected: 2,
    defaultSelectedSimple: 7
  };

  chartTest = [
    {
      name: 'Jan',
      aboveXAxisValues: [200, 100],
      belowXAxisValues: [100, 100]
    },
    {
      name: 'Feb',
      aboveXAxisValues: [100, 150],
      belowXAxisValues: [75, 75]
    },
    {
      name: 'Mar',
      aboveXAxisValues: [50, 50],
      belowXAxisValues: [50, 50]
    },
    {
      name: 'Apr',
      aboveXAxisValues: [25, 25],
      belowXAxisValues: [25, 25]
    }];

  chartDataSimple = [
    {
      name: 'Jan',
      aboveXAxisValues: [110]
    },
    {
      name: 'Feb',
      aboveXAxisValues: [75]
    },
    {
      name: 'Mar',
      aboveXAxisValues: [25]
    },
    {
      name: 'Apr',
      aboveXAxisValues: [80]
    },
    {
      name: 'May',
      aboveXAxisValues: [130]
    },
    {
      name: 'Jun',
      aboveXAxisValues: [75]
    },
    {
      name: 'Jul',
      aboveXAxisValues: [25]
    },
    {
      name: 'Aug',
      aboveXAxisValues: [80]
    },
    {
      name: 'Sep',
      aboveXAxisValues: [100]
    },
    {
      name: 'Oct',
      aboveXAxisValues: [75]
    },
    {
      name: 'Nov',
      aboveXAxisValues: [25]
    },
    {
      name: 'Dec',
      aboveXAxisValues: [80]
    }
  ];

  chartDataCompound = [
    {
      name: 'Jan',
      aboveXAxisValues: [110, 120],
      belowXAxisValues: [25, 10]
    },
    {
      name: 'Feb',
      aboveXAxisValues: [75, 55],
      belowXAxisValues: [30, 20]
    },
    {
      name: 'Mar',
      aboveXAxisValues: [25, 40],
      belowXAxisValues: [50, 25]
    },
    {
      name: 'Apr',
      aboveXAxisValues: [80, 60],
      belowXAxisValues: [10, 20]
    },
    {
      name: 'May',
      aboveXAxisValues: [130, 100],
      belowXAxisValues: [40, 15]
    },
    {
      name: 'Jun',
      aboveXAxisValues: [75, 55],
      belowXAxisValues: [20, 6]
    },
    {
      name: 'Jul',
      aboveXAxisValues: [25, 40],
      belowXAxisValues: [25, 10]
    },
    {
      name: 'Aug',
      aboveXAxisValues: [80, 60],
      belowXAxisValues: [20, 35]
    },
    {
      name: 'Sep',
      aboveXAxisValues: [100, 130],
      belowXAxisValues: [25, 25]
    },
    {
      name: 'Oct',
      aboveXAxisValues: [75, 55],
      belowXAxisValues: [10, 30]
    },
    {
      name: 'Nov',
      aboveXAxisValues: [25, 40],
      belowXAxisValues: [30, 40]
    },
    {
      name: 'Dec',
      aboveXAxisValues: [80, 60],
      belowXAxisValues: [10, 30]
    }
  ];

  selectedBar($event) {
    this.defaultSelectObj = $event;
  }

  selectedBarSimple($event) {
    this.defaultSelectObjSimple = $event;
  }

}
