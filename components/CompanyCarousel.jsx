"use client"
import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import companies from '../data/companies.json'
import Image from 'next/image'

const CompanyCarousel = () => {
    return (
        <div>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
                className="w-full py-10"
            >
                <CarouselContent className="flex gap-5 sm:gap-20 items-center">
                    {companies.map((name, id) => {
                        return <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                            <Image src={name.path} alt={name} width={200} height={56} className="h-9 sm:h-14 w-auto object-contain" />
                        </CarouselItem>
                    })}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default CompanyCarousel
