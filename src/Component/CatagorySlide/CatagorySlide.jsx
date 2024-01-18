import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { useQuery } from 'react-query';
import { Circles } from 'react-loader-spinner';

export default function CatagorySlide() {
    function getCategory() {
        return axios.get("https://ecommerce.routemisr.com/api/v1/categories");
    }

    const { data, isLoading } = useQuery("getGategory", getCategory);
    console.log(data?.data.data);

    const settings = {
        dots: true,
        infinite: true,
        speed:500,
        slidesToShow: 4, // تعديل عدد العناصر المراد عرضها في الـ Slider
        slidesToScroll: 1
    };

    if (isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 backGround d-flex justify-content-center align-items-center">
                        <Circles
                            height="80"
                            width="20"
                            color="#4fa94d"
                            ariaLabel="circles-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h2 className='text-center fs-bolder'> Category Slide</h2>

            <div className="container">
                <div className="row">
                    <Slider {...settings}>
                        {data?.data.data.map(function (category, id) {
                            return (
                                <div key={id} className="col-md-12"> {/* قمت بتعديل هنا */}
                                    <div className="category">
                                        <img style={{ height: "100px" }} src={category.image} alt="" />
                                        <p>{category.name}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
 



