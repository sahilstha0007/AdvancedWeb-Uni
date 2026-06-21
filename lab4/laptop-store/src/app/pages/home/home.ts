import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';
import { LaptopService } from '../../servers/latop.service';
import { Laptop } from '../../models/latop';
import { firstValueFrom } from 'rxjs';
import { UppercaseBrandPipe } from '../../pipes/uppercase-brand.pipes';

@Component({
  standalone: true,
  imports: [CommonModule, UppercaseBrandPipe],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './home.html',
})
export class HomePage {
  laptops: Laptop[] = [];

  constructor(
    private laptopService: LaptopService,
    private router: Router,
  ) {
    this.loadLaptops();
  }

  async loadLaptops() {
    this.laptops = await firstValueFrom(this.laptopService.laptops$);
  }
  viewDetails(id: number) {
    this.router.navigate(['/laptop', id]);
  }
}
