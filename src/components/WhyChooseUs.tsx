"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      title: 'Unlock Your Creativity: Explore Diverse Musical Genres',
      description: 'Dive into a world of sounds—from jazz to classical to contemporary. Discover how experimenting with different styles can unlock your unique musical voice.'
    },
    {
      title: 'From Beginner to Pro: Tailored Lessons for Every Level',
      description: 'Whether you\'re just starting or looking to refine your skills, our personalized lessons are designed to meet your needs and help you achieve your musical goals.'
    },
    {
      title: 'The Power of Collaboration: Join Our Music Community',
      description: 'Connect with fellow musicians through workshops and jam sessions. Experience the joy of collaboration and grow your skills in a supportive environment.'
    },
    {
      title: 'Master the Art of Songwriting: Craft Your Own Hits',
      description: 'Learn the essentials of songwriting, from melody creation to lyric writing. Discover how to express your emotions and stories through music.'
    },
    {
      title: 'Performance Opportunities: Shine on Stage!',
      description: 'Gain confidence and stage presence with regular performance opportunities. Share your talent with an audience and make lasting memories in the process.'
    }
  ];
  

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}

export default WhyChooseUs