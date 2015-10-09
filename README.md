# jquery-show-hide-toggle
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
<input type="checkbox" data-show="#hidden-content" />
<!-- Hides hidden-content div, when checked -->
<input type="radio" data-hide="#hidden-content" />
<!-- All three actions on a select element -->
<select>
    <option data-show="#hidden-content">Show</option>
    <option data-hide="#hidden-content">Hide</option>
    <option data-toggle="#hidden-content">Toggle</option>
</select>
<div style="display:none" id="hidden-content">
    Hidden content
</div>
```