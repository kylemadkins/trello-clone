// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import * as bootstrap from "bootstrap"
import "../stylesheets/application"

import Vue from "vue/dist/vue.esm"
import App from "../app.vue"

document.addEventListener("turbolinks:load", () => {
  var element = document.querySelector("#boards")
  if (element !== undefined) {
    const app = new Vue({
      el: element,
      data: {
        lists: JSON.parse(element.dataset.lists)
      },
      template: "<App :lists=\"lists\" />",
      components: { App }
    })
  }

  var popoverTriggerList = [].slice.call(document.querySelectorAll("[data-bs-toggle=\"popover\"]"))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })
  
  var tooltipTriggerList = [].slice.call(document.querySelectorAll("[data-bs-toggle=\"tooltip\"]"))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
})

Rails.start()
Turbolinks.start()
ActiveStorage.start()
