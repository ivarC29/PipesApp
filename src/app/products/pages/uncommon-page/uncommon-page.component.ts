import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Noldia';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void {
    this.name = 'Antonella';
    this.gender = 'female';
  }

  //i18nPlural
  public clients: string[] = ['Andrea', 'Yair', 'Jordan', 'Diana', 'Maria', 'Carlos', 'Luis', 'Fernanda', 'Leslie', 'Giordano'];
  public clientsMap ={
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenenos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient():void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Noldia',
    age: '30',
    address: 'Lima, Perú'
  }

  // Async pipe
  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('tap:', value ) ),
  );

  public promiseValue:Promise<String>= new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( 'tenemos data en la promesa.')
      console.log('tenemos data en la promesa.')
      this.person.name = 'Otro Nombre'
    }, 3500);
  });

}
