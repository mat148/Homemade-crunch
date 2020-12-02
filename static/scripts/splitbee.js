var source_oats_link;
var source_honey_link;
var source_maple_link;

document.addEventListener('DOMContentLoaded', function(event) {
  source_oats_link = document.getElementsByClassName('source-oats-link');
  source_honey_link = document.getElementsByClassName('source-honey-link');
  source_maple_link = document.getElementsByClassName('source-maple-link');

  //SOURCE CLICK EVENTS
  source_oats_link[0].addEventListener('click', function(event) {
    window.splitbee.track("Test event");
  });
});
