import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public processing = false;
    public passwordVisible = false;


    public form: FormGroup;

    constructor(
        private modalService: NzModalService
    ) {
    }

    ngOnInit(): void {
        this.form = new FormGroup({
            username: new FormControl("admin", {
                validators: [
                    Validators.required
                ]
            }),
            password: new FormControl("1234", {
                validators: [
                    Validators.required
                ]
            })
        })
    }

    public async login() {
        this.form.markAsTouched();

        Object.values(this.form.controls).forEach(control => {
            if (control.invalid) {
                control.markAsDirty();
                control.updateValueAndValidity({onlySelf: true});
            }
        });

        if (this.form.invalid) {
            return;
        }

        this.processing = true;

        await new Promise<void>((resolve, reject) => {
            console.log(1);
            resolve()
        })

        await new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        })
            .then(() => {
                this.modalService.success({
                    nzTitle: 'Login Success',
                    nzContent: 'Welcome to admin panel'
                })
                console.log(2);
            })
            .catch(() => {
                this.modalService.error({
                    nzTitle: 'Login Failed',
                    nzContent: 'Username or password is incorrect'
                })
                console.log(2);
            });

        console.log(3);

        this.processing = false;
    }
}
