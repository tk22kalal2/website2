// Prevent context menu (right-click)
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });

        // Detect and prevent Print Screen key
        document.addEventListener('keydown', function(event) {
            if (event.key === "PrintScreen") {
                event.preventDefault();
                alert("Screenshots are not allowed!");
            }
        });

        document.addEventListener('keyup', function(event) {
            if (event.key === "PrintScreen") {
                navigator.clipboard.writeText('')
                .then(() => {
                    alert('Screenshots are not allowed!');
                });
            }
        });

        // Detect visibility change (e.g., user switches tabs)
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                alert("Screenshots are not allowed!");
            }
        });

        // Detect when the window loses focus (e.g., user switches applications)
        window.addEventListener('blur', function() {
            alert("Screenshots are not allowed!");
        });

        // Prevent screen recording (basic attempt)
        const blackOverlay = document.createElement('div');
        blackOverlay.style.position = 'fixed';
        blackOverlay.style.top = '0';
        blackOverlay.style.left = '0';
        blackOverlay.style.width = '100%';
        blackOverlay.style.height = '100%';
        blackOverlay.style.backgroundColor = 'black';
        blackOverlay.style.zIndex = '10000';
        blackOverlay.style.display = 'none';
        document.body.appendChild(blackOverlay);

        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                blackOverlay.style.display = 'block';
            } else {
                blackOverlay.style.display = 'none';
            }
        });

        window.addEventListener('blur', function() {
            blackOverlay.style.display = 'block';
        });

        window.addEventListener('focus', function() {
            blackOverlay.style.display = 'none';
        });
