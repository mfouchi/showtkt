import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {
  CompaniesGQL,
  CompanyGQL,
  UpdateCompanyGQL,
  CompaniesCountGQL,
} from "../../../generated/graphql";
import { Company } from "../models/models";

import { isCompositeType } from "graphql";

@Injectable({
  providedIn: "root",
})
export class DBService {
  constructor(
    private companiesGQL: CompaniesGQL,
    private companyGQL: CompanyGQL,
    private updateCompanyGQL: UpdateCompanyGQL,
    private companiesCountGQL: CompaniesCountGQL
  ) {}

  GetCompanies(): Observable<any> {
    return this.companiesGQL.watch().valueChanges;
  }

  GetCompany(id: number): Observable<any> {
    return this.companyGQL
      .watch()
      .valueChanges.pipe(map((result) => result.data.company));
  }

  CountCompanies(): Observable<any> {
    return this.companiesCountGQL.watch().valueChanges;
  }

  UpdateCompany(company: Company): Observable<any> {
    const obs: Observable<any> = this.updateCompanyGQL.mutate({
      ...company,
    });
    return obs;
  }
}
