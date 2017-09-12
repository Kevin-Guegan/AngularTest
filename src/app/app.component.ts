import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/*export class AppComponent {
  title = 'Angular Calculette App';
}*/

export class AppComponent implements OnInit {
    constructor(){}

    title = 'Angular Calculette App';
    valeur1 = Math.floor(Math.random() * 99);
    valeur2 = Math.floor(Math.random() * 99) - this.valeur1;
    totalWinpoint = 0;
    totalLoosepoint = 0;
    Operation = '+';
    OperationArray = ['+', '-', 'x'];

    result = this.valeur1 + this.valeur2;

    ngOnInit() {

    }

    myFunc(paramVal) {
        if (paramVal === this.result) {
            this.valeur1 = Math.floor( Math.random() * 99 );
            this.valeur2 = Math.floor( 1 + Math.random() * (99 - this.valeur1) );
            this.result = this.valeur1 + this.valeur2;
            this.totalWinpoint += 1;
        }else {
            this.totalLoosepoint += 1;
        }
    }

    changeOperation(paramOp) {
        switch (paramOp) {
            case ('+'):
                this.Operation = '+';
                this.result = this.valeur1 + this.valeur2;
                while (this.result > 100 || this.result < 0) {
                    this.valeur1 = Math.floor(Math.random() * 99);
                    this.valeur2 = Math.floor( 1 + Math.random() * (99 - this.valeur1) );
                    this.result = this.valeur1 + this.valeur2;
                }
            break;
            case ('-'):
                this.Operation = '-';
                this.result = this.valeur1 - this.valeur2;
                while (this.result > 100 || this.result < 0) {
                    this.valeur1 = Math.floor(Math.random() * 99);
                    this.valeur2 = Math.floor( 1 + Math.random() * (99 - this.valeur1) );
                    this.result = this.valeur1 - this.valeur2;
                }
            break;

            case ('x'):
                this.Operation = 'x';
                this.valeur1 = Math.floor(Math.random() * 99);
                this.valeur2 = Math.floor( 1 + Math.random() * (99 - this.valeur1) );
                this.result = this.valeur1 * this.valeur2;
                while (this.result > 100 || this.result < 0) {
                    this.valeur1 = Math.floor(Math.random() * 99);
                    this.valeur2 = Math.floor( 1 + Math.random() * (99 - this.valeur1) );
                    this.result = this.valeur1 * this.valeur2;
                }
            break;

            case ('?'):
                this.changeOperation(this.OperationArray[Math.floor(1 + Math.random() * 3)]);
        }
    }
}
