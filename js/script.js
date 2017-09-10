var link_write_us = document.querySelector(".write-us-link");
var modal_write_us = document.querySelector(".message-modal");
var close_button_write_us = modal_write_us.querySelector(".modal-close");
var login_write_us = modal_write_us.querySelector("[name=message-modal-name]");

var link_map = document.querySelector(".link-map");
var modal_map = document.querySelector(".map-modal");
var close_button_map = modal_map.querySelector(".modal-close");

link_write_us.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal_write_us.classList.add("modal-open");
  login_write_us.focus();
});

close_button_write_us.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal_write_us.classList.remove("modal-open");
});


link_map.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal_map.classList.add("modal-open");
});

close_button_map.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal_map.classList.remove("modal-open");
});


var services_link_delivery = document.querySelector("#services-link-delivery > a");
var services_link_guarantee = document.querySelector("#services-link-guarantee > a");
var services_link_credit = document.querySelector("#services-link-credit > a");

services_link_delivery.addEventListener("click", function (evt) {
  evt.preventDefault();

  document.querySelector("#services-link-delivery").classList.add("services-list-anchor-current");
  document.querySelector("#services-list-delivery").classList.add("services-list-current");

  document.querySelector("#services-link-guarantee").classList.remove("services-list-anchor-current");
  document.querySelector("#services-link-credit").classList.remove("services-list-anchor-current");
  document.querySelector("#services-list-guarantee").classList.remove("services-list-current");
  document.querySelector("#services-list-credit").classList.remove("services-list-current");
});

services_link_guarantee.addEventListener("click", function (evt) {
  evt.preventDefault();

  document.querySelector("#services-link-guarantee").classList.add("services-list-anchor-current");
  document.querySelector("#services-list-guarantee").classList.add("services-list-current");

  document.querySelector("#services-link-delivery").classList.remove("services-list-anchor-current");
  document.querySelector("#services-link-credit").classList.remove("services-list-anchor-current");
  document.querySelector("#services-list-delivery").classList.remove("services-list-current");
  document.querySelector("#services-list-credit").classList.remove("services-list-current");
});

services_link_credit.addEventListener("click", function (evt) {
  evt.preventDefault();

  document.querySelector("#services-link-credit").classList.add("services-list-anchor-current");
  document.querySelector("#services-list-credit").classList.add("services-list-current");

  document.querySelector("#services-link-guarantee").classList.remove("services-list-anchor-current");
  document.querySelector("#services-link-delivery").classList.remove("services-list-anchor-current");
  document.querySelector("#services-list-guarantee").classList.remove("services-list-current");
  document.querySelector("#services-list-delivery").classList.remove("services-list-current");
});
