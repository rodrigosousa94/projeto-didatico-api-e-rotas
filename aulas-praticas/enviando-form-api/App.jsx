import { useEffect, useState } from "react"

function App() {

  const formFields = [
    {
      id: 'nome',
      placeholder: 'Digite seu nome',
      type: 'text'
    },
    {
      id: 'email',
      placeholder: 'Digite seu email',
      type: 'email'
    },
    {
      id: 'senha',
      placeholder: 'Digite sua senha',
      type: 'password'
    },
  ]

  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
  })

  const [response, setResponse] = useState(null)



  function handleChange({ target }){
    const { id, value } = target 
    setForm({...form, [id]: value})
  }

  function handleSubmit(event){
    event.preventDefault()
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {formFields.map((field) => (
          <div key={field.id}>
            <input style={{ marginBottom: 10 }} onChange={handleChange} value={form[field.id]} name="nome" id={field.id} type={field.type} placeholder={field.placeholder}/>
          </div>
        ))}

        {response && response.ok && <p>Dados enviados com sucesso</p>}
        {response && !response.ok && <p>erro</p>}
        <button>Enviar</button>

      </form>
    </>
  )
}

export default App
