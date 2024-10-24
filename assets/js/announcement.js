const announcementData = {
  announcement: [
    {
      heading: "Delhi! We’d love to see you at the following event:",
      imagePath: "https://www.cylsys.com/assets/images/announcement/announcement.jpeg",
      url: "https://www.cylsys.com/announcement-details",
      startDate: "2024-10-16T00:00:00Z",
      expiryDate: "2024-10-25T23:59:59Z",
    },
    {
      heading: "Mumbai! We’d love to see you at the following event:",
      imagePath: "https://www.cylsys.com/assets/images/announcement/announcement.jpeg",
      url: "https://www.cylsys.com/announcement-details",
      startDate: "2024-10-16T00:00:00Z",
      expiryDate: "2024-10-25T23:59:59Z",
    },
  ],
};

function populateCarousel() {
  const carouselInner = document.querySelector(".carousel-inner");
  const currentDate = new Date();
  const fragment = document.createDocumentFragment(); // Use fragment for efficient DOM updates

  // Filter active announcements only
  const activeAnnouncements = announcementData.announcement.filter((item) => {
    const startDate = new Date(item.startDate);
    const expiryDate = new Date(item.expiryDate);
    return currentDate >= startDate && currentDate <= expiryDate;
  });

  activeAnnouncements.forEach((item, index) => {
    const carouselItem = document.createElement("div");
    carouselItem.className = `carousel-item ${index === 0 ? "active" : ""}`;

    carouselItem.innerHTML = `
      <a href="${item.url}" target="_blank">
        <h3>${item.heading}</h3>
        <img
          src="${item.imagePath}"
          class="d-block w-100"
          alt="Announcement"
          loading="lazy"
        />
      </a>
    `;

    fragment.appendChild(carouselItem);
  });

  carouselInner.appendChild(fragment); // Batch update the DOM once

  if (activeAnnouncements.length > 0) {
    new bootstrap.Modal(document.getElementById("announcementModal")).show();
  }
}

// Use requestIdleCallback if available, otherwise fallback to DOMContentLoaded
if ('requestIdleCallback' in window) {
  requestIdleCallback(populateCarousel);
} else {
  document.addEventListener('DOMContentLoaded', populateCarousel);
}