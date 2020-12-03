var source_oats_link;
var source_honey_link;
var source_maple_link;

document.addEventListener('DOMContentLoaded', function(event) {
  source_oats_link = document.getElementsByClassName('source-oats-link');
  source_honey_link = document.getElementsByClassName('source-honey-link');
  source_maple_link = document.getElementsByClassName('source-maple-link');

  //SOURCE HOVER EVENTS
  source_oats_link[0].addEventListener('mouseover', function(event) {
    window.splitbee.track("Source_oats_link_hover");
  });
  source_honey_link[0].addEventListener('mouseover', function(event) {
    window.splitbee.track("Source_honey_link_hover");
  });
  source_maple_link[0].addEventListener('mouseover', function(event) {
    window.splitbee.track("Source_maple_link_hover");
  });

  //SOURCE CLICK EVENTS
  source_oats_link[0].addEventListener('click', function(event) {
    window.splitbee.track("Source_oats_link_click");
  });
  source_honey_link[0].addEventListener('click', function(event) {
    window.splitbee.track("Source_honey_link_click");
  });
  source_maple_link[0].addEventListener('click', function(event) {
    window.splitbee.track("Source_maple_link_click");
  });
});
