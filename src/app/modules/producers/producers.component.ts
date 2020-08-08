import { Component, OnInit, OnDestroy } from "@angular/core";
import { BreadcrumbService } from "@app/layout/breadcrumb/breadcrumb.service";
import { Subscription } from "rxjs";
import { DBService } from "@data/service/db-service";
import { MessageService } from "primeng/api";
import { Producer } from "@data/models/models";

@Component({
  templateUrl: "./producers.component.html",
  providers: [MessageService],
})
export class CompaniesComponent implements OnInit, OnDestroy {
  private querySubscription: Subscription;
  displayDialog: boolean;
  producer: Producer = <Producer>{};
  selectedProducer: Producer = <Producer>{};
  companies: Producer[];
  newProducer: boolean;
  cols: any[];
  loading: boolean = false;

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

    this.querySubscription = this.db
      .GetCompanies()
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.companies = data.companies;
      });
  }

  onRowSelect(event) {
    this.newProducer = false;
    this.producer = event.data;
    this.displayDialog = true;
  }

  onAddClicked() {
    this.selectedProducer = <Producer>{};
    this.newProducer = true;
    this.producer = <Producer>{};
    this.displayDialog = true;
  }

  save() {
    try {
      if (this.producer.id) {
        //update
        // this.querySubscription = this.db
        //   .UpdateProducer(this.producer)
        //   .subscribe(
        //     (data) => {
        //       this.companies = [...this.companies];
        //       this.producer = null;
        //       this.displayDialog = false;
        //       this.messageService.add({
        //         key: "tc",
        //         severity: "success",
        //         summary: "Success",
        //         detail: "Producer updated successfully",
        //       });
        //     },
        //     (err) => {
        //       this.messageService.add({
        //         key: "tc",
        //         severity: "error",
        //         summary: "Error",
        //         detail: "Error updating producer",
        //       });
        //     }
        //   );
      } else {
        //add new
        // this.querySubscription = this.db
        //   .CreateProducer(this.producer)
        //   .subscribe(
        //     ({ data }) => {
        //       this.companies = [data.createOneProducer, ...this.companies];
        //       this.selectedProducer = this.producer;
        //       this.producer = null;
        //       this.displayDialog = false;
        //       this.messageService.add({
        //         key: "tc",
        //         severity: "success",
        //         summary: "Success",
        //         detail: "Producer added successfully",
        //       });
        //     },
        //     (err) => {
        //       this.messageService.add({
        //         key: "tc",
        //         severity: "error",
        //         summary: "Error",
        //         detail: "Error adding producer",
        //       });
        //     }
        //   );
      }
    } catch (err) {
      console.log(err);
    }
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
