import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConteinerComponent } from './page-conteiner.component';

describe('PageConteinerComponent', () => {
  let component: PageConteinerComponent;
  let fixture: ComponentFixture<PageConteinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageConteinerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageConteinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
