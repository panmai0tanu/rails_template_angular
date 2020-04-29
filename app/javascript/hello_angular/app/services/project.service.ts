import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProjectService {
	resources: string;

	constructor(private http: HttpClient) {}

	all(options = {}) {
		return this.http.get<any[]>(`projects`);
	}
}