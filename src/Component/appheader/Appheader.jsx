import { Link } from 'react-router-dom';
import Logo from '../../resources/img/Logo.png';

import './Appheader.sass';
const AppHeader = () => {
	return (
		<>
			<header>
				<div className='header__logo'>
					<div className='header__logo__img'>
						<a href='/'>
							<img src={Logo} alt='' />
						</a>
					</div>
					<div className='header__logo__text'><a href="">weestep</a></div>
				</div>
				<nav className='nav__menu'>
					<div className='nav__menu_list'>
						<Link to='' className='AboutUs'>
							О нас
						</Link>
						<Link to='' className='Catalog'>
							Каталог
						</Link>
						<Link to='' className='Buy'>
							Где купить
						</Link>
						<Link to='' className='Blog'>
							Блог
						</Link>
						<Link to='' className='Contact'>
							Контакты
						</Link>
					</div>
					<div className='nav__menu-choice'>
						<select name='' id='' className='nav__menu_selection'>
							<option value=''>DAY</option>
							<option value=''>NIGHT</option>
						</select>
					</div>
				</nav>
			</header>
		</>
	);
};
export default AppHeader;
