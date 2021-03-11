import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { L3Page } from './l3.page';

describe('L3Page', () => {
  let component: L3Page;
  let fixture: ComponentFixture<L3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(L3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
