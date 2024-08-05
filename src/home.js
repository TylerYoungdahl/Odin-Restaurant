import burger from "./assets/img/burger.jpg";

export default function homePage() {
  const content = document.getElementById("content");

  const homeBurgerContainer = document.getElementById("home-burger-container");

  content.innerHTML = `<div class="content-container" id="home-container">
        <div id="home-summary-container">
          <p id="home-summary">
            Welcome to Dave's Overpriced Burgers, where every bite is a culinary
            adventure! Our passion is crafting mouthwatering gourmet burgers
            with the finest, freshest ingredients. From our signature beef blend
            to our house-made sauces and unique toppings, each burger is a
            masterpiece designed to tantalize your taste buds. Whether you're in
            the mood for a classic favorite or a bold new flavor combination,
            our menu has something for every burger lover. Join us for an
            unforgettable dining experience in a stylish and cozy atmosphere. At
            Dave's Overpriced Burgers, we don't just serve burgers; we create
            unforgettable moments. Indulge in the ultimate burger experience
            today!
          </p>
          <div id="socials-container">
            <a href="#">
              <i class="fa-brands fa-instagram" id="instagram-icon"></i
            ></a>
            <a href="#">
              <i class="fa-brands fa-facebook" id="facebook-icon"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-twitter" id="twitter-icon"></i>
            </a>
          </div>
        </div>
        <div id="home-burger-container">
          <img id="home-burger" src="${burger}" alt="burger" />
        </div>
      </div>`;
}
