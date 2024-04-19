import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeOnDetailComponent } from './recipe-on-detail.component';

describe('RecipeOnDetailComponent', () => {
  let component: RecipeOnDetailComponent;
  let fixture: ComponentFixture<RecipeOnDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeOnDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipeOnDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
