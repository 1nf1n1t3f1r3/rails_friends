// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";
import "bootstrap";

// Make dropdowns work with Turbo
document.addEventListener("turbo:load", () => {
  // Bootstrap automatically hooks dropdowns in the DOM
  // But sometimes you need this to ensure event delegation
});
