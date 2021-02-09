export const typeForm = () => {
  const paymentType = [
    { payment: 'Depósito na Conta do Autor',
      inputs: [
       { id: 'nomeBeneficiario', disabled: true },
       { id: 'cpfBeneficiario', disabled: false },
       { id: 'bancoBeneficiario', disabled: false },
       { id: 'agenciaBeneficiario', disabled: false },
       { id: 'contaBeneficiario', disabled: false }
      ]
    },

    { payment: 'Depósito na Conta do Advogado',
      inputs: [
        { id: 'nomeBeneficiario', disabled: false },
        { id: 'cpfBeneficiario', disabled: false },
        { id: 'bancoBeneficiario', disabled: false },
        { id: 'agenciaBeneficiario', disabled: false },
        { id: 'contaBeneficiario', disabled: false }
      ]
    },

    { payment: 'ID Depósito Judicial',
      inputs: [
        { id: 'nomeBeneficiario', disabled: false },
        { id: 'cpfBeneficiario', disabled: false }
      ]
    },
  ]


 return paymentType
}

export const fields = {
  nomeBeneficiario: function ({disabled}) {
    return (
      <fieldset id="nome-beneficiario">
        <label htmlFor="">Qual o nome do beneficiário?</label>
        <input type="text" disabled={disabled} name="" id="" placeholder="nome parte autora"/>
      </fieldset>
    )
  },

  cpfBeneficiario: function({disabled}) {
    return (
      <fieldset id="cpf-beneficiario">
        <label htmlFor="">Qual o CPF/CNPJ do beneficiário?</label>
        <input type="text" disabled={disabled} name="" id="" placeholder="CPF/CNPJ parte autora"/>
      </fieldset>
    )
  },

  bancoBeneficiario: function({disabled}){
    return (
      <fieldset id="banco-beneficiario">
        <label htmlFor="">Qual o banco para depósito?</label>
        <select name="" disabled={disabled} id="">
          <option>Selecionar banco da parte autora</option>
        </select>
      </fieldset>
    )
  },

  agenciaBeneficiario: function({disabled}) {
    return (
      <fieldset id="agencia-beneficiario">
        <label htmlFor="">Qual a agência?</label>
        <input type="text" disabled={disabled} name="" id="" placeholder="Agência da parte autora"/>
      </fieldset>
    )
  },

  contaBeneficiario: function({disabled}) {
    return (
      <fieldset id="conta-beneficiario">
        <label htmlFor="">Qual a conta?</label>
        <input type="text" disabled={disabled} name="" id="" placeholder="Conta da parte autora"/>
      </fieldset>
    )
  }
}