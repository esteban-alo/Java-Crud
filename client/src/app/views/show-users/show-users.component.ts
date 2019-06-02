import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Services } from 'src/app/services/services.service';
import { MatTableDataSource, MatDialog, MatSnackBar, MatPaginator } from '@angular/material';
import { User } from 'src/app/models/User';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowUsersComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['name', 'age', 'birthDate', 'actions'];

  constructor(
    private service: Services,
    public dialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers().subscribe(
      response => {
        this.dataSource.data = response;
        this.changeDetectorRefs.detectChanges();
    });
  }

  editUser(user: User) {
    this.dialog.open(ModalComponent, {
      data: user,
      disableClose: true,
    }).afterClosed().subscribe(result => {
      this.getUsers();
    });
  }

  deleteUser(id: number) {
    this.service.deleteUser(id).subscribe(
      response => {
        this.changeDetectorRefs.detectChanges();
    });
   }

   applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
