import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { AppRoutes } from "./app.routes";

// PrimeNG Components
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { DropdownModule } from "primeng/dropdown";
import { MegaMenuModule } from "primeng/megamenu";
import { MenubarModule } from "primeng/menubar";
import { MenuModule } from "primeng/menu";
import { PasswordModule } from "primeng/password";
import { TabViewModule } from "primeng/tabview";

// Application Components
import { AppComponent } from "./app.component";
import { AppMainComponent } from "./layout/app.main.component";
import { AppNotfoundComponent } from "./pages/app.notfound.component";
import { AppErrorComponent } from "./pages/app.error.component";
import { AppAccessdeniedComponent } from "./pages/app.accessdenied.component";
import { AppLoginComponent } from "./pages/app.login.component";
import { AppMenuComponent } from "./layout/menu/app.menu.component";
import { AppMenuitemComponent } from "./layout/menu/app.menuitem.component";
import { AppBreadcrumbComponent } from "./layout/breadcrumb/app.breadcrumb.component";
import { AppConfigComponent } from "./layout/config/app.config.component";
import { AppRightPanelComponent } from "./layout/rightpanel/app.rightpanel.component";
import { AppTopBarComponent } from "./layout/topbar/app.topbar.component";
import { AppFooterComponent } from "./layout/footer/app.footer.component";

// Application services
import { BreadcrumbService } from "./layout/breadcrumb/breadcrumb.service";
import { MenuService } from "./layout/menu/app.menu.service";
import { AuthComponent } from "./auth/auth.component";

// Apollo GraphQL services
import { ApolloModule } from "apollo-angular";
import { HttpLinkModule } from "apollo-angular-link-http";
import { GraphQLModule } from "./data/graphql/graphql.module";

// ShowTkt pages
import { DashboardComponent } from "@modules/dashboard/dashboard.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutes,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    CheckboxModule,
    DropdownModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    PasswordModule,
    TabViewModule,
    GraphQLModule,
    ApolloModule,
    HttpLinkModule,
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
    AuthComponent,
    DashboardComponent,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    GraphQLModule,
    BreadcrumbService,
    MenuService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
