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

  // left after as 'any' in case Int id changes to uuid later
  GetCompanies(_take: number, _after?: any): Observable<any> {
    if (_after) {
      return this.companiesPagedGQL.watch({ take: _take, after: _after })
        .valueChanges;
    } else {
      return this.companiesGQL.watch({ take: _take }).valueChanges;
    }
  }

  GetCompany(id: number): Observable<any> {
    return this.companyGQL
      .watch()
      .valueChanges.pipe(map((result) => result.data.company));
  }

  CountCompanies(): Observable<any> {
    return this.companiesCountGQL
      .watch()
      .valueChanges.pipe(map((result) => result.data));
  }

  UpdateCompany(id: number): Observable<any> {
    return this.updateCompanyGQL.mutate({
      id: id,
    });
  }
}
