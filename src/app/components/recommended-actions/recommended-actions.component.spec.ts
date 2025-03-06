import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedActionsComponent } from './recommended-actions.component';

describe('RecommendedActionsComponent', () => {
  let component: RecommendedActionsComponent;
  let fixture: ComponentFixture<RecommendedActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendedActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
