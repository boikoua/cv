import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useRef } from 'react';
import styles from './ProjectsPage.module.scss';
import Avatar from '../../components/Avatar';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../api/projects';

const ProjectsPage = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section data-aos="fade-left">
      <div className="container">
        <div className={styles.wrapper}>
          <Avatar title="projects" />

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation, Pagination, Autoplay]}
            navigation={false}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
              dynamicBullets: true,
            }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className={styles.projects}
          >
            {projects.map((item) => (
              <SwiperSlide key={item.id}>
                <ProjectCard project={item} />
              </SwiperSlide>
            ))}

            <div className={styles.controls}>
              <span
                className="icon-left"
                onClick={() => swiperRef.current?.slidePrev()}
              ></span>
              <span
                className="icon-right"
                onClick={() => swiperRef.current?.slideNext()}
              ></span>
            </div>

            <div className="custom-pagination"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
