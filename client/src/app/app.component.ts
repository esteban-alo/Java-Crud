import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ModalComponent } from './components/modal/modal.component';
import { Services } from 'src/app/services/services.service';
import { MatDialog } from '@angular/material';
import { ShowUsersComponent } from './views/show-users/show-users.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Java App by @esteban_alo';
  @ViewChild(ShowUsersComponent) message: ShowUsersComponent;
  constructor(
    private service: Services,
    public dialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef
  ) { }

  addUser() {
    this.dialog.open(ModalComponent, {
      disableClose: true,
    }).afterClosed().subscribe(result => {
      this.message.getUsers();
    });
  }
}
