import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanticHtmlComponent } from './semantic-html.component';

describe('SemanticHtmlComponent', () => {
  let component: SemanticHtmlComponent;
  let fixture: ComponentFixture<SemanticHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemanticHtmlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SemanticHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
