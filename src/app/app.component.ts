import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'app';
  private gridApi;
  private gridColumnApi;
  
  gridresize(event) {
    event.api.sizeColumnsToFit();
  };

  onColumnResized(event) {
    if (event.finished) {
      this.gridApi.resetRowHeights();
    }
  }

  onGridReady(event) {
    this.gridApi = event.api;
    this.gridColumnApi = event.columnApi;

    setTimeout(function() {
      event.api.resetRowHeights();
    }, 500);
  }

  columnDefs = [
    {headerName: 'Date', field: 'date', checkboxSelection: false, width: 150},
    {headerName: 'Fund Family', field: 'fund' },
    {headerName: 'Account', field: 'account'},
    {headerName: 'Statement', field: 'statement'}
];

  rowData = [
    { date: '09/09/20018', fund: 'FundFam-123456-1', account: 'acnt123456-35000', statement: 'View'  },
    { date: '09/09/20018', fund: 'FundFam-123456-2', account: 'acnt123456-35000', statement: 'View'  },
    { date: '09/09/20018', fund: 'FundFam-123456-3', account: 'acnt123456-35000', statement: 'View'  },
    { date: '09/09/20018', fund: 'FundFam-123456-4', account: 'acnt123456-35000', statement: 'View'  }
];



}
