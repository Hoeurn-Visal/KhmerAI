function sendMessage() {
  const userInput = document.getElementById("user-input");
  const message = userInput.value.trim();
  if (message === "") return;

  appendMessage("user", message);
  userInput.value = "";

  // Simulate AI response (you can replace this with your own AI logic)
  setTimeout(() => {
    const response = getResponse(message);
    appendMessage("bot", response);
  }, 500);
}

function appendMessage(sender, message) {
  const chatBox = document.getElementById("chat-box");
  const messageElement = document.createElement("div");
  messageElement.classList.add("chat-message", sender);

  const avatarElement = document.createElement("div");
  avatarElement.classList.add("avatar");

  const textElement = document.createElement("div");
  textElement.classList.add("message");
  textElement.innerText = message;

  messageElement.appendChild(avatarElement);
  messageElement.appendChild(textElement);

  if (sender === "user") {
    messageElement.classList.add("user-message");
  }

  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getResponse(message) {
  const responses = {
    សួស្តី: "សួស្តី! តើខ្ញុំអាចជួយអ្នកដោយរបៀបណា?",
    មិត្តភក្តិខ្ញុំពីណាគេកាម៉ាប់ជាងគេ: "យាយគាង.",
    ខ្ញុំចង់បានសង្សារ: "បើសិនជាអ្នកចង់បានសង្សារ ទៅញ៉ែខ្លួនឯងទៅអាព្រៃស​ ។",
    default: "I did not understand that.",
  };

  const lowercaseMessage = message.toLowerCase();
  return responses[lowercaseMessage] || responses["default"];
}
