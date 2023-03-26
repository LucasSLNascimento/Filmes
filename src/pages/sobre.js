import React from 'react';
import Footer from './../components/Footer/index';

function Sobre() {

    return (
        <div class='conteiner'>
            <div class='col'>
                <div class="col-8">
                    <p >Olá usuário.</p>
                    <p>Você está acessando um trabalho da faculdade positivo que tem como objetivo assistir filmes e séries</p>
                </div>
                
                <div> 
                    <img src={'/assets/images/logoPositivo.jpg'} alt={'Logo'} className="card-img-top" />
                </div>
            </div>
        </div>
    )
}

export default Sobre;