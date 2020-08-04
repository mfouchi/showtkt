import { Component, OnInit, OnDestroy } from "@angular/core";
import { BreadcrumbService } from "src/app/breadcrumb.service";
import { Subscription } from "rxjs";
import { DBService } from "../service/dbservice";
import { Company } from "../models/models";
import { LazyLoadEvent } from "primeng/api";

@Component({
  templateUrl: "./companies.component.html",
})
export class CompaniesComponent implements OnInit, OnDestroy {
  displayDialog: boolean;
  company: Company = <Company>{};
  selectedCompany: Company = <Company>{};
  companies: Company[];
  private querySubscription: Subscription;
  newCompany: boolean;
  cursor: number = 0;
  cols: any[];
  loading: boolean = false;
  error: any;

  constructor(
    private breadcrumbService: BreadcrumbService,
    private db: DBService
  ) {}

  ngOnInit() {
    this.breadcrumbService.setItems([{ label: "Companies" }]);

    this.cols = [
      { field: "name", header: "Name", width: "50%" },
      { field: "city", header: "City", width: "25%" },
      { field: "state", header: "State", width: "25%" },
    ];

    this.querySubscription = this.db
      .GetCompanies(15, this.cursor)
      .subscribe(({ data, loading }) => {
        console.log("data:");
        console.dir(data);
        this.loading = loading;
        this.companies = data.companies;
      });
  }

  onRowSelect(event) {
    this.newCompany = false;
    this.company = event.data;
    this.displayDialog = true;
  }

  onAddClicked() {
    this.newCompany = true;
    this.company = <Company>{};
    this.displayDialog = true;
  }

  loadDataLazy(event: LazyLoadEvent) {
    console.log("first: " + event.first + "; rows: " + event.rows);
    this.querySubscription = this.db
      .GetCompanies(event.rows, this.cursor)
      .subscribe(({ data, loading }) => {
        console.log("data:");
        console.dir(data);
        this.loading = loading;

        //populate page
        Array.prototype.splice.apply(this.companies, [
          ...[event.first, event.rows],
          ...data.companies,
        ]);

        //trigger change detection
        this.companies = [...this.companies];

        //this.companies = data.companies;
        if (data.companies) {
          console.log("cursor before: " + this.cursor);
          this.cursor = data.companies[data.companies.length - 1].id;
          console.log("cursor after: " + this.cursor);
        }
      });
  }

  save(id: number) {
    this.db.UpdateCompany(id);
    this.company = null;
    this.displayDialog = false;
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
