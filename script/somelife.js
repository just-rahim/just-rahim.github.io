// click and hold event listener

var timeout_id = 0,
    hold_time = 1000,
    hold_menu = $('.hold_menu'),
    hold_trigger = $('.hold_trigger');

hold_menu.hide();

hold_trigger.mousedown(function() {
    timeout_id = setTimeout(menu_toggle, hold_time);
}).bind('mouseup mouseleave', function() {
    clearTimeout(timeout_id);
});

function menu_toggle() {
  hold_menu.toggle();
}
ul.hold_menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul.hold_menu a, div.hold_trigger  {
   display: inline-block;
   padding: 5px 15px;
   border: 1px solid #ccc;
   width: 300px;
}

ul.hold_menu a:link, ul.hold_menu a:visited {
   color: black;
   text-decoration: none;
}

ul.hold_menu a:active, ul.hold_menu a:hover {
   background: #ff0;
   text-decoration: none;
}

div.hold_trigger {
   color: black;
   cursor: pointer;
}

div.hold_trigger:hover {
   background: #ccc;
}
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

<div class="hold_trigger">Click and hold to toggle the menu</div>
<ul class="hold_menu">
   <li><a href="#">Option 1</a></li>
   <li><a href="#">Option 2</a></li>
   <li><a href="#">Option 3</a></li>
</ul>