import { Component, OnInit } from '@angular/core';
import { Unko } from '../unko';
import { UnkoService } from '../unko.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unkos',
  templateUrl: './unkos.component.html',
  styleUrls: ['./unkos.component.css'],
})
export class UnkosComponent implements OnInit {
  public unkos: Unko[] = [];

  constructor(private unkoService: UnkoService, private router: Router) {}

  ngOnInit(): void {
    this.getUnkos();
  }

  public getUnkos(): void {
    this.unkoService.getUnkos().subscribe((res) => {
      if (res.Items) {
        this.unkos = res.Items;
      }
    });
  }

  public onClickRow(unko: Unko): void {
    this.router.navigate([`/unko/${unko.id}`]);
  }

  public search(name: string): void {
    this.unkoService.searchUnkos(name).subscribe((res) => {
      if (res.Items) {
        this.unkos = res.Items;
      }
    });
  }
}
