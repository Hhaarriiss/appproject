import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dd2Page } from './dd2.page';

describe('Dd2Page', () => {
  let component: Dd2Page;
  let fixture: ComponentFixture<Dd2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dd2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dd2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
