import React, { useState } from 'react';
import Button from './components/button/Button';
import { Input, InputSelect } from './components/input/Input';
import { IInput } from './interfaces/DefaultInterfaces'

interface Props {
  priceForLt: number;
  useBrand: string
  useMl: number
  usePrice: number
}

function App() {
  
  const brands: string[] = ["Skol", "Brahma","Antartica", "Schin", "Itaipava", "Kaiser", "Crystal", "Bohemia"]
  const ml: string[] = ["200", "300", "350", "600", "1000"]
  
  const [useBrand, setBrand] = useState<string>("")
  const [useMl, setMl] = useState<number>(0)
  const [usePrice, setPrice] = useState<number>(0)
  const [useList, setList]=useState<Props[]>([])

  // Add event and monitor input with useState
  const handleAdd=(e: any)=>{
    e.preventDefault() //remove refresh event submit
    const id = Math.floor(Math.random() * 100)
    const priceForLt = usePrice / useMl
    const newProduct = {id, useBrand, useMl, usePrice, priceForLt}

    useBrand&& useMl&& usePrice&& 
      setList([...useList, newProduct])
      setBrand("")
      setMl(0)
      setPrice(0)    
  }

  // Calculates and get the smaller value 
  const handleCalc = () => {
    let min: number[] = []
    useList.map((list) => (
      min.push(list.priceForLt)
    ))
    
    const smaller = Math.min(...min)
    // console.log("Min", min);
    // console.log("Minimo", smaller);

    if(smaller) {
      const result = useList.find(min => min.priceForLt === smaller)
      console.log("Find", result);
  
      return result
    }
  }

  return (
    <div>
      <form 
        onSubmit={handleAdd}
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
          onClick={handleCalc}
        />
      </form>
      <ul>
        {
          useList.map((list: any) => (
            
            <li key={list.id}>
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
      <p>
        {
          
        }
      </p>
    </div>
  );
}

export default App;
