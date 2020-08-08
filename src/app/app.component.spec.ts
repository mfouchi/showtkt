/* tslint:disable:no-unused-variable */

import { async, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { AppMainComponent } from "./layout/app.main.component";
import { AppTopBarComponent } from "./layout/topbar/app.topbar.component";
import { AppFooterComponent } from "./layout/footer/app.footer.component";
import { AppMenuComponent } from "./layout/menu/app.menu.component";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { AppConfigComponent } from "./layout/config/app.config.component";
import { AppRightPanelComponent } from "./layout/rightpanel/app.rightpanel.component";
import { AppBreadcrumbComponent } from "./layout/breadcrumb/app.breadcrumb.component";
import { BreadcrumbService } from "./layout/breadcrumb/breadcrumb.service";

describe("AppComponent", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ScrollPanelModule],
      declarations: [
        AppComponent,
        AppMainComponent,
        AppMenuComponent,
        AppTopBarComponent,
        AppConfigComponent,
        AppRightPanelComponent,
        AppFooterComponent,
        AppBreadcrumbComponent,
      ],
      providers: [BreadcrumbService],
    });
    TestBed.compileComponents();
  });

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
