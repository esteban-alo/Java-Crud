import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { User } from 'src/app/models/User';
import { Services } from 'src/app/services/services.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  public createUserForm: FormGroup;
  public user: User = new User();

  public title = 'Crear Usuario';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: Services,
    private dialog: MatDialogRef<ModalComponent>,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
  ) {
    if (this.data != null) {
      this.title = 'Editar Usuario';
      this.user.id = this.data.id;
      this.user.name = this.data.name;
      this.user.birthdate = new Date(this.data.birthDate) ;
      this.user.age = this.data.age;
    }
    this.createUserForm = this.formBuilder.group(
      {
        Name: [{ value: '', disabled: false }, [Validators.required]],
        Birthdate: [{ value: '', disabled: false }, [Validators.required]],
        Age: [{ value: '', disabled: false }, [Validators.required]]
      });
  }

  ngOnInit() {
  }

  saveClick() {
    const userObject = {
        id: this.user.id,
        name: this.createUserForm.value.Name,
        birthDate: this.createUserForm.value.Birthdate,
        age: this.createUserForm.value.Age
      };
    if (this.data != null) {
      this.service.updateUser(userObject).subscribe(
        response => {
          if (response) {
            this.snackBarMessage('Usuario actualizado correctamente');
            this.cancelClick();
          }
        }, error => {
          this.snackBarMessage('No se pudo actualizar usuario');
        });
    } else {
      this.service.createUser(userObject).subscribe(
        response => {
          if (response) {
            this.snackBarMessage('Usuario creado correctamente');
            this.cancelClick();
          }
        }, error => {
          this.snackBarMessage('No se pudo crear usuario');
        });
    }
  }

  cancelClick() {
    this.dialog.close();
  }

  snackBarMessage(message: string) {
    this.snackBar.open(message, null, {
      duration: 2000,
    });
  }

}
