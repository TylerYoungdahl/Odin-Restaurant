export default function menuPage() {
  const content = document.getElementById("content");

  content.innerHTML = `<div class="content-container" id="menu-container">
        <h1 class="menu-category">Starters/Sides</h1>
        <div class="menu">
          <div class="menu-top">
            <p class="menu-item">Truffle Parmesan Fries</p>
            <p class="menu-price">$12.00</p>
          </div>
          <div class="menu-bottom">
            <p class="menu-summary">
              Golden fries tossed in truffle oil and topped with grated Parmesan
              cheese.
            </p>
          </div>
        </div>
        <div class="menu">
          <div class="menu-top">
            <p class="menu-item">Avocado & Mango Salad</p>
            <p class="menu-price">$16.00</p>
          </div>
          <div class="menu-bottom">
            <p class="menu-summary">
              Fresh avocado and mango with mixed greens, drizzled with a
              honey-lime vinaigrette.
            </p>
          </div>
        </div>
        <h1 class="menu-category">Burgers</h1>
        <div class="menu">
          <div class="menu-top">
            <p class="menu-item">Classic Beef Royale</p>
            <p class="menu-price">$21.00</p>
          </div>
          <div class="menu-bottom">
            <p class="menu-summary">
              Juicy beef patty with cheddar cheese, lettuce, tomato, red onion,
              and house aioli on a brioche bun.
            </p>
          </div>
        </div>
        <div class="menu">
          <div class="menu-top">
            <p class="menu-item">Vegan Beyond Bliss</p>
            <p class="menu-price">$22.00</p>
          </div>
          <div class="menu-bottom">
            <p class="menu-summary">
              Plant-based Beyond Burger, avocado, vegan cheese, lettuce, tomato,
              and vegan mayo on a whole grain bun.
            </p>
          </div>
        </div>
        <div class="menu">
          <div class="menu-top">
            <p class="menu-item">Lamb & Feta Delight</p>
            <p class="menu-price">$25.00</p>
          </div>
          <div class="menu-bottom">
            <p class="menu-summary">
              Ground lamb patty, feta cheese, cucumber, red onion, and tzatziki
              sauce on a pretzel bun.
            </p>
          </div>
        </div>
      </div>`;
}
