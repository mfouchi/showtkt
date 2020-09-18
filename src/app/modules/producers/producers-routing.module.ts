import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProducersComponent } from "./producers.component";

const routes: Routes = [
  {
    path: "",
    component: ProducersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProducersRoutingModule {}
