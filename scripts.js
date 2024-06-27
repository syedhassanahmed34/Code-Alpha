document.addEventListener("DOMContentLoaded", function () {
  const assignments = [
    {
      title: "ToDo App",
      description:
        "This is a simple todo app where you can easily add your daily basis works or so many other things.",
      Date: "5-June-2024",
      codeLink: "https://github.com/syedhassanahmed34/Todo-App",
      hostedLink: "https://syedhassanahmed34.github.io/Todo-App/",
    },
    {
      title: "Shopping Cards",
      description: "This is made from javascript",
      Date: "29-May-2024",
      codeLink: "https://github.com/syedhassanahmed34/Shopping-Cards",
      hostedLink: "https://syedhassanahmed34.github.io/Shopping-Cards/",
    },
    {
      title: "Finance-App-Tracker",
      description:
        "A finance app tracker is a digital tool that helps users manage their income, expenses, and savings in real-time with features like budgeting, expense categorization, and financial insights.",
      Date: "23-May-2024",
      codeLink: "https://github.com/syedhassanahmed34/Finance-App-Tracker",
      hostedLink: "https://syedhassanahmed34.github.io/Finance-App-Tracker/",
    },
    {
      title: "Text-Editor",
      description:
        "Using this you will learn to bold,italic and underline the text using javascript.",
      Date: "18-May-2024",
      codeLink: "https://github.com/syedhassanahmed34/Text-Editor",
      hostedLink: "https://syedhassanahmed34.github.io/Text-Editor/",
    },
    {
      title: "Calculator",
      description:
        "This is a simple calculator in which basic operators are used(+,-,/,*)",
      Date: "10-May-2024",
      codeLink: "https://github.com/syedhassanahmed34/Calculator",
      hostedLink: "https://syedhassanahmed34.github.io/Calculator/",
    },
    {
      title: "Attendance Checker",
      description:
        "In this user enters his/her name if the user is on time (10 AM) the result shows that good but if the user is on(10.05 AM) the result shows be on time and be careful next time. If the user enters his/her name at after 10.05 AM the result shows that you are late your salary should be deducted!",
      Date: "4-May-2024",
      codeLink: "https://github.com/syedhassanahmed34/Attendance-Checker",
      hostedLink: "https://syedhassanahmed34.github.io/Attendance-Checker/",
    },
    {
      title: "Age Calculator",
      description:
        "Enter your Date of Birth this app shows how many days,hours,seconds and many other things does you have spent from your Date Of Birth.",
      Date: "2-May-2024",
      codeLink: "https://github.com/syedhassanahmed34/Age-Calculator",
      hostedLink: "https://syedhassanahmed34.github.io/Age-Calculator/",
    },
    {
      title: "Dice Game",
      description:
        "create your secret number and allow user to choose what is your secret number between 1 to 6 and at least give 2 chances  if his guess correct on first attempt give him 6 point else 3 point and if he dont guess he fail.",
      Date: "29-April-2024",
      codeLink: "https://github.com/syedhassanahmed34/DICE-GAME",
      hostedLink: "https://syedhassanahmed34.github.io/DICE-GAME/",
    },
    {
      title: "Colour Picker",
      description:
        "An RGB color picker using JS is a tool that allows users to select and preview colors by adjusting red, green, and blue values dynamically with JavaScript.",
      Date: "27-April-2024",
      codeLink: "https://github.com/syedhassanahmed34/RGB-colour-picker",
      hostedLink: "https://syedhassanahmed34.github.io/RGB-colour-picker/",
    },
    {
      title: "Boking.com Website Clone",
      description: "I am creating this website clone...",
      Date: "15-FEB-2024",
      codeLink: "https://github.com/syedhassanahmed34/booking.com-clone",
      hostedLink: "https://syedhassanahmed34.github.io/booking.com-clone/",
    },
    {
      title: "Figma Website Clone",
      description: "I am creating this website clone using HTML and CSS only.",
      Date: "27-JAN-2024",
      codeLink: "https://github.com/syedhassanahmed34/Figma-Website-Clone",
      hostedLink: "https://syedhassanahmed34.github.io/Figma-Website-Clone/",
    },
    {
      title: "Etsy Website Clone",
      description: "I am creating this website clone...",
      Date: "19-JAN-2024",
      codeLink: "https://github.com/syedhassanahmed34/etsy-website-clone",
      hostedLink: "https://syedhassanahmed34.github.io/etsy-website-clone/",
    },
    {
      title: "Keyboard",
      description: "Simple keyboard using HTML and CSS",
      Date: "13-JAN-2024",
      codeLink: "https://github.com/syedhassanahmed34/keyboard",
      hostedLink: "https://syedhassanahmed34.github.io/keyboard/",
    },
    {
      title: "Font Awesome Icons",
      description: "Font awesome icons clone",
      Date: "12-JAN-2024",
      codeLink: "https://github.com/syedhassanahmed34/Font-awesome-icons",
      hostedLink: "https://syedhassanahmed34.github.io/Font-awesome-icons/",
    },
    {
      title: "Css Image Gallery",
      description: "Image gallery clone",
      Date: "11-JAN-2024",
      codeLink: "https://github.com/syedhassanahmed34/css-image-gallery",
      hostedLink: "https://syedhassanahmed34.github.io/css-image-gallery/",
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
