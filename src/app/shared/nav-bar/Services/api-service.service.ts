import { environment } from '../../../../environments/environment.prod'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../../Interfaces/ApiResponse.model';

@Injectable({
  providedIn: 'root'  // Registers the service as a singleton in the root injector
})
export class APIServiceService {
  private apiUrlBase = environment.API_URL_Base;
  constructor(private http: HttpClient) {}
  Get<T>(
    url: string,
    headersObj?: { [key: string]: string },
    paramsObj?: { [key: string]: string }
  ): Observable<ApiResponse<T>> {

    const cleanedHeaders = headersObj ? this.removeEmptyProperties(headersObj) : undefined;
    const cleanedParams = paramsObj ? this.removeEmptyProperties(paramsObj) : undefined;


    const options = {
      headers: cleanedHeaders,
      params: cleanedParams
    };
    return this.http.get<ApiResponse<T>>( url, options);
  }
  POST<T>(
    url: string,
    body: any,
    headersObj?: { [key: string]: string },
    paramsObj?: { [key: string]: string },
    isFormData: boolean = false
  ): Observable<ApiResponse<T>> {
    let headers = new HttpHeaders();
    let params = new HttpParams();

    // If headersObj is provided and not null, add each header to HttpHeaders
    if (headersObj) {
      for (let key in headersObj) {
        if (headersObj.hasOwnProperty(key)) {
          headers = headers.set(key, headersObj[key]);
        }
      }
    }

    // If paramsObj is provided and not null, add each param to HttpParams
    if (paramsObj) {
      for (let key in paramsObj) {
        if (paramsObj.hasOwnProperty(key)) {
          params = params.set(key, paramsObj[key]);
        }
      }
    }

    // Convert body to FormData if isFormData is true
    let payload = body;
    if (isFormData && body) {
      payload = new FormData();
      for (let key in body) {
        if (body.hasOwnProperty(key)) {
          payload.append(key, body[key]);
        }
      }
    }
    const cleanedHeaders = headersObj ? this.removeEmptyProperties(headersObj) : undefined;
    const cleanedParams = paramsObj ? this.removeEmptyProperties(paramsObj) : undefined;

    // Build options object conditionally
    const options = {
      headers: cleanedHeaders,
      params: cleanedParams,
    };
    return this.http.post<ApiResponse<T>>(url, payload, options);
  }
  PUT<T>(
    url:string,
    body: any,
    headersObj?: { [key: string]: string },
    paramsObj?: { [key: string]: string },
    isFormData: boolean = false
  ): Observable<ApiResponse<T>> {
    let headers = new HttpHeaders();
    let params = new HttpParams();

    // If headersObj is provided and not null, add each header to HttpHeaders
    if (headersObj) {
      for (let key in headersObj) {
        if (headersObj.hasOwnProperty(key)) {
          headers = headers.set(key, headersObj[key]);
        }
      }
    }

    // If paramsObj is provided and not null, add each param to HttpParams
    if (paramsObj) {
      for (let key in paramsObj) {
        if (paramsObj.hasOwnProperty(key)) {
          params = params.set(key, paramsObj[key]);
        }
      }
    }

    // Convert body to FormData if isFormData is true
    let payload = body;
    if (isFormData && body) {
      payload = new FormData();
      for (let key in body) {
        if (body.hasOwnProperty(key)) {
          payload.append(key, body[key]);
        }
      }
    }

    const cleanedHeaders = headersObj ? this.removeEmptyProperties(headersObj) : undefined;
    const cleanedParams = paramsObj ? this.removeEmptyProperties(paramsObj) : undefined;

    // Build options object conditionally
    const options = {
      headers: cleanedHeaders,
      params: cleanedParams,
    };
    // Make the PUT request and return an Observable of ApiResponse<T>
    return this.http.put<ApiResponse<T>>(url, payload, options);
  }
  DELETE<T>(
    url :string,
    headersObj?: { [key: string]: string },
    paramsObj?: { [key: string]: string }
  ): Observable<ApiResponse<T>> {
    let headers = new HttpHeaders();
    let params = new HttpParams();

    // If headersObj is provided and not null, add each header to HttpHeaders
    if (headersObj) {
      for (let key in headersObj) {
        if (headersObj.hasOwnProperty(key)) {
          headers = headers.set(key, headersObj[key]);
        }
      }
    }

    // If paramsObj is provided and not null, add each param to HttpParams
    if (paramsObj) {
      for (let key in paramsObj) {
        if (paramsObj.hasOwnProperty(key)) {
          params = params.set(key, paramsObj[key]);
        }
      }
    }

    const cleanedHeaders = headersObj ? this.removeEmptyProperties(headersObj) : undefined;
    const cleanedParams = paramsObj ? this.removeEmptyProperties(paramsObj) : undefined;

    // Build options object conditionally
    const options = {
      headers: cleanedHeaders,
      params: cleanedParams,
    };

    // Make the DELETE request and return an Observable of ApiResponse<T>
    return this.http.delete<ApiResponse<T>>(url, options);
  }
  removeEmptyProperties(obj: { [key: string]: string | undefined }): { [key: string]: string } {
    const result: { [key: string]: string } = {};

    // Iterate over the keys of the object
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] !== undefined && obj[key] !== null && obj[key] !== '') {
        // Type assertion to ensure we're only adding non-undefined values
        result[key] = obj[key] as string;
      }
    }

    return result;
  }

}

