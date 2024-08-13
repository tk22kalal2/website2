document.addEventListener("DOMContentLoaded", function () {
    // List of HTML files to include
    const htmlFiles = [
        "plugins/anatomyp.html","plugins/biochemestryp.html","plugins/physiologyp.html","plugins/pharmacologyp.html","plugins/pathologyp.html","plugins/microbiologyp.html","plugins/rrp.html","plugins/clinicalsp.html",
        "plugins/psmp.html","plugins/entp.html","plugins/opthalmologyp.html","plugins/pediatricsp.html","plugins/radiologyp.html","plugins/medicinep.html","plugins/surgeryp.html","plugins/anesthesiap.html","plugins/orthopedicsp.html","plugins/psychiatryp.html","plugins/obgyp.html","plugins/dermatologyp.html",
        "plugins/anatomyp4.html","plugins/biochemestryp4.html","plugins/physiologyp4.html","plugins/pharmacologyp4.html","plugins/pathologyp4.html","plugins/microbiologyp4.html","plugins/rrp4.html","plugins/clinicalsp4.html",
        "plugins/psmp4.html","plugins/entp4.html","plugins/opthalmologyp4.html","plugins/pediatricsp4.html","plugins/radiologyp4.html","plugins/medicinep4.html","plugins/surgeryp4.html","plugins/anesthesiap4.html","plugins/orthopedicsp4.html","plugins/psychiatryp4.html","plugins/obgyp4.html","plugins/dermatologyp4.html",
         "plugins/anatomypw.html","plugins/biochemestrypw.html","plugins/physiologypw.html","plugins/pharmacologypw.html","plugins/pathologypw.html","plugins/microbiologypw.html","plugins/rrpw.html","plugins/clinicalswp.html",
        "plugins/psmpw.html","plugins/entpw.html","plugins/opthalmologypw.html","plugins/pediatricspw.html","plugins/radiologypw.html","plugins/medicinepw.html","plugins/surgerypw.html","plugins/anesthesiapw.html","plugins/orthopedicspw.html","plugins/psychiatrypw.html","plugins/obgypw.html","plugins/dermatologypw.html",
        "plugins/anatomym.html","plugins/biochemestrym.html","plugins/physiologym.html","plugins/pharmacologym.html","plugins/pathologym.html","plugins/microbiologym.html","plugins/rrm.html","plugins/clinicalsm.html",
        "plugins/psmm.html","plugins/entm.html","plugins/opthalmologym.html","plugins/pediatricsm.html","plugins/radiologym.html","plugins/medicinem.html","plugins/surgerym.html","plugins/anesthesiam.html","plugins/orthopedicsm.html","plugins/psychiatrym.html","plugins/obgym.html","plugins/dermatologym.html",
         "plugins/anatomydoc.html","plugins/biochemestrydoc.html","plugins/physiologydoc.html","plugins/pharmacologydoc.html","plugins/pathologydoc.html","plugins/microbiologydoc.html","plugins/rrdoc.html","plugins/clinicalsdoc.html",
        "plugins/psmdoc.html","plugins/entdoc.html","plugins/opthalmologydoc.html","plugins/pediatricsdoc.html","plugins/radiologydoc.html","plugins/medicinedoc.html","plugins/surgerydoc.html","plugins/anesthesiadoc.html","plugins/orthopedicsdoc.html","plugins/psychiatrydoc.html","plugins/obgydoc.html","plugins/dermatologydoc.html",
         "plugins/anatomydame.html","plugins/biochemestrydame.html","plugins/physiologydame.html","plugins/pharmacologydame.html","plugins/pathologydame.html","plugins/microbiologydame.html","plugins/rrdame.html","plugins/clinicalsdame.html",
        "plugins/psmdame.html","plugins/entdame.html","plugins/opthalmologydame.html","plugins/pediatricsdame.html","plugins/radiologydame.html","plugins/medicinedame.html","plugins/surgerydame.html","plugins/anesthesiadame.html","plugins/orthopedicsdame.html","plugins/psychiatrydame.html","plugins/obgydame.html","plugins/dermatologydame.html",
         "plugins/anatomydamh.html","plugins/biochemestrydamh.html","plugins/physiologydamh.html","plugins/pharmacologydamh.html","plugins/pathologydamh.html","plugins/microbiologydamh.html","plugins/rrdamh.html","plugins/clinicalsdamh.html",
        "plugins/psmdamh.html","plugins/entdamh.html","plugins/opthalmologydamh.html","plugins/pediatricsdamh.html","plugins/radiologydamh.html","plugins/medicinedamh.html","plugins/surgerydamh.html","plugins/anesthesiadamh.html","plugins/orthopedicsdamh.html","plugins/psychiatrydamh.html","plugins/obgydamh.html","plugins/dermatologydamh.html",    
    ];

    // Fetch all HTML files and process them
    Promise.all(htmlFiles.map(fetchFileContent))
        .then(htmlArray => {
            // Concatenate HTML content from all files
            const combinedHtml = htmlArray.join("");

            // Extract keywords and corresponding URLs
            const keywordsAndUrls = extractKeywordsAndUrls(combinedHtml);

            // Set up event listener for the search input
            const searchInput = document.getElementById("searchInput");
            searchInput.addEventListener("input", function () {
                const searchTerm = searchInput.value.toLowerCase();

                if (searchTerm === "") {
                    // If search term is empty, hide the suggestion list
                    hideSuggestions();
                } else {
                    // Filter keywords based on the search term
                    const filteredKeywordsAndUrls = keywordsAndUrls.filter(entry => entry.keyword.includes(searchTerm));

                    // Display suggestions in the suggestion list
                    displaySuggestions(filteredKeywordsAndUrls);
                }
            });
        })
        .catch(error => console.error("Error fetching HTML files:", error));
});

function fetchFileContent(file) {
    // Fetch the content of each file using fetch API
    return fetch(file)
        .then(response => response.text())
        .catch(error => console.error(`Error fetching ${file}:`, error));
}

function extractKeywordsAndUrls(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const anchorElements = doc.querySelectorAll(".content-table td a");

    // Extract keywords and corresponding URLs from the anchor elements
    const keywordsAndUrls = Array.from(anchorElements).map(anchor => {
        return {
            keyword: anchor.textContent.toLowerCase(),
            url: anchor.getAttribute("href")
        };
    });

    return keywordsAndUrls;
}

function displaySuggestions(suggestions) {
    const suggestionList = document.getElementById("suggestionList");

    // Clear existing suggestions
    suggestionList.innerHTML = "";

    // Display new suggestions
    suggestions.forEach(entry => {
        const listItem = document.createElement("li");
        listItem.textContent = entry.keyword;

        // Add click event listener to redirect to the URL when clicked
        listItem.addEventListener("click", function () {
            window.open(entry.url, "_blank");
        });

        suggestionList.appendChild(listItem);
    });
}

function hideSuggestions() {
    const suggestionList = document.getElementById("suggestionList");

    // Clear existing suggestions
    suggestionList.innerHTML = "";
}
