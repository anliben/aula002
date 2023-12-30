import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PoPageChangePasswordModule } from '@po-ui/ng-templates';

import { EsqueceuSenhaComponent } from './esqueceu-senha.component';

describe('EsqueceuSenhaComponent', () => {
  let component: EsqueceuSenhaComponent;
  let fixture: ComponentFixture<EsqueceuSenhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        PoPageChangePasswordModule
      ],
      declarations: [ EsqueceuSenhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsqueceuSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
