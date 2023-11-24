import { Injectable } from '@angular/core';
import { Unko } from './unko';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AwsLambdaGetResponse } from './aws-lambda-get-response';

@Injectable({
  providedIn: 'root',
})
export class UnkoService {
  private UNKO_LIST_URL = 'https://www.hina-zakura.com/api/unkos';

  constructor(private httpClient: HttpClient) {}

  public getUnkos(): Observable<AwsLambdaGetResponse<Unko[]>> {
    return this.httpClient.get<AwsLambdaGetResponse<Unko[]>>(
      this.UNKO_LIST_URL
    );
  }

  public getUnko(id: number): Observable<AwsLambdaGetResponse<Unko[]>> {
    return this.httpClient.get<AwsLambdaGetResponse<Unko[]>>(
      this.UNKO_LIST_URL + `/${id}`
    );
  }

  // updateHero(unko: Unko): void {
  //   const index = this.unkos.findIndex((item) => item.id === unko.id);
  //   this.unkos[index] = unko;
  //   this.unkos[index].discount = unko.discount / 100.0;
  // }

  public searchUnkos(name: string): Observable<AwsLambdaGetResponse<Unko[]>> {
    return this.httpClient.get<AwsLambdaGetResponse<Unko[]>>(
      this.UNKO_LIST_URL + `?name=${name}`
    );
  }
}
