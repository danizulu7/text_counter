let currentLang = 'en';

let changeLang = () => {
   
    if(currentLang === 'en'){
        document.querySelector('.textContainer h1').textContent = 'Contador de Texto';
        document.querySelector('.tag-words p').textContent = 'Palabras: ';
        document.querySelector('.tag-numbers p').textContent = 'Números: ';
        document.querySelector('.tag-sum p').textContent = 'Suma de Números: ';
        document.querySelector('.tag-counter p').textContent = 'Caracteres: ';
        document.querySelector('.tag-withoutSpaces p').textContent = 'Caracteres sin espacios: ';
        document.querySelector('.tag-average p').textContent = 'Longitud promedio: ';
        document.querySelector('#clearButton').textContent = 'Limpiar Texto';
        currentLang = 'es';
    } else {
        document.querySelector('.textContainer h1').textContent = 'Text Counter';
        document.querySelector('.tag-words p').textContent = 'Words: ';
        document.querySelector('.tag-numbers p').textContent = 'Numbers: ';
        document.querySelector('.tag-sum p').textContent = 'Sum of Numbers: ';
        document.querySelector('.tag-counter p').textContent = 'Characters: ';
        document.querySelector('.tag-withoutSpaces p').textContent = 'Characters without spaces: ';
        document.querySelector('.tag-average p').textContent = 'Average length: ';
        document.querySelector('#clearButton').textContent = 'Clear Text';
        currentLang = 'en';
    }
}