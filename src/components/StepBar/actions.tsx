export const typeForm = (handleForm: any) => {
  
  const paymentType = [
    { payment: 'Depósito na Conta do Autor',
      inputs: [
        { 
          id: 'nomeBeneficiario',
          name: 'nomeBeneficiario',
          disabled: true,
          onChange: handleForm
        },
        { 
          id: 'cpfBeneficiario', 
          name: 'cpfBeneficiario', 
          disabled: false,
          onChange: handleForm
        },
        { 
          id: 'bancoBeneficiario', 
          name: 'bancoBeneficiario', 
          disabled: false,
          onChange: handleForm
        },
        { 
          id: 'agenciaBeneficiario', 
          name: 'agenciaBeneficiario', 
          disabled: false,
          onChange: handleForm
        },
        { 
         id: 'contaBeneficiario', 
         name: 'contaBeneficiario', 
         disabled: false,
         onChange: handleForm
        }
      ]
    },

    { payment: 'Depósito na Conta do Advogado',
      inputs: [
        { 
          id: 'nomeBeneficiario', 
          name: 'nomeBeneficiario', 
          disabled: false,
          onChange: handleForm
        },
        { 
          id: 'cpfBeneficiario', 
          name: 'cpfBeneficiario', 
          disabled: false,
          onChange: handleForm
        },
        { 
          id: 'bancoBeneficiario', 
          name: 'bancoBeneficiario', 
          disabled: false,
          onChange: handleForm
        },
        { 
          id: 'agenciaBeneficiario', 
          name: 'agenciaBeneficiario', 
          disabled: false,
          onChange: handleForm
        },
        { 
          id: 'contaBeneficiario', 
          name: 'contaBeneficiario', 
          disabled: false,
          onChange: handleForm
        }
      ]
    },

    { payment: 'ID Depósito Judicial',
      inputs: [
        { 
          id: 'nomeBeneficiario', 
          name: 'nomeBeneficiario', 
          disabled: false,
          onChange: handleForm
        },
        { 
          id: 'cpfBeneficiario', 
          name: 'cpfBeneficiario', 
          disabled: false,
          onChange: handleForm
        }
      ]
    },
  ]


 return paymentType
}

export const fields = {
  nomeBeneficiario: function ({id, name, onChange, disabled}) {
    return (
      <fieldset id="nome-beneficiario">
        <label htmlFor="">Qual o nome do beneficiário?</label>
        <input 
          onChange={e => onChange(name, e.target.value)}
          type="text" 
          disabled={disabled} 
          name={name} 
          id={id}
          placeholder="nome parte autora"/>
      </fieldset>
    )
  },

  cpfBeneficiario: function({id, name, onChange, disabled}) {
    return (
      <fieldset id="cpf-beneficiario">
        <label htmlFor="">Qual o CPF/CNPJ do beneficiário?</label>
        <input 
          type="text" 
          onChange={e => onChange(name, e.target.value)}
          disabled={disabled} 
          name={name}
          id={id} 
          placeholder="CPF/CNPJ parte autora"/>
      </fieldset>
    )
  },

  bancoBeneficiario: function({id, name, onChange, disabled}){
    return (
      <fieldset id="banco-beneficiario">
        <label htmlFor={id}>Qual o banco para depósito?</label>
        <select
          onChange={e => onChange(name, e.target.value)} 
          name={name} 
          disabled={disabled} 
          id={id}>
          <option>Selecionar banco da parte autora</option>
        </select>
      </fieldset>
    )
  },

  agenciaBeneficiario: function({id, name, onChange, disabled}) {
    return (
      <fieldset id="agencia-beneficiario">
        <label htmlFor={id}>Qual a agência?</label>
        <input 
          type="text" 
          onChange={e => onChange(name, e.target.value)}
          disabled={disabled} 
          name={name} 
          id={id}
          placeholder="Agência da parte autora"/>
      </fieldset>
    )
  },

  contaBeneficiario: function({id, name, onChange, disabled}) {
    return (
      <fieldset id="conta-beneficiario">
        <label htmlFor={id}>Qual a conta?</label>
        <input 
          type="text" 
          onChange={e => onChange(name, e.target.value)}
          disabled={disabled} 
          name={name} 
          id={id}
          placeholder="Conta da parte autora"/>
      </fieldset>
    )
  }
}