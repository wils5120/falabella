import { Compra } from './../Compra';
import { Component, OnInit } from '@angular/core';
import { CompraService } from '../services/compra.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit {

  compra: Compra [];
  nombre: String;
  number: Number;
  cedula: String;
  ver: String = 'Poliza SOAT';
  valorSoap: String = '300.000 COP';
  soat: boolean;
  riesgo: boolean;
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
      ver: this.ver,
      valorSoap: this.valorSoap,
      soat: this.soat,
      riesgo: this.riesgo,

    };



      if ( newCompra.soat === true) {
        this.ver = 'Poliza SOAT';
        this.valorSoap = '300.000 COP';
      }
      if (newCompra.riesgo === true) {
        this.ver = 'Las pólizas todo riesgo de vehiculos';
        this.valorSoap = '900.000 COP';
      }
      this.Compras.addCompra(newCompra)
      .subscribe( task => {
      this.compra.push(task);
      this.nombre = '';
      this.cedula = '';
      console.log(task);
      console.log(this.ver);
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
      isDone: !c1.isDone,
      soat: this.soat,
      riesgos: this.riesgo,
    };

    this.Compras.updateCompra(newcompra).subscribe(respu => {
      c1.isDone = !c1.isDone;
    });
  }

  end() {
    alert('compra finalizada');
  }

}
