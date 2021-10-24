import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Senator } from "./senator";
import { environment } from 'src/environments/environment';



@Injectable({ providedIn: 'root' })
export class SenatorService {
    private apiServerUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient) {}

    public getSenators(): Observable<Senator[]> {
        return this.http.get<Senator[]>(`${this.apiServerUrl}/senator/all`);
    }

    public addSenator(senator: Senator): Observable<Senator> {
        return this.http.post<Senator>(`${this.apiServerUrl}/senator/add`, senator);
    }

    public updateSenator(senator: Senator): Observable<Senator> {
        return this.http.put<Senator>(`${this.apiServerUrl}/senator/update`, senator);
    }

    public deleteSenator(senatorId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/senator/delete/${senatorId}`);
    }
}
