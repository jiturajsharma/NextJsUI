'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
    { quote: "This school transformed my passion into skill. The teachers are           inspiring!", 
        name: "Aisha Khan", 
        title: "Piano Student" },
    { quote: "I never thought I could play the guitar, but now I can't put it down!",      name: "Rajesh Verma", 
        title: "Guitar Enthusiast" },
    { quote: "The collaborative environment pushed me to grow as a musician and a person.", name: "Sita Patel", title: "Vocalist" },
    { quote: "Each lesson is tailored to my needs, making learning enjoyable and effective.", name: "Manish Gupta", title: "Drum Student" },
    { quote: "The songwriting workshop helped me find my voice and express myself creatively.", name: "Nisha Singh", title: "Songwriter" },
    { quote: "Performing in front of an audience has built my confidence immensely!", name: "Karan Mehta", title: "Bass Guitarist" },
    { quote: "The supportive community here makes every practice session feel rewarding.", name: "Ravi Sharma", title: "Violinist" },
    { quote: "I've learned so much about music theory, which has enhanced my playing skills.", name: "Pooja Joshi", title: "Flutist" },
    { quote: "I love how the school encourages creativity while focusing on technique.", name: "Amit Rao", title: "Composer" },
    { quote: "The instructors are not just teachers; they are mentors who genuinely care.", name: "Sneha Roy", title: "Saxophonist" }
];

function MusicSchoolTestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h1 className="text-3xl font-bold text-center mb-8 z-10">Here Our Harmony: Voice of Success</h1>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                  <div className="w-full max-w-6xl">
                <InfiniteMovingCards items={musicSchoolTestimonials} direction="right" speed="slow" />
                  </div>
            </div>
    </div>
  )
}

export default MusicSchoolTestimonialCards