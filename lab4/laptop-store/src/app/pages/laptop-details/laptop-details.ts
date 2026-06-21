import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LaptopService } from '../../servers/latop.service';
import { Laptop } from '../../models/latop';
import { firstValueFrom } from 'rxjs';
import { UppercaseBrandPipe } from '../../pipes/uppercase-brand.pipes';
@Component({
  standalone: true,
  imports: [CommonModule, UppercaseBrandPipe, RouterLink],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './laptop-details.html',
})
export class LaptopDetailsPage {
  laptop?: Laptop;
  constructor(
    private route: ActivatedRoute,
    private service: LaptopService,
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadLaptop(id);
  }
  async loadLaptop(id: number) {
    const laptops = await firstValueFrom(this.service.laptops$);
    this.laptop = laptops.find((l) => l.id === id);
  }
}
