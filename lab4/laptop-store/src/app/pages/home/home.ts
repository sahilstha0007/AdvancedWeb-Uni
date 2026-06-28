import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';
import { LaptopService } from '../../servers/latop.service';
import { Laptop } from '../../models/latop';
import { firstValueFrom } from 'rxjs';
import { UppercaseBrandPipe } from '../../pipes/uppercase-brand.pipes';
import { Brand } from '../../components/brand/brand';
import { Feature } from '../../components/feature/feature';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [CommonModule, UppercaseBrandPipe, Brand, Feature],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './home.html',
})
export class HomePage {
  laptops: Laptop[] = [];

  constructor(
    private laptopService: LaptopService,
    private router: Router,
    private meta: Meta,
    private title: Title,
  ) {
    this.loadLaptops();

    this.title.setTitle('Laptop Store -Home');
    this.meta.updateTag({ name: 'description', content: 'But the best laptops online!i' });
  }

  async loadLaptops() {
    this.laptops = await firstValueFrom(this.laptopService.laptops$);
  }
  viewDetails(id: number) {
    this.router.navigate(['/laptop', id]);
  }
}
