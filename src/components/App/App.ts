/// <reference path="../../../ng2-helper.d.ts"/>

import {Component, View} from  'angular2/angular2';
import {RouteConfig, RouterOutlet, Router, RouterLink} from 'angular2/router';
import {Problem1} from '../Problem1/Problem1';
import {Problem1Child} from '../Problem1Child/Problem1Child';
import {Problem2} from '../Problem2/Problem2';
import {Home} from '../Home/Home';

@Component({
    selector: 'app'
})
@View({
    templateUrl: 'src/components/App/App.html',
    directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
    { path: '/',          as: 'home',      component: Home },
    { path: '/problem1',          as: 'problem1',      component: Problem1 },
    { path: '/problem1-child',          as: 'problem1-child',      component: Problem1Child },
    { path: '/problem2',          as: 'problem2',      component: Problem2 },
])
export class App {
    constructor(private router: Router) {
    }
}
