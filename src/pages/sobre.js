import React from 'react';
import Footer from './../components/Footer/index';
import { useParams } from 'react-router-dom';

function Sobre() {
    const { name } = useParams();

    return (
        <div>
            <div class='row'>
                <p class="col-8">Olá {name}.</p>
                <p>Você está acessando um trabalho da faculdade positivo que tem como objetivo assistir filmes e séries</p>
                <div class="col-8">
                    <img src={'/assets/images/logoPositivo.jpg'} alt={'Logo'} className="card-img-top" />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Sobre;