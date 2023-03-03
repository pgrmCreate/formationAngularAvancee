import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailAvisComponent } from './product-detail-avis.component';

describe('ProductDetailAvisComponent', () => {
  let component: ProductDetailAvisComponent;
  let fixture: ComponentFixture<ProductDetailAvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailAvisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
