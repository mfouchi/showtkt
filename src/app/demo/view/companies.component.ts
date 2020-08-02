import { Component, OnInit, OnDestroy } from "@angular/core";
import { BreadcrumbService } from "src/app/breadcrumb.service";
import { Observable, Subscription } from "rxjs";
import { DBService } from "../service/dbservice";
import { Company } from "../models/models";

@Component({
  templateUrl: "./companies.component.html",
})
export class CompaniesComponent implements OnInit, OnDestroy {
  displayDialog: boolean;
  company: Company = <Company>{};
  selectedCompany: Company = <Company>{};
  company$: Observable<Company[]>;
  private sub = Subscription;
  newCompany: boolean;
  cols: any[];
  loading = false;
  error: any;

  constructor(
    private breadcrumbService: BreadcrumbService,
    private db: DBService
  ) {
    this.breadcrumbService.setItems([{ label: "Companies" }]);
  }

  ngOnInit() {
    this.company$ = this.db.GetAllCompanies();

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
    this.company = <Company>{};
    //this.company = { id: null, name: "", city: "", state: "" };
    this.displayDialog = true;
  }

  loadDataLazy() {
    this.loadCompanies();
  }

  loadCompanies() {
    this.company$ = this.db.GetAllCompanies();
  }
  save() {
    this.company = null;
    this.displayDialog = false;
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
