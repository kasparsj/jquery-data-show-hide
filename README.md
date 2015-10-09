# [data-show], [data-hide], [data-toggle]
A tiny jQuery plugin to show or hide or toggle some content, when changing a checkbox/radio or select field.

## Availability

```bash
bower install jquery-show-hide-toggle
```

## Installation

```html
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="bower_components/jquery-show-hide-toggle/jquery.show-hide-toggle.min.js"></script>
```

## Usage

```html
<!-- Shows hidden-content div, when checked -->
<label><input type="checkbox" data-hide="#content" /> Hide</label>

<!-- Hides hidden-content div, when checked -->
<label><input type="radio" data-show="#content" /> Show</label>

<!-- All three actions on a select element -->
<select>
    <option data-hide="#content">Hide</option>
    <option data-show="#content">Show</option>
    <option data-toggle="#content">Toggle</option>
</select>

<div id="content">
    Content
</div>
```
