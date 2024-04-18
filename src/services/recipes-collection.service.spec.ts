import { TestBed } from '@angular/core/testing';

import { RecipesCollectionService } from './recipes-collection.service';

describe('RecipesCollectionService', () => {
  let service: RecipesCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
