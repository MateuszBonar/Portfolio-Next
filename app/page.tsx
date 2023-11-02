import PersonSection from "@/app/components/PersonSection";
import CardSection from "@/app/components/CardSection";
import EducationSection from "@/app/components/EducationSection";
import ExperienceSection from "@/app/components/ExperienceSection";
import BottomSection from "@/app/components/BottomSection";


export default function Home() {
  return (
    <main className="bg-gray-100">
        <PersonSection/>
        <CardSection/>
        <ExperienceSection/>
        <EducationSection/>
        <BottomSection/>
    </main>
  )
}
