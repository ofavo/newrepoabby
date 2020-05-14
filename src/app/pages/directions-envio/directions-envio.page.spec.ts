import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DirectionsEnvioPage } from './directions-envio.page';

describe('DirectionsEnvioPage', () => {
  let component: DirectionsEnvioPage;
  let fixture: ComponentFixture<DirectionsEnvioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectionsEnvioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DirectionsEnvioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
