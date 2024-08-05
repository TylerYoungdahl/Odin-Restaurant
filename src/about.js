import aboutBurger from "./assets/img/holding-burger.jpg";

export default function aboutPage() {
  const content = document.getElementById("content");

  content.innerHTML = `<div class="content-container" id="about-container">
        <div id="about-text-container">
          <h2>Our Story</h2>
          <p>
            Founded by a food enthusiast with a passion for gourmet cuisine,
            Dave's Overpriced Burgers was born from the desire to elevate the
            humble burger to new gastronomic heights. Our journey began with a
            simple question: how can we transform a classic favorite into a
            gourmet experience? The answer lies in our commitment to quality,
            creativity, and a love for great food.
          </p>
          <h2>Our Philosophy</h2>
          <p>
            At the core of our philosophy is the belief that every meal should
            be a delightful adventure. We meticulously source our ingredients,
            choosing only the freshest produce, premium meats, and artisanal
            buns. Each burger on our menu is crafted with care, blending
            traditional flavors with innovative twists that make every bite
            memorable.
          </p>
          <h2>More Than Just Burgers</h2>
          <p>
            Beyond our mouth-watering burgers, we offer a selection of delicious
            starters, fresh salads, and decadent desserts. Pair your meal with
            our craft sodas, gourmet shakes, or a carefully curated selection of
            wines and local craft beers. Whether you're joining us for a casual
            lunch, a special dinner, or a quick bite, we strive to make every
            visit exceptional.
          </p>
        </div>
        <div id="about-img-container">
          <img
            id="about-img"
            src="${aboutBurger}"
            alt="burger"
          />
        </div>
      </div>`;
}
