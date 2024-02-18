import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeListComponent } from './page-home-list.component';

describe('PageHomeListComponent', () => {
  let component: PageHomeListComponent;
  let fixture: ComponentFixture<PageHomeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHomeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageHomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
