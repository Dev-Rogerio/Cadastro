import React from 'react'
import Seta from './imgs/setad.png'
import Clouse from './imgs/clouse.png'
import Somar from './imgs/soma.png'

export default function cadevento(){
    return(
        <>
        <div className='container'/>
        <h1 className='h1_cadTipoEvento'>Cadastro de Tipo Evento</h1>
        <p className='p_dashboard'>Dashboard</p>
        <img  className='setap' src={Seta}/>
        <img className='setac' src={Seta}/>
        <img className='clouse' src={Clouse}/>
        <img className='soma' src={Somar}/>

        <fieldset className='fil'>
        <legend>Componentes</legend>
        <label>Sigla</label>
        <input className='b_siglac' type='text'/>
        <label className='l_descricao2'>Descrição</label>
        <input className='b_descricao2' type='text'/>
        

        </fieldset>
        
        <p className='p_cadastro'>Cadastro</p>
        <p className='p_tipoEvento'>Tipo de Evento</p>
        <div className="traco"/>
        <label className='l_sigla'>Sigla</label>
        <input className='b_sigla' type="text" name='fnome'/>
        <label className='l_descricao'>Descrição</label>
        <input className='b_descricao' type='text' name='fdescricao'/>

        <div className="center">
            <input className='input' type='checkbox' name='' value=""/>
        </div>
        <p className='eventof'>Gerar evento financeiro</p>

        <input className='input2' type='checkbox' neme='' value=''/>
        <label className='eventoc'>Gerar evento contábil</label>
        <input className='salvar' type='submit' value='Salvar'/>
        <input className='cancelar' type='submit' value='Cancelar'/>
        </>
    );
}