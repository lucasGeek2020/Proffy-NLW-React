import React from 'react';
import whatszapIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/62662983?s=460&u=6464dca873f85819f4ba510d8ab619096894b6d3&v=4" alt="Lucas Meira" />
                <div>
                    <strong>Lucas Meira</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <br /> <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis sequi repellat aperiam, nesciunt rerum doloribus vel itaque, eos laborum quo corporis, explicabo adipisci! Saepe sed esse laboriosam. Architecto, aliquid tempore!

        </p>
            <footer>
                <p>
                    Preço/Hora
            <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatszapIcon} alt="whatszap icone" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;