import { useState } from 'react';
import data from './data';
import { nanoid } from 'nanoid';

const App = () => {
  // States & Const
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  // Functions
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);

    setText(data.slice(0, amount));
  };

  // Return
  return (
    <section className='section-center'>
      <h4>tired of boring lorem ipsum?</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs : </label>
        <input
          type='number'
          name='amount'
          id='amount'
          min='1'
          max='8'
          step='1'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className='btn' type='submit'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item, nanoid) => (
          <p key={nanoid}>{item}</p>
        ))}
      </article>
    </section>
  );
};
export default App;
