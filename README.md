# vtooltip

> Simple native Vue.js tooltip component

## Install

###### Vue Compatibility
> Compatible with Vue 2.0

#### NPM
```bash
$ npm install vtooltip
```

Register the component

```js
import tooltip from 'vtooltip';
Vue.use(tooltip);
```

Basic markup should look like this

```html
<tooltip text="Tooltip text">Hover here</tooltip>
```

## Settings

Set tooltip position to above
- Default: bottom
```js
position="top" 
```

Set tooltip text size, number will be used to change px size
- Default: 13
```js
:textsize="15" 
```

Changes tooltip text color, accepts any allowed CSS color value
- Default: null
```js
color="red" 
```

Changes tooltip background color, accepts any allowed CSS color value
- Default: null
```js
bgcolor="blue" 
```

Gives the tooltip rounded edges
- Default: false
```js
:rounded="true" 
```

Forces the tooltip to always show
- Default: false
```js
:always="true" 
```

## More features coming soon!