import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DestinationsUserPage } from './destinations-user.page';

describe('DestinationsUserPage', () => {
  let component: DestinationsUserPage;
  let fixture: ComponentFixture<DestinationsUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationsUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DestinationsUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
