import { Component, OnInit, OnDestroy } from "@angular/core";
import { BreadcrumbService } from "src/app/breadcrumb.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {
  AllCompaniesGQL,
  AllCompaniesQuery,
  Company,
} from "../../../generated/graphql";

@Component({
  templateUrl: "./companies.component.html",
})
export class CompaniesComponent implements OnInit {
  displayDialog: boolean;
  company: Company;
  company$: Observable<AllCompaniesQuery["companies"]>;
  selectedCompany: Company;
  newCompany: boolean;
  cols: any[];
  loading = false;
  error: any;

  constructor(
    private breadcrumbService: BreadcrumbService,
    companiesGQL: AllCompaniesGQL
  ) {
    this.breadcrumbService.setItems([{ label: "Companies" }]);
    this.company$ = companiesGQL
      .watch()
      .valueChanges.pipe(map((result) => result.data.companies));
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

  cloneCompany(c: Company): Company {
    let company: Company;

    for (let prop in c) {
      company[prop] = c[prop];
    }
    return company;
  }
}
