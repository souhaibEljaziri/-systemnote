import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.page.html',
  styleUrls: ['./guest.page.scss'],
})
export class GuestPage implements OnInit {
  public guest: string;
  public url: any;
  constructor(private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(localStorage.getItem("url"));
    this.guest = this.activatedRoute.snapshot.paramMap.get('id');

  }
  goBack() {
    this.router.navigateByUrl("/login");
  }

}
