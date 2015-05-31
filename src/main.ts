/// <reference path="../ng2-helper.d.ts"/>

import {Component, View, bootstrap} from 'angular2/angular2';
import {routerInjectables} from 'angular2/router';
import {App} from 'components/App/App';

export default function() {
    bootstrap(App, [routerInjectables]);
}

