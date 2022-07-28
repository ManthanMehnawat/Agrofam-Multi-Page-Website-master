import React from "react";
import './Projects/project2.css'
import img1 from "../Components/Projects/manthan 9.png";
import img2 from "../Components/Projects/manthan 4.jpeg";
import img3 from '../Components/Projects/manthna 10.png'
const Project2 = () => {
  return (
    <div className="TopDiv" style={{paddingTop : '7rem'}}>
      <div className="container">
        <h4>
          <u>PROJECT 2- VERMICOMPOST /ORGANIC FARMING </u>
        </h4>
        <p>
          Vermicomposting is a biological process for efficient cattle manure
          treatment, but the vermicomposting time determines the quality of the
          vermicompost. Where there are animals, there is animal manure. With
          the intensification, industrialization and specialization of the
          cattle industry, environment pollution and cow dung comprehensive
          utilization issues in cattle farm have become increasingly obvious.
          One animal unit of fattened cattle produces an average of 10.59 tons
          per year and dairy cows 15.24 tons per year. One dairy cattle farm,
          with 2,500 cows produces as much waste as a city with around 411,000
          people. For example, if there are 14 million dairy herds, daily
          excretion of cow manure drops up to 20-30 million tons. Due to lack of
          effective means of cow manure treatment, especially in large-scale
          dairy farms, cow manure packing pollution has been serious concern. In
          some places, pollution of cow dung is over total amount of industrial
          pollution, and some pollution is up to twice than industrial
          pollution. Manure management is the big problem in cattle farms.
        </p>
        <img
          src={img1}
          alt="9"
          style={{marginLeft : '500px'}}
          width="500"
          height="300"
        />
        <p>
          Cow dung itself is a good source of organic fertilizer. Cattle manure
          is basically made up of digested grass and grain. Cow dung is high in
          organic materials and rich in nutrients. It contains about 3 percent
          Nitrogen, 2 percent Phosphorus, and 1% Potassium (3-2-1 NPK). Except
          for a lot of organic matter, N, P, K and other essential plant
          nutrients, cow dung contains a variety of enzymes and microorganisms.
          After making into organic fertilizer, cow dung organic fertilizer can
          play an irreplaceable role in soil, which helps to improve soil
          fertility, organic matter, soil physical and chemical property and
          microbial environment. Cow manure is an excellent fertilizer, cow dung
          management fresh dung has a disagreeable odor, high ammonia levels
          that may burn plants, and may contain excess salt.
        </p>
        <img
          src={img2}
          alt="4"
          style={{marginLeft : '550px'}}
          width="400"
          height="250"
        />
        <p>
          Composting will create good fertilizer or topdressing without the
          odor, salt concentration or toxic ammonia levels found in fresh dung.
          If farmers apply cow manure to soil without fully decomposition, it
          will increase oxygen consumption. Under high temperature, crops root
          system is burning and it produces harmful substances like pathogens.
          It not only cannot achieve the desired stimulation effect, but leads
          to secondary pollution to soil, water, air and food. Therefore, cow
          manure can only be used after compost maturity and harmless treatment.
          After the cow dung compost, it can be further processed into organic
          fertilizer in form of powder and granules. Organic fertilizer
          manufacturers can add chemical fertilizer to produce organic and
          inorganic fertilizer, achieving commercial organic fertilizer
          production.
        </p>
        <img
          src={img3}
          alt="10"
          style={{marginLeft : '350px'}}
          width="800"
          height="500"
        />
      </div>
    </div>
  );
};

export default Project2;
