// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseBadge) {
  let yourLicense = '';
  if (licenseBadge === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseBadge === 'GPLv3') {
    yourLicense = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  } else if (licenseBadge === 'GPL') {
    yourLicense = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
  } else {
    yourLicense = "N/A"
    
  }
  return yourLicense
};

//making sure to return the variable at the end of the function to get the else if statment to 
//display

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseType = license;
  let yourLicense = '';
  if (licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://https://www.mit.edu/~amini/LICENSE.md)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![Apachi license](https://opensource.org/licenses/Apache-2.0)`
  } else if (licenseType === 'GPL') {
    yourLicense = `![GPL license](https://www.gnu.org/licenses/gpl-3.0)`
  } else {
    yourLicense = "N/A"
   
  }
  return yourLicense
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {

// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {


  return `
  
  # ${response.title}

  # ${renderLicenseBadge(response.licenseType)}

  ## Table of Contents
  - [Project Description](#Description)
  - [Usage](#Usage)
  - [Contributiing](#Contributing)
  - [Installation](#Installation)
  - [Questions](#Questions)
  - [License](#license)

  ## Description
  ${response.build}

  ## Installation
  ${response.instal}

  ## Contributing
  ${response.contribute}

  ## Questions
  ${response.learn}
  ${response.stand}
  ${response.pSolve}
  ${response.motivation}
  ${response.build}
 
  
  ## Licensing
   ${renderLicenseLink(response.licenseType)} `


}

module.exports = generateMarkdown;
