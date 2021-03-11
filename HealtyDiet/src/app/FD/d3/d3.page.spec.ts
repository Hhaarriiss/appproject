import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D3Page } from './d3.page';

describe('D3Page', () => {
  let component: D3Page;
  let fixture: ComponentFixture<D3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
