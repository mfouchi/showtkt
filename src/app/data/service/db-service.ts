import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { OktaAuthService } from "@okta/okta-angular";
import { environment } from "environments/environment";
import { Company } from "../models/models";

@Injectable({
  providedIn: "root",
})
export class DBService {
  constructor(private http: HttpClient, public oktaAuth: OktaAuthService) {}

  private async request(method: string, url: string, data?: any) {
    //const token = await this.oktaAuth.getAccessToken();

    const result = this.http.request(method, url, {
      body: data,
      responseType: "json",
      observe: "body",
      headers: {
        //   Authorization: `Bearer ${token}`,
      },
    });
    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }

  GetCompanies(): Promise<any> {
    return this.request("GET", `${environment.serverUrl}/company`);
  }

  GetCompany(id: number) {}

  CountCompanies(company: Company) {}

  UpdateCompany(company: Company) {}

  CreateCompany(company: Company) {}
}
