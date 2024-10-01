import { Link } from 'react-router-dom';
import Logo from '../../resources/img/Logo.png';
const AppHeader = () => {
	return (
		<>
			<header>
				<div>
					<div>
						<img src={Logo} alt='' />
					</div>
					<div>weestep</div>
				</div>
				<nav>
					<div>
						<Link to=''>О нас</Link>
						<Link to=''>Каталог</Link>
						<Link to=''>Где купить</Link>
						<Link to=''>Блог</Link>
						<Link to=''>Контакты</Link>
					</div>
					<div>
						<select name='' id=''>
							<option value=''>Admin</option>
							<option value=''>User</option>
						</select>
					</div>
				</nav>
			</header>
		</>
	);
};
export default AppHeader;
