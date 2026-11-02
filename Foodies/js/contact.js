document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm"); if (!form) return;
  const status = document.getElementById("formStatus");
  form.addEventListener("submit", (event) => { event.preventDefault(); if (!form.reportValidity()) { status.textContent = "Please check the required fields and try again."; return; }
    const data = new FormData(form); const name=String(data.get("fullName")).trim(), email=String(data.get("email")).trim(), phone=String(data.get("phone")||"").trim(), subject=String(data.get("subject")).trim(), message=String(data.get("message")).trim();
    if(name.length<2 || message.length<10){status.textContent="Please enter your full name and a message of at least 10 characters.";return;}
    const body=[`Name: ${name}`,`Email: ${email}`,`Phone: ${phone||"Not provided"}`,"",message].join("\n");
    const mailto=`mailto:foodies_2026@gmail.com?subject=${encodeURIComponent(`[Foodies website] ${subject}`)}&body=${encodeURIComponent(body)}`;
    status.textContent="Your email application should open with your message ready. Press Send in that application to deliver it."; window.location.href=mailto;
  });
});
