# JQuery-ui-multidraggable-choose-group-Plugin

You can download the [development version][max] or the [production version][min].

Tested with Jquery **1.8.3** and Jquery **UI 1.9.2**
[max]: https://github.com/Tchoupinax/JQuery-ui-multidraggable-choose-group/blob/master/JQuery-ui-multidraggable-choose-group.js
[min]: https://github.com/Tchoupinax/JQuery-ui-multidraggable-choose-group/blob/master/JQuery-ui-multidraggable-choose-group.min.js


## Getting Started

```Javascript
$('.class').draggable({
  multiple: {
    groupe: '#id'
  }
});

```

```
$('.class') -> Objects targeted by the standard draggable function
groupe -> Specify element which will be dragged with. group is a jquery selector without '$()';
```

### Examples
```
Work with JQuery selector
I want to set groupe to ('.selected'). I set group: '.selected'
I want to set groupe to ('#selected'). I set group: '#selected'

```

### Release History
#### _1.0.0_ inital release
