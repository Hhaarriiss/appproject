import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Bbf1Page } from './bbf1.page';

describe('Bbf1Page', () => {
  let component: Bbf1Page;
  let fixture: ComponentFixture<Bbf1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bbf1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Bbf1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
