import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PokemonAddEditComponent } from './pokemon-add-edit/pokemon-add-edit.component';
import { PokemonService } from './services/pokemon.service';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  nick_name: string;
  ability: string;
  super_power: string;
  color: string;
  habitat: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pokemon APP';
  displayedColumns: string[] = ['position', 'charName', 'nickName', 'ability', 'superPower', 'color', 'habitat'];
  dataSource!: MatTableDataSource<any>;
  // listPokemon!: [];
  listPokemon: any[] = [];

  constructor(
    private _dialog: MatDialog,
    private _pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.getPokemonList();
  }

  openAddEditPokemonForm() {
    this._dialog.open(PokemonAddEditComponent);
  }

  getPokemonList() {
    this._pokemonService.getPokemon()
      .subscribe({
        next: (res: any) => {
          this.dataSource = res;
          this.listPokemon = res;
          console.log(this.listPokemon, ' <<list pokemon')
          // this.dataSource.sort = this.sort;
          // this.dataSource.paginator = this.paginator;
        },
        error: (err: any) => {
          console.error(err);
        }
      })
  }
}