import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dd3Page } from './dd3.page';

describe('Dd3Page', () => {
  let component: Dd3Page;
  let fixture: ComponentFixture<Dd3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dd3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dd3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
