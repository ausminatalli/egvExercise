import SearchComponent from "./Components/Calculator";
import { Doctor } from "./Components/Doctor";
import Exhibitions from "./Components/Exhibitions";
import FeatureTags from "./Components/FeatureTags";
import Footer from "./Components/Layouts/Footer";
import { Sections } from "./Components/Sections";
import { Recent } from "./Components/Recent";
import Research from "./Components/Research";
import { MedicalCases } from "./Components/medicalCases";
import { MainHead } from "./Components/Layouts/MainHead";

export default function Home() {
  return (
    <main className="">
      <MainHead/>
      <SearchComponent/>
      <MedicalCases/>
      <Sections/>
      <Doctor/>
      <Recent/>
      <Research/>
      <Exhibitions/> 
      <FeatureTags/>
      <Footer />
    </main>
  );
}
