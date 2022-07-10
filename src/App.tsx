import React, { useState } from 'react';
import Button from './components/button/Button';
import { Input, InputSelect } from './components/input/Input';
import { IInput } from './interfaces/DefaultInterfaces'

interface Props {
  useBrand: string
  useMl: string
  usePrice: number
}

function App() {
  
  const brands: string[] = ["Skol", "Brahma","Antartica", "Schin", "Itaipava", "Kaiser", "Crystal", "Bohemia"]
  const ml: string[] = ["200ml", "300ml", "350ml", "600ml", "1L"]
  
  const [useBrand, setBrand] = useState<string>("")
  const [useMl, setMl] = useState<string>("")
  const [usePrice, setPrice] = useState<number>(0)
  const [useList, setList]=useState<Props[]>([])

  const handleSubmit=(e: any)=>{
    e.preventDefault() //remove refresh event submit
    const newProduct = {useBrand, useMl, usePrice}

    useBrand&& useMl&& usePrice&& 
      setList([...useList, newProduct])
      setBrand("")
      setMl("")
      setPrice(0)    
  }

  return (
    <div>
      <form 
        onSubmit={handleSubmit}
      >
        <InputSelect 
          id="brand"
          label="Marca"
          msgOption="Selecione a marca"
          valueOptions={brands}
          valueSelect={useBrand}
          onChange={(texto: IInput) => setBrand(texto.target.value)}
        />
        <InputSelect
          id="ml"
          label="Litro/ml"
          msgOption="Selecione a quantidade de litros"
          valueOptions={ml}
          valueSelect={useMl}
          onChange={(texto: IInput) => setMl(texto.target.value)}
        />
        <Input 
          id="pUnd"
          label="Preço UND"
          value={usePrice}
          onChange={(e: IInput) => setPrice(e.target.value)}
        />
        <Button
          label=" Add "
        />
      </form>
      <ul>
          {
            useList.map((list: any) => (
              <li>
                {
                  `
                    Marca: ${list.useBrand}
                    Litro/ml: ${list.useMl}
                    Valor: ${list.usePrice}
                  `
                }
              </li>
            ))
          }
      </ul>
    </div>
  );
}

export default App;
