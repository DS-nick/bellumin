import React from 'react'
import './style.css'
import MainMenu from '../MainMenu'

const Header = ()=> {

    return (
        <div>
            <div className='market-place'>

            </div>
            <div className ='top-navbar'>
            <form className ='search-form'>
                <div className = 'search-field'>
                    <input type ='text' placeholder ='Найти по названию'></input>
                    <button>
                    <i class="fa fa-search"></i>
                    </button>
                </div>
            </form>

            <h2>
                <a href='/'>Huckberry</a>
            </h2>
            <div>
                MY ACCOUNT
            </div>
            </div>
            <div className ='main-menu'>
            <MainMenu />
            </div>
        </div>
    )
}

export default Header