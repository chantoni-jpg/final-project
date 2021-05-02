import * as MODEL from "../model/model.js";

function init() {
  let currentHeroImage = "home";
  $("nav a").click(function () {
    console.log("clicked");
    let btnId = this.id;
    let contentId = btnId + "Content";
    if (btnId == "home") {
      $(".hero").css("display", "block");
      $(".hero")
        .removeClass(`${currentHeroImage}-hero-image`)
        .addClass(`${btnId}`);
      $(".hero").css("background-image", "display");
      currentHeroImage = btnId;
    } else {
      $(".hero").removeClass(`${currentHeroImage}-hero-image`);
      $(".hero").css("display", "none");

      currentHeroImage = btnId;
    }

    if (btnId == "home") {
      navWhite();
    } else {
      navBlack();
    }
    currentHeroImage = btnId;
    MODEL.getPageContent(contentId);

    if (btnId == "blog") {
      $(".blog-image").click(function () {
        let blogId = this.id;
        let contentId = blogId + "Content";
        MODEL.getPageContent(contentId);
      });
    }

    $(".image-one").click(function () {
      let btnId = this.id;
      let contentId = btnId + "Content";
      console.log("wowzers");
      MODEL.getPageContent(contentId);
    });
    $(".image-two").click(function () {
      let Id = this.id;
      let contentId = Id + "Content" + "two";
      console.log("wowzers");
      MODEL.getPageContent(contentId);
    });
    $(".image-three").click(function () {
      let Id = this.id;
      let contentId = Id + "Content" + "three";
      console.log("wowzers");
      MODEL.getPageContent(contentId);
    });
    $(".image-four").click(function () {
      let Id = this.id;
      let contentId = Id + "Content" + "four";
      console.log("wowzers");
      MODEL.getPageContent(contentId);
    });
    $(".image-five").click(function () {
      let Id = this.id;
      let contentId = Id + "Content" + "five";
      console.log("wowzers");
      MODEL.getPageContent(contentId);
    });
  });
}

function navWhite() {
  $(".hero").css("display", "block");
  $("nav a").css("color", "white");
  $(".logo").css("background-image", "url('images/logo-white.png')");
  $(".border").css("border-bottom-color", "white");
}

function navBlack() {
  $(".hero").css("display", "none");
  $("nav a").css("color", "black");
  $(".logo").css("background-image", "url('images/logo-black.png')");
  $(".border").css("border-bottom-color", "black");
}
$(document).ready(function () {
  init();
  MODEL.getPageContent("homeContent");
});
