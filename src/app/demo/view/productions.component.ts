import { Component, OnInit, OnDestroy } from "@angular/core";
import { BreadcrumbService } from "src/app/breadcrumb.service";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { Subscription } from "rxjs";

const eventsAfterDate = gql`
  query companies {
    companies(orderBy: { name: asc }) {
      id
      name
    }
  }
`;

@Component({
  templateUrl: "./productions.component.html",
  styles: [
    `
      /* Table */
      .ui-table.ui-table-cars .ui-table-caption.ui-widget-header {
        border: 0 none;
        padding: 12px;
        text-align: left;
        font-size: 20px;
        font-weight: normal;
      }

      .ui-table .ui-table-globalfilter-container {
        position: relative;
        top: -4px;
      }

      .ui-column-filter {
        margin-top: 1em;
      }

      .ui-column-filter .ui-multiselect-label {
        font-weight: 500;
      }

      .ui-table.ui-table-cars .ui-table-thead > tr > th {
        border: 0 none;
        text-align: left;
      }

      .ui-table-globalfilter-container {
        float: right;
        display: inline;
      }

      .ui-table.ui-table-cars .ui-table-tbody > tr > td {
        border: 0 none;
      }

      .ui-table.ui-table-cars .ui-table-tbody .ui-column-title {
        font-size: 16px;
      }

      .ui-table.ui-table-cars .ui-paginator {
        border: 0 none;
        padding: 1em;
      }

      /* DataView */
      .filter-container {
        text-align: center;
      }

      .car-details-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2em;
        border-bottom: 1px solid #d9dad9;
      }

      .car-details-list > div {
        display: flex;
        align-items: center;
      }

      .car-details-list > div img {
        margin-right: 14px;
      }

      .car-detail {
        padding: 0 1em 1em 1em;
        border-bottom: 1px solid #d9dad9;
        margin: 1em;
      }

      .ui-panel-content {
        padding: 1em;
      }

      @media (max-width: 1024px) {
        .car-details-list img {
          width: 75px;
        }

        .filter-container {
          text-align: left;
        }
      }
    `,
  ],
})
export class ProductionsComponent implements OnInit, OnDestroy {
  displayModal: boolean;
  events: any[];
  loading = false;
  error: any;
  cols: any[];
  private querySubscription: Subscription;

  constructor(
    private breadcrumbService: BreadcrumbService,
    private apollo: Apollo
  ) {
    this.breadcrumbService.setItems([{ label: "Productions" }]);
  }

  ngOnInit() {
    this.cols = [
      { field: "vin", header: "Vin" },
      { field: "year", header: "Year" },
      { field: "brand", header: "Brand" },
      { field: "color", header: "Color" },
    ];
  }

  createProduction() {
    this.displayModal = true;
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: eventsAfterDate,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.events = data.companies;
      });
  }

  formatDate(d) {
    return new Date(d).toLocaleString("en-US");
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
