import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Bff3Page } from './bff3.page';

describe('Bff3Page', () => {
  let component: Bff3Page;
  let fixture: ComponentFixture<Bff3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bff3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Bff3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
