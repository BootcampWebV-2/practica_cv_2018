import { FormContact } from "./form-contact.js";

export class Main {
  constructor() {
    // elementos del DOM
    this.oBotonOlderPost = document.querySelector("#olderPostsBtn");
    this.oFormContact = document.querySelector("#contact");
    this.oInputName = document.querySelector("#name");
    this.oBotonMenu = document.querySelector("#menuBtn");

    this.aMenu = document.querySelectorAll("nav#top-menu a");
    this.aSections = document.querySelectorAll("section");
    this.oOffsets = [];

    this.prepararNavegacion();
  }

  defineEventListeners() {
    //this.oBotonOlderPost.onclick = this.verOlderPosts
    this.oBotonOlderPost.addEventListener("click", this.verOlderPosts);
    this.oInputName.addEventListener("change", this.probarInput);
    this.oInputName.addEventListener("input", this.probarInput);
    this.oBotonMenu.addEventListener("click", this.toggleMenu);
    this.oFormContact.addEventListener("submit", this.leerContact);

    window.addEventListener("scroll", this.changeMenuStyle.bind(this));
  }

  verOlderPosts(oE) {
    console.dir(oE);
  }

  toggleMenu() {
    document.querySelector("#top-menu").classList.toggle("menu-top");
  }
}
