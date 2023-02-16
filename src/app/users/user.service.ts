import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class UsersService {
    constructor(private http: HttpClient) {}

    login(user: any): Observable<any> {
        /*return this.http.post("http://localhost:4200", user);*/
        return this.http.post("https://cvweb-backend-production-311a.up.railway.app", user);
    }
}
