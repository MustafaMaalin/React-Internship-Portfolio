import React from "react";
import { Link } from "react-scroll";
import App from "./App";
import{HiArrowNarrowRight} from 'react-icons/hi'
import Navbar from "./components/Navbar"


const Rondom = () => {
  return (
    <div>
      <Navbar/>
      <div name="skills" className="w-full h-screen bg-[#000000] pt-60 lg:pt-10 text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
        <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <p className="text-4xl font-bold inline border-b-4 border-[#8F805F] ">
            Rondom Therapeuten semester 6
          </p>
          <p className="py-4">
            Voor het zesde semester ben ik met een paar mede studenten de
            samenwerking aangegaan met RondOm Podotherapeuten. RondOm
            Podotherapeuten is een grote zorgorganisatie in Nederland, het heeft
            in samenwerking met Stofloos, TU/e en de Fontys de ‘Diabetes
            Voetencheck app’ ontwikkeld. Het doel van deze app is om ondanks de
            pandemie zorg te kunnen blijven bieden aan patiënten. 
            <br />
            <br />
            In de huidige
            situatie stoppen cliënten voorbarig met het gebruik van de
            voetencheckapp, hierdoor ontstaan onnodige klachten die anders
            gemakkelijk voorkomen hadden kunnen worden. Het is de bedoeling dat
            gebruikers van de voetencheck app de app zo vaak gebruiken als de
            podotherapeut hen heeft opgedragen. RondOm Podotherapeuten streeft
            ernaar dat er zo min mogelijk klachten ontstaan doordat cliënten de
            app niet gebruiken. Ze merken dat de drempel vaak te hoog is om
            dagelijks gebruik te maken van de app. Daarom is het belangrijk dat
            ze het proces zo duidelijk mogelijk in kaart brengen. 
            <br />
            <br />
            Het doel van
            het project is het gebruik van de huidige applicatie begrijpen en te
            onderzoeken zodat deze beter gemaakt kan worden in termen van
            gebruikerservaring en kwaliteit. Verder wil de stakeholder de nieuwe
            kansen die de app biedt verkennen en mogelijk nieuwe technologieën
            toepassen die samenwerken en bijdrage aan de huidige interventie.
          </p>
        </div>
       <a href='https://www.notion.so/Leeswijzer-Voetencheck-eef11c6d1bfe460b9011270ad79ce5e4'target="_blank" className='text-[#FFFFFF] border-2 px-6 py-3 my-2 flex items-center hover:bg-[#8F805F] hover:border-[#8F805F] ease-in duration-300'>
            <Link to='work' smooth={true} duration={500}>
            View Work(notion RondOm)
            </Link>
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                </span>
            </a>
            <a href="https://mustafamaalin.nl/#skills" className='text-[#FFFFFF] border-2 px-6 py-3 my-2 flex items-center hover:bg-[#8F805F] hover:border-[#8F805F] ease-in duration-300'>
            <Link to='work' smooth={true} duration={500}>
            Terug naar Homepage
            </Link>
                <span href="https://mustafamaalin.nl/" className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                </span>
            </a>
            <br/>
            <br/>
      </div>      
    </div>
    </div>
  );
};

export default Rondom;
