import { Component, OnInit } from "@angular/core";
import { BreadcrumbService } from "@app/layout/breadcrumb/breadcrumb.service";

@Component({
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.setItems([{ label: "Dashboard" }]);
  }

  ngOnInit() {}
}
