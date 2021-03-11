import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ll3Page } from './ll3.page';

describe('Ll3Page', () => {
  let component: Ll3Page;
  let fixture: ComponentFixture<Ll3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ll3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ll3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
