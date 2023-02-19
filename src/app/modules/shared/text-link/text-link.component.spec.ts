import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLinkComponent } from './text-link.component';

describe('TextLinkComponent', () => {
  let component: TextLinkComponent;
  let fixture: ComponentFixture<TextLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
