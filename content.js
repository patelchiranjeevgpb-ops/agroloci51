const APP_CONTENT = {
 subjects: [
  {id:"gpb",icon:"🧬",title:"Genetics & Plant Breeding",desc:"Genetics, breeding methods & crop improvement",badge:"Core Subject",
   topics:["Mendelian Genetics","Cell Division","Linkage & Crossing Over","Mutation","Molecular Genetics","Plant Breeding Methods","Heterosis","Crop Improvement"]},
  {id:"agronomy",icon:"🌾",title:"Agronomy",desc:"Crop production, weeds, water & nutrient management",topics:["Crop Ecology","Tillage","Weed Management","Irrigation","Cropping Systems"]},
  {id:"soil",icon:"🧪",title:"Soil Science",desc:"Soil properties, fertility, chemistry & nutrition",topics:["Soil Formation","Soil Physics","Soil Chemistry","Fertility","Plant Nutrition"]},
  {id:"hort",icon:"🍎",title:"Horticulture",desc:"Fruit, vegetable, floriculture & plantation crops",topics:["Fruit Science","Vegetable Science","Floriculture","Propagation","Post-harvest"]},
  {id:"path",icon:"🦠",title:"Plant Pathology",desc:"Plant diseases, pathogens and management",topics:["Fungi","Bacteria","Viruses","Disease Cycle","Management"]},
  {id:"ento",icon:"🐞",title:"Entomology",desc:"Insect morphology, pests and management",topics:["Morphology","Taxonomy","IPM","Major Crop Pests","Beneficial Insects"]},
  {id:"ah",icon:"🐄",title:"Animal Husbandry",desc:"Livestock, poultry and dairy basics",topics:["Breeds","Nutrition","Poultry","Dairy","Diseases"]},
  {id:"engg",icon:"⚙️",title:"Agricultural Engineering",desc:"Farm machinery, irrigation and energy",topics:["Farm Power","Machinery","Irrigation","Drainage","Renewable Energy"]}
 ],
 exams:[
  {id:"jet",icon:"🎓",title:"JET Agriculture",desc:"Rajasthan agriculture entrance preparation",areas:["Agriculture","Biology","Chemistry","Exam Practice"]},
  {id:"icar",icon:"🌱",title:"ICAR / CUET Agriculture",desc:"UG/PG agriculture entrance preparation",areas:["Core Agriculture","General Agriculture","Practice Tests"]},
  {id:"ao",icon:"🏆",title:"AO / AAO",desc:"Agriculture Officer and Assistant Agriculture Officer",areas:["Agronomy","Soil","GPB","Horticulture","Entomology"]},
  {id:"supervisor",icon:"📋",title:"Agriculture Supervisor",desc:"State-level agriculture recruitment exams",areas:["General Agriculture","Rajasthan Agriculture","MCQ Practice"]},
  {id:"afo",icon:"🏦",title:"AFO",desc:"Agricultural Field Officer preparation",areas:["Agriculture","Banking Awareness","Reasoning"]},
  {id:"other",icon:"📚",title:"Other Agriculture Exams",desc:"Flexible track for multiple agriculture exams",areas:["Subject-wise Notes","PYQ","Mock Tests"]}
 ],
 notes:[
  {title:"GPB — Fundamentals of Genetics",desc:"Mendelism, linkage, mutation & molecular genetics",url:"#"},
  {title:"Plant Breeding Quick Notes",desc:"Selection, hybridization, backcross & heterosis",url:"#"},
  {title:"Crop Improvement — Kharif",desc:"Rice, maize, sorghum, pearl millet, pulses & oilseeds",url:"#"},
  {title:"Agronomy Revision Notes",desc:"Tillage, weeds, irrigation and cropping systems",url:"#"},
  {title:"Soil Science Quick Revision",desc:"Soil fertility, chemistry and plant nutrition",url:"#"}
 ],
 videos:[
  {title:"Genetics Master Class",desc:"Add your YouTube playlist link here",url:"#"},
  {title:"Plant Breeding Concepts",desc:"Add your YouTube playlist link here",url:"#"},
  {title:"Agriculture MCQ Marathon",desc:"Add your YouTube playlist link here",url:"#"}
 ],
 updates:[
  {date:"NEW",title:"AgroLoci 51 V2",text:"New professional dashboard, subject pages and competitive exam tracks added."},
  {date:"PRACTICE",title:"Daily MCQ Practice",text:"Use the quiz section for quick agriculture revision."},
  {date:"COMING SOON",title:"Student Login & Test Series",text:"These can be added in the next upgrade with backend support."}
 ]
};

const QUIZ = [
 {topic:"Genetics",q:"The phenotypic ratio in a typical Mendelian monohybrid cross is:",o:["1:1","3:1","9:3:3:1","1:2:1"],a:1,e:"A complete-dominance monohybrid F₂ gives a 3:1 phenotypic ratio."},
 {topic:"Genetics",q:"The term 'locus' refers to:",o:["A chromosome number","A gene's position on a chromosome","A type of mutation","A protein"],a:1,e:"A locus is the specific physical position of a gene or DNA sequence on a chromosome."},
 {topic:"Plant Breeding",q:"Backcross breeding is especially useful for transferring:",o:["Many quantitative genes at once","One or a few specific genes","Only cytoplasmic traits","Random mutations"],a:1,e:"Backcrossing is commonly used to transfer one or a few desirable genes into an adapted recurrent parent."},
 {topic:"Molecular Genetics",q:"In the central dogma, genetic information generally flows as:",o:["Protein → RNA → DNA","DNA → Protein → RNA","DNA → RNA → Protein","RNA → Protein → DNA"],a:2,e:"The classical central dogma describes information flow from DNA to RNA to protein."},
 {topic:"Crop Science",q:"Rice is primarily a:",o:["C4 crop","CAM crop","C3 crop","C2 crop"],a:2,e:"Rice uses the C3 photosynthetic pathway."},
 {topic:"Soil Science",q:"Soil pH 7 is considered:",o:["Acidic","Neutral","Alkaline","Saline"],a:1,e:"At 25°C, pH 7 is neutral."},
 {topic:"Agronomy",q:"Removal of unwanted plants from a crop field is called:",o:["Roguing","Weeding","Threshing","Winnowing"],a:1,e:"Weeding is removal/control of weeds in the crop field."},
 {topic:"Plant Pathology",q:"Late blight of potato is caused by:",o:["Alternaria solani","Phytophthora infestans","Puccinia graminis","Xanthomonas oryzae"],a:1,e:"Phytophthora infestans causes late blight of potato."},
 {topic:"Entomology",q:"Adult insects have how many pairs of legs?",o:["2","3","4","5"],a:1,e:"Adult insects characteristically have three pairs (six) legs."},
 {topic:"Genetics",q:"Rosalind Franklin's Photo 51 is associated with the study of:",o:["Protein folding","DNA structure","Mitosis","Plant hormones"],a:1,e:"Photo 51 was an X-ray diffraction image important to understanding DNA's helical structure."}
];
