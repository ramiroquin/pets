import { Component, OnInit } from '@angular/core';

export interface MascotaInfo {
  nombre: string;
  raza: string;
  sexo: string;
  nacimiento: Date;
  edad: number;
  tutor: string;
}

@Component({
  selector: 'app-mascota-info',
  templateUrl: './mascota-info.component.html',
  styleUrl: './mascota-info.component.css'
})
export class MascotaInfoComponent implements OnInit {
  petList: MascotaInfo[] = [];
  opacidad: number = 1;
  isChecked: boolean = true;
  backgroundCard: string = '#ffffff';

  ngOnInit(): void {
    this.petList = [
      { nombre: 'Felipe', nacimiento: new Date('2021-09-12'), edad: 11, sexo: 'M', raza: 'Golden Retriever', tutor: 'Ramiro Quinteros' },
      { nombre: 'Luna', nacimiento: new Date('2015-06-12'), edad: 8, sexo: 'F', raza: 'Siamés', tutor: 'Ana González' },
      { nombre: 'Rex', nacimiento: new Date('2018-03-23'), edad: 6, sexo: 'M', raza: 'Pastor Alemán', tutor: 'Carlos Martínez' },
      { nombre: 'Bella', nacimiento: new Date('2019-01-01'), edad: 5, sexo: 'F', raza: 'Bulldog Francés', tutor: 'Laura Fernández' },
      { nombre: 'Max', nacimiento: new Date('2020-11-15'), edad: 3, sexo: 'M', raza: 'Beagle', tutor: 'José Pérez' },
      { nombre: 'Mia', nacimiento: new Date('2016-08-20'), edad: 7, sexo: 'F', raza: 'Poodle', tutor: 'María López' }
    ];
  }

  aumentarEdad(pet: MascotaInfo) {
    pet.edad++;
  }

  cambiarOpacidad(event: any): void {
    this.opacidad = event.target.value;
  }

  OnCheckBoxChange(event: any) {
    this.isChecked = event.target.checked;
  }
  onChangeColor(event: any) {
    this.backgroundCard = event.target.value;
  }
}
