import React, { useEffect, useState } from 'react';
import Button from './components/button/Button';
import { Input, InputSelect } from './components/input/Input';
import Result from './components/result/Result';
import { IInput } from './interfaces/DefaultInterfaces'

interface Props {
  priceForLt: number;
  useBrand: string
  useMl: number
  usePrice: number
}

function App() {
  
  const brands: string[] = ["Skol", "Brahma","Antartica", "Schin", "Itaipava", "Kaiser", "Crystal", "Bohemia"]
  const ml: number[] = [200, 300, 350, 475,600, 1000]
  
  const [useBrand, setBrand] = useState<string>("")
  const [useMl, setMl] = useState<number>(0)
  const [usePrice, setPrice] = useState<number>(0)
  const [useList, setList]=useState<Props[]>([])
  const [usePrices]=useState<number[]>([])
  const [useResult, setResult]=useState<any[]>([])

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

  // Filter and get the smaller price 
  useEffect(() => {
    useList.map((list) => (
      usePrices.push(list.priceForLt)
    ))

    const smaller = Math.min(...usePrices)
    const result = useList.find(list => list.priceForLt === smaller)
    
    if(result !== undefined) {
      setResult([useResult, result])
    }    
  }, [useList])
  
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
      <Result 
        id="teste"
        description=
        {
          useList.length > 1 ?
          useResult.map((result, i) => (
            `
              ${
                result.id !== undefined 
                ? `A cerveja ${result.useBrand} de ${result.useMl} ${result.useMl < 1000 ? "ml" : "Litro"} é a cerveja mais barata, comparando com outras ${useList.length} cervejas`
                : ""
              }
            `
          ))
          :
          "Selecione ao menos dois itens para fazer o comparativo"
        }
      />
    </div>
  );
}

export default App;
