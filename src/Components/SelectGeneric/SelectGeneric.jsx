import React from 'react'


const categories = [
    { "index": 1, "name": "Categorie 1" },
    { "index": 2, "name": "Categorie 2" },
    { "index": 3, "name": "Categorie 3" },
    { "index": 4, "name": "Categorie 4" },
]

function SelectGeneric() {

    const handleChange = (event) => {
        const categorySelect = event.target.value
        console.log(categorySelect)
    }

    const categoriesItems = categories.map(category => 
            <option key={category.index}
                value={category.name}>{category.name}
            </option>
    )
    return (
        <select 
        className='selecGeneric'
        onChange={handleChange}>
            {categoriesItems}
        </select>
    )
}

export { SelectGeneric }