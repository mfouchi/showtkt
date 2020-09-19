import { NgModule } from "@angular/core";

import { SharedModule } from "@app/shared/shared.module";
import { ProducersComponent } from "./producers.component";
import { ProducersRoutingModule } from "./producers-routing.module";

@NgModule({
  declarations: [ProducersComponent],
  imports: [ProducersRoutingModule, SharedModule],
  exports: [ProducersComponent],
})
export class ProducersModule {}
