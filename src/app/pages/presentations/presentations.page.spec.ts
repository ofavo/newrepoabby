import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresentationsPage } from './presentations.page';

describe('PresentationsPage', () => {
  let component: PresentationsPage;
  let fixture: ComponentFixture<PresentationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresentationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
