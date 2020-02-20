import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DecadeComponent } from './decade.component';

describe('DecadeComponent', () => {
  let component: DecadeComponent;
  let fixture: ComponentFixture<DecadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecadeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DecadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
