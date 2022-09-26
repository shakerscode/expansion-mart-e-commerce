import React from 'react';
import { Banner } from '../exporter';
import blog from '../../assets/Banner/banner-6.png' 

const Blog = () => {
    return (
        <section className='md:px-14 px-4'>
            <Banner 
            identity={'Blog'}
            Blog={true}
            title={'Read The Latest Informative Blogs From Us'}
            subTitle={'Get all our blogs and tip-tricks by subscribing us'}
            sideImg={blog}
            />
            
        </section>
    );
};

export default Blog;