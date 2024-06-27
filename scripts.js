document.addEventListener("DOMContentLoaded", function () {
  const assignments = [
    {
      title: "Finance-App-Tracker",
      description:
        "A finance app tracker is a digital tool that helps users manage their income, expenses, and savings in real-time with features like budgeting, expense categorization, and financial insights.",
      Date: "20-June-2024",
      codeLink: "https://github.com/syedhassanahmed34/Task-2",
      hostedLink: "https://syedhassanahmed34.github.io/Task-2/",
    },
    {
      title: "Portfolio",
      description: "This is created by using HTML,CSS and a little Javascript.",
      Date: "28-JAN-2024",
      codeLink: "https://github.com/syedhassanahmed34/Task-1",
      hostedLink: "https://syedhassanahmed34.github.io/Task-1/",
    },
  ];

  const assignmentsList = document.getElementById("assignments-list");

  assignments.forEach((assignment) => {
    const assignmentElement = document.createElement("div");
    assignmentElement.classList.add("assignment");

    assignmentElement.innerHTML = `
            <h2>${assignment.title}</h2>
            <p>${assignment.description}</p>
            <p class="due-date">Date: ${assignment.Date}</p>
            <div class="links">
                <a href="${assignment.codeLink}" target="_blank"><i class="fab fa-github"></i>Code Link</a>
                <a href="${assignment.hostedLink}" target="_blank"><i class="fas fa-external-link-alt"></i>Hosted Link</a>
            </div>
        `;

    assignmentsList.appendChild(assignmentElement);
  });
});
