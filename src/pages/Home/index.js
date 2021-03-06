import React from 'react';

import PageBase from '../../components/PageBase';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

function Home() {
	return (
		<PageBase typeButton='Link'>

			<BannerMain
				videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
				url={dadosIniciais.categorias[0].videos[0].url}
				videoDescription={"Rock in Rio"}
			/>

			<Carousel
				ignoreFirstVideo
				category={dadosIniciais.categorias[0]}
			/>

			<Carousel
				category={dadosIniciais.categorias[1]}
			/>

			<Carousel
				category={dadosIniciais.categorias[2]}
			/>

			<Carousel
				category={dadosIniciais.categorias[3]}
			/>

			<Carousel
				category={dadosIniciais.categorias[4]}
			/>

			<Carousel
				category={dadosIniciais.categorias[5]}
			/>

		</PageBase>
	);
}

export default Home;