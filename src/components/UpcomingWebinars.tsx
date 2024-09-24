'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

  const featuredWebinars = [
    { title: 'Understanding Music Theory', description: 'Dive deep into the fundamentals of music theory and enhance your musical skills.', slug: 'understanding-music-theory', isFeatured: true },
    { title: 'Basics of Guitar Playing', description: 'Learn the essential techniques and chords to start playing guitar.', slug: 'basics-of-guitar-playing', isFeatured: true },
    { title: 'Songwriting 101', description: 'Discover the art of songwriting and learn how to express your emotions through music.', slug: 'songwriting-101', isFeatured: true },
    { title: 'Advanced Music Production', description: 'Take your music production skills to the next level with advanced techniques and tools.', slug: 'advanced-music-production', isFeatured: true },
    { title: 'Digital Music Marketing', description: 'Understand how to effectively market your music in the digital age.', slug: 'digital-music-marketing', isFeatured: true },
    { title: 'Music and Emotion', description: 'Explore the connection between music and human emotions and how to evoke feelings through sound.', slug: 'music-and-emotion', isFeatured: true },
    { title: 'Jazz Improvisation Techniques', description: 'Learn the secrets of improvisation in jazz music and enhance your performance skills.', slug: 'jazz-improvisation-techniques', isFeatured: true },
    { title: 'The History of Rock Music', description: 'Dive into the rich history of rock music and its evolution over the decades.', slug: 'history-of-rock-music', isFeatured: true },
    { title: 'Vocal Techniques for Singers', description: 'Improve your singing voice with essential vocal techniques and exercises.', slug: 'vocal-techniques-for-singers', isFeatured: true },
  ];
  

  return (
    <div className="p-12 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
            </div>
              <div className="mt-10">
              <HoverEffect 
                    items={featuredWebinars.map(webinar => (
                      {
                        title: webinar.title,
                        description: webinar.description,
                        link: '/Home'
                      }
                    ))}
                />
                </div>
            <div className="mt-10 text-center">
                  <Link href={"/"} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 translate-x-0 duration-200"> View All Webinars</Link>
            </div>
          </div>
    </div>
  )
}

export default UpcomingWebinars