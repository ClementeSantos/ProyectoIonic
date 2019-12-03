import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentesPage } from './componentes.page';

describe('ComponentesPage', () => {
  let component: ComponentesPage;
  let fixture: ComponentFixture<ComponentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
