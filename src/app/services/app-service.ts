import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private booleanSubject = new Subject<boolean>();

  // Método para emitir um valor booleano
  emitBoolean(value: boolean): void {
    this.booleanSubject.next(value);
  }

  // Método para obter o Observable e escutar os eventos




  onBooleanChange(): Observable<boolean> {
    return this.booleanSubject.asObservable();
  }

}
