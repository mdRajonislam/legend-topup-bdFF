const packages = document.querySelectorAll(".package");
const selectedPackage = document.getElementById("selectedPackage");

packages.forEach(item => {
  item.addEventListener("click", () => {
    const diamond = item.dataset.diamond;
    const price = item.dataset.price;
    selectedPackage.value = `${diamond} - ৳${price}`;
  });
});

document.getElementById("orderBtn").addEventListener("click", () => {
  const id = document.getElementById("playerId").value;
  const name = document.getElementById("name").value;
  const pack = selectedPackage.value;

  if (!id || !name || !pack) {
    document.getElementById("message").innerHTML =
      "❌ সব তথ্য পূরণ করুন।";
    return;
  }

  document.getElementById("message").innerHTML =
    "✅ অর্ডার সফলভাবে গ্রহণ করা হয়েছে!";
});

function showContact() {
  document.getElementById("contactMessage").innerHTML =
    "📱 WhatsApp: +966502391338<br>💳 bKash: 01724868061<br>✈️ Telegram: @MDRajonislam201";
} packages = document.querySelectorAll(".package");
const selectedPackage = document.getElementById("selectedPackage");

packages.forEach(item => {
  item.addEventListener("click", () => {
    const diamond = item.dataset.diamond;
    const price = item.dataset.price;
    selectedPackage.value = `${diamond} - ৳${price}`;
  });
});

document.getElementById("orderBtn").addEventListener("click", () => {
  const id = document.getElementById("playerId").value;
  const name = document.getElementById("name").value;
  const pack = selectedPackage.value;

  if (!id || !name || !pack) {
    document.getElementById("message").innerHTML =
      "❌ সব তথ্য পূরণ করুন।";
    return;
  }

  document.getElementById("message").innerHTML =
    "✅ অর্ডার সফলভাবে গ্রহণ করা হয়েছে!";
});

function showContact() {
  document.getElementById("contactMessage").innerHTML =
    "📱 WhatsApp: +966502391338<br>💳 bKash: 01724868061<br>✈️ Telegram: @MDRajonislam201";
}