import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.development';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Account} from '../model/account.type';
import {Observable} from 'rxjs';
import {ApiResponse} from '../model/ApiResponse.type';
import {AuthResponse} from '../model/AuthResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.API_URL}/auth`;

  constructor(private http: HttpClient) {
  }

  login(account: Account): Observable<HttpResponse<ApiResponse<AuthResponse>>> {
    return this.http.post<ApiResponse<AuthResponse>>(
      `${this.apiUrl}/login`,
      account,
      { observe: 'response' }
    );
  }



}
