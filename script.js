const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});

// Interactive project concept previews
const projectContent={
servly:{title:"Servly",eyebrow:"SERVICE MARKETPLACE · MVP IN DEVELOPMENT",description:"Servly is a home-services marketplace concept exploring how customers can discover providers and manage bookings. Next priorities include reliable provider discovery, booking states, provider accept/reject flows, and clear user notifications.",status:"Status: in development · Concept preview only"},
versefy:{title:"Versefy",eyebrow:"WRITING & PUBLISHING · PROTOTYPE",description:"Versefy is a storytelling and publishing platform concept. Its planned experience includes exploring stories, drafting content, managing personal stories, editing drafts, and publishing. Draft persistence and the end-to-end publishing workflow still need to be verified.",status:"Status: prototype · Planned features are not claimed as complete"},
portfolio:{title:"Portfolio website",eyebrow:"PERSONAL WEBSITE · ITERATIVE BUILD",description:"This website presents Megha's background, current skills, and independent projects. It is built with HTML, CSS, and JavaScript, with responsive layouts and a mobile navigation menu.",status:"Status: starter version · Test locally before publishing"}};
const projectDialog=document.querySelector("#projectDialog");
if(projectDialog){const closeDialog=projectDialog.querySelector(".dialog-close");document.querySelectorAll("[data-project]").forEach(button=>button.addEventListener("click",()=>{const item=projectContent[button.dataset.project];if(!item)return;document.querySelector("#dialogTitle").textContent=item.title;document.querySelector("#dialogEyebrow").textContent=item.eyebrow;document.querySelector("#dialogDescription").textContent=item.description;document.querySelector("#dialogStatus").textContent=item.status;projectDialog.showModal()}));closeDialog.addEventListener("click",()=>projectDialog.close());projectDialog.addEventListener("click",event=>{if(event.target===projectDialog)projectDialog.close()})}
