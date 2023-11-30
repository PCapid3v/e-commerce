import { useParams } from 'react-router-dom'
import './Category.css'
import { useContext } from 'react'
import { ProductContext } from '../../../context/products'
import CategoryItem from '../../category-item/Category-item'

export default function Category () {
    const { categories } = useParams()
    const { products } = useContext(ProductContext)
    return (
        <div className='category-container'>
            <div className='category-header-container'>
                <h1 className='category-header'>{categories}</h1>
            </div>
            <div className='category-body-container'>
                {products.map(product => (
                    <CategoryItem key={product.id} category={product} />))}
            </div>
        </div>
    )
}