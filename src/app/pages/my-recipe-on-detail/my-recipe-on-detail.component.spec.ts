import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRecipeOnDetailComponent } from './my-recipe-on-detail.component';

describe('MyRecipeOnDetailComponent', () => {
  let component: MyRecipeOnDetailComponent;
  let fixture: ComponentFixture<MyRecipeOnDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyRecipeOnDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyRecipeOnDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
