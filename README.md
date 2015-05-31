# ng2-router-test

In this repo you will find the 2 issues in angular2 alpha 25 & router alpha24.

There is an `App` component that defines 3 routes: `Home` , `Problem1` and `Problem2`

`Problem1` is a component with a `Problem1Child` as a child component, the `RouterLink` is set within `Problem1`'s template.

`Problem1Child` route is set in `@RouterConfig` of `App`.

To overcome this error:


`Problem2` is a component with a `Problem2Child` as a child component, the `RouterLink` is set within `Problem2`'s template.

`Problem2Child` route is set in `@RouterConfig` of `Problem2`.

No error now, but clicking on the link raises an error


```
npm install

gulp build

gulp serve
```
