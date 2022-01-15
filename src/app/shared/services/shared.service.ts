import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Rutas } from '../class/route';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public ruta: Rutas = new Rutas();
  private ruta$: BehaviorSubject<Rutas> = new BehaviorSubject<Rutas>(this.ruta)
  
  get getRuta(){
    return this.ruta$.asObservable();
  }

  set setRuta(item: string){
    this.ruta.ruta = item;
    this.ruta$.next(this.ruta);
  }
  constructor() { }
}
