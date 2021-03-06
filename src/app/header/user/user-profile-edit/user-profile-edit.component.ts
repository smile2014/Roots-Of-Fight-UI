import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../service/authentication.service";


@Component({
    selector: 'app-user-profile-edit',
    templateUrl: './user-profile-edit.component.html',
    styleUrls: [ './user-profile-edit.component.sass' ]
})
export class UserProfileEditComponent implements OnInit {

    editForm: FormGroup;

    firstName: string;
    lastName: string;
    email: string;
    address: string = null;
    city: string;
    state: string;
    zipcode: string;

    constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    }

    ngOnInit() {

        this.editForm = this.formBuilder.group({
            'firstName': [ '', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(24)
            ] ],
            'lastName': [ '', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(24)
            ] ],
            'address': [ '', [
                Validators.required
            ] ],
            'city': [ '', [
                Validators.required
            ] ],
            'state': [ '', [
                Validators.required
            ] ],
            'zipcode': [ '', [
                Validators.required
            ] ],
            'email': [ '', [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}" +
                    "~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9]" +
                    "(?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ] ]
            // 'currentPassword': ['', [
            //     Validators.required,
            // ]],
            // 'newPassword': ['', [
            //     Validators.required,
            //   Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
            // ]],
            // 'repeatNewPassword': ['',
            //     Validators.required,
            //   Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
            // ],
            // 'dobMonth': ['', [
            //     Validators.required
            // ]],
            // 'dobDate': ['', [
            //   Validators.required
            // ]],
            // 'dobYear': ['', [
            //   Validators.required
            // ]]
        });

        this.authService.getUserProfile()
            .subscribe(
                (data) => {
                    console.log(data);
                        this.firstName = data.firstName;
                        this.lastName = data.lastName;
                        this.email = data.email;
                        this.address = data.address;
                        this.city = data.city;
                        this.state = data.state;
                }
            )
    }

    // onUpdate() {
    //   if(this.user) {
    //       this.authService.updateUserProfile(this.user)
    //           .subscribe(
    //               result => console.log(result)
    //           );
    //       this.user = null;
    //   } else {
    //
    //   }
    // }


}