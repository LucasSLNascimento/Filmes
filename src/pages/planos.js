import React from 'react';

const planos = [{
    'nivel': 'básico',
    'beneficio1': 'Acesso a filmes e séries',
    'beneficio2': 'Notificação de uma nova série ou filme',
    'preco': 'R$ 25.00'
},
{
    'nivel': 'gold',
    'beneficio1': 'Acesso a filmes e séries',
    'beneficio2': 'Notificação de uma nova série ou filme',
    'beneficio3': 'Plano famíliar',
    'preco': 'R$ 50.00'

},
{
    'nivel': 'diamond',
    'beneficio1': 'Acesso a filmes e séries',
    'beneficio2': 'Notificação de uma nova série ou filme',
    'beneficio3': 'Plano famíliar',
    'beneficio4': 'Acesso antecipado a séries e filmes',
    'preco': 'R$ 75.00'
}]

function Planos() {
    return (

        <div className="container text-center">
            <div class="custom-title p-3 pb-md-4 mx-auto text-center">
                <h1 class="display-5 fw-normal">Planos</h1>
            </div>

            <div class="row">
                {planos.map((plano, i) => (
                    <div className="col" key={i.toString()}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{plano.nivel} ({plano.preco}) </h5>
                                <p>{plano.beneficio1}</p>
                                <p>{plano.beneficio2}</p>
                                <p>{plano.beneficio3}</p>
                                <p>{plano.beneficio4}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Planos;