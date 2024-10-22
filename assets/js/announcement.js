
window.onload = function () {
  const myModal = new bootstrap.Modal(document.getElementById("announcement"));

  $.getJSON("announcement.json", function (data) {
    if (data.announcement.length > 0) {
      const announcementData = data.announcement[0]; // Using the first announcement
      
      // Get current date and convert dates from JSON to Date objects
      const now = new Date();
      const startDate = new Date(announcementData.startDate);
      const expiryDate = new Date(announcementData.expiryDate);

      // Check if the announcement is active
      if (now >= startDate && now <= expiryDate) {
        // Set the image path
        if (announcementData.imagePath) {
          $("#modalImage").attr("src", announcementData.imagePath);
        } else {
          console.error("Image path is missing.");
          return;
        }

        // If URL exists, make the image clickable
        if (announcementData.url) {
          $("#modalImage").wrap(`<a href="${announcementData.url}" target="_blank"></a>`);
        }

        // Show the modal
        myModal.show();
      } else {
        console.log("No active announcements at this time.");
      }
    } else {
      console.log("No announcements available.");
    }
  }).fail(function () {
    console.error("Failed to load announcement data.");
  });
};
