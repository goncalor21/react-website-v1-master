import React from 'react';
import './About.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className="motto-wrap">
        <div id="quem-somos" class="label cc-light">quem somos</div>
        <div className="heading-jumbo-small">
          Ao seu lado, à procura do sucesso no mundo industrial.
          <br></br>
        </div>
      </div>
      <div className="divider"></div>
      <div className="home-content-wrap">
        <div className="w-layout-grid about-grid">
          <div id="w-node-_86e64837-0616-515b-4568-76c147234d34-6b08ebcb">
            <div class="home-section-wrap">
              <div class="label cc-light">sobre nós</div>
              <h2 class="section-heading">Identidade</h2>
              <p class="paragraph-light">Fundada em 1990, a M.R. nasceu com o objetivo de acrescentar valor ao cliente industrial através do fabrico de acessórios,
                ferragens, ferramentas e peças técnicas de precisão, rigor e pormenor.</p>
            </div>
          </div>
          <img src="https://uploads-ssl.webflow.com/64512d24cf3b711cd608ebc8/6451315395a55531e7c189a6_detalhe-de-aco-inoxidavel-para-maquinas-min.jpg" id="w-node-_86e64837-0616-515b-4568-76c147234d3f-6b08ebcb" alt="" sizes="94vw" srcset="https://uploads-ssl.webflow.com/64512d24cf3b711cd608ebc8/6451315395a55531e7c189a6_detalhe-de-aco-inoxidavel-para-maquinas-min-p-500.jpg 500w, https://uploads-ssl.webflow.com/64512d24cf3b711cd608ebc8/6451315395a55531e7c189a6_detalhe-de-aco-inoxidavel-para-maquinas-min-p-800.jpg 800w, https://uploads-ssl.webflow.com/64512d24cf3b711cd608ebc8/6451315395a55531e7c189a6_detalhe-de-aco-inoxidavel-para-maquinas-min-p-1080.jpg 1080w, https://uploads-ssl.webflow.com/64512d24cf3b711cd608ebc8/6451315395a55531e7c189a6_detalhe-de-aco-inoxidavel-para-maquinas-min-p-1600.jpg 1600w, https://uploads-ssl.webflow.com/64512d24cf3b711cd608ebc8/6451315395a55531e7c189a6_detalhe-de-aco-inoxidavel-para-maquinas-min-p-2000.jpg 2000w, https://uploads-ssl.webflow.com/64512d24cf3b711cd608ebc8/6451315395a55531e7c189a6_detalhe-de-aco-inoxidavel-para-maquinas-min-p-2600.jpg 2600w, https://uploads-ssl.webflow.com/64512d24cf3b711cd608ebc8/6451315395a55531e7c189a6_detalhe-de-aco-inoxidavel-para-maquinas-min-p-3200.jpg 3200w, https://uploads-ssl.webflow.com/64512d24cf3b711cd608ebc8/6451315395a55531e7c189a6_detalhe-de-aco-inoxidavel-para-maquinas-min.jpg 5184w"></img>
        </div>
        <div className="w-layout-grid about-grid cc-about-2">
          <div id="w-node-_86e64837-0616-515b-4568-76c147234d41-6b08ebcb">
            <div class="home-section-wrap">
              <div class="label cc-light">o que fazemos</div>
              <h2 class="section-heading">Áreas de foco</h2>
              <p class="paragraph-light">Dispomos de serviços de Maquinagem, Soldadura e Estampagem de metais, ligas metálicas, plásticos, poliamidas (entre outros).
                Executando artigos de pequena e média escala à medida das necessidades do mercado e das indústrias(transportes, aeroespacial, informática e eletrotecnia, sistemas de comunicação, construção civil e &nbsp;produção de energia elétrica).
              </p>
            </div>
          </div>
          <img src="https://uploads-ssl.webflow.com/64512d24cf3b711cd608ebc8/6451337692b4ec5e1d7db6fc_trabalhador-trabalhando-com-um-moedor-circular-em-um-metal-com-faiscas.jpg" id="w-node-_86e64837-0616-515b-4568-76c147234d4c-6b08ebcb" alt="" sizes="94vw" srcset="https://uploads-ssl.webflow.com/64512d24cf3b711cd608ebc8/6451337692b4ec5e1d7db6fc_trabalhador-trabalhando-com-um-moedor-circular-em-um-metal-com-faiscas-p-500.jpg 500w, https://uploads-ssl.webflow.com/64512d24cf3b711cd608ebc8/6451337692b4ec5e1d7db6fc_trabalhador-trabalhando-com-um-moedor-circular-em-um-metal-com-faiscas-p-800.jpg 800w, https://uploads-ssl.webflow.com/64512d24cf3b711cd608ebc8/6451337692b4ec5e1d7db6fc_trabalhador-trabalhando-com-um-moedor-circular-em-um-metal-com-faiscas-p-1080.jpg 1080w, https://uploads-ssl.webflow.com/64512d24cf3b711cd608ebc8/6451337692b4ec5e1d7db6fc_trabalhador-trabalhando-com-um-moedor-circular-em-um-metal-com-faiscas-p-1600.jpg 1600w, https://uploads-ssl.webflow.com/64512d24cf3b711cd608ebc8/6451337692b4ec5e1d7db6fc_trabalhador-trabalhando-com-um-moedor-circular-em-um-metal-com-faiscas-p-2000.jpg 2000w, https://uploads-ssl.webflow.com/64512d24cf3b711cd608ebc8/6451337692b4ec5e1d7db6fc_trabalhador-trabalhando-com-um-moedor-circular-em-um-metal-com-faiscas-p-2600.jpg 2600w, https://uploads-ssl.webflow.com/64512d24cf3b711cd608ebc8/6451337692b4ec5e1d7db6fc_trabalhador-trabalhando-com-um-moedor-circular-em-um-metal-com-faiscas.jpg 3000w"></img>
        </div>
        <div className="w-layout-grid about-grid-copy">
        </div>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
