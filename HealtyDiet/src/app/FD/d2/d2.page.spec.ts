import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D2Page } from './d2.page';

describe('D2Page', () => {
  let component: D2Page;
  let fixture: ComponentFixture<D2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
