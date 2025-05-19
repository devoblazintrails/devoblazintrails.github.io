---
title: "User Adoption Checklist"
layout: splash
permalink: /user-adoption-checklist-download/
author_profile: false
---

<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Download Starting...</title>
  <script>
    window.onload = function () {
      // Create a hidden link and trigger download
      const link = document.createElement('a');
      link.href = '/assets/User Adoption Improvement.pdf'; // Change to your file path in repo
      link.download = 'LoveUnited-User-Adoption-Checklist.pdf'; // Desired filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Redirect after delay
      setTimeout(function () {
        window.location.href = 'https://www.loveunited.solutions/thanks';
      }, 1200);
    };
  </script>
</head>
<body>
  <p>Your download is starting. If it doesn’t, <a href="/assets/User Adoption Improvement.pdf" download>click here</a>.</p>
</body>
</html>
