const red = "Service Offline";
const green = "Service Online";

async function checkService(url, headerId, textId, spinnerId) {
  const header = document.getElementById(headerId);
  const text = document.getElementById(textId);
  const spinner = document.getElementById(spinnerId);

  try {
    await fetch(url, { mode: "no-cors" });

    header.style.color = "#28a745";
    text.textContent = green;

  } catch {
    header.style.color = "#dc3545";
    text.textContent = red;
  }

  spinner.classList.add("hidden");
}

checkService("https://transcendbinary.co.uk", "origin", "originStatus", "originSpinner");
checkService("https://www.transcendbinary.co.uk", "mainSite", "mainSiteStatus", "mainSiteSpinner");
checkService("https://TranscendBinaryMiles.zapier.app", "miles", "milesStatus", "milesSpinner");
checkService("https://beta.transcendbinary.co.uk", "betaSite", "betaSiteStatus", "betaSiteSpinner");
checkService("https://cdn.transcendbinary.co.uk", "cdn", "cdnStatus", "cdnSpinner");
checkService("https://api.transcendbinary.co.uk", "api", "apiStatus", "apiSpinner");
checkService("https://store.transcendbinary.co.uk", "teespring", "teespringStatus", "teespringSpinner");
checkService("https://stickers.transcendbinary.co.uk", "bigCartel", "bigCartelStatus", "bigCartelSpinner");