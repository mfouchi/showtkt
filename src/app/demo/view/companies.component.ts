import { Component, OnInit, OnDestroy } from "@angular/core";
import { BreadcrumbService } from "src/app/breadcrumb.service";
import { Subscription } from "rxjs";
import { DBService } from "../service/dbservice";
import { Company } from "../models/models";

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
      .GetCompanies()
      .subscribe(({ data, loading }) => {
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
    this.selectedCompany = <Company>{};
    this.newCompany = true;
    this.company = <Company>{};
    this.displayDialog = true;
  }

  save() {
    try {
      if (this.company.id) {
        this.querySubscription = this.db
          .UpdateCompany(this.company)
          .subscribe((data) => {
            this.company = null;
            this.displayDialog = false;
          });
      } else {
        //add new
      }
    } catch (err) {
      console.log(err);
    }
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
