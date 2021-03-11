import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { L2Page } from './l2.page';

describe('L2Page', () => {
  let component: L2Page;
  let fixture: ComponentFixture<L2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(L2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
