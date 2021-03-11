import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ll1Page } from './ll1.page';

describe('Ll1Page', () => {
  let component: Ll1Page;
  let fixture: ComponentFixture<Ll1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ll1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ll1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
