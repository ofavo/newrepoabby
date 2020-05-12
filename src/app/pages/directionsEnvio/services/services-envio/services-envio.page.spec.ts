import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServicesEnvioPage } from './services-envio.page';

describe('ServicesEnvioPage', () => {
  let component: ServicesEnvioPage;
  let fixture: ComponentFixture<ServicesEnvioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesEnvioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicesEnvioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
