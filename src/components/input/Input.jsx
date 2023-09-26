// Привіт

// За допомогою create-react-app або vite потрібно розгорнути проект.

// А також створити простий компонент, на прикладі Button або Input. Буде добре, якщо використаєте props.

// В компонент Input потрібно передати через props метод onChange, який буде у консоль виводити значення, введене користувачем.

const Input = ({ onChange }) => {
    const Change = (event) => {
        console.log(`Your value is ${event.target.value}`);
    }
    return (
        <input type="text" onChange={Change} />
    );
};

export {Input};