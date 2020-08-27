import { NgModule } from "@angular/core";

import { SharedModule } from "@app/shared/shared.module";
import { ProducersComponent } from "./producers.component";
import { ProducersRoutingModule } from "./producers-routing.module";

import { TableCrudModule } from "@app/shared/component/table-crud/table-crud.module";

@NgModule({
  declarations: [ProducersComponent],
  imports: [ProducersRoutingModule, TableCrudModule, SharedModule],
  exports: [ProducersComponent],
})
export class ProducersModule {}
