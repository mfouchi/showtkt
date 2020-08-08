import { Component, OnInit } from "@angular/core";
import { AppMainComponent } from "@app/layout/app.main.component";

@Component({
  selector: "app-menu",
  templateUrl: "./app.menu.component.html",
})
export class AppMenuComponent implements OnInit {
  model: any[];

  constructor(public app: AppMainComponent) {}

  ngOnInit() {
    this.model = [
      {
        label: "Dashboard",
        icon: "pi pi-fw pi-home",
        routerLink: ["/"],
      },
      {
        label: "Companies",
        icon: "pi pi-fw pi-sitemap",
        routerLink: ["/companies"],
      },
      {
        label: "Productions",
        icon: "pi pi-fw pi-star",
        routerLink: ["/productions"],
      },
      {
        label: "Orders",
        icon: "pi pi-fw pi-money-bill",
        url: ["/orders"],
      },
      {
        label: "Help",
        icon: "pi pi-fw pi-file",
        routerLink: ["/help"],
      },
    ];
  }

  onMenuClick() {
    this.app.menuClick = true;
  }
}
