import { Component, OnInit } from "@angular/core";
import { BreadcrumbService } from "src/app/breadcrumb.service";
import { Observable } from "rxjs";
import { Company } from "../../../generated/graphql";
import { DBService } from "../service/dbservice";

@Component({
  templateUrl: "./companies.component.html",
})
export class CompaniesComponent implements OnInit {
  displayDialog: boolean;
  company: Company;
  company$: Observable<any>;
  selectedCompany: Company;
  newCompany: boolean;
  cols: any[];
  loading = false;
  error: any;

  constructor(private breadcrumbService: BreadcrumbService, db: DBService) {
    this.breadcrumbService.setItems([{ label: "Companies" }]);
    this.company$ = db.GetAllCompanies();
  }

  ngOnInit() {
    this.cols = [
      { field: "name", header: "Name", width: "50%" },
      { field: "city", header: "City", width: "25%" },
      { field: "state", header: "State", width: "25%" },
    ];
  }

  onRowSelect(event) {
    this.newCompany = false;
    this.company = event.data;
    this.displayDialog = true;
  }

  onAddClicked() {
    this.newCompany = true;
    this.company = { id: null, name: "", city: "", state: "" };
    this.displayDialog = true;
  }

  save() {
    this.company = null;
    this.displayDialog = false;
  }
}
