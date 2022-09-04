var chartDom = document.getElementById('pie');
var myChart = echarts.init(chartDom);
var option;
option = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    left: 'center',
    top: 'bottom',
    data: [
      'rose1',
      'rose2',
      'rose3',
      'rose4',
      'rose5',
      'rose6',
      'rose7',
      'rose8'
    ]
  },
//   toolbox: {
//     show: true,
//     feature: {
//     //   mark: { show: true },
//     //   dataView: { show: true, readOnly: false },
//     //   restore: { show: true },
//     //   saveAsImage: { show: true }
//     }
//   },
  series: [
    {
      name: '点位分布',
      type: 'pie',
      radius: [10, 80],
      center: ['50%', '50%'],
      roseType: 'radius',
      itemStyle: {
        borderRadius: 5
      },
      label: {
        show: false
      },
      emphasis: {
        label: {
          show: true,
          length:2,
          length:22
        }
      },
      data: [
        { value: 40, name: '湖北' },
        { value: 40, name: '南京' },
        { value: 40, name: '上海' },
        { value: 22, name: '杭州' },
        { value: 20, name: '北京' },
        { value: 40, name: '深圳' },
        { value: 40, name: '福建' },
        { value: 40, name: '海南' }
      ]
    }
  ]
};
myChart.setOption(option);
