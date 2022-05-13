// Smooth scrolling animation

const allLinks = document.querySelectorAll(".for-smooth:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Sticky navigation

const startNavEl = document.querySelector(".quote");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.querySelector("header").classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.querySelector("header").classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
  }
);
obs.observe(startNavEl);
