import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Help',
      url: '/folder/Help',
      iframeUrl: 'https://systemnoteapp.blogspot.com/p/help.html'
    },
    {
      title: 'A propos',
      url: '/folder/A propos',
      iframeUrl: 'https://systemnoteapp.blogspot.com/p/about-us.html'
    },
    {
      title: 'System Note Book',
      url: '/folder/System Note Book',
      iframeUrl: 'https://systemnoteapp.blogspot.com/p/system-book.html'
    },
    {
      title: 'Presentation Book',
      url: '/folder/Presentation Book',
      iframeUrl: 'https://systemnoteapp.blogspot.com/p/presentation-book.html'
    },
    {
      title: 'Training',
      url: '/folder/Training',
      iframeUrl: 'https://systemnoteapp.blogspot.com/p/trainings.html'
    },
    {
      title: 'Stories Collection',
      url: '/folder/Stories Collection',
      iframeUrl: 'https://systemnoteapp.blogspot.com/p/stories-collection.html'

    },
    {
      title: 'Books Collection',
      url: '/folder/Books Collection',
      iframeUrl: 'https://systemnoteapp.blogspot.com/p/books-collections.html'

    },
    {
      title: 'Films Collection',
      url: '/folder/Films Collection',
      iframeUrl: 'https://systemnoteapp.blogspot.com/p/films-collection.html'

    },
    {
      title: 'Motivation Videos',
      url: '/folder/Motivation Videos',
      iframeUrl: 'https://systemnoteapp.blogspot.com/p/motivation-videos.html'

    },
    {
      title: 'Networker Legende',
      url: '/folder/Networker Legende',
      iframeUrl: 'https://systemnoteapp.blogspot.com/p/networkers-legende.html'

    },
    {
      title: 'Presonnel devlopement',
      url: '/folder/Presonnel devlopement',
      iframeUrl: 'https://systemnoteapp.blogspot.com/p/personnel-devlopement.html'

    }, {
      title: 'Social Media Links',
      url: '/folder/Social Media Links',
      iframeUrl: 'https://systemnoteapp.blogspot.com/p/social-media-links.html'
    },
    {
      title: 'My Account',
      url: '/folder/My Account',
      iframeUrl: 'https://arvea-nature.net/login'

    }
  ];
  public labels = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  path: string;
  selectedRout(data) {
    localStorage.setItem("url", data.iframeUrl)
  }
  ngOnInit() {

    const path = window.location.pathname.split('folder/')[1];
    this.path = window.location.pathname.split('folder/')[1];
    if (!this.path) {
      this.path = window.location.pathname.split('/h')[1];
    }
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
