import { Component, OnInit, OnDestroy } from "@angular/core";
import { BreadcrumbService } from "src/app/breadcrumb.service";
import { Observable, Subscription } from "rxjs";
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
  cursor: number = null;
  cols: any[];
  error: any;

  /**
   * The total amount of records in that could be shown in the table.
   * NOTE: This is equal to the length of the {@link datasource}
   * NOTE: This doesn't work correctly with pagination, since the pagination is only updated
   * once in the code of the table
   */
  totalRecords: number;

  /**
   * Whether or not the data is currectly loading
   */
  loading: boolean;

  /**
   * The height of a row within the table
   * This is used by the p-table to determine the number of rows it should render
   */
  readonly rowHeight = 40;

  /**
   * The height of the table.
   * NOTE: You should use this in combination with `[scrollable]="true"` if you want to
   * use infinite scrolling
   */
  readonly scrollHeight = "240px";

  /**
   * The amount of rows within the table. This is needed for loading new data
   * from the {@link datasource}.
   */
  get rows(): number {
    const height = parseInt(this.scrollHeight.replace(/px|%/gi, ""), 10);
    return height / this.rowHeight;
  }

  constructor(
    private breadcrumbService: BreadcrumbService,
    private db: DBService
  ) {
    this.breadcrumbService.setItems([{ label: "Companies" }]);
  }

  ngOnInit() {
    this.cols = [
      { field: "name", header: "Name", width: "50%" },
      { field: "city", header: "City", width: "25%" },
      { field: "state", header: "State", width: "25%" },
    ];
    this.totalRecords = 0;
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
    console.log("lazy loading data...");
    this.querySubscription = this.db
      .GetCompanies(1)
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.companies = data.companies;
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
