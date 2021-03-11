import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Bbf2Page } from './bbf2.page';

describe('Bbf2Page', () => {
  let component: Bbf2Page;
  let fixture: ComponentFixture<Bbf2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bbf2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Bbf2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
