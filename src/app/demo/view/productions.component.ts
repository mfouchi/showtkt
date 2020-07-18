import { Component, OnInit } from "@angular/core";
import { APIService } from "src/app/API.service";
import { BreadcrumbService } from "src/app/breadcrumb.service";

@Component({
  templateUrl: "./productions.component.html",
})
export class ProductionsComponent implements OnInit {
  ticketProviders: Array<any>;

  constructor(
    private breadcrumbService: BreadcrumbService,
    private api: APIService
  ) {
    this.breadcrumbService.setItems([{ label: "Productions" }]);
  }

  async ngOnInit() {
    this.api.ListTicketProviders().then((evt) => {
      this.ticketProviders = evt.items;
    });

    this.api.OnCreateTicketProviderListener.subscribe((evt) => {
      const data = (evt as any).value.data.onCreateTicketProvider;
      this.ticketProviders = [...this.ticketProviders, data];
    });
  }

  createCompany() {
    this.api.CreateTicketProvider({
      name: "Theatre 13",
    });
  }
}
//   deleteTicketProvider(ID) {
//     this.api.DeleteTicketProvider({}
//       id: ID,
//     });
//

// id: ID!
// name: String!
// Productions: [Production] @connection(name: "companyProductions")
// }

// type Venue @model {
// id: ID!
// name: String!
// events: [Event] @connection(name: "venueEvents")
// }

// type Production @model {
// id: ID!
// name: String!
// company: Company @connection(name: "companyProductions")
// events: [Event] @connection(name: "productionEvents")
// }
