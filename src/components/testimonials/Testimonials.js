import './Testimonials.css'
import Avatar1 from '../../assets/avatar1.jpg'
import Avatar2 from '../../assets/avatar2.jpg'
import Avatar3 from '../../assets/avatar3.jpg'
import Avatar4 from '../../assets/avatar4.jpg'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

    const data = [
        {
            avatar: Avatar1,
            name: 'Sakib Ashrof',
            review: 'Harsh is a very Talented person and a very good Team Player really a pleasent experience to work with him and I am sure he will go so far in his career with his growing mindset'
        },
        {
            avatar: Avatar2,
            name: 'Vikas chand',
            review: 'Harsh proves to be an excellent collaborative developer. He is highly creative and a very easy-going person to work with. Harsh knows his stack well and his technical knowledge reflects on the excellent work he produces. Definitely recommended?'
        },
        {
            avatar: Avatar3,
            name: 'Hafed Brahim',
            review: 'Harsh is a competent and experienced full stack web developer with great technical and personal skills, always looking for ways to improve and learn new skills and work on it?'
        },
    ]

    return (
        <section id={"testimonials"}>
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>

            <Swiper
                className={"container testimonials__container"}
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={true}
            >

                {data.map(({avatar, name, review}, index) => {
                    return (
                        <SwiperSlide key={index} className={"testimonial"}>
                            <div className={"client__avatar"}>
                                <img src={avatar} alt={"Client Image"}/>
                            </div>
                            <h5 className={"client__name"}>{name}</h5>
                            <small className={"client__review"}>{review}</small>
                        </SwiperSlide>
                    )
                })}



            </Swiper>

        </section>
    )
}

export default Testimonials