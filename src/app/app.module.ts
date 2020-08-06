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
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { MegaMenuModule } from "primeng/megamenu";
import { MenubarModule } from "primeng/menubar";
import { MenuModule } from "primeng/menu";
import { MessageModule } from "primeng/message";
import { MultiSelectModule } from "primeng/multiselect";
import { PasswordModule } from "primeng/password";
import { TableModule } from "primeng/table";
import { TabViewModule } from "primeng/tabview";
import { ToastModule } from "primeng/toast";

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

// Application services
import { BreadcrumbService } from "./breadcrumb.service";
import { MenuService } from "./app.menu.service";
import { AuthComponent } from "./auth/auth.component";

// Apollo GraphQL services
import { ApolloModule } from "apollo-angular";
import { HttpLinkModule } from "apollo-angular-link-http";
import { GraphQLModule } from "./graphql.module";

// ShowTkt pages
import { CompaniesComponent } from "./modules/companies/companies.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutes,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    CheckboxModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    MessageModule,
    MultiSelectModule,
    PasswordModule,
    TableModule,
    TabViewModule,
    ToastModule,
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
    CompaniesComponent,
    AuthComponent,
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
