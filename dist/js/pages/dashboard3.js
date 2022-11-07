/* global Chart:false */

$(function () {
  'use strict'

  var ticksStyle = {
    fontColor: '#495057',
    fontStyle: 'bold'
  }

  var mode = 'index'
  var intersect = true

  var $salesChart = $('#sales-chart')
  // eslint-disable-next-line no-unused-vars
  var salesChart = new Chart($salesChart, {
    type: 'bar',
    data: {
      labels: ['JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [
        {
          backgroundColor: '#007bff',
          borderColor: '#007bff',
          data: [1000, 2000, 3000, 2500, 2700, 2500, 3000]
        },
        {
          backgroundColor: '#ced4da',
          borderColor: '#ced4da',
          data: [700, 1700, 2700, 2000, 1800, 1500, 2000]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          // display: false,
          gridLines: {
            display: true,
            lineWidth: '4px',
            color: 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks: $.extend({
            beginAtZero: true,

            // Include a dollar sign in the ticks
            callback: function (value) {
              if (value >= 1000) {
                value /= 1000
                value += 'k'
              }

              return '$' + value
            }
          }, ticksStyle)
        }],
        xAxes: [{
          display: true,
          gridLines: {
            display: false
          },
          ticks: ticksStyle
        }]
      }
    }
  })

  var $visitorsChart = $('#visitors-chart')
  // eslint-disable-next-line no-unused-vars
  var visitorsChart = new Chart($visitorsChart, {
    data: {
      labels: ['18th', '20th', '22nd', '24th', '26th', '28th', '30th'],
      datasets: [{
        type: 'line',
        data: [100, 120, 170, 167, 180, 177, 160],
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        pointBorderColor: '#007bff',
        pointBackgroundColor: '#007bff',
        fill: false
        // pointHoverBackgroundColor: '#007bff',
        // pointHoverBorderColor    : '#007bff'
      },
      {
        type: 'line',
        data: [60, 80, 70, 67, 80, 77, 100],
        backgroundColor: 'tansparent',
        borderColor: '#ced4da',
        pointBorderColor: '#ced4da',
        pointBackgroundColor: '#ced4da',
        fill: false
        // pointHoverBackgroundColor: '#ced4da',
        // pointHoverBorderColor    : '#ced4da'
      }]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          // display: false,
          gridLines: {
            display: true,
            lineWidth: '4px',
            color: 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks: $.extend({
            beginAtZero: true,
            suggestedMax: 200
          }, ticksStyle)
        }],
        xAxes: [{
          display: true,
          gridLines: {
            display: false
          },
          ticks: ticksStyle
        }]
      }
    }
  })

  var $kedatanganWismanTahunChart = $('#kedatangan-wisman-tahun-chart')
  // eslint-disable-next-line no-unused-vars
  var kedatanganWismanTahunChart = new Chart($kedatanganWismanTahunChart, {
    type: 'bar',
    data: {
      labels: ['2017', '2018', '2019', '2020', '2021'],
      datasets: [
        {
          backgroundColor: '#007bff',
          borderColor: '#007bff',
          data: [18335, 14126, 17771, 3598, 0],
          minBarLength: 1
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          // display: false,
          gridLines: {
            display: true,
            lineWidth: '4px',
            color: 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks: $.extend({
            beginAtZero: true,
            suggestedMax: 200
          }, ticksStyle)
        }],
        xAxes: [{
          display: true,
          gridLines: {
            display: false
          },
          ticks: ticksStyle
        }]
      }
    }
  })

  var $kedatanganWismanBulanChar = $('#kedatangan-wisman-bulan-chart')
  // eslint-disable-next-line no-unused-vars
  var kedatanganWismanBulanChar = new Chart($kedatanganWismanBulanChar, {
    data: {
      labels: ['Jan 2017','Feb 2017','Mar 2017','Apr 2017','May 2017','Jun 2017','Jul 2017','Aug 2017','Sep 2017','Oct 2017','Nov 2017','Dec 2017','Jan 2018','Feb 2018','Mar 2018','Apr 2018','May 2018','Jun 2018','Jul 2018','Aug 2018','Sep 2018','Oct 2018','Nov 2018','Dec 2018','Jan 2019','Feb 2019','Mar 2019','Apr 2019','May 2019','Jun 2019','Jul 2019','Aug 2019','Sep 2019','Oct 2019','Nov 2019','Dec 2019','Jan 2020','Feb 2020','Mar 2020','Apr 2020','May 2020','Jun 2020','Jul 2020','Aug 2020','Sep 2020','Oct 2020','Nov 2020','Dec 2020','Jan 2021','Feb 2021','Mar 2021','Apr 2021','May 2021','Jun 2021','Jul 2021','Aug 2021','Sep 2021','Oct 2021','Nov 2021','Dec 2021'],
      datasets: [{
        type: 'line',
        data: [1812, 1263, 1530, 1179, 1131, 1240, 2132, 1743, 1604, 1448, 1538, 1715, 832, 1004, 1099, 1077, 661, 1216, 1566, 1626, 1281, 1187, 1171, 1406, 951, 1379, 1825, 1312, 1105, 1385, 1473, 1983, 1503, 1439, 1595, 1821, 1338, 1227, 1032, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        pointBorderColor: '#007bff',
        pointBackgroundColor: '#007bff',
        fill: false
        // pointHoverBackgroundColor: '#007bff',
        // pointHoverBorderColor    : '#007bff'
      }]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          // display: false,
          gridLines: {
            display: true,
            lineWidth: '4px',
            color: 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks: $.extend({
            beginAtZero: true,
            suggestedMax: 200
          }, ticksStyle)
        }],
        xAxes: [{
          display: true,
          gridLines: {
            display: false
          },
          ticks: ticksStyle
        }]
      }
    }
  })

  var $kedatanganPenumpangTahunChart = $('#kedatangan-penumpang-tahun-chart')
  // eslint-disable-next-line no-unused-vars
  var kedatanganPenumpangTahunChart = new Chart($kedatanganPenumpangTahunChart, {
    type: 'bar',
    data: {
      labels: ['2017', '2018', '2019', '2020', '2021'],
      datasets: [
        {
          backgroundColor: '#007bff',
          borderColor: '#007bff',
          data: [114443, 117777, 152992, 36697, 12],
          minBarLength: 1
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          // display: false,
          gridLines: {
            display: true,
            lineWidth: '4px',
            color: 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks: $.extend({
            beginAtZero: true,
            suggestedMax: 0
          }, ticksStyle)
        }],
        xAxes: [{
          display: true,
          gridLines: {
            display: false
          },
          ticks: ticksStyle
        }]
      }
    }
  })

  var $kedatanganPenumpangBulanChar = $('#kedatangan-penumpang-bulan-chart')
  // eslint-disable-next-line no-unused-vars
  var kedatanganPenumpangBulanChar = new Chart($kedatanganPenumpangBulanChar, {
    data: {
      labels: ['Jan 2017','Feb 2017','Mar 2017','Apr 2017','May 2017','Jun 2017','Jul 2017','Aug 2017','Sep 2017','Oct 2017','Nov 2017','Dec 2017','Jan 2018','Feb 2018','Mar 2018','Apr 2018','May 2018','Jun 2018','Jul 2018','Aug 2018','Sep 2018','Oct 2018','Nov 2018','Dec 2018','Jan 2019','Feb 2019','Mar 2019','Apr 2019','May 2019','Jun 2019','Jul 2019','Aug 2019','Sep 2019','Oct 2019','Nov 2019','Dec 2019','Jan 2020','Feb 2020','Mar 2020','Apr 2020','May 2020','Jun 2020','Jul 2020','Aug 2020','Sep 2020','Oct 2020','Nov 2020','Dec 2020','Jan 2021','Feb 2021','Mar 2021','Apr 2021','May 2021','Jun 2021','Jul 2021','Aug 2021','Sep 2021','Oct 2021','Nov 2021','Dec 2021'],
      datasets: [{
        type: 'line',
        data: [8699, 11050, 14189, 14054, 12077, 5075, 4770, 3897, 16130, 7466, 5193, 11843, 9794, 7740, 13633, 15053, 10438, 4394, 4372, 6497, 17635, 5917, 12250, 10054, 10389, 13983, 17744, 13638, 9725, 7279, 6685, 14296, 16388, 14636, 15977, 12252, 14778, 15192, 6727, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 3, 0, 0, 0, 0, 0],
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        pointBorderColor: '#007bff',
        pointBackgroundColor: '#007bff',
        fill: false
        // pointHoverBackgroundColor: '#007bff',
        // pointHoverBorderColor    : '#007bff'
      }]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          // display: false,
          gridLines: {
            display: true,
            lineWidth: '4px',
            color: 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks: $.extend({
            beginAtZero: true,
            suggestedMax: 200
          }, ticksStyle)
        }],
        xAxes: [{
          display: true,
          gridLines: {
            display: false
          },
          ticks: ticksStyle
        }]
      }
    }
  })

  var $kebangsaan2017Chart = $('#kebangsaan2017-chart')
  // eslint-disable-next-line no-unused-vars
  var kebangsaan2017Chart = new Chart($kebangsaan2017Chart, {
    type: 'horizontalBar',
    data: {
      labels: ['Malaysia', 'Singapura', 'Perancis', 'China', 'Jerman'],
      datasets: [
        {
          backgroundColor: '#007bff',
          borderColor: '#007bff',
          data: [9268, 843, 733, 669, 521],
          minBarLength: 1
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          // display: false,
          gridLines: {
            display: true,
            lineWidth: '4px',
            color: 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks: $.extend({
            beginAtZero: true,
            suggestedMax: 0
          }, ticksStyle)
        }],
        xAxes: [{
          display: true,
          gridLines: {
            display: false
          },
          ticks: ticksStyle
        }]
      }
    }
  })

  var $kebangsaan2018Chart = $('#kebangsaan2018-chart')
  // eslint-disable-next-line no-unused-vars
  var kebangsaan2018Chart = new Chart($kebangsaan2018Chart, {
    type: 'horizontalBar',
    data: {
      labels: ['Malaysia', 'Korea Selatan', 'Perancis', 'Singapura', 'Jerman'],
      datasets: [
        {
          backgroundColor: '#007bff',
          borderColor: '#007bff',
          data: [7814, 1184, 702, 693, 539],
          minBarLength: 1
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          // display: false,
          gridLines: {
            display: true,
            lineWidth: '4px',
            color: 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks: $.extend({
            beginAtZero: true,
            suggestedMax: 0
          }, ticksStyle)
        }],
        xAxes: [{
          display: true,
          gridLines: {
            display: false
          },
          ticks: ticksStyle
        }]
      }
    }
  })

  var $kebangsaan2019Chart = $('#kebangsaan2019-chart')
  // eslint-disable-next-line no-unused-vars
  var kebangsaan2019Chart = new Chart($kebangsaan2019Chart, {
    type: 'horizontalBar',
    data: {
      labels: ['Malaysia', 'Perancis', 'Jerman', 'Singapura', 'Amerika'],
      datasets: [
        {
          backgroundColor: '#007bff',
          borderColor: '#007bff',
          data: [10056, 620, 595, 595, 515],
          minBarLength: 1
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          // display: false,
          gridLines: {
            display: true,
            lineWidth: '4px',
            color: 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks: $.extend({
            beginAtZero: true,
            suggestedMax: 0
          }, ticksStyle)
        }],
        xAxes: [{
          display: true,
          gridLines: {
            display: false
          },
          ticks: ticksStyle
        }]
      }
    }
  })

  var $kebangsaan2020Chart = $('#kebangsaan2020-chart')
  // eslint-disable-next-line no-unused-vars
  var kebangsaan2020Chart = new Chart($kebangsaan2020Chart, {
    type: 'horizontalBar',
    data: {
      labels: ['Malaysia', 'Thailand', 'Jerman', 'Perancis', 'Singapura'],
      datasets: [
        {
          backgroundColor: '#007bff',
          borderColor: '#007bff',
          data: [2002, 215, 109, 103, 103],
          minBarLength: 1
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          // display: false,
          gridLines: {
            display: true,
            lineWidth: '4px',
            color: 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks: $.extend({
            beginAtZero: true,
            suggestedMax: 0
          }, ticksStyle)
        }],
        xAxes: [{
          display: true,
          gridLines: {
            display: false
          },
          ticks: ticksStyle
        }]
      }
    }
  })

  var $tpkHotelBintangChart = $('#tpk-hotel-bintang-chart')
  // eslint-disable-next-line no-unused-vars
  var tpkHotelBintangChart = new Chart($tpkHotelBintangChart, {
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        type: 'line',
        data: [26.43, 30.19, 36.16, 35.55, 30.29, 41.99, 28.68, 28.85, 41.62, 49.13, 47.99, 51.96],
        backgroundColor: 'transparent',
        borderColor: '#0bb4ff',
        pointBorderColor: '#0bb4ff',
        pointBackgroundColor: '#0bb4ff',
        fill: false
        // pointHoverBackgroundColor: '#007bff',
        // pointHoverBorderColor    : '#007bff'
      },
      {
        type: 'line',
        data: [48.14, 49.26, 43.26, 20.9, 26.28, 18.98, 34.42, 46.81, 38.38, 34.27, 42.56, 54.82],
        backgroundColor: 'tansparent',
        borderColor: '#50e991',
        pointBorderColor: '#50e991',
        pointBackgroundColor: '#50e991',
        fill: false
        // pointHoverBackgroundColor: '#ced4da',
        // pointHoverBorderColor    : '#ced4da'
      },
      {
        type: 'line',
        data: [44.52, 45.68, 45.22, 47.43, 37.69, 43.33, 54.85, 49.6, 56.55, 53.35, 56.01, 56.11],
        backgroundColor: 'tansparent',
        borderColor: '#e6d800',
        pointBorderColor: '#e6d800',
        pointBackgroundColor: '#e6d800',
        fill: false
        // pointHoverBackgroundColor: '#ced4da',
        // pointHoverBorderColor    : '#ced4da'
      },
      {
        type: 'line',
        data: [50.96, 47.47, 49.29, 52.1, 49.18, 44.06, 44.06, 51.96, 50.09, 52.68, 52.68, 52.6],
        backgroundColor: 'tansparent',
        borderColor: '#9b19f5',
        pointBorderColor: '#9b19f5',
        pointBackgroundColor: '#9b19f5',
        fill: false
        // pointHoverBackgroundColor: '#ced4da',
        // pointHoverBorderColor    : '#ced4da'
      },
      {
        type: 'line',
        data: [42.76, 44.18, 47.28, 46.86, 48.01, 41.93, 47.65, 49.24, 48.99, 50.15, 51.37, 53.9],
        backgroundColor: 'tansparent',
        borderColor: '#ffa300',
        pointBorderColor: '#ffa300',
        pointBackgroundColor: '#ffa300',
        fill: false
        // pointHoverBackgroundColor: '#ced4da',
        // pointHoverBorderColor    : '#ced4da'
      }]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          // display: false,
          gridLines: {
            display: true,
            lineWidth: '4px',
            color: 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks: $.extend({
            beginAtZero: true
          }, ticksStyle)
        }],
        xAxes: [{
          display: true,
          gridLines: {
            display: false
          },
          ticks: ticksStyle
        }]
      }
    }
  })

  var $tpkHotelNonBintangChart = $('#tpk-hotel-non-bintang-chart')
  // eslint-disable-next-line no-unused-vars
  var tpkHotelNonBintangChart = new Chart($tpkHotelNonBintangChart, {
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        type: 'line',
        data: [23.36, 14.74, 17.39, 15.44, 16.93, 19.5, 15.89, 16.84, 19.01, 19.38, 20.54, 22.89],
        backgroundColor: 'transparent',
        borderColor: '#0bb4ff',
        pointBorderColor: '#0bb4ff',
        pointBackgroundColor: '#0bb4ff',
        fill: false
        // pointHoverBackgroundColor: '#007bff',
        // pointHoverBorderColor    : '#007bff'
      },
      {
        type: 'line',
        data: [34.8, 26.97, 16.75, 17.09, 18.88, 22.02, 23.8, 23.33, 24.1, 26.05, 25.24, 29.15],
        backgroundColor: 'tansparent',
        borderColor: '#50e991',
        pointBorderColor: '#50e991',
        pointBackgroundColor: '#50e991',
        fill: false
        // pointHoverBackgroundColor: '#ced4da',
        // pointHoverBorderColor    : '#ced4da'
      },
      {
        type: 'line',
        data: [27.92, 28.4, 29.2, 27.94, 29.56, 32.45, 32.25, 32.81, 33.06, 28.68, 33.1, 30.01],
        backgroundColor: 'tansparent',
        borderColor: '#e6d800',
        pointBorderColor: '#e6d800',
        pointBackgroundColor: '#e6d800',
        fill: false
        // pointHoverBackgroundColor: '#ced4da',
        // pointHoverBorderColor    : '#ced4da'
      },
      {
        type: 'line',
        data: [31.04, 30.54, 30.7, 29.23, 23.52, 27.28, 31.07, 28.28, 28.41, 28.72, 26.19, 25.95],
        backgroundColor: 'tansparent',
        borderColor: '#9b19f5',
        pointBorderColor: '#9b19f5',
        pointBackgroundColor: '#9b19f5',
        fill: false
        // pointHoverBackgroundColor: '#ced4da',
        // pointHoverBorderColor    : '#ced4da'
      }]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          // display: false,
          gridLines: {
            display: true,
            lineWidth: '4px',
            color: 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks: $.extend({
            beginAtZero: true
          }, ticksStyle)
        }],
        xAxes: [{
          display: true,
          gridLines: {
            display: false
          },
          ticks: ticksStyle
        }]
      }
    }
  })

})


// lgtm [js/unused-local-variable]
