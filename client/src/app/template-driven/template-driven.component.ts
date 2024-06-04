import {Component, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {CharactersService} from "../characters.service";

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss'
})

export class TemplateDrivenComponent {
  public username: string = '';
  @ViewChild('userForm') userFormData!: NgForm;
  public users: any = [];
  constructor(private characterService: CharactersService) {
  }

  showUsers() {
    this.characterService.showUsers().subscribe((info: any) => {
      const {data: {users}} = info;
      this.users = users;
      this.resetData();
    })
  }
  ngOnInit() {
    this.showUsers();
  }

  handleFormSubmit() {
    const userData = this.userFormData.value;
    if (userData.id) {
      this.characterService.updateUser(userData).subscribe(() => {
        //this.showUsers();

      });

    } else {
      this.characterService.addUser(userData).subscribe(() => {
        this.showUsers();
        this.resetData();
      });
    }
  }

  deleteUser(userId: string) {
    console.log(userId);
    this.characterService.deleteUser(userId).subscribe(() => {
        this.showUsers();
    })
  }

  editUser(userId: string) {
    this.characterService.getUser(userId).subscribe((userData: any) => {
      if (userData && userData.data && userData.data.user) {
        const {data : {user}} = userData
        console.log(user[0])
        this.userFormData.form.setValue({
          id: user[0]._id,
          uName: user[0].name,
          userDetails: {
            uAge: user[0].age,
            uEmail: user[0].email
          }
        })
      }
    })
  }

  resetData() {
    this.userFormData.reset();
  }
}
