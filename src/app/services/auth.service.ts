import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor() { }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        if (token) {
            return true;
        }
        return false;
    }

    isAdmin(): boolean {
        const roles = localStorage.getItem('roles');
        if (this.isAuthenticated() && roles.includes('Admin')) {
            return true;
        }
        return false;
    }

    logIn(model): boolean {
        if (model.username === 'Admin' && model.password === 'Admin') {
            localStorage.setItem('token', 'xxx');
            localStorage.setItem('roles', 'Admin');
            localStorage.setItem('name', 'Admin User');
            return true;
        } else if (model.username === 'Guest' && model.password === 'Guest') {
            localStorage.setItem('token', 'xxx');
            localStorage.setItem('roles', 'public');
            localStorage.setItem('name', 'public guest');
            return true;
        }
        return false;
    }
}
