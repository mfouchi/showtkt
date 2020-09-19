import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { MessageService } from "primeng/api";
import { BreadcrumbService } from "@app/layout/breadcrumb/breadcrumb.service";
import { DBService } from "@data/service/db-service";
import { Company } from "@data/models/models";

@Component({
  templateUrl: "./companies.component.html",
  providers: [MessageService],
})
export class CompaniesComponent implements OnInit, OnDestroy {
  private querySubscription: Subscription;
  displayDialog: boolean;
  company: Company = <Company>{};
  selectedCompany: Company = <Company>{};
  companies: Company[];
  newCompany: boolean;
  cols: any[];
  loading: boolean = false;
  submitted: boolean;

  constructor(
    private breadcrumbService: BreadcrumbService,
    private messageService: MessageService,
    private db: DBService
  ) {}

  ngOnInit() {
    this.breadcrumbService.setItems([{ label: "Companies" }]);

    this.cols = [
      { field: "name", header: "Name", width: "50%" },
      { field: "city", header: "City", width: "25%" },
      { field: "state", header: "State", width: "25%" },
    ];

    this.getCompanies();
    // this.querySubscription = this.db
    //   .GetCompanies()
    //   .subscribe(({ data, loading }) => {
    //     this.loading = loading;
    //     this.companies = data.companies;
    //   });
  }

  private getCompanies() {
    this.db.GetCompanies().then((response: any) => {
      console.log("Response", response);
      this.companies = response.map((ev) => {
        // ev.body = ev.description;
        // ev.header = ev.name;
        // ev.icon = 'fa-clock-o';
        return ev;
      });
    });
  }

  onRowSelect(event) {
    this.newCompany = false;
    this.company = { ...event.data };
    this.displayDialog = true;
  }

  onAddClicked() {
    this.selectedCompany = <Company>{};
    this.newCompany = true;
    this.company = <Company>{};
    this.submitted = false;
    this.displayDialog = true;
  }

  save() {
    this.submitted = true;

    // try {
    //   if (this.company.name.trim()) {
    //     if (this.company.id) {
    //       //update
    //       this.querySubscription = this.db
    //         .UpdateCompany(this.company)
    //         .subscribe(
    //           (data) => {
    //             this.companies = [...this.companies];
    //             this.company = null;
    //             this.displayDialog = false;
    //             this.messageService.add({
    //               key: "tc",
    //               severity: "success",
    //               summary: "Success",
    //               detail: "Company updated successfully",
    //             });
    //           },
    //           (err) => {
    //             this.messageService.add({
    //               key: "tc",
    //               severity: "error",
    //               summary: "Error",
    //               detail: "Error updating company",
    //             });
    //           }
    //         );
    //     } else {
    //       //add new
    //       this.querySubscription = this.db
    //         .CreateCompany(this.company)
    //         .subscribe(
    //           ({ data }) => {
    //             this.companies = [data.createOneCompany, ...this.companies];
    //             this.selectedCompany = this.company;
    //             this.company = null;
    //             this.displayDialog = false;
    //             this.messageService.add({
    //               key: "tc",
    //               severity: "success",
    //               summary: "Success",
    //               detail: "Company added successfully",
    //             });
    //           },
    //           (err) => {
    //             this.messageService.add({
    //               key: "tc",
    //               severity: "error",
    //               summary: "Error",
    //               detail: "Error adding company",
    //             });
    //           }
    //         );
    //     }
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
