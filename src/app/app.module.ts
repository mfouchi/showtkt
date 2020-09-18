import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { AppRoutes } from "@app/app.routes";

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
import { AppComponent } from "@app/app.component";
import { AppMainComponent } from "@app/layout/app.main.component";
import { AppNotfoundComponent } from "@app/pages/app.notfound.component";
import { AppErrorComponent } from "@app/pages/app.error.component";
import { AppAccessdeniedComponent } from "@app/pages/app.accessdenied.component";
import { AppLoginComponent } from "@app/pages/app.login.component";
import { AppMenuComponent } from "@app/layout/menu/app.menu.component";
import { AppMenuitemComponent } from "@app/layout/menu/app.menuitem.component";
import { AppBreadcrumbComponent } from "@app/layout/breadcrumb/app.breadcrumb.component";
import { AppConfigComponent } from "@app/layout/config/app.config.component";
import { AppRightPanelComponent } from "@app/layout/rightpanel/app.rightpanel.component";
import { AppTopBarComponent } from "@app/layout/topbar/app.topbar.component";
import { AppFooterComponent } from "@app/layout/footer/app.footer.component";

// Application services
import { BreadcrumbService } from "@app/layout/breadcrumb/breadcrumb.service";
import { MenuService } from "@app/layout/menu/app.menu.service";
import { AuthComponent } from "@app/auth/auth.component";

// Apollo GraphQL services
import { ApolloModule } from "apollo-angular";
import { HttpLinkModule } from "apollo-angular-link-http";
import { GraphQLModule } from "@data/graphql/graphql.module";

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
