<script>
function loadcontent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById("body").innerHTML = data;
        })
        .catch(error => {
            document.getElementById("body").innerHTML = "<h2>Error</h2><p>Content could not be loaded.</p>";
            console.error("Error loading page:", error);
        })
}
</script>