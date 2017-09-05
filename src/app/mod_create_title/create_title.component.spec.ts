import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTitleComponent } from './create_title.component';

describe('CreateTitleComponent', () => {
  let component: CreateTitleComponent;
  let fixture: ComponentFixture<CreateTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
