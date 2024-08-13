document.addEventListener("DOMContentLoaded", function () {
    // List of HTML files to include with associated file names and platform names
    const htmlFiles = [
    { file: "Plugins/anatomyp.html", fileName: "ANATOMY", platformName: "PREPLADDER-5" },
    { file: "Plugins/biochemestryp.html", fileName: "BIOCHEMESTRY", platformName: "PREPLADDER-5" },
    { file: "Plugins/physiologyp.html", fileName: "PHYSIOLOGY", platformName: "PREPLADDER-5" },
    { file: "Plugins/pharmacologyp.html", fileName: "PHARMACOLOGY", platformName: "PREPLADDER-5" },
    { file: "Plugins/pathologyp.html", fileName: "PATHOLOGY", platformName: "PREPLADDER-5" },
    { file: "Plugins/microbiologyp.html", fileName: "MICROBIOLOGY", platformName: "PREPLADDER-5" },
    { file: "Plugins/rrp.html", fileName: "RRP", platformName: "PREPLADDER-5" },
    { file: "Plugins/clinicalsp.html", fileName: "CLINICALS", platformName: "PREPLADDER-5" },
    { file: "Plugins/psmp.html", fileName: "PSM", platformName: "PREPLADDER-5" },
    { file: "Plugins/entp.html", fileName: "ENT", platformName: "PREPLADDER-5" },
    { file: "Plugins/opthalmologyp.html", fileName: "OPTHALMOLOGY", platformName: "PREPLADDER-5" },
    { file: "Plugins/pediatricsp.html", fileName: "PEDIATRICS", platformName: "PREPLADDER-5" },
    { file: "Plugins/radiologyp.html", fileName: "RADIOLOGY", platformName: "PREPLADDER-5" },
    { file: "Plugins/medicinep.html", fileName: "MEDICINE", platformName: "PREPLADDER-5" },
    { file: "Plugins/surgeryp.html", fileName: "SURGERY", platformName: "PREPLADDER-5" },
    { file: "Plugins/anesthesiap.html", fileName: "ANESTHESIA", platformName: "PREPLADDER-5" },
    { file: "Plugins/orthopedicsp.html", fileName: "ORTHOPEDICS", platformName: "PREPLADDER-5" },
    { file: "Plugins/psychiatryp.html", fileName: "PSYCHIATRY", platformName: "PREPLADDER-5" },
    { file: "Plugins/obgyp.html", fileName: "OBGY", platformName: "PREPLADDER-5" },
    { file: "Plugins/dermatologyp.html", fileName: "DERMATOLOGY", platformName: "PREPLADDER-5" },
    { file: "Plugins/anatomyp4.html", fileName: "ANATOMY", platformName: "PREPLADDER-4" },
    { file: "Plugins/biochemestryp4.html", fileName: "BIOCHEMESTRY", platformName: "PREPLADDER-4" },
    { file: "Plugins/physiologyp4.html", fileName: "PHYSIOLOGY", platformName: "PREPLADDER-4" },
    { file: "Plugins/pharmacologyp4.html", fileName: "PHARMACOLOGY", platformName: "PREPLADDER-4" },
    { file: "Plugins/pathologyp4.html", fileName: "PATHOLOGY", platformName: "PREPLADDER-4" },
    { file: "Plugins/microbiologyp4.html", fileName: "MICROBIOLOGY", platformName: "PREPLADDER-4" },
    { file: "Plugins/rrp4.html", fileName: "RRP", platformName: "PREPLADDER-4" },
    { file: "Plugins/clinicalsp4.html", fileName: "CLINICALS", platformName: "PREPLADDER-4" },
    { file: "Plugins/psmp4.html", fileName: "PSM", platformName: "PREPLADDER-4" },
    { file: "Plugins/entp4.html", fileName: "ENT", platformName: "PREPLADDER-4" },
    { file: "Plugins/opthalmologyp4.html", fileName: "OPTHALMOLOGY", platformName: "PREPLADDER-4" },
    { file: "Plugins/pediatricsp4.html", fileName: "PEDIATRICS", platformName: "PREPLADDER-4" },
    { file: "Plugins/radiologyp4.html", fileName: "RADIOLOGY", platformName: "PREPLADDER-4" },
    { file: "Plugins/medicinep4.html", fileName: "MEDICINE", platformName: "PREPLADDER-4" },
    { file: "Plugins/surgeryp4.html", fileName: "SURGERY", platformName: "PREPLADDER-4" },
    { file: "Plugins/anesthesiap4.html", fileName: "ANESTHESIA", platformName: "PREPLADDER-4" },
    { file: "Plugins/orthopedicsp4.html", fileName: "ORTHOPEDICS", platformName: "PREPLADDER-4" },
    { file: "Plugins/psychiatryp4.html", fileName: "PSYCHIATRY", platformName: "PREPLADDER-4" },
    { file: "Plugins/obgyp4.html", fileName: "OBGY", platformName: "PREPLADDER-4" },
    { file: "Plugins/dermatologyp4.html", fileName: "DERMATOLOGY", platformName: "PREPLADDER-4" },
    { file: "Plugins/anatomypw.html", fileName: "ANATOMY", platformName: "PHYSICSWALA" },
    { file: "Plugins/biochemestrypw.html", fileName: "BIOCHEMESTRY", platformName: "PHYSICSWALA" },
    { file: "Plugins/physiologypw.html", fileName: "PHYSIOLOGY", platformName: "PHYSICSWALA" },
    { file: "Plugins/pharmacologypw.html", fileName: "PHARMACOLOGY", platformName: "PHYSICSWALA" },
    { file: "Plugins/pathologypw.html", fileName: "PATHOLOGY", platformName: "PHYSICSWALA" },
    { file: "Plugins/microbiologypw.html", fileName: "MICROBIOLOGY", platformName: "PHYSICSWALA" },
    { file: "Plugins/rrpw.html", fileName: "RR", platformName: "PHYSICSWALA" },
    { file: "Plugins/clinicalswp.html", fileName: "CLINICALS", platformName: "PHYSICSWALA" },
    { file: "Plugins/psmpw.html", fileName: "PSM", platformName: "PHYSICSWALA" },
    { file: "Plugins/entpw.html", fileName: "ENT", platformName: "PHYSICSWALA" },
    { file: "Plugins/opthalmologypw.html", fileName: "OPTHALMOLOGY", platformName: "PHYSICSWALA" },
    { file: "Plugins/pediatricspw.html", fileName: "PEDIATRICS", platformName: "PHYSICSWALA" },
    { file: "Plugins/radiologypw.html", fileName: "RADIOLOGY", platformName: "PHYSICSWALA" },
    { file: "Plugins/medicinepw.html", fileName: "MEDICINE", platformName: "PHYSICSWALA" },
    { file: "Plugins/surgerypw.html", fileName: "SURGERY", platformName: "PHYSICSWALA" },
    { file: "Plugins/anesthesiapw.html", fileName: "ANESTHESIA", platformName: "PHYSICSWALA" },
    { file: "Plugins/orthopedicspw.html", fileName: "ORTHOPEDICS", platformName: "PHYSICSWALA" },
    { file: "Plugins/psychiatrypw.html", fileName: "PSYCHIATRY", platformName: "PHYSICSWALA" },
    { file: "Plugins/obgypw.html", fileName: "OBGY", platformName: "PHYSICSWALA" },
    { file: "Plugins/dermatologypw.html", fileName: "DERMATOLOGY", platformName: "PHYSICSWALA" },
    { file: "Plugins/anatomym.html", fileName: "ANATOMY", platformName: "MARROW" },
    { file: "Plugins/biochemestrym.html", fileName: "BIOCHEMESTRY", platformName: "MARROW" },
    { file: "Plugins/physiologym.html", fileName: "PHYSIOLOGY", platformName: "MARROW" },
    { file: "Plugins/pharmacologym.html", fileName: "PHARMACOLOGY", platformName: "MARROW" },
    { file: "Plugins/pathologym.html", fileName: "PATHOLOGY", platformName: "MARROW" },
    { file: "Plugins/microbiologym.html", fileName: "MICROBIOLOGY", platformName: "MARROW" },
    { file: "Plugins/rrm.html", fileName: "RR", platformName: "MARROW" },
    { file: "Plugins/clinicalsm.html", fileName: "CLINICALS", platformName: "MARROW" },
    { file: "Plugins/psmm.html", fileName: "PSM", platformName: "MARROW" },
    { file: "Plugins/entm.html", fileName: "ENT", platformName: "MARROW" },
    { file: "Plugins/opthalmologym.html", fileName: "OPTHALMOLOGY", platformName: "MARROW" },
    { file: "Plugins/pediatricsm.html", fileName: "PEDIATRICS", platformName: "MARROW" },
    { file: "Plugins/radiologym.html", fileName: "RADIOLOGY", platformName: "MARROW" },
    { file: "Plugins/medicinem.html", fileName: "MEDICINE", platformName: "MARROW" },
    { file: "Plugins/surgerym.html", fileName: "SURGERY", platformName: "MARROW" },
    { file: "Plugins/anesthesiam.html", fileName: "ANESTHESIA", platformName: "MARROW" },
    { file: "Plugins/orthopedicsm.html", fileName: "ORTHOPEDICS", platformName: "MARROW" },
    { file: "Plugins/psychiatrym.html", fileName: "PSYCHIATRY", platformName: "MARROW" },
    { file: "Plugins/obgym.html", fileName: "OBGY", platformName: "MARROW" },
    { file: "Plugins/dermatologym.html", fileName: "DERMATOLOGY", platformName: "MARROW" },
    { file: "Plugins/anatomydoc.html", fileName: "ANATOMY", platformName: "DOCTUTORAL" },
    { file: "Plugins/biochemestrydoc.html", fileName: "BIOCHEMESTRY", platformName: "DOCTUTORAL" },
    { file: "Plugins/physiologydoc.html", fileName: "PHYSIOLOGY", platformName: "DOCTUTORAL" },
    { file: "Plugins/pharmacologydoc.html", fileName: "PHARMACOLOGY", platformName: "DOCTUTORAL" },
    { file: "Plugins/pathologydoc.html", fileName: "PATHOLOGY", platformName: "DOCTUTORAL" },
    { file: "Plugins/microbiologydoc.html", fileName: "MICROBIOLOGY", platformName: "DOCTUTORAL" },
    { file: "Plugins/rrdoc.html", fileName: "RR", platformName: "DOCTUTORAL" },
    { file: "Plugins/clinicalsdoc.html", fileName: "CLINICALS", platformName: "DOCTUTORAL" },
    { file: "Plugins/psmdoc.html", fileName: "PSM", platformName: "DOCTUTORAL" },
    { file: "Plugins/entdoc.html", fileName: "ENT", platformName: "DOCTUTORAL" },
    { file: "Plugins/opthalmologydoc.html", fileName: "OPTHALMOLOGY", platformName: "DOCTUTORAL" },
    { file: "Plugins/pediatricsdoc.html", fileName: "PEDIATRICS", platformName: "DOCTUTORAL" },
    { file: "Plugins/radiologydoc.html", fileName: "RADIOLOGY", platformName: "DOCTUTORAL" },
    { file: "Plugins/medicinedoc.html", fileName: "MEDICINE", platformName: "DOCTUTORAL" },
    { file: "Plugins/surgerydoc.html", fileName: "SURGERY", platformName: "DOCTUTORAL" },
    { file: "Plugins/anesthesiadoc.html", fileName: "ANESTHESIA", platformName: "DOCTUTORAL" },
    { file: "Plugins/orthopedicsdoc.html", fileName: "ORTHOPEDICS", platformName: "DOCTUTORAL" },
    { file: "Plugins/psychiatrydoc.html", fileName: "PSYCHIATRY", platformName: "DOCTUTORAL" },
    { file: "Plugins/obgydoc.html", fileName: "OBGY", platformName: "DOCTUTORAL" },
    { file: "Plugins/dermatologydoc.html", fileName: "DERMATOLOGY", platformName: "DOCTUTORAL" },
    { file: "Plugins/anatomydame.html", fileName: "ANATOMY", platformName: "DAMS ENGLISH" },
    { file: "Plugins/biochemestrydame.html", fileName: "BIOCHEMESTRY", platformName: "DAMS ENGLISH" },
    { file: "Plugins/physiologydame.html", fileName: "PHYSIOLOGY", platformName: "DAMS ENGLISH" },
    { file: "Plugins/pharmacologydame.html", fileName: "PHARMACOLOGY", platformName: "DAMS ENGLISH" },
    { file: "Plugins/pathologydame.html", fileName: "PATHOLOGY", platformName: "DAMS ENGLISH" },
    { file: "Plugins/microbiologydame.html", fileName: "MICROBIOLOGY", platformName: "DAMS ENGLISH" },
    { file: "Plugins/rrdame.html", fileName: "RR", platformName: "DAMS ENGLISH" },
    { file: "Plugins/clinicalsdame.html", fileName: "CLINICALS", platformName: "DAMS ENGLISH" },
    { file: "Plugins/psmdame.html", fileName: "PSM", platformName: "DAMS ENGLISH" },
    { file: "Plugins/entdame.html", fileName: "ENT", platformName: "DAMS ENGLISH" },
    { file: "Plugins/opthalmologydame.html", fileName: "OPTHALMOLOGY", platformName: "DAMS ENGLISH" },
    { file: "Plugins/pediatricsdame.html", fileName: "PEDIATRICS", platformName: "DAMS ENGLISH" },
    { file: "Plugins/radiologydame.html", fileName: "RADIOLOGY", platformName: "DAMS ENGLISH" },
    { file: "Plugins/medicinedame.html", fileName: "MEDICINE", platformName: "DAMS ENGLISH" },
    { file: "Plugins/surgerydame.html", fileName: "SURGERY", platformName: "DAMS ENGLISH" },
    { file: "Plugins/anesthesiadame.html", fileName: "ANESTHESIA", platformName: "DAMS ENGLISH" },
    { file: "Plugins/orthopedicsdame.html", fileName: "ORTHOPEDICS", platformName: "DAMS ENGLISH" },
    { file: "Plugins/psychiatrydame.html", fileName: "PSYCHIATRY", platformName: "DAMS ENGLISH" },
    { file: "Plugins/obgydame.html", fileName: "OBGY", platformName: "DAMS ENGLISH" },
    { file: "Plugins/dermatologydame.html", fileName: "DERMATOLOGY", platformName: "DAMS ENGLISH" },
    { file: "Plugins/anatomydamh.html", fileName: "ANATOMY", platformName: "DAMS HINGLISH" },
    { file: "Plugins/biochemestrydamh.html", fileName: "BIOCHEMESTRY", platformName: "DAMS HINGLISH" },
    { file: "Plugins/physiologydamh.html", fileName: "PHYSIOLOGY", platformName: "DAMS HINGLISH" },
    { file: "Plugins/pharmacologydamh.html", fileName: "PHARMACOLOGY", platformName: "DAMS HINGLISH" },
    { file: "Plugins/pathologydamh.html", fileName: "PATHOLOGY", platformName: "DAMS HINGLISH" },
    { file: "Plugins/microbiologydamh.html", fileName: "MICROBIOLOGY", platformName: "DAMS HINGLISH" },
    { file: "Plugins/rrdamh.html", fileName: "RR", platformName: "DAMS HINGLISH" },
    { file: "Plugins/clinicalsdamh.html", fileName: "CLINICALS", platformName: "DAMS HINGLISH" },
    { file: "Plugins/psmdamh.html", fileName: "PSM", platformName: "DAMS HINGLISH" },
    { file: "Plugins/entdamh.html", fileName: "ENT", platformName: "DAMS HINGLISH" },
    { file: "Plugins/opthalmologydamh.html", fileName: "OPTHALMOLOGY", platformName: "DAMS HINGLISH" },
    { file: "Plugins/pediatricsdamh.html", fileName: "PEDIATRICS", platformName: "DAMS HINGLISH" },
    { file: "Plugins/radiologydamh.html", fileName: "RADIOLOGY", platformName: "DAMS HINGLISH" },
    { file: "Plugins/medicinedamh.html", fileName: "MEDICINE", platformName: "DAMS HINGLISH" },
    { file: "Plugins/surgerydamh.html", fileName: "SURGERY", platformName: "DAMS HINGLISH" },
    { file: "Plugins/anesthesiadamh.html", fileName: "ANESTHESIA", platformName: "DAMS HINGLISH" },
    { file: "Plugins/orthopedicsdamh.html", fileName: "ORTHOPEDICS", platformName: "DAMS HINGLISH" },
    { file: "Plugins/psychiatrydamh.html", fileName: "PSYCHIATRY", platformName: "DAMS HINGLISH" },
    { file: "Plugins/obgydamh.html", fileName: "OBGY", platformName: "DAMS HINGLISH" },
    { file: "Plugins/dermatologydamh.html", fileName: "DERMATOLOGY", platformName: "DAMS HINGLISH" },
    // Repeat this pattern for any additional files
];






  

    // Fetch all HTML files and process them
    Promise.all(htmlFiles.map(fetchAndProcessFile))
        .then(allKeywordsAndUrls => {
            // Combine keywords and URLs from all files
            const keywordsAndUrls = allKeywordsAndUrls.flat();

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
        .catch(error => console.error("Error fetching and processing HTML files:", error));
});

function fetchAndProcessFile(fileInfo) {
    const { file, fileName, platformName } = fileInfo;

    return fetchFileContent(file)
        .then(htmlContent => {
            const keywordsAndUrls = extractKeywordsAndUrls(htmlContent);

            // Append fileName and platformName to each entry in keywordsAndUrls
            return keywordsAndUrls.map(entry => ({ ...entry, fileName, platformName }));
        })
        .catch(error => {
            console.error(`Error fetching or processing ${file}:`, error);
            return []; // Return an empty array to not disrupt Promise.all
        });
}

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
        
        // Combine keyword, fileName, and platformName
        const displayText = `${entry.keyword} | ${entry.fileName} | ${entry.platformName}`;
        listItem.textContent = displayText;

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
