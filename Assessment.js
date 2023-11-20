document.addEventListener('DOMContentLoaded', function() {
    const memeBlock = document.querySelector('#meme-block');
    const form = document.querySelector('#meme-generator');
    const input1 = document.querySelector('#img-url');
    const input2 = document.querySelector('#upper-text');
    const input3 = document.querySelector('#lower-text');


    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const imageUrl = input1.value;
        const upperText = input2.value;
        const lowerText = input3.value;
        
        if (imageUrl && upperText && lowerText) {
            createMemeBlock(imageUrl, upperText, lowerText);
        }

        input1.value = '';
        input2.value = '';
        input3.value = '';
    });

    function createMemeBlock(imageUrl, upperText, lowerText) {
        const newMemeBlock = document.createElement('div');
        const newImage = document.createElement('img');
        const newUpperText = document.createElement('div');
        const newLowerText = document.createElement('div');
        const overlay = document.createElement('div');

        newImage.src = imageUrl;
        newUpperText.textContent = upperText;
        newLowerText.textContent = lowerText;

        newUpperText.className = 'upper-text';
        newLowerText.className = 'lower-text';
        overlay.className = 'overlay';
        overlay.textContent = 'X';

        newMemeBlock.classList.add('meme-block');
        newMemeBlock.appendChild(newImage);
        newMemeBlock.appendChild(newUpperText);
        newMemeBlock.appendChild(newLowerText);
        newMemeBlock.appendChild(overlay);
        memeBlock.appendChild(newMemeBlock);

        newMemeBlock.addEventListener('mouseover', function() {
                overlay.style.opacity = 1;
        });
    
        newMemeBlock.addEventListener('mouseout', function() { 
                overlay.style.opacity = 0;
        });

        newMemeBlock.addEventListener('click', function(e) {
            if (e.target.classList.contains('overlay')) {
                newMemeBlock.remove();
            }   
        });
    }
});
