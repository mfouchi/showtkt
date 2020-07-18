import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { AppRoutes } from "./app.routes";

// PrimeNG Components for demos
import { ButtonModule } from "primeng/button";
import { TabViewModule } from "primeng/tabview";
import { CheckboxModule } from "primeng/checkbox";
import { PasswordModule } from "primeng/password";
import { MegaMenuModule } from "primeng/megamenu";
import { MenuModule } from "primeng/menu";
import { MenubarModule } from "primeng/menubar";
import { TableModule } from "primeng/table";

// Application Components
import { AppComponent } from "./app.component";
import { AppMainComponent } from "./app.main.component";
import { AppNotfoundComponent } from "./pages/app.notfound.component";
import { AppErrorComponent } from "./pages/app.error.component";
import { AppAccessdeniedComponent } from "./pages/app.accessdenied.component";
import { AppLoginComponent } from "./pages/app.login.component";
import { AppMenuComponent } from "./app.menu.component";
import { AppMenuitemComponent } from "./app.menuitem.component";
import { AppBreadcrumbComponent } from "./app.breadcrumb.component";
import { AppConfigComponent } from "./app.config.component";
import { AppRightPanelComponent } from "./app.rightpanel.component";
import { AppTopBarComponent } from "./app.topbar.component";
import { AppFooterComponent } from "./app.footer.component";

// Demo pages
import { ProductionsComponent } from "./demo/view/productions.component";

// Application services
import { BreadcrumbService } from "./breadcrumb.service";
import { MenuService } from "./app.menu.service";
import { AuthComponent } from "./auth/auth.component";

// AWS Amplify
import { AmplifyUIAngularModule } from "@aws-amplify/ui-angular";
import Amplify, { API, graphqlOperation } from "aws-amplify";

import awsmobile from "../aws-exports";

Amplify.configure(awsmobile);

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutes,
    HttpClientModule,
    BrowserAnimationsModule,
    AmplifyUIAngularModule,
    ButtonModule,
    TabViewModule,
    CheckboxModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    PasswordModule,
    TableModule,
  ],
  declarations: [
    AppComponent,
    AppMainComponent,
    AppMenuComponent,
    AppMenuitemComponent,
    AppTopBarComponent,
    AppFooterComponent,
    AppRightPanelComponent,
    AppConfigComponent,
    AppBreadcrumbComponent,
    AppNotfoundComponent,
    AppErrorComponent,
    AppAccessdeniedComponent,
    AppLoginComponent,
    ProductionsComponent,
    AuthComponent,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    BreadcrumbService,
    MenuService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
