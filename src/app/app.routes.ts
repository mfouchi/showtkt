import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { CompaniesComponent } from "./modules/companies/companies.component";
import { AppMainComponent } from "./app.main.component";
import { AppNotfoundComponent } from "./pages/app.notfound.component";
import { AppErrorComponent } from "./pages/app.error.component";
import { AppAccessdeniedComponent } from "./pages/app.accessdenied.component";
import { AppLoginComponent } from "./pages/app.login.component";
import { AuthComponent } from "./auth/auth.component";

export const routes: Routes = [
  {
    path: "",
    component: AppMainComponent,
    children: [
      { path: "", component: CompaniesComponent },
      { path: "companies", component: CompaniesComponent },
    ],
  },
  { path: "error", component: AppErrorComponent },
  { path: "accessdenied", component: AppAccessdeniedComponent },
  { path: "notfound", component: AppNotfoundComponent },
  { path: "login", component: AuthComponent }, // AppLoginComponent },
  { path: "**", redirectTo: "/notfound" },
];

export const AppRoutes: ModuleWithProviders<RouterModule> = RouterModule.forRoot(
  routes,
  { scrollPositionRestoration: "enabled" }
);
