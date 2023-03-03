import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailTechComponent } from './product-detail-tech.component';

describe('ProductDetailTechComponent', () => {
  let component: ProductDetailTechComponent;
  let fixture: ComponentFixture<ProductDetailTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
