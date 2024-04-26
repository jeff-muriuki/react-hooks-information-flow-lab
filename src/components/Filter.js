import React from 'react'

export default function Filter({ onCategoryChange, selectedCategory }) {
    return (
        <div className='Filter'>
            <select name="filter" onChange={onCategoryChange} value={selectedCategory}>
                <option value="All">Filter by category</option>
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Dessert">Dessert</option>
            </select>
        </div>
    )
}
