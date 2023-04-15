import { Component } from '@angular/core';
import { Package } from '../package.model';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent {
  packages: Package[] = [
    new Package('Churrasco', 'Churrasco de Picanha', 'https://dd7gu835n6agp.cloudfront.net/wp-content/uploads/2021/08/picanha-na-grelha-889x500.jpg' ),
    new Package('Churrasco', 'Churrasco de Picanha', 'https://dd7gu835n6agp.cloudfront.net/wp-content/uploads/2021/08/picanha-na-grelha-889x500.jpg' )

  ];

}
