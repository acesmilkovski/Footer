    document.addEventListener('DOMContentLoaded', function() {
            const picArray = [
                {
                    src: "./fss/Screenshot from 2025-02-03 20-18-40.png",
                    href: "https://math-mkd.netlify.app/"
                },
                {
                    src: "./fss/Screenshot from 2025-11-11 23-53-02.png",
                    href: "https://vesti-mkd.netlify.app/"
                },
                {
                    src: "./fss/Screenshot from 2025-11-11 23-54-54.png",
                    href: "https://cam-mkd.netlify.app/"
                },
                {
                    src: "./fss/Screenshot from 2025-11-11 23-55-17.png",
                    href: "https://geo-mkd.netlify.app/"
                }
            ];

            const carouselTrack = document.getElementById('carouselTrack');

            // Duplicate the array to create seamless looping
            const extendedArray = [...picArray, ...picArray];

            // Create carousel items
            extendedArray.forEach((item) => {
                const carouselItem = document.createElement('div');
                carouselItem.className = 'carousel-item';
                
                const link = document.createElement('a');
                link.className = 'carousel-link';
                link.href = item.href;
                link.target = '_blank';
                
                const img = document.createElement('img');
                img.className = 'carousel-img';
                img.src = item.src;
                img.alt = "Project screenshot";
                
                link.appendChild(img);
                carouselItem.appendChild(link);
                carouselTrack.appendChild(carouselItem);
            });
        });
