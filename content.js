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

const GENETICS_COURSE=[
{id:"mendel",title:"Mendelian Genetics",desc:"Mendel's laws, monohybrid & dihybrid crosses",learn:[["Gregor Mendel & pea experiments","Gregor Mendel studied inheritance using garden pea (Pisum sativum). Clear contrasting characters, short generation time and controlled pollination made pea suitable for genetic experiments."],["Law of Segregation","The two alleles of a gene separate during gamete formation, so each gamete receives only one allele. Fertilization restores the paired condition."],["Monohybrid Cross","With complete dominance, AA × aa produces Aa in F1. Selfing F1 gives a 3:1 phenotypic ratio and 1:2:1 genotypic ratio in F2."],["Independent Assortment","Alleles of different genes assort independently when the genes behave independently. A typical dihybrid F2 phenotypic ratio is 9:3:3:1."]],revision:["Mendel used Pisum sativum.","Segregation: alleles separate during gamete formation.","Monohybrid F2 phenotype = 3:1.","Monohybrid F2 genotype = 1:2:1.","Dihybrid F2 phenotype = 9:3:3:1."],qs:[["Monohybrid F2 phenotypic ratio?","3:1"],["Monohybrid F2 genotypic ratio?","1:2:1"],["Mendel's experimental plant?","Pisum sativum"]]},
{id:"cell",title:"Mitosis & Meiosis",desc:"Cell division and chromosome behavior",learn:[["Mitosis","Mitosis generally produces two genetically similar daughter cells and maintains chromosome number."],["Meiosis","Meiosis includes two successive divisions and normally reduces chromosome number from diploid to haploid. Recombination and independent assortment generate variation."]],revision:["Mitosis maintains chromosome number.","Meiosis reduces chromosome number.","Crossing over occurs during prophase I."],qs:[["Chromosome number is reduced in?","Meiosis"],["Crossing over occurs in?","Prophase I"]]},
{id:"interaction",title:"Dominance & Gene Interaction",desc:"Incomplete dominance, codominance and epistasis",learn:[["Allelic interactions","Complete dominance, incomplete dominance and codominance describe relationships between alleles at the same locus."],["Gene interactions","Genes at different loci can interact and modify classical Mendelian ratios."]],revision:["Incomplete dominance often gives 1:2:1 phenotype in F2.","Complementary interaction = 9:7.","Duplicate dominant = 15:1.","Inhibitory = 13:3."],qs:[["Complementary interaction ratio?","9:7"],["Duplicate dominant ratio?","15:1"]]},
{id:"linkage",title:"Linkage & Crossing Over",desc:"Recombination and chromosome mapping",learn:[["Linkage","Genes located on the same chromosome tend to be inherited together."],["Recombination","Crossing over can produce recombinant chromatids. Recombination frequency estimates genetic distance; 1% recombination equals 1 map unit or centimorgan."]],revision:["Linked genes are on the same chromosome.","1% recombination = 1 cM.","Observed recombination frequency between two loci does not exceed 50%."],qs:[["1% recombination equals?","1 cM"],["Linked genes occur on?","Same chromosome"]]},
{id:"mutation",title:"Mutation & Chromosomal Changes",desc:"Mutagens and chromosome aberrations",learn:[["Mutation","A mutation is a heritable change in genetic material. Mutations may be spontaneous or induced."],["Chromosomal changes","Structural changes include deletion, duplication, inversion and translocation. Numerical changes include aneuploidy and euploidy."]],revision:["Muller demonstrated X-ray induced mutation in Drosophila.","Deletion = loss of chromosome segment.","Inversion reverses a chromosome segment."],qs:[["Loss of chromosome segment?","Deletion"],["X-ray induced mutations demonstrated by?","H. J. Muller"]]},
{id:"molecular",title:"DNA, RNA & Central Dogma",desc:"Replication, transcription and translation",learn:[["DNA as genetic material","Avery, MacLeod and McCarty, and Hershey and Chase, provided key evidence that DNA is genetic material."],["Central Dogma","The classical information flow is DNA → RNA → Protein. Transcription produces RNA from DNA; translation uses mRNA information to synthesize a polypeptide."],["DNA structure","The Watson-Crick model describes a double helix with complementary base pairing: A with T and G with C."]],revision:["DNA → RNA → Protein.","A pairs with T; G pairs with C.","Transcription: DNA → RNA.","Translation: mRNA → polypeptide.","Photo 51 is associated with X-ray diffraction studies of DNA."],qs:[["Central dogma?","DNA → RNA → Protein"],["Adenine pairs with?","Thymine"],["RNA synthesis from DNA?","Transcription"]]}
];
