import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BF3Page } from './bf3.page';

describe('BF3Page', () => {
  let component: BF3Page;
  let fixture: ComponentFixture<BF3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BF3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BF3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
