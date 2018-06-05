import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Entry } from './shared/entry.model';

export class InMemoryEntryService implements InMemoryDbService {
    createDb() {
        let date = new Date()
        let users = [
            {
                id: 1,
                name: "JJ Abrams",
                username: "jdog",
                password: "password123",
                entries:
                [
                    {
                        date:"Tue May 22 2018",
                        morning_startTime: "8:21 AM",
                        morning_didYesterday: "Fixed Bug",
                        morning_doingToday:"Build feature",
                        morning_notes:"How do I build feature?",
                        evening_endTime: "5:21 PM",
                        evening_didToday:"Built feature!",
                        evening_notes:"nothing"
                    },
                    {
                        date:"Wed May 23 2018",
                        morning_startTime: "7:30 AM",
                        morning_didYesterday: "worked",
                        morning_doingToday:"doing work",
                        morning_notes:"na",
                        evening_endTime: "1:00 PM",
                        evening_didToday:"work",
                        evening_notes:"im good "
                    }
                ], 
            },
            {
                id: 2,
                name: "Alex Stevens",
                username: "alex",
                password: "alex",
                entries: [
                    {
                        date:"Tue May 22 2018",
                        morning_startTime: "8:30 AM",
                        morning_didYesterday: "planning, coding, reading",
                        morning_doingToday:"taking nap, eating burito",
                        morning_notes:"How do I build feature?",
                        evening_endTime: "4:00 PM",
                        evening_didToday:"wrotes some cool tests",
                        evening_notes:"waiting for x story to be done"
                        
                    },
                    {
                        date:"Sat Jun 02 2018",
                        morning_startTime: "7:55 AM",
                        morning_didYesterday: "entry page functionality, and slack integration",
                        morning_doingToday:"manager demo, and fortnightly training",
                        morning_notes:"no blockers"
                    },
                    {
                        date:"Sun Jun 03 2018",
                        morning_startTime: "7:55 AM",
                        morning_didYesterday: "entry page functionality, and slack integration",
                        morning_doingToday:"manager demo, and fortnightly training",
                        morning_notes:"no blockers"
                    },
                    {
                        date:"Mon Jun 04 2018",
                        morning_startTime: "7:55 AM",
                        morning_didYesterday: "entry page functionality, and slack integration",
                        morning_doingToday:"manager demo, and fortnightly training",
                        morning_notes:"no blockers"
                    },
                    {
                        date:"Tue Jun 05 2018",
                        morning_startTime: "7:55 AM",
                        morning_didYesterday: "entry page functionality, and slack integration",
                        morning_doingToday:"manager demo, and fortnightly training",
                        morning_notes:"no blockers"
                    },
                    {
                        date:"Wed Jun 06 2018",
                        morning_startTime: "7:55 AM",
                        morning_didYesterday: "entry page functionality, and slack integration",
                        morning_doingToday:"manager demo, and fortnightly training",
                        morning_notes:"no blockers"
                    }
                ]
            }
        ];
        let entries = [
            {
                userId: "1",
                full_name: "JJ Abrams",
                time_started: date,
                time_finished: date,
                did_yesterday: "messages",
                doing_today: "search",
                did_today: "onononononon",
                start_notes: "fasdf",
                end_notes: "lambda",
                hours_worked: 8
            },
            {
                userId: "2",
                full_name: "Gonzalo Alexander Stevens",
                time_started: date,
                time_finished: date,
                did_yesterday: "planning, coding, reading",
                doing_today: "taking nap, eating burito",
                did_today: "moon walk",
                start_notes: "How do I build feature?",
                end_notes: "everything is good",
                hours_worked: 8
                
            },
            {
                userId: "2",
                full_name: "Gonzalo Alexander Stevens",
                time_started: date,
                time_finished: date,
                did_yesterday: "something",
                doing_today: "good work",
                did_today: "tree climb",
                start_notes: "hope",
                end_notes: "good",
                hours_worked: 8
            },
            {
                userId: "2",
                full_name: "Gonzalo Alexander Stevens",
                time_started: date,
                time_finished: date,
                did_yesterday: "code",
                doing_today: "code",
                did_today: "code",
                start_notes: "code",
                end_notes: "code",
                hours_worked: 8
            }
        ]
        return { users, entries };
    }
}
