import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Unko } from '../unko';
import { UnkoService } from '../unko.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-unko-detail',
  templateUrl: './unko-detail.component.html',
  styleUrls: ['./unko-detail.component.css'],
})
export class UnkoDetailComponent {
  public unko?: Unko;

  constructor(
    private route: ActivatedRoute,
    private unkoService: UnkoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getUnko();
  }

  getUnko(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.unkoService.getUnko(id).subscribe((res) => {
      if (res.Items && res.Items.length) {
        this.unko = res.Items[0];
      }
    });
  }

  // save(): void {
  //   if (this.unko) {
  //     this.unkoService.updateHero(this.unko);
  //     this.goBack();
  //   }
  // }

  goBack(): void {
    this.location.back();
  }
}
