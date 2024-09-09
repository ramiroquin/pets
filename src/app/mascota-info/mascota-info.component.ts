import { Component, OnInit } from '@angular/core';

export interface MascotaInfo {
  nombre: string;
  raza: string;
  sexo: string;
  nacimiento: string;
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
      { nombre: 'Felipe', nacimiento: '05/10/2010', edad: 11, sexo: 'M', raza: 'Golden Retriever', tutor: 'Ramiro Quinteros' },
      { nombre: 'Luna', nacimiento: '12/06/2015', edad: 8, sexo: 'F', raza: 'Siamés', tutor: 'Ana González' },
      { nombre: 'Rex', nacimiento: '23/03/2018', edad: 6, sexo: 'M', raza: 'Pastor Alemán', tutor: 'Carlos Martínez' },
      { nombre: 'Bella', nacimiento: '01/01/2019', edad: 5, sexo: 'F', raza: 'Bulldog Francés', tutor: 'Laura Fernández' },
      { nombre: 'Max', nacimiento: '15/11/2020', edad: 3, sexo: 'M', raza: 'Beagle', tutor: 'José Pérez' },
      { nombre: 'Mia', nacimiento: '20/08/2016', edad: 7, sexo: 'F', raza: 'Poodle', tutor: 'María López' }
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
