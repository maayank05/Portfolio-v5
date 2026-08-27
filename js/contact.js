var FORMSPREE_ID = "YOUR_FORM_ID";
var CONTACT_EMAIL = "mayankpugalia06@gmail.com";

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contactForm");
  if (!form) return;

  var configured = FORMSPREE_ID !== "YOUR_FORM_ID";
  var submitBtn = form.querySelector(".submit-btn");
  var errorMsg = form.querySelector(".error-msg");
  var hint = form.querySelector(".hint");
  if (!configured && hint) hint.style.display = "block";

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = form.elements["name"].value;
    var email = form.elements["email"].value;
    var subject = form.elements["subject"].value || "Portfolio contact";
    var message = form.elements["message"].value;

    if (!configured) {
      var body = encodeURIComponent(message + "\n\n— " + name + " (" + email + ")");
      window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + body;
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";
    if (errorMsg) errorMsg.style.display = "none";

    fetch("https://formspree.io/f/" + FORMSPREE_ID, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    })
      .then(function (res) {
        if (res.ok) {
          form.innerHTML =
            '<div class="sent">' +
            '<svg class="icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>' +
            "<h3>Message sent</h3><p>Thanks for reaching out — I&apos;ll get back to you soon.</p>" +
            "</div>";
        } else {
          throw new Error("Request failed");
        }
      })
      .catch(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
        if (errorMsg) errorMsg.style.display = "block";
      });
  });
});
