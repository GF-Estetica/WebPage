document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.querySelector('.gallery-grid');

    async function fetchInstagramImages() {
        const accessToken = 'TU_TOKEN_DE_ACCESO'; // Reemplaza esto con tu token de acceso
        const userId = 'TU_USER_ID'; // Reemplaza esto con tu ID de usuario

        const url = `https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url&access_token=${accessToken}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            createGalleryItems(data.data);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    }

    function createGalleryItems(images) {
        images.forEach(image => {
            if (image.media_type === 'IMAGE') {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';
                const img = document.createElement('img');
                img.src = image.media_url;
                img.alt = image.caption || 'Imagen de Instagram';
                galleryItem.appendChild(img);
                galleryContainer.appendChild(galleryItem);
            }
        });
    }

    fetchInstagramImages();
});
