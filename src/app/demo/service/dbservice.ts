import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AllCompaniesGQL, AllCompaniesQuery } from "../../../generated/graphql";

@Injectable({
  providedIn: "root",
})
export class DBService {
  constructor(private companiesGQL: AllCompaniesGQL) {}

  GetAllCompanies(): Observable<AllCompaniesQuery["companies"]> {
    return this.companiesGQL
      .watch()
      .valueChanges.pipe(map((result) => result.data.companies));
  }
}
