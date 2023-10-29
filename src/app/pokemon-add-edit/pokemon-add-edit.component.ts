import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PokemonService } from '../services/pokemon.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-pokemon-add-edit',
  templateUrl: './pokemon-add-edit.component.html',
  styleUrls: ['./pokemon-add-edit.component.css']
})
export class PokemonAddEditComponent {
  pokemonForm: FormGroup;

  superPower: string[] = [
    'Punch',
    'Kick',
    'Fire',
    'Water',
    'Flash',
    'Wind',
  ];
  color: string[] = [
    'Red',
    'Green',
    'Blue',
    'Purple',
    'Orange'
  ];
  habitat: string[] = [
    'Ocean',
    'Land',
    'Forest',
    'Volcano Mountain'
  ];
  listAbility: string[] = [];

  onEnter() {
    this.addThing();
  }

  constructor(
    private _fb: FormBuilder,
    private _pokemonService: PokemonService,
    private _dialogRef: DialogRef<PokemonAddEditComponent>
  ) {
    this.pokemonForm = this._fb.group({
      charName: '',
      nickName: '',
      ability: '',
      superPower: '',
      color: '',
      habitat: ''
    })
  }

  onFormSubmit() {
    if (this.pokemonForm.valid) {
      this._pokemonService.addPokemon(this.pokemonForm.value)
        .subscribe({
          next: (val: any) => {
            alert('Successfully added pokemon!')
            this._dialogRef.close();
            this.generatePokemonCharacter();
          },
          error: ((err: any) => {
            console.error(err);
          })
        })
    }
  }

  addThing() {
    if (this.listAbility.length < 3) {
      this.listAbility.push(this.pokemonForm.value.ability);
      this.pokemonForm.value.ability='';
    } else {
      console.log('max 3 abilities')
      alert('Maximum ability 3 item!')
    }
  }

  generatePokemonCharacter() {
    let data = {
      "prompt_text": `${this.pokemonForm.value.charName} ${this.pokemonForm.value.nickName} ${this.pokemonForm.value.ability} ${this.pokemonForm.value.superPower} ${this.pokemonForm.value.color} ${this.pokemonForm.value.habitat}`,
      "negative_prompt_text": "",
      "media_type": "image",
      "model_id": 1,
      "width": 1024,
      "height": 1024
    };
    
    console.log(data, ' <<data');
    this._pokemonService.generatePokemon(data)
      .subscribe({
        next: (res: any) => {
          console.log(res, ' <<res');
        },
        error: (err: any) => {
          console.error(err);
        }
      })
  }
}
