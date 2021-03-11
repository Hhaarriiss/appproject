import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BF1Page } from './bf1.page';

describe('BF1Page', () => {
  let component: BF1Page;
  let fixture: ComponentFixture<BF1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BF1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BF1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
