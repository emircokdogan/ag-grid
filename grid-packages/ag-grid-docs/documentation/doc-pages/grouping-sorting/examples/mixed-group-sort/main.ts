import { Grid, GridOptions } from '@ag-grid-community/core';
import { getData } from "./data";

const gridOptions: GridOptions = {
  columnDefs: [
    {
      field: 'year',
      rowGroup: true,
      sortable: true,
      sort: 'desc',
    },
    { field: 'salesRep' },
    { field: 'handset' },
    { field: 'sale' },
  ],
  defaultColDef: {
    flex: 1,
    minWidth: 100,
    filter: true,
    sortable: true,
    resizable: true,
  },
  autoGroupColumnDef: {
    sort: 'asc',
    minWidth: 300,
    field: 'month',
    comparator: (a, b) => {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]

      // sorts 'months' in chronological order
      return months.indexOf(a) - months.indexOf(b)
    },
  },
  groupDefaultExpanded: 1,
  rowData: getData(),
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
  var gridDiv = document.querySelector<HTMLElement>('#myGrid')!
  new Grid(gridDiv, gridOptions)
})
