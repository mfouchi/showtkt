import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { SharedModule } from "@app/shared/shared.module";
import { TableCrudComponent } from "./table-crud.component";

// PrimeNG Components
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { MessageModule } from "primeng/message";
import { TableModule } from "primeng/table";

@NgModule({
  declarations: [TableCrudComponent],
  imports: [
    ButtonModule,
    DialogModule,
    FormsModule,
    InputTextModule,
    MessageModule,
    TableModule,
    SharedModule,
  ],
  exports: [TableCrudComponent],
})
export class TableCrudModule {}
