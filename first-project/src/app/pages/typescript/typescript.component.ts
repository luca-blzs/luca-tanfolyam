import { Component } from '@angular/core';

type Armadillos = {
  hasArmor: boolean;
};

type Tatu = Armadillos & {
  name: string;
  age?: number;
};

@Component({
  selector: 'app-typescript',
  standalone: true,
  imports: [],
  templateUrl: './typescript.component.html',
  styleUrl: './typescript.component.scss',
})
export class TypescriptComponent {
  constructor() {
    let variable = !!5;
    const something = !'';
    let bool = true;
    const tatu: Tatu = {
      name: '',
      hasArmor: true,
    };

    const otherThing = tatu.hasArmor && !tatu.age ? 100 : 50;
    const tatus: Tatu[] = [
      {
        name: 'Pityu',
        hasArmor: true,
      },
      {
        name: 'Sanyi',
        hasArmor: true,
        age: 6,
      },
      {
        name: 'Lujza',
        hasArmor: false,
        age: 0,
      },
    ];

    let newTatus = tatus.filter((tatu) => {
      return !tatu.hasArmor;
    });

    newTatus = tatus.map((tatu) => {
      return {
        hasArmor: tatu.hasArmor,
        name: 'Juli',
        age: tatu.age ? tatu.age * 2 : 0,
      };
    });

    newTatus.forEach((tatu) => {
      console.log(tatu.name);
      console.log(tatu.hasArmor);
      console.log(tatu.age);
    });

    for (let index = 0; index < newTatus.length; index++) {
      console.log(newTatus[index]);
    }
  }
}
