import React, {useState} from 'react'

export default function SearchInput({onSearch}) {

    const [input, setInput] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();

        onSearch(input)
    }
  return (
    <form onSubmit={submitHandler}>
        <input type='text' placeholder='Search a Country .......' value={input} onChange={(e)=> setInput(e.target.value)} />
    </form>
  )
}
