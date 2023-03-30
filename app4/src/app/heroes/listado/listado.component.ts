import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  public heroes : string[] = ['spiderman','ironman','goku','chayane','linus torvals']
  public usuarios:any = [
    {id:1,nombre:"roldan"},
    {id:2,nombre:"roldan2"},
    {id:3,nombre:"roldan3"}  
  ]

  public colores : string[] = ['rojo','azul','verde']

  public comidas:any = [
    {id:1,nombre:"hevos"},
    {id:2,nombre:"refresco"},
    {id:3,nombre:"tortillas"}  
  ]

  public componentes:any = [
    {nombre: "Laptop", marca: "Lenovo", modelo: "IdeaPad3", memoria: "8GB", procesador: "Ryzen5",
    discoduro: "500gb"},
    {nombre: "Laptop", marca: "HP", modelo: "Zbook", memoria: "8GB", procesador: "I5",
    discoduro: "250gb"},
    {nombre: "Laptop", marca: "Acer", modelo: "Aspire", memoria: "12GB", procesador: "I7",
    discoduro: "1TB"},
    {nombre: "Laptop", marca: "Apple", modelo: "MacBook Pro", memoria: "8GB", procesador: "M1",
    discoduro: "250gb"},
    {nombre: "Laptop", marca: "HP", modelo: "Spectre x360", memoria: "16GB", procesador: "Ryzen7",
    discoduro: "500gb"},
    {nombre: "Laptop", marca: "Asus", modelo: "ZenBook UX425", memoria: "8GB", procesador: "I3",
    discoduro: "1TB"},
    {nombre: "Laptop", marca: "Acer", modelo: "Swift 5", memoria: "8GB", procesador: "Ryzen3",
    discoduro: "500gb"},
    {nombre: "Laptop", marca: "Razer", modelo: "Blade 15", memoria: "32GB", procesador: "Ryzen9",
    discoduro: "1TB"}

  ]
  public mayorEdad(edad:number):boolean{
    if (edad >= 18){
      return true;
    }else{
      return false;
    }

  }
}
