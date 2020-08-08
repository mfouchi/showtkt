import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToastModule } from "primeng/toast";

import { LoggingService } from "@data/service/logging.service";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [CommonModule, ToastModule],
})
export class SharedModule {}
