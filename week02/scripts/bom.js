const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');



button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        let scripture = document.createElement('li');
        let deleteButton = document.createElement('button')

        scripture.textContent = input.value;
        deleteButton.textContent = '❌';

        scripture.append(deleteButton);

        list.append(scripture);

        deleteButton.addEventListener('click', function() {
            list.removeChild(scripture);
            input.focus();
        });

        input.value = '';
        input.focus();
    }
});

