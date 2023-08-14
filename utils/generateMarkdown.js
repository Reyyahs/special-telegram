// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } else {
    return `![License badge](https://img.shields.io/badge/License-${encodeURIComponent(license)}-blue)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseUrls = {
    "Apache License 2.0": "apache-2.0",
    "Boost Software License 1.0": "bsl-1.0",
    "GNU AGPLv3": "agpl-3.0",
    "GNU GPLv3": "gpl-3.0",
    "GNU LGPLv3": "lgpl-3.0",
    "MIT": "mit",
    "Mozilla Public License 2.0": "mpl-2.0",
    "Unlicense": "unlicense"
  };

  if (license === "None" || !licenseUrls.hasOwnProperty(license)) {
    return "";
  } else {
    return `https://choosealicense.com/licenses/${licenseUrls[license]}`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `This project is licensed under the ${license}.`;
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;