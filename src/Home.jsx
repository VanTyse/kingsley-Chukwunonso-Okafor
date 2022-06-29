import React, {useState} from 'react'

const a = {
    user: {
        id: 1,
        name: {
        firstName: "James",
        lastName: "Ibori"
        },
        location: {
        city: "Ikoyi",
        state: "Lagos",
        address: "One expensive house like that"
        }
    }
}

function pathGet (object, query) {
    let keyResult;
    const iterateRecursively = (obj, query) => {
        Object.keys(obj).forEach(key => {
            
            if (obj[key] == query){
                keyResult = key
                return
            }
            if (typeof obj[key] === 'object' && obj[key] !== null){
                iterateRecursively(obj[key], query)
            }
        })
    }
    iterateRecursively(object, query)
    return keyResult
}

console.log(pathGet(a, 'One expensive house like that'));

function Home() {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setResult(pathGet(a, query))
    }
  return (
    <div>
        <SearchBar query={query} handleSubmit={handleSubmit} setQuery={setQuery}/>
        <div id="result">
        {
            result ? <div>The result is {result}</div> : (result == undefined) ? <div>No results</div> : null
        }
        </div>
    </div>
  )
}

function SearchBar({query, setQuery, handleSubmit}){

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input type="text" name="search" id="search" value={query} onChange={e => setQuery(e.target.value)}/>
            <input type="submit" id='submit-btn' value="search" />
        </form>
    )
}



export default Home