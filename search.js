document.addEventListener("DOMContentLoaded", function () {
    // List of HTML files to include with associated file names and platform names
    const htmlFiles = [
        { file: "Plugins/anesthesiap.html", fileName: "ANESTHESIA", platformName: "PREPLADDER-5" },
        { file: "Plugins/dermatologyp.html", fileName: "DERMATOLOGY", platformName: "CEREBELLUM" },
        { file: "Plugins/anatomyp.html", fileName: "ANATOMY", platformName: "PLATFORM_X" }
        // Add other files as needed
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
        const rawHref = anchor.getAttribute("data-href");
        const url = rawHref.replace('{{botUsername}}', 'testingclonepavo_bot'); // Replace botUsername

        return {
            keyword: anchor.textContent.toLowerCase(),
            url: url
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
