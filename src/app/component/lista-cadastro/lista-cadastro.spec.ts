import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaCadastro } from './lista-cadastro';

describe('ListaCadastro', () => {
  let component: ListaCadastro;
  let fixture: ComponentFixture<ListaCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCadastro],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaCadastro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
