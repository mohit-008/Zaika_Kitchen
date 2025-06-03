const responses = {
  "hello": "Hi there! How can I help you today?",
  "menu": "You can view our menu on the homepage.",
  "delivery": "We deliver across Jaipur. Free delivery above ₹300.",
  "order": "To place an order, just select items from the menu and click order.",
  "hours": "We are open daily from 11 AM to 11 PM.",
};

function sendMessage() {
  const input = document.getElementById("user-input").value.toLowerCase();
  const chatLog = document.getElementById("chat-log");

  const userMessage = `<div><strong>You:</strong> ${input}</div>`;
  chatLog.innerHTML += userMessage;

  let response = responses[input] || "Sorry, I didn’t understand that. Please ask something else.";
  const botMessage = `<div><strong>Bot:</strong> ${response}</div>`;
  chatLog.innerHTML += botMessage;

  document.getElementById("user-input").value = "";
  chatLog.scrollTop = chatLog.scrollHeight;
}
