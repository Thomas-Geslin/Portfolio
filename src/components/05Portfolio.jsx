import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// Projects Illustrations
import zikzag from '../assets/zikzag01.webp'
import zikzag02 from '../assets/zikzag02.webp'
import zikzag03 from '../assets/zikzag03.webp'

import trackizer from '../assets/Trackizer01.png'
import trackizer02 from '../assets/Trackizer02.webp'
import trackizer03 from '../assets/Trackizer03.webp'

import elecar from '../assets/Elecar01.webp'
import elecar02 from '../assets/Elecar02.webp'
import elecar03 from '../assets/Elecar03.webp'

import oneRenovation from '../assets/OneRenovation01.png'

import holux from '../assets/Holux01.webp'

import mac from '../assets/3d01.webp'
import chair01 from '../assets/3d02.webp'
import chair02 from '../assets/3d03.webp'
import machine from '../assets/3d04.webp'


// Projects Stack
import next from '../assets/logo_next.png'
import tailwind from '../assets/logo_tailwind.png'
import vercel from '../assets/logo_vercel.png'
import gatsby from '../assets/logo_gatsby.png'
import sass from '../assets/logo_sass.png'
import react from '../assets/logo_react.png'
import figma from '../assets/logo_figma.png'
import html from '../assets/logo_html.png'
import css from '../assets/logo_css.png'
import javascript from '../assets/logo_javascript.png'
import blender from '../assets/logo_blender.png'
import photoshop from '../assets/logo_photoshop.png'

export default function Portfolio() {
    // function managing the style for the description of each project
    function openProjectDescription(id) {
        const background = document.getElementById(`projectDescriptionBackground${id}`);
        background.classList.toggle('portfolio__projects__part__description__background--active');
        const icon = document.getElementById(`projectPlus${id}`);
        icon.classList.toggle('portfolio__projects__part__extend--plus--active');
        const description = document.getElementById(`projectDescription${id}`);
        description.classList.toggle('portfolio__projects__part__description__content--active');
        const title = document.getElementById(`projectTitle${id}`);
        title.classList.toggle('portfolio__projects__part__description__content__name__title--active');
        const resume = document.getElementById(`projectResume${id}`);
        resume.classList.toggle('portfolio__projects__part__description__content__name__resume--active');
        const stack = document.getElementById(`projectStack${id}`);
        stack.classList.toggle('portfolio__projects__part__description__content__stack__title--active');
        const list = document.getElementById(`projectStackList${id}`);
        list.classList.toggle('portfolio__projects__part__description__content__stack__list--active');
        const live = document.getElementById(`projectLive${id}`);
        if(live !== null) {
            live.classList.toggle('portfolio__projects__part__description__content__nav__live--active');
        }
        const code = document.getElementById(`projectCode${id}`);
        if(code !== null) {
            code.classList.toggle('portfolio__projects__part__description__content__nav__code--active');
        }
    }



    return(
        <div id="portfolio" className="portfolio">
            <h2 className="portfolio__title">Portfolio</h2>
            <p className="portfolio__subtitle">Here you can see some of the projects that I already made</p>

            <div className="portfolio__projects">
                <div className="portfolio__projects__part">
                    <div className="portfolio__projects__part__extend" onClick={() => openProjectDescription('01')}>
                        <span className="portfolio__projects__part__extend--less"></span>
                        <span className="portfolio__projects__part__extend--plus" id="projectPlus01"></span>
                    </div>

                    <Swiper
                        slidesPerView={1}
                        modules={[EffectFade, Pagination, Autoplay]} 
                        effect="fade"
                        speed={750}
                        loop
                        pagination
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                        }}
                        className="portfolio__projects__part__swiper"
                    >
                        <SwiperSlide><img src={zikzag} alt='Illustration de mon projet ZikZag' className="portfolio__projects__part__swiper__picture" /></SwiperSlide>
                        <SwiperSlide><img src={zikzag02} alt='Illustration de mon projet ZikZag' className="portfolio__projects__part__swiper__picture" /></SwiperSlide>
                        <SwiperSlide><img src={zikzag03} alt='Illustration de mon projet ZikZag' className="portfolio__projects__part__swiper__picture" /></SwiperSlide>
                    </Swiper>

                    <div className="portfolio__projects__part__description">
                        <div className="portfolio__projects__part__description__background" id="projectDescriptionBackground01"></div>
                        <div className="portfolio__projects__part__description__content" id="projectDescription01">
                            <div className="portfolio__projects__part__description__content__name">
                                <p className="portfolio__projects__part__description__content__name__title" id="projectTitle01">ZikZag</p>
                                <p className="portfolio__projects__part__description__content__name__resume" id="projectResume01">A website made to be a template for others futur websites. A lot of animations, and interactions make it dynamic and pleasant for the visitor</p>
                            </div>
                            
                            <div className="portfolio__projects__part__description__content__stack">
                                <div  className="portfolio__projects__part__description__content__stack__title" id="projectStack01">
                                    <p className="portfolio__projects__part__description__content__stack__title__text">STACK</p>
                                    <span className="portfolio__projects__part__description__content__stack__title__line"></span>
                                </div>
        
                                <ul className="portfolio__projects__part__description__content__stack__list" id="projectStackList01">
                                    <li className="portfolio__projects__part__description__content__stack__list__part">
                                        <p className="portfolio__projects__part__description__content__stack__list__part__name">NextJS</p>
                                        <img src={next} alt='Logo de NextJS' className="portfolio__projects__part__description__content__stack__list__part__logo" />
                                    </li>
                                    <li className="portfolio__projects__part__description__content__stack__list__part">
                                        <p className="portfolio__projects__part__description__content__stack__list__part__name">TailwindCSS</p>
                                        <img src={tailwind} alt='Logo de Tailwind' className="portfolio__projects__part__description__content__stack__list__part__logo" />
                                    </li>
                                    <li className="portfolio__projects__part__description__content__stack__list__part">
                                        <p className="portfolio__projects__part__description__content__stack__list__part__name">Vercel</p>
                                        <img src={vercel} alt='Logo de Vercel' className="portfolio__projects__part__description__content__stack__list__part__logo" />
                                    </li>
                                </ul>
                            </div>

                            <div className="portfolio__projects__part__description__content__nav">
                                <a href="https://zikzag.vercel.app/" target="_blank" rel="noreferrer" className="portfolio__projects__part__description__content__nav__live" id="projectLive01">See Live</a>
                                <a href="https://github.com/Thomas-Geslin/ZikZag" target="_blank" rel="noreferrer" className="portfolio__projects__part__description__content__nav__code" id="projectCode01">View Code</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="portfolio__projects__part">
                    <div className="portfolio__projects__part__extend" onClick={() => openProjectDescription('02')}>
                        <span className="portfolio__projects__part__extend--less"></span>
                        <span className="portfolio__projects__part__extend--plus" id="projectPlus02"></span>
                    </div>

                    <Swiper
                        slidesPerView={1}
                        modules={[EffectFade, Pagination, Autoplay]} 
                        effect="fade"
                        speed={750}
                        loop
                        pagination
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                        }}
                        className="portfolio__projects__part__swiper"
                    >
                        <SwiperSlide><img src={trackizer} alt='Illustration de mon projet OneRenovation' className="portfolio__projects__part__swiper__picture" /></SwiperSlide>
                        <SwiperSlide><img src={trackizer02} alt='Illustration de mon projet OneRenovation' className="portfolio__projects__part__swiper__picture" /></SwiperSlide>
                        <SwiperSlide><img src={trackizer03} alt='Illustration de mon projet OneRenovation' className="portfolio__projects__part__swiper__picture" /></SwiperSlide>
                    </Swiper>

                    <div className="portfolio__projects__part__description">
                        <div className="portfolio__projects__part__description__background" id="projectDescriptionBackground02"></div>
                        <div className="portfolio__projects__part__description__content" id="projectDescription02">
                            <div className="portfolio__projects__part__description__content__name">
                                <p className="portfolio__projects__part__description__content__name__title" id="projectTitle02">Trackizer</p>
                                <p className="portfolio__projects__part__description__content__name__resume" id="projectResume02">A prototype of a mobile application allowing its users to save and track their monthly expenses, in order to better manage their budget</p>
                            </div>
                            
                            <div className="portfolio__projects__part__description__content__stack">
                                <div  className="portfolio__projects__part__description__content__stack__title" id="projectStack02">
                                    <p className="portfolio__projects__part__description__content__stack__title__text">STACK</p>
                                    <span className="portfolio__projects__part__description__content__stack__title__line"></span>
                                </div>
        
                                <ul className="portfolio__projects__part__description__content__stack__list" id="projectStackList02">
                                    <li className="portfolio__projects__part__description__content__stack__list__part">
                                        <p className="portfolio__projects__part__description__content__stack__list__part__name">Gatsby</p>
                                        <img src={gatsby} alt='Logo de NextJS' className="portfolio__projects__part__description__content__stack__list__part__logo" />
                                    </li>
                                    <li className="portfolio__projects__part__description__content__stack__list__part">
                                        <p className="portfolio__projects__part__description__content__stack__list__part__name">Sass</p>
                                        <img src={sass} alt='Logo de Tailwind' className="portfolio__projects__part__description__content__stack__list__part__logo" />
                                    </li>
                                    <li className="portfolio__projects__part__description__content__stack__list__part">
                                        <p className="portfolio__projects__part__description__content__stack__list__part__name">React Native</p>
                                        <img src={react} alt='Logo de Vercel' className="portfolio__projects__part__description__content__stack__list__part__logo" />
                                    </li>
                                </ul>
                            </div>

                            <div className="portfolio__projects__part__description__content__nav">
                                <a href="https://github.com/Thomas-Geslin/TrackizerFront" target="_blank" rel="noreferrer" className="portfolio__projects__part__description__content__nav__code" id="projectCode02">View Code</a>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className="portfolio__projects__part">
                    <div className="portfolio__projects__part__extend" onClick={() => openProjectDescription('03')}>
                        <span className="portfolio__projects__part__extend--less"></span>
                        <span className="portfolio__projects__part__extend--plus" id="projectPlus03"></span>
                    </div> 

                    <Swiper
                        slidesPerView={1}
                        className="portfolio__projects__part__swiper"
                    >
                        <SwiperSlide><img src={oneRenovation} alt='Illustration de mon projet OneRenovation' className="portfolio__projects__part__swiper__picture" /></SwiperSlide>
                    </Swiper>

                    <div className="portfolio__projects__part__description">
                        <div className="portfolio__projects__part__description__background" id="projectDescriptionBackground03"></div>
                        <div className="portfolio__projects__part__description__content" id="projectDescription03">
                            <div className="portfolio__projects__part__description__content__name">
                                <p className="portfolio__projects__part__description__content__name__title" id="projectTitle03">OneRenovation</p>
                                <p className="portfolio__projects__part__description__content__name__resume" id="projectResume03">Website for a professionnal in the construction sector, allowing users to simulate a quote, and obtain a price estimate for their renovation work</p>
                            </div>
                            
                            <div className="portfolio__projects__part__description__content__stack">
                                <div  className="portfolio__projects__part__description__content__stack__title" id="projectStack03">
                                    <p className="portfolio__projects__part__description__content__stack__title__text">STACK</p>
                                    <span className="portfolio__projects__part__description__content__stack__title__line"></span>
                                </div>
        
                                <ul className="portfolio__projects__part__description__content__stack__list" id="projectStackList03">
                                    <li className="portfolio__projects__part__description__content__stack__list__part">
                                        <p className="portfolio__projects__part__description__content__stack__list__part__name">React</p>
                                        <img src={react} alt='Logo de NextJS' className="portfolio__projects__part__description__content__stack__list__part__logo" />
                                    </li>
                                    <li className="portfolio__projects__part__description__content__stack__list__part">
                                        <p className="portfolio__projects__part__description__content__stack__list__part__name">Figma</p>
                                        <img src={figma} alt='Logo de Vercel' className="portfolio__projects__part__description__content__stack__list__part__logo" />
                                    </li>
                                </ul>
                            </div>

                            <div className="portfolio__projects__part__description__content__nav">
                                <p className="portfolio__projects__part__description__content__nav__code portfolio__projects__part__description__content__nav__code--private" id="projectCode03">Code is Private</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="portfolio__projects__part">
                    <div className="portfolio__projects__part__extend" onClick={() => openProjectDescription('04')}>
                        <span className="portfolio__projects__part__extend--less"></span>
                        <span className="portfolio__projects__part__extend--plus" id="projectPlus04"></span>
                    </div>

                    <Swiper
                        slidesPerView={1}
                        modules={[EffectFade, Pagination, Autoplay]} 
                        effect="fade"
                        speed={750}
                        loop
                        pagination
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                        }}
                        className="portfolio__projects__part__swiper"
                    >
                        <SwiperSlide><img src={elecar} alt='Illustration de mon projet ZikZag' className="portfolio__projects__part__swiper__picture" /></SwiperSlide>
                        <SwiperSlide><img src={elecar02} alt='Illustration de mon projet ZikZag' className="portfolio__projects__part__swiper__picture" /></SwiperSlide>
                        <SwiperSlide><img src={elecar03} alt='Illustration de mon projet ZikZag' className="portfolio__projects__part__swiper__picture" /></SwiperSlide>
                    </Swiper>

                    <div className="portfolio__projects__part__description" onClick={() => openProjectDescription('06')}>
                        <div className="portfolio__projects__part__description__background" id="projectDescriptionBackground04"></div>
                        <div className="portfolio__projects__part__description__content" id="projectDescription04">
                            <div className="portfolio__projects__part__description__content__name">
                                <p className="portfolio__projects__part__description__content__name__title" id="projectTitle04">Elecar</p>
                                <p className="portfolio__projects__part__description__content__name__resume" id="projectResume04">A showcase website for a luxury car dealership, with a clean design, and some interesting features</p>
                            </div>
                            
                            <div className="portfolio__projects__part__description__content__stack">
                                <div  className="portfolio__projects__part__description__content__stack__title" id="projectStack04">
                                    <p className="portfolio__projects__part__description__content__stack__title__text">STACK</p>
                                    <span className="portfolio__projects__part__description__content__stack__title__line"></span>
                                </div>
        
                                <ul className="portfolio__projects__part__description__content__stack__list" id="projectStackList04">
                                    <li className="portfolio__projects__part__description__content__stack__list__part">
                                        <p className="portfolio__projects__part__description__content__stack__list__part__name">HTML</p>
                                        <img src={html} alt='Logo de NextJS' className="portfolio__projects__part__description__content__stack__list__part__logo" />
                                    </li>
                                    <li className="portfolio__projects__part__description__content__stack__list__part">
                                        <p className="portfolio__projects__part__description__content__stack__list__part__name">CSS</p>
                                        <img src={css} alt='Logo de Tailwind' className="portfolio__projects__part__description__content__stack__list__part__logo" />
                                    </li>
                                    <li className="portfolio__projects__part__description__content__stack__list__part">
                                        <p className="portfolio__projects__part__description__content__stack__list__part__name">JavaScript</p>
                                        <img src={javascript} alt='Logo de Vercel' className="portfolio__projects__part__description__content__stack__list__part__logo" />
                                    </li>
                                </ul>
                            </div>

                            <div className="portfolio__projects__part__description__content__nav">
                                <a href="https://github.com/Thomas-Geslin/Car-Responsive-Website" target="_blank" rel="noreferrer" className="portfolio__projects__part__description__content__nav__code" id="projectCode04">View Code</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="portfolio__projects__part">
                    <div className="portfolio__projects__part__extend" onClick={() => openProjectDescription('05')}>
                        <span className="portfolio__projects__part__extend--less"></span>
                        <span className="portfolio__projects__part__extend--plus" id="projectPlus05"></span>
                    </div>

                    <Swiper
                        slidesPerView={1}
                        className="portfolio__projects__part__swiper"
                    >
                        <SwiperSlide><img src={holux} alt='Illustration de mon projet Holux' className="portfolio__projects__part__swiper__picture" /></SwiperSlide>
                    </Swiper>

                    <div className="portfolio__projects__part__description">
                        <div className="portfolio__projects__part__description__background" id="projectDescriptionBackground05"></div>
                        <div className="portfolio__projects__part__description__content" id="projectDescription05">
                            <div className="portfolio__projects__part__description__content__name">
                                <p className="portfolio__projects__part__description__content__name__title" id="projectTitle05">Holux</p>
                                <p className="portfolio__projects__part__description__content__name__resume" id="projectResume05">A showcase website for a real estate agency</p>
                            </div>
                            
                            <div className="portfolio__projects__part__description__content__stack">
                                <div  className="portfolio__projects__part__description__content__stack__title" id="projectStack05">
                                    <p className="portfolio__projects__part__description__content__stack__title__text">STACK</p>
                                    <span className="portfolio__projects__part__description__content__stack__title__line"></span>
                                </div>
        
                                <ul className="portfolio__projects__part__description__content__stack__list" id="projectStackList05">
                                    <li className="portfolio__projects__part__description__content__stack__list__part">
                                        <p className="portfolio__projects__part__description__content__stack__list__part__name">React</p>
                                        <img src={react} alt='Logo de NextJS' className="portfolio__projects__part__description__content__stack__list__part__logo" />
                                    </li>
                                </ul>
                            </div>

                            <div className="portfolio__projects__part__description__content__nav">
                                <a href="https://github.com/Thomas-Geslin/state-responsive-website" target="_blank" rel="noreferrer" className="portfolio__projects__part__description__content__nav__code" id="projectCode05">View Code</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="portfolio__projects__part">
                    <div className="portfolio__projects__part__extend" onClick={() => openProjectDescription('06')}>
                        <span className="portfolio__projects__part__extend--less"></span>
                        <span className="portfolio__projects__part__extend--plus" id="projectPlus06"></span>
                    </div>

                    <Swiper
                        slidesPerView={1}
                        modules={[EffectFade, Pagination, Autoplay]} 
                        effect="fade"
                        speed={750}
                        loop
                        pagination
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                        }}
                        className="portfolio__projects__part__swiper"
                    >
                        <SwiperSlide><img src={chair01} alt='Illustration de mon projet ZikZag' className="portfolio__projects__part__swiper__picture" /></SwiperSlide>
                        <SwiperSlide><img src={chair02} alt='Illustration de mon projet ZikZag' className="portfolio__projects__part__swiper__picture" /></SwiperSlide>
                        <SwiperSlide><img src={mac} alt='Illustration de mon projet ZikZag' className="portfolio__projects__part__swiper__picture" /></SwiperSlide>
                        <SwiperSlide><img src={machine} alt='Illustration de mon projet ZikZag' className="portfolio__projects__part__swiper__picture" /></SwiperSlide>
                    </Swiper>

                    <div className="portfolio__projects__part__description">
                        <div className="portfolio__projects__part__description__background" id="projectDescriptionBackground06"></div>
                        <div className="portfolio__projects__part__description__content" id="projectDescription06">
                            <div className="portfolio__projects__part__description__content__name">
                                <p className="portfolio__projects__part__description__content__name__title" id="projectTitle06">3D</p>
                                <p className="portfolio__projects__part__description__content__name__resume" id="projectResume06">Some of the 3D models that I have created so far</p>
                            </div>
                            
                            <div className="portfolio__projects__part__description__content__stack">
                                <div  className="portfolio__projects__part__description__content__stack__title" id="projectStack06">
                                    <p className="portfolio__projects__part__description__content__stack__title__text">STACK</p>
                                    <span className="portfolio__projects__part__description__content__stack__title__line"></span>
                                </div>
        
                                <ul className="portfolio__projects__part__description__content__stack__list" id="projectStackList06">
                                    <li className="portfolio__projects__part__description__content__stack__list__part">
                                        <p className="portfolio__projects__part__description__content__stack__list__part__name">Blender</p>
                                        <img src={blender} alt='Logo de NextJS' className="portfolio__projects__part__description__content__stack__list__part__logo" />
                                    </li>
                                    <li className="portfolio__projects__part__description__content__stack__list__part">
                                        <p className="portfolio__projects__part__description__content__stack__list__part__name">Photoshop</p>
                                        <img src={photoshop} alt='Logo de Tailwind' className="portfolio__projects__part__description__content__stack__list__part__logo" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}