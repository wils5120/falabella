import { Compra } from './../Compra';
import { Component, OnInit } from '@angular/core';
import { CompraService } from '../services/compra.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  compra: Compra [];
  nombre: String;
  number: Number;
  cedula: Number;
  tipo: String;
  NumerPoli: Number;

  constructor( private Compras: CompraService ) {
    this.Compras.getCompra().subscribe(res => {
      this.compra = res;
    });
   }

  ngOnInit() {
  }

  addCompras(event) {
    event.preventDefault();
    const newCompra: Compra = {
      nombre: this.nombre,
      isDone: false,
      cedula: this.cedula,
       tipo: this.tipo,
       NumPoli: this.NumerPoli,
    };
    this.Compras.addCompra(newCompra)
    .subscribe( task => {
     this.compra.push(task);
      this.nombre = ' ';
    });
  }

  deleteCompra(id) {
    const resp = confirm('esta seguro de eliminar el dato?');
    if (resp === true) {
      const comprar = this.compra;
      this.Compras.deleteCompra(id).subscribe(data => {
        if (data.n === 1) {
          for (let i = 0; i < comprar.length; i++) {
            if (comprar[i]._id === id) {
              comprar.splice(i, 1);
            }
          }
        }
      });
    }
    return;
  }

  updatecompra(c1: Compra) {
    const newcompra = {
      _id: c1._id,
      nombre: c1.nombre,
      isDone: !c1.isDone
    };

    this.Compras.updateCompra(newcompra).subscribe(respu => {
      c1.isDone = !c1.isDone;
    });
  }

}
