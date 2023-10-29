import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonAddEditComponent } from './pokemon-add-edit.component';

describe('PokemonAddEditComponent', () => {
  let component: PokemonAddEditComponent;
  let fixture: ComponentFixture<PokemonAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonAddEditComponent]
    });
    fixture = TestBed.createComponent(PokemonAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
