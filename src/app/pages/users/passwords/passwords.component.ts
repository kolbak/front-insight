import { Component, OnInit } from '@angular/core';

export interface Password {
    URL: string,
    password: string,
    safety: string[],
    showPassword: boolean
}

@Component({
  selector: 'ngx-proxy',
  templateUrl: './passwords.component.html',
  styleUrls: ['./passwords.component.scss']
})
export class PasswordsComponent implements OnInit {

    URLs: string[] = [
        'https://mail.google.com', 
        'https://outlook.office365.com', 
        'https://github.com', 
        'https://trello.com',
        'https://idroo.com',
        'https://app.zeplin.io',
        'https://icons8.com/'
    ];
        
    passwords: Password[] = [];
    allPasswords: Password[] = [];

    makePassword(): string  {
        var variants = "0123456789" + "abcdefghijklmnopqrstuvwxyz" + "abcdefghijklmnopqrstuvwxyz".toLocaleUpperCase();
        let result = '';
        let amount = 5 + Math.floor(Math.random()*10)

        for( var i = 0; i < amount; i++ )
            result += variants.charAt(Math.floor(Math.random() * variants.length));

        return result;
    }

    ngOnInit(): void {
        let password: string;

        for (let i = 0; i < this.URLs.length; i++) {
            password = this.makePassword();
            
            this.passwords.push({
                URL: this.URLs[i], 
                password: password,
                safety: this.isLegalPassword(password),
                showPassword: false
            });

        }
        this.allPasswords = this.passwords 
    }  

    getInputType(password) {
        return !password.showPassword ? 'password' : 'text';
    }

    toggleShowPassword(password) {
        password.showPassword = !password.showPassword;
    }

    isLegalPassword(pass: string): string[] {
        let result: string[] = [];

        if (!pass.match(".*[A-Z].*")) result.push('Не содержит заглавных букв');
        if (!pass.match(".*[a-z].*")) result.push('Не содержит строчных букв');
        if (!pass.match(".*\\d.*")) result.push('Не содержит цифр');
        // if (!pass.match(".*[~!.......].*")) result.push('Пароль слишком короткий');'
        if (pass.length < 8) result.push('Пароль слишком короткий');
        if (this.passwords.filter(p => p.password == pass).length > 1) result.push('Пароль повтояется');

        return result;  
    }

    filterPasswords() {
        this.passwords = this.allPasswords.filter(pass => pass.URL.match("^.*" + (document.querySelector('#searchPass') as HTMLInputElement).value + ".*$"));
    }
}
