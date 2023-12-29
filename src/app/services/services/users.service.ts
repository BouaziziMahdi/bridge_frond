/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CoursDto } from '../models/cours-dto';
import { createCours } from '../fn/users/create-cours';
import { CreateCours$Params } from '../fn/users/create-cours';
import { deleteById } from '../fn/users/delete-by-id';
import { DeleteById$Params } from '../fn/users/delete-by-id';
import { findAll } from '../fn/users/find-all';
import { FindAll$Params } from '../fn/users/find-all';
import { updateCours } from '../fn/users/update-cours';
import { UpdateCours$Params } from '../fn/users/update-cours';

@Injectable({ providedIn: 'root' })
export class UsersService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateCours()` */
  static readonly UpdateCoursPath = '/api/v1/cours/update/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCours()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCours$Response(params: UpdateCours$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return updateCours(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateCours$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCours(params: UpdateCours$Params, context?: HttpContext): Observable<void> {
    return this.updateCours$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createCours()` */
  static readonly CreateCoursPath = '/api/v1/cours/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createCours()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCours$Response(params: CreateCours$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return createCours(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createCours$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCours(params: CreateCours$Params, context?: HttpContext): Observable<number> {
    return this.createCours$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findAll()` */
  static readonly FindAllPath = '/api/v1/cours/find';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll$Response(params?: FindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CoursDto>>> {
    return findAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll(params?: FindAll$Params, context?: HttpContext): Observable<Array<CoursDto>> {
    return this.findAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CoursDto>>): Array<CoursDto> => r.body)
    );
  }

  /** Path part for operation `deleteById()` */
  static readonly DeleteByIdPath = '/api/v1/cours/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById$Response(params: DeleteById$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById(params: DeleteById$Params, context?: HttpContext): Observable<void> {
    return this.deleteById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
