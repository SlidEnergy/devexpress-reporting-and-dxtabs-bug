import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    "./report.component.css",
    "../../../../node_modules/jquery-ui/themes/base/all.css",
    "../../../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.common.css",
    "../../../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.light.css",
    "../../../../node_modules/devexpress-reporting/dist/css/dx-webdocumentviewer.css"
  ]
})
export class ReportComponent implements OnInit {

  // The URL of a report to open in the Report Designer when the application starts. 
  reportUrl: string = 'InvoiceReport';
  // URI of your backend project. 
  hostUrl: string = 'http://localhost:11111/';

  // Use this line if you use an ASP.NET MVC backend 
  invokeAction: string = 'WebDocumentViewer/Invoke';
  // Uncomment this line if you use an ASP.NET Core backend
  // invokeAction: string = 'DXXRDV'; 

  constructor() { }

  ngOnInit() {
  }

}
