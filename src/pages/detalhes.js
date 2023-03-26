import React from 'react';
import Footer from './../components/Footer/index';
import { useParams } from 'react-router-dom';

const filmes = [{
    "nome": "Vingadores",
    "duracao": "2H30",
    "foto": "vingadores.png",
    "ano": 2010,
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel com super-heróis",
    "nota": 5
},
{
    "nome": "Vingadores 2",
    "duracao": "2H30",
    "foto": "vingadores.png",
    "ano": 2014,
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel com super-heróis",
    "nota": 5
},
{
    "nome": "Vingadores 3",
    "duracao": "2H30",
    "foto": "vingadores.png",
    "ano": 2015,
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel com super-heróis",
    "nota": 5
}
]


function Detalhes() {
    const { filme } = useParams();
    return (
        <div>
            {filmes.map((movie, i) => {
                if (filme == movie.nome) {
                    return (
                        <div class="container">
                            <div class="row">
                                <div class="col-8">
                                    <img src={'/assets/images/' + movie.foto} alt={movie.nome} className="card-img-top" />
                                </div>

                                <div className='col'>
                                    <div class="card">
                                        <div class="card-header">
                                            Filme: {movie.nome}
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">duracao: {movie.duracao}</li>
                                            <li class="list-group-item">Ano: {movie.ano}</li>
                                            <li class="list-group-item">genero: {movie.genero}</li>
                                            <li class="list-group-item">Sinopse: {movie.descricao}</li>
                                            <li class="list-group-item">Pontuação: {movie.nota}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                } else if (filme == movie.nome) {
                    return (
                        <div class="container">
                            <div class="row">
                                <div class="col-8">
                                    <img src={'/assets/images/' + movie.foto} alt={movie.nome} className="card-img-top" />
                                </div>

                                <div className='col'>
                                    <div class="card">
                                        <div class="card-header">
                                            Filme: {movie.nome}
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">duracao: {movie.duracao}</li>
                                            <li class="list-group-item">Ano: {movie.ano}</li>
                                            <li class="list-group-item">genero: {movie.genero}</li>
                                            <li class="list-group-item">Sinopse: {movie.descricao}</li>
                                            <li class="list-group-item">Pontuação: {movie.nota}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div class="container">
                            <div class="row">
                                <div class="col-8">
                                    <img src={'/assets/images/' + movie.foto} alt={movie.nome} className="card-img-top" />
                                </div>

                                <div className='col'>
                                    <div class="card">
                                        <div class="card-header">
                                            Filme: {movie.nome}
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">duracao: {movie.duracao}</li>
                                            <li class="list-group-item">Ano: {movie.ano}</li>
                                            <li class="list-group-item">genero: {movie.genero}</li>
                                            <li class="list-group-item">Sinopse: {movie.descricao}</li>
                                            <li class="list-group-item">Pontuação: {movie.nota}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
            <Footer />
        </div >
    )
}

export default Detalhes;