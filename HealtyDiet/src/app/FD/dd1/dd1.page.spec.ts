import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dd1Page } from './dd1.page';

describe('Dd1Page', () => {
  let component: Dd1Page;
  let fixture: ComponentFixture<Dd1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dd1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dd1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
