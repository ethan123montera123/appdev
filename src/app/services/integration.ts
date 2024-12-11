import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginRequest } from "../models/login-request";
import { Observable } from "rxjs";
import { LoginResponse } from "../models/login-response";

const API_URL="http://locahost:8080/api/login"

@Injectable({
    providedIn: 'root'
})
export class IntegrationService {
    constructor(private http: HttpClient){}

    login(request: LoginRequest):Observable<LoginResponse> {
        return this.http.post<LoginResponse>(API_URL, request);
    }
}