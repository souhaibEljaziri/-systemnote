import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public url: any;
  constructor(private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(localStorage.getItem("url"));
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

  }
  goBack() {
    this.router.navigateByUrl("/home");
  }

}
