/// <reference path="../../../ng2-helper.d.ts"/>

import {Component, View} from  'angular2/angular2';
import {RouteConfig, RouterLink} from 'angular2/router';
import {Problem2Child} from '../Problem2Child/Problem2Child';

@Component({
    selector: 'problem-two'
})
@View({
    templateUrl: 'src/components/Problem2/Problem2.html',
    directives: [RouterLink]
})
@RouteConfig([
    { path: '/problem2-child',          as: 'problem2-child',      component: Problem2Child }
])
export class Problem2 {
}
