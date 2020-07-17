import { Component, OnInit } from "@angular/core";
import { BreadcrumbService } from "../../breadcrumb.service";

import { APIService } from "../../API.service";

@Component({
  templateUrl: "./emptydemo.component.html",
})
export class EmptyDemoComponent implements OnInit {
  companies: Array<any>;

  constructor(
    private breadcrumbService: BreadcrumbService,
    private api: APIService
  ) {
    this.breadcrumbService.setItems([
      { label: "Pages" },
      { label: "Empty", routerLink: ["/pages/empty"] },
    ]);
  }

  async ngOnInit() {
    this.api.ListCompanys().then((evt) => {
      this.companies = evt.items;
    });

    this.api.OnCreateCompanyListener.subscribe((evt) => {
      const data = (evt as any).value.data.onCreateCompany;
      this.companies = [...this.companies, data];
    });
  }

  createCompany() {
    this.api.CreateCompany({
      name: "Test Company",
    });
  }
}
//   deleteCompany(ID) {
//     this.api.DeleteCompany({}
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
