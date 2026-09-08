const APP_CONTENT = {
  notes: [
    {title:"GPB — Fundamentals of Genetics", desc:"Mendelism, cell division, linkage, mutation & molecular genetics", url:"#"},
    {title:"Plant Breeding Quick Notes", desc:"Selection, hybridization, backcross, heterosis & breeding methods", url:"#"},
    {title:"Crop Improvement — Kharif", desc:"Rice, maize, sorghum, pearl millet, pulses and oilseeds", url:"#"},
    {title:"Agriculture Competitive One-Liners", desc:"Rapid revision for JET, ICAR, AO/AAO and other exams", url:"#"}
  ],
  videos: [
    {title:"Genetics Master Class", desc:"Add your YouTube playlist link here", url:"#"},
    {title:"Plant Breeding Concepts", desc:"Add your YouTube playlist link here", url:"#"},
    {title:"Agriculture MCQ Marathon", desc:"Add your YouTube playlist link here", url:"#"}
  ],
  updates: [
    {date:"NEW", title:"AgroLoci 51 App Started", text:"The learning platform structure is ready. Add your courses, PDFs and videos in content.js."},
    {date:"PRACTICE", title:"Daily MCQ Practice", text:"Use the built-in quiz section for quick agriculture revision."},
    {date:"COMING SOON", title:"Test Series & Student Login", text:"These can be added later with Firebase or another backend."}
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
  {topic:"Entomology",q:"Insects have how many pairs of legs?",o:["2","3","4","5"],a:1,e:"Adult insects characteristically have three pairs (six) legs."},
  {topic:"Genetics",q:"Rosalind Franklin's Photo 51 is associated with the study of:",o:["Protein folding","DNA structure","Mitosis","Plant hormones"],a:1,e:"Photo 51 was an X-ray diffraction image important to understanding DNA's helical structure."}
];
