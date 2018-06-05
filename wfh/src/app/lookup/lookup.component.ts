import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { EntryService } from '../shared/entry.service';
import { User } from '../shared/user.model';
import { Entry } from '../shared/Entry.model';
import { AutocompleteFilterEmployees } from '../auto-complete/autocomplete.component';


@Component({
    templateUrl: 'lookup.component.html',
    styleUrls: ['lookup.component.css']
})

export class LookupComponent implements OnInit {
    users: User[]
    usersNames: string[]
    selectedUser: User
    selectedUserName: string
    date: Date;
    dateString: string
    entry: Entry
    entries: Entry[]

    constructor(private userService: UserService,
                private entryService: EntryService) { }

    ngOnInit() {
        this.userService.getUsers().then(users => { this.users = users })
        this.entryService.getEntries().then(entries => {this.entries = entries})
    }


    receiveEmployee($event) {
        this.selectedUserName = $event
        if (this.users) {
            this.selectedUser = this.users.find(u => u.name == this.selectedUserName)
        }
        this.getEntries()
    }

    receiveDate($event) {
        this.date = $event;
        this.getEntries()
    }

    getEntries() {
    //     if (this.selectedUser && this.date) {
    //         this.entry = this.selectedUser.entries.find(entry => entry.date == this.date.toDateString())
    //         if (!this.entry) {
    //             this.entry = {
    //                 date: this.date.toDateString(),
    //                 morning_startTime: "--",
    //                 morning_didYesterday: "--",
    //                 morning_doingToday: "--",
    //                 morning_notes: "--",
    //                 evening_endTime: "--",
    //                 evening_didToday: "--",
    //                 evening_notes: "--"
    //             }
    //         }
    //     }
    }
}