import React, { useState, useEffect } from 'react';
import './Slider.sass';
import weestepChildren from '../../resources/img/weestepChildren.png';
const Slider = () => {
	const slides = [
		{
			text: 'hi,we are weestep!',
			style: { color: 'white', fontWeight: 'bold', fontSize: '119px' },
		},
		{
			text: 'Обувь для детей, как для взрослых.Дети носят обувь не так долго, как их родители. Должна ли она быть стильной и качественной?Мы уверены, что да.',
			style: {
				color: 'white',
				textAlign: 'left',
				padding: ' 0 0 0 2%',
				width: '50%',
        fontSize: "20px"
			},
			button: true,
		},
	];

	const [currentSlide, setCurrentSlide] = useState(0);

	const goToPreviousSlide = () => {
		setCurrentSlide(prevSlide =>
			prevSlide === 0 ? slides.length - 1 : prevSlide - 1
		);
	};

	const goToNextSlide = () => {
		setCurrentSlide(prevSlide =>
			prevSlide === slides.length - 1 ? 0 : prevSlide + 1
		);
	};

	useEffect(() => {
		const interval = setInterval(goToNextSlide, 50000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className='slider-container'>
			{slides.map((slide, index) => (
				<div
					key={index}
					className={`slide ${index === currentSlide ? 'active' : ''}`}
					style={slide.style}
				>
					<p>{slide.text}</p>
					{slide.button ? (
						<button className='slider-button'>Click me </button>
					) : null}
				</div>
			))}
			<div className='slider-img'>
				<img src={weestepChildren} alt='' width='105%' />
			</div>
		</div>
	);
};

export default Slider;
