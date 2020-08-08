import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { SharedModule } from "@app/shared/shared.module";
import { CompaniesComponent } from "./companies.component";
import { CompaniesRoutingModule } from "./companies-routing.module";

// PrimeNG Components
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { MessageModule } from "primeng/message";
import { TableModule } from "primeng/table";

@NgModule({
  declarations: [CompaniesComponent],
  imports: [
    CompaniesRoutingModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    InputTextModule,
    MessageModule,
    TableModule,
    SharedModule,
  ],
  exports: [CompaniesComponent],
})
export class CompaniesModule {}
