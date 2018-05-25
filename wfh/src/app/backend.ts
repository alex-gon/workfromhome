import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Entry } from './shared/entry.model';

export class InMemoryEntryService implements InMemoryDbService {
    createDb() {
        let users = [
            {
                id: 1,
                name: "JJ Abrams",
                username: "jdog",
                password: "password123",
                entries:
                [
                    {
                        date:"May 22, 2018",
                        morning_didYesterday: "Fixed Bug",
                        morning_doingToday:"Build feature",
                        morning_notes:"How do I build feature?",
                        evening_didToday:"Built feature!",
                        evening_notes:"nothing"
                    },
                    {
                        date:"May 23, 2018",
                        morning_didYesterday: "worked",
                        morning_doingToday:"doing work",
                        morning_notes:"na",
                        evening_didToday:"work",
                        evening_notes:"im good "
                    }
                ], 
                
                
            
            }
        ];
        return { users };
    }
}
