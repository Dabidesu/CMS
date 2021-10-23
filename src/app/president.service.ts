import {HttpClient} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { President } from "./president";
import { environment } from 'src/environments/environment';


@Injectable({providedIn: 'root'})
export class PresidentService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getPresidents(): Observable<President[]> {
        return this.http.get<any>(`${this.apiServerUrl}/president/all`);
    }

    public addPresident(president: President): Observable<President> {
        return this.http.post<President>(`${this.apiServerUrl}/president/add`, president);
    }

    public updatePresident(president: President): Observable<President> {
        return this.http.post<President>(`${this.apiServerUrl}/president/update`, president);
    }

    public deletePresident(presidentId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/president/delete/${presidentId}`);
    }
}
