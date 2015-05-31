/// <reference path="../../../ng2-helper.d.ts"/>

import {Component, View} from  'angular2/angular2';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'problem-one'
})
@View({
    templateUrl: 'src/components/Problem1/Problem1.html',
    directives: [RouterLink]
})
export class Problem1 {
}
