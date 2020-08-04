import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {
  CompaniesGQL,
  CompaniesPagedGQL,
  CompanyGQL,
  UpdateCompanyGQL,
  CompaniesCountGQL,
} from "../../../generated/graphql";

@Injectable({
  providedIn: "root",
})
export class DBService {
  constructor(
    private companiesGQL: CompaniesGQL,
    private companiesPagedGQL: CompaniesPagedGQL,
    private companyGQL: CompanyGQL,
    private updateCompanyGQL: UpdateCompanyGQL,
    private companiesCountGQL: CompaniesCountGQL
  ) {}

  // left 'after' as 'any' in case Int id changes to uuid later
  GetCompanies(take: number, after?: any): Observable<any> {
    if (after === 0) {
      return this.companiesGQL.watch({ take: take }).valueChanges;
    } else {
      return this.companiesPagedGQL.watch({ take: take, after: after })
        .valueChanges;
    }
  }

  GetCompany(id: number): Observable<any> {
    return this.companyGQL
      .watch()
      .valueChanges.pipe(map((result) => result.data.company));
  }

  CountCompanies(): Observable<any> {
    return this.companiesCountGQL.watch().valueChanges;
  }

  UpdateCompany(id: number): Observable<any> {
    return this.updateCompanyGQL.mutate({
      id: id,
    });
  }
}
