import { Component, Input } from '@angular/core';
@Component({
  standalone: true,
  selector: 'app-feature',
  template: `
<div class="feature-card">
<h3>{{ featureTitle }}</h3>
<p>{{ featureDesc }}</p>
</div>`,
  styles: [`
    .feature-card { border: 1px solid #ccc; padding: 10px; margin: 5px; border- radius:5px;
}
`]
})
export class Feature {
  @Input() featureTitle!: string;
  @Input() featureDesc!: string;
}
