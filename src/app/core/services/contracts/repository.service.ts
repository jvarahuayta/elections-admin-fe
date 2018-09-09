import { Base } from "../../models/base/base.model";
import { BaseSpecification } from "../../specifications/base/base.specification";
import { Observable } from "rxjs/Observable";

export interface RepositoryService<T extends Base<T>>{
    find( specification?: BaseSpecification ): Observable<T[]>;
    findOne( specification?: BaseSpecification ): Observable<T>;
    add( T ): Observable<T>;
    update( T ): Observable<T>;
    remove( T ): Observable<T>;
}