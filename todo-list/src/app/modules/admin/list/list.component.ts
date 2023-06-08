import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../../../service/service.service';
import {User} from '../../../model/User';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  user: User[] = [];

  constructor(private service: ServiceService) {
  }

  ngOnInit(): void {
  }

  getAll() {
    this.service.getAll().subscribe(next => {
      this.user = next;
    });
  }
}
