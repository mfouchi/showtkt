import { Component, OnInit, OnDestroy, ViewChild, Input } from "@angular/core";
import { Subscription } from "rxjs";

import { MessageService } from "primeng/api";
import { DBService } from "@data/service/db-service";
import { Company } from "@data/models/models";

import { Table } from "primeng/table";

@Component({
  selector: "tkt-table-crud",
  templateUrl: "./table-crud.component.html",
  providers: [MessageService],
})
export class TableCrudComponent implements OnInit, OnDestroy {
  @Input() cols: any[];
  @Input() createFunc: any;
  @Input() updateFunc: any;

  private querySubscription: Subscription;
  displayDialog: boolean;
  item: any = <any>{};
  selectedItem: any = <any>{};
  items: any[];
  newItem: boolean;
  loading: boolean = false;

  @ViewChild(Table)
  private tableRef: Table;

  constructor(private messageService: MessageService, private db: DBService) {}

  ngOnInit() {
    this.querySubscription = this.db
      .GetCompanies()
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.items = data.items;
      });
  }

  onRowSelect(event) {
    this.newItem = false;
    this.item = event.data;
    this.displayDialog = true;
  }

  onAddClicked() {
    this.selectedItem = <Company>{};
    this.newItem = true;
    this.item = <Company>{};
    this.displayDialog = true;
  }

  save() {
    try {
      if (this.item.id) {
        //update
        this.querySubscription = this.db.UpdateCompany(this.item).subscribe(
          (data) => {
            this.items = [...this.items];
            this.item = null;
            this.displayDialog = false;
            this.messageService.add({
              key: "tc",
              severity: "success",
              summary: "Success",
              detail: "Item updated successfully",
            });
          },
          (err) => {
            this.messageService.add({
              key: "tc",
              severity: "error",
              summary: "Error",
              detail: "Error updating item",
            });
          }
        );
      } else {
        //add new
        this.querySubscription = this.db.CreateCompany(this.item).subscribe(
          ({ data }) => {
            this.items = [data.createOneCompany, ...this.items];
            this.selectedItem = this.item;
            this.item = null;
            this.displayDialog = false;
            this.messageService.add({
              key: "tc",
              severity: "success",
              summary: "Success",
              detail: "Item added successfully",
            });
          },
          (err) => {
            this.messageService.add({
              key: "tc",
              severity: "error",
              summary: "Error",
              detail: "Error adding item",
            });
          }
        );
      }
    } catch (err) {
      console.log(err);
    }
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
