document.addEventListener('DOMContentLoaded', function() {  
  const imageNames = [
    "i001", "i002", "i003", "i004", "i005", "i006", "i007", "i008", "i009", 
    "i010", "i011"
  ];

  const newCategoryImages = [
    "p1", "p2", "p3"
  ];

  const imageGallery = document.getElementById('image-gallery');
  const newCategoryGallery = document.getElementById('new-category-gallery');  // عنصر الكاتيجوري الجديد

  // إنشاء الصور وعرضها في الـ "image-gallery"
  imageNames.forEach(name => {
    const imgElement = document.createElement('img');
    imgElement.src = `New folder/${name}.jpg`;  // المسار النسبي للصور
    imgElement.alt = `صورة ${name}`;
    imgElement.addEventListener('click', openModal);  // إضافة حدث عند النقر على الصورة
    imageGallery.appendChild(imgElement);
  });

  // إنشاء الصور وعرضها في الـ "new-category-gallery"
  newCategoryImages.forEach(name => {
    const imgElement = document.createElement('img');
    imgElement.src = `New folder/${name}.jpg`;  // المسار النسبي للصور
    imgElement.alt = `صورة ${name}`;
    imgElement.addEventListener('click', openModal);  // إضافة حدث عند النقر على الصورة
    newCategoryGallery.appendChild(imgElement);
  });

  // نافذة العرض الكبير
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.getElementById('close');
  const closeImageBtn = document.getElementById('close-image');
  const zoomInBtn = document.getElementById('zoom-in');
  const zoomOutBtn = document.getElementById('zoom-out');
  const resetSizeBtn = document.getElementById('reset-size');

  let currentZoom = 1;

  // فتح النافذة عند النقر على الصورة
  function openModal(event) {
    modal.style.display = 'block';
    modalImg.src = event.target.src;
    currentZoom = 1;
    modalImg.style.transform = `scale(${currentZoom})`;
  }

  // إغلاق النافذة
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // إغلاق الصورة باستخدام الزر الجديد
  closeImageBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // تكبير الصورة
  zoomInBtn.addEventListener('click', () => {
    currentZoom += 0.1;
    modalImg.style.transform = `scale(${currentZoom})`;
  });

  // تصغير الصورة
  zoomOutBtn.addEventListener('click', () => {
    if (currentZoom > 0.1) {
      currentZoom -= 0.1;
      modalImg.style.transform = `scale(${currentZoom})`;
    }
  });

  // إعادة الحجم الأصلي
  resetSizeBtn.addEventListener('click', () => {
    currentZoom = 1;
    modalImg.style.transform = `scale(${currentZoom})`;
  });
});

// ! control image


document.addEventListener('DOMContentLoaded', function() { 
  // const imageNames = [
  //   "i001", "i002", "i003", "i004", "i005", "i006", "i007", "i008", "i009", 
  //   "i010", "i011", "i012", "i013", "i014", "i015", "i016", "i017", "i018", 
  //   "i019", "i020", "i021", "i022", "i023", "i024", "i025", "i026", "i027", 
  //   "i028", "i029", "i030", "i031", "i032", "i033", "i034"
  // ];

  // const newCategoryImages = [
  //   "p1", "p2", "p3", "p4", "p5", "p6", "p7", "i030", "i031", "i032", "i033"
  // ];

  const imageGallery = document.getElementById('image-gallery');
  const newCategoryGallery = document.getElementById('new-category-gallery');

  // Create images for the "image-gallery"
  imageNames.forEach(name => {
    const imgElement = document.createElement('img');
    imgElement.src = `New folder/${name}.jpg`;
    imgElement.alt = `صورة ${name}`;
    imgElement.addEventListener('click', openModal);
    imageGallery.appendChild(imgElement);
  });

  // Create images for the "new-category-gallery"
  newCategoryImages.forEach(name => {
    const imgElement = document.createElement('img');
    imgElement.src = `New folder/${name}.jpg`;
    imgElement.alt = `صورة ${name}`;
    imgElement.addEventListener('click', openModal);
    newCategoryGallery.appendChild(imgElement);
  });

  // Open Modal
  function openModal(event) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    modal.style.display = "block";
    modalImg.src = event.target.src;

    // Zoom-in functionality
    let zoomLevel = 1;
    const zoomInButton = document.getElementById("zoom-in");
    const zoomOutButton = document.getElementById("zoom-out");
    const resetSizeButton = document.getElementById("reset-size");

    zoomInButton.addEventListener('click', function() {
      zoomLevel += 0.1;
      modalImg.style.transform = `scale(${zoomLevel})`;
    });

    zoomOutButton.addEventListener('click', function() {
      if (zoomLevel > 0.1) {
        zoomLevel -= 0.1;
        modalImg.style.transform = `scale(${zoomLevel})`;
      }
    });

    resetSizeButton.addEventListener('click', function() {
      zoomLevel = 1;
      modalImg.style.transform = `scale(${zoomLevel})`;
    });
  }

  // Close Modal
  const closeBtn = document.getElementById("close");
  closeBtn.addEventListener('click', function() {
    document.getElementById("modal").style.display = "none";
  });

  // Close image button inside modal
  const closeImageBtn = document.getElementById("close-image");
  closeImageBtn.addEventListener('click', function() {
    document.getElementById("modal").style.display = "none";
  });
});
