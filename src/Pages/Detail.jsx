import { Heart, ShoppingCart } from '@phosphor-icons/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export const Detail = () => {
    const { id } = useParams()
    const cart = useSelector(state => state.common.cart)
    const data = useSelector(state => state.common.data)
    const product = data.filter(pr => pr.id == id)
    const item = product[0]
    return (
        <>
            <section className='h-screen'>
                <div className="container h-full">
                    <div className='h-full items-center grid grid-cols-1 md:grid-cols-2 gap-5' >
                        <div>
                            <img className='w-full' src={item.image} alt={item.title} />
                        </div>
                        <div className="p-5 flex flex-col gap-5">
                            <h1 className='text-2xl md:text-3xl'>{item.title}</h1>
                            <h3 className='text-2xl flex gap-4'>
                                <del className='text-red-500'>{item.price}$</del>
                                <span className='text-green-500'>
                                    {Math.round(item.price - (item.price / 100 * 25))}$
                                </span>
                            </h3>
                            <div className='flex flex-col gap-5'>
                                <div>
                                    <div className='flex items-center gap-5'>
                                        <h3 className='text-2xl'>Размер:</h3>
                                        {item.size.map((item, index) => {
                                            return <p key={index}>{item}</p>
                                        })}
                                    </div>
                                </div>
                                <div className="flex items-center gap-5">
                                    <button className='text-3xl w-[40px] h-[40px] bg-slate-200 text-white rounded-md'>-</button>
                                    <h3 className='text-3xl'>{item.count}</h3>
                                    <button className='text-3xl w-[40px] h-[40px] bg-slate-200 text-white rounded-md'>+</button>
                                </div>
                                <div className="flex items-center gap-5">
                                    <button className='flex gap-2 items-center text-xl bg-blue-300 py-2 px-5 text-white rounded-md'>Купить <ShoppingCart /></button>
                                    <button className='flex gap-2 items-center text-xl bg-rose-300 py-2 px-5 text-white rounded-md'>В избранное <Heart /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
