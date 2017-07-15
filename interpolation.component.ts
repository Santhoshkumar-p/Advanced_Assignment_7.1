import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

const template: string = require('./interpolation.component.html');

@Component({
    selector: 'connector',
    template: '<ul><li *ngFor="let user of users">
	            {{user.name}} {{user.dob <=27}}
	</ul> 
	
	<div><span>{{user.name}}</span>
<span>{{user.name}}</span>
<span  [style.background]="'lightblue'">{{user.name}}</span>
<span>{{user.name}}</span>
<span>{{user.name}}</span>	</div>
	
	'
    directives: [ROUTER_DIRECTIVES]
})

export class InterPolationComponent implements OnInit {
    users: any = [];

    constructor() {
        this.users = [
            {
                "name": "Sachin Tendulkar",
                "dob": "24 April 1973"
            },
            {
                "name": "Yuvraj Singh",
                "dob": "12 Dec 1981"
            },
			 {
                "name": "MS Dhoni",
                "dob": "7 july 1981"
            },
            {
                "name": "Micheal Jordan",
                "dob": "17 feb 1963"
            },
			 {
                "name": "Micheal clarke",
                "dob": "2 April 1981"
            },
            {
                "name": "Tim Cook",
                "dob": "2 Aug 1975"
            }
        ];
    }

    /**
     * [ngOnInit Loading initial configuration]
    */
    ngOnInit() {
        
    }
}
