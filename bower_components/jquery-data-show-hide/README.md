# [data-show], [data-hide], [data-toggle]
A tiny jQuery plugin to show or hide or toggle some content, when changing a checkbox/radio or select field.

## Availability

```bash
bower install jquery-data-show-hide
```

## Installation

```html
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="bower_components/jquery-data-show-hide/jquery.data-show-hide.min.js"></script>
```

## Usage

```html
<div>
    <label><input type="checkbox" data-show="#test-content" /> Show</label>
    <label><input type="checkbox" data-hide="#test-content" /> Hide</label>
    <label><input type="checkbox" data-toggle="#test-content" /> Toggle</label>
</div>

<div>
    <label><input type="radio" data-show="#test-content" /> Show</label>
    <label><input type="radio" data-hide="#test-content" /> Hide</label>
    <label><input type="radio" data-toggle="#test-content" /> Toggle</label>
</div>

<select>
    <option data-hide="#test-content">Hide</option>
    <option data-show="#test-content">Show</option>
    <option data-toggle="#test-content">Toggle</option>
</select>

<div id="test-content" style="background:#d9534f">
    Test Content
</div>
```
