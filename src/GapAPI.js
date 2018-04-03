// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const GapAPI = {
    gaps: [
        {
            slug: "total-full-time-wage-and-salary-workers",
            occupation_name: "Total, full-time wage and salary workers",
            year: "2017",
            number_workers: "113272",
            median_weekly_earnings: "860",
            men_number_workers: "62980",
            men_median_weekly_earnings: "941",
            women_number_workers: "50291",
            women_median_weekly_earnings: "770",
            cents_to_dollar: "82"
        },
        {
            slug: "management-professional-and-related-occupations",
            occupation_name:
                "Management, professional, and related occupations",
            year: "2017",
            number_workers: "47207",
            median_weekly_earnings: "1224",
            men_number_workers: "22815",
            men_median_weekly_earnings: "1442",
            women_number_workers: "24393",
            women_median_weekly_earnings: "1052",
            cents_to_dollar: "73"
        },
        {
            slug: "management-business-and-financial-operations-occupations",
            occupation_name:
                "Management, business, and financial operations occupations",
            year: "2017",
            number_workers: "19414",
            median_weekly_earnings: "1327",
            men_number_workers: "10415",
            men_median_weekly_earnings: "1526",
            women_number_workers: "8999",
            women_median_weekly_earnings: "1134",
            cents_to_dollar: "74"
        },
        {
            slug: "management-occupations",
            occupation_name: "Management occupations",
            year: "2017",
            number_workers: "13169",
            median_weekly_earnings: "1392",
            men_number_workers: "7568",
            men_median_weekly_earnings: "1573",
            women_number_workers: "5600",
            women_median_weekly_earnings: "1173",
            cents_to_dollar: "75"
        },
        {
            slug: "chief-executives",
            occupation_name: "Chief executives",
            year: "2017",
            number_workers: "1136",
            median_weekly_earnings: "2296",
            men_number_workers: "823",
            men_median_weekly_earnings: "2415",
            women_number_workers: "313",
            women_median_weekly_earnings: "1920",
            cents_to_dollar: "80"
        },
        {
            slug: "general-and-operations-managers",
            occupation_name: "General and operations managers",
            year: "2017",
            number_workers: "920",
            median_weekly_earnings: "1328",
            men_number_workers: "598",
            men_median_weekly_earnings: "1488",
            women_number_workers: "321",
            women_median_weekly_earnings: "1134",
            cents_to_dollar: "76"
        },
        {
            slug: "marketing-and-sales-managers",
            occupation_name: "Marketing and sales managers",
            year: "2017",
            number_workers: "994",
            median_weekly_earnings: "1509",
            men_number_workers: "566",
            men_median_weekly_earnings: "1747",
            women_number_workers: "428",
            women_median_weekly_earnings: "1288",
            cents_to_dollar: "74"
        },
        {
            slug: "administrative-services-managers",
            occupation_name: "Administrative services managers",
            year: "2017",
            number_workers: "147",
            median_weekly_earnings: "1233",
            men_number_workers: "89",
            men_median_weekly_earnings: "1629",
            women_number_workers: "57",
            women_median_weekly_earnings: "1013",
            cents_to_dollar: "62"
        },
        {
            slug: "computer-and-information-systems-managers",
            occupation_name: "Computer and information systems managers",
            year: "2017",
            number_workers: "594",
            median_weekly_earnings: "1843",
            men_number_workers: "428",
            men_median_weekly_earnings: "1897",
            women_number_workers: "165",
            women_median_weekly_earnings: "1629",
            cents_to_dollar: "86"
        },
        {
            slug: "financial-managers",
            occupation_name: "Financial managers",
            year: "2017",
            number_workers: "1111",
            median_weekly_earnings: "1412",
            men_number_workers: "500",
            men_median_weekly_earnings: "1719",
            women_number_workers: "611",
            women_median_weekly_earnings: "1222",
            cents_to_dollar: "71"
        },
        {
            slug: "human-resources-managers",
            occupation_name: "Human resources managers",
            year: "2017",
            number_workers: "304",
            median_weekly_earnings: "1448",
            men_number_workers: "92",
            men_median_weekly_earnings: "1748",
            women_number_workers: "211",
            women_median_weekly_earnings: "1280",
            cents_to_dollar: "73"
        },
        {
            slug: "industrial-production-managers",
            occupation_name: "Industrial production managers",
            year: "2017",
            number_workers: "265",
            median_weekly_earnings: "1486",
            men_number_workers: "202",
            men_median_weekly_earnings: "1526",
            women_number_workers: "63",
            women_median_weekly_earnings: "1312",
            cents_to_dollar: "86"
        },
        {
            slug: "purchasing-managers",
            occupation_name: "Purchasing managers",
            year: "2017",
            number_workers: "194",
            median_weekly_earnings: "1271",
            men_number_workers: "90",
            men_median_weekly_earnings: "1420",
            women_number_workers: "104",
            women_median_weekly_earnings: "1138",
            cents_to_dollar: "80"
        },
        {
            slug: "construction-managers",
            occupation_name: "Construction managers",
            year: "2017",
            number_workers: "582",
            median_weekly_earnings: "1428",
            men_number_workers: "526",
            men_median_weekly_earnings: "1439",
            women_number_workers: "56",
            women_median_weekly_earnings: "1243",
            cents_to_dollar: "86"
        },
        {
            slug: "education-administrators",
            occupation_name: "Education administrators",
            year: "2017",
            number_workers: "801",
            median_weekly_earnings: "1367",
            men_number_workers: "304",
            men_median_weekly_earnings: "1561",
            women_number_workers: "497",
            women_median_weekly_earnings: "1243",
            cents_to_dollar: "80"
        },
        {
            slug: "food-service-managers",
            occupation_name: "Food service managers",
            year: "2017",
            number_workers: "816",
            median_weekly_earnings: "753",
            men_number_workers: "421",
            men_median_weekly_earnings: "894",
            women_number_workers: "394",
            women_median_weekly_earnings: "674",
            cents_to_dollar: "75"
        },
        {
            slug: "lodging-managers",
            occupation_name: "Lodging managers",
            year: "2017",
            number_workers: "116",
            median_weekly_earnings: "882",
            men_number_workers: "54",
            men_median_weekly_earnings: "982",
            women_number_workers: "62",
            women_median_weekly_earnings: "844",
            cents_to_dollar: "86"
        },
        {
            slug: "medical-and-health-services-managers",
            occupation_name: "Medical and health services managers",
            year: "2017",
            number_workers: "610",
            median_weekly_earnings: "1319",
            men_number_workers: "177",
            men_median_weekly_earnings: "1490",
            women_number_workers: "433",
            women_median_weekly_earnings: "1177",
            cents_to_dollar: "79"
        },
        {
            slug: "property-real-estate-and-community-association-managers",
            occupation_name:
                "Property, real estate, and community association managers",
            year: "2017",
            number_workers: "421",
            median_weekly_earnings: "957",
            men_number_workers: "181",
            men_median_weekly_earnings: "1163",
            women_number_workers: "241",
            women_median_weekly_earnings: "873",
            cents_to_dollar: "75"
        },
        {
            slug: "social-and-community-service-managers",
            occupation_name: "Social and community service managers",
            year: "2017",
            number_workers: "337",
            median_weekly_earnings: "1136",
            men_number_workers: "101",
            men_median_weekly_earnings: "1281",
            women_number_workers: "236",
            women_median_weekly_earnings: "1052",
            cents_to_dollar: "82"
        },
        {
            slug: "managers-all-other",
            occupation_name: "Managers, all other",
            year: "2017",
            number_workers: "3004",
            median_weekly_earnings: "1488",
            men_number_workers: "1841",
            men_median_weekly_earnings: "1629",
            women_number_workers: "1163",
            women_median_weekly_earnings: "1251",
            cents_to_dollar: "77"
        },
        {
            slug: "business-and-financial-operations-occupations",
            occupation_name: "Business and financial operations occupations",
            year: "2017",
            number_workers: "6245",
            median_weekly_earnings: "1174",
            men_number_workers: "2847",
            men_median_weekly_earnings: "1390",
            women_number_workers: "3398",
            women_median_weekly_earnings: "1055",
            cents_to_dollar: "76"
        },
        {
            slug: "purchasing-agents-except-wholesale-retail-and-farm-products",
            occupation_name:
                "Purchasing agents, except wholesale, retail, and farm products",
            year: "2017",
            number_workers: "240",
            median_weekly_earnings: "1132",
            men_number_workers: "143",
            men_median_weekly_earnings: "1144",
            women_number_workers: "96",
            women_median_weekly_earnings: "1085",
            cents_to_dollar: "95"
        },
        {
            slug: "claims-adjusters-appraisers-examiners-and-investigators",
            occupation_name:
                "Claims adjusters, appraisers, examiners, and investigators",
            year: "2017",
            number_workers: "346",
            median_weekly_earnings: "1002",
            men_number_workers: "128",
            men_median_weekly_earnings: "1108",
            women_number_workers: "218",
            women_median_weekly_earnings: "925",
            cents_to_dollar: "83"
        },
        {
            slug: "compliance-officers",
            occupation_name: "Compliance officers",
            year: "2017",
            number_workers: "240",
            median_weekly_earnings: "1391",
            men_number_workers: "106",
            men_median_weekly_earnings: "1501",
            women_number_workers: "134",
            women_median_weekly_earnings: "1296",
            cents_to_dollar: "86"
        },
        {
            slug: "human-resources-workers",
            occupation_name: "Human resources workers",
            year: "2017",
            number_workers: "664",
            median_weekly_earnings: "1086",
            men_number_workers: "182",
            men_median_weekly_earnings: "1236",
            women_number_workers: "482",
            women_median_weekly_earnings: "1035",
            cents_to_dollar: "84"
        },
        {
            slug: "training-and-development-specialists",
            occupation_name: "Training and development specialists",
            year: "2017",
            number_workers: "114",
            median_weekly_earnings: "1099",
            men_number_workers: "59",
            men_median_weekly_earnings: "1255",
            women_number_workers: "55",
            women_median_weekly_earnings: "937",
            cents_to_dollar: "75"
        },
        {
            slug: "management-analysts",
            occupation_name: "Management analysts",
            year: "2017",
            number_workers: "606",
            median_weekly_earnings: "1499",
            men_number_workers: "351",
            men_median_weekly_earnings: "1651",
            women_number_workers: "255",
            women_median_weekly_earnings: "1315",
            cents_to_dollar: "80"
        },
        {
            slug: "market-research-analysts-and-marketing-specialists",
            occupation_name:
                "Market research analysts and marketing specialists",
            year: "2017",
            number_workers: "258",
            median_weekly_earnings: "1174",
            men_number_workers: "110",
            men_median_weekly_earnings: "1357",
            women_number_workers: "149",
            women_median_weekly_earnings: "1061",
            cents_to_dollar: "78"
        },
        {
            slug: "business-operations-specialists-all-other",
            occupation_name: "Business operations specialists, all other",
            year: "2017",
            number_workers: "250",
            median_weekly_earnings: "1136",
            men_number_workers: "118",
            men_median_weekly_earnings: "1361",
            women_number_workers: "132",
            women_median_weekly_earnings: "1013",
            cents_to_dollar: "74"
        },
        {
            slug: "accountants-and-auditors",
            occupation_name: "Accountants and auditors",
            year: "2017",
            number_workers: "1512",
            median_weekly_earnings: "1173",
            men_number_workers: "622",
            men_median_weekly_earnings: "1389",
            women_number_workers: "890",
            women_median_weekly_earnings: "1065",
            cents_to_dollar: "77"
        },
        {
            slug: "financial-analysts",
            occupation_name: "Financial analysts",
            year: "2017",
            number_workers: "264",
            median_weekly_earnings: "1530",
            men_number_workers: "156",
            men_median_weekly_earnings: "1590",
            women_number_workers: "108",
            women_median_weekly_earnings: "1369",
            cents_to_dollar: "86"
        },
        {
            slug: "personal-financial-advisors",
            occupation_name: "Personal financial advisors",
            year: "2017",
            number_workers: "398",
            median_weekly_earnings: "1425",
            men_number_workers: "267",
            men_median_weekly_earnings: "1662",
            women_number_workers: "131",
            women_median_weekly_earnings: "979",
            cents_to_dollar: "59"
        },
        {
            slug: "credit-counselors-and-loan-officers",
            occupation_name: "Credit counselors and loan officers",
            year: "2017",
            number_workers: "320",
            median_weekly_earnings: "1070",
            men_number_workers: "127",
            men_median_weekly_earnings: "1332",
            women_number_workers: "193",
            women_median_weekly_earnings: "958",
            cents_to_dollar: "72"
        },
        {
            slug: "professional-and-related-occupations",
            occupation_name: "Professional and related occupations",
            year: "2017",
            number_workers: "27794",
            median_weekly_earnings: "1160",
            men_number_workers: "12400",
            men_median_weekly_earnings: "1391",
            women_number_workers: "15394",
            women_median_weekly_earnings: "1014",
            cents_to_dollar: "73"
        },
        {
            slug: "computer-and-mathematical-occupations",
            occupation_name: "Computer and mathematical occupations",
            year: "2017",
            number_workers: "4350",
            median_weekly_earnings: "1465",
            men_number_workers: "3240",
            men_median_weekly_earnings: "1552",
            women_number_workers: "1110",
            women_median_weekly_earnings: "1235",
            cents_to_dollar: "80"
        },
        {
            slug: "computer-systems-analysts",
            occupation_name: "Computer systems analysts",
            year: "2017",
            number_workers: "522",
            median_weekly_earnings: "1409",
            men_number_workers: "311",
            men_median_weekly_earnings: "1495",
            women_number_workers: "211",
            women_median_weekly_earnings: "1270",
            cents_to_dollar: "85"
        },
        {
            slug: "computer-programmers",
            occupation_name: "Computer programmers",
            year: "2017",
            number_workers: "423",
            median_weekly_earnings: "1483",
            men_number_workers: "333",
            men_median_weekly_earnings: "1539",
            women_number_workers: "89",
            women_median_weekly_earnings: "1363",
            cents_to_dollar: "89"
        },
        {
            slug: "software-developers-applications-and-systems-software",
            occupation_name:
                "Software developers, applications and systems software",
            year: "2017",
            number_workers: "1439",
            median_weekly_earnings: "1792",
            men_number_workers: "1174",
            men_median_weekly_earnings: "1863",
            women_number_workers: "265",
            women_median_weekly_earnings: "1543",
            cents_to_dollar: "83"
        },
        {
            slug: "computer-support-specialists",
            occupation_name: "Computer support specialists",
            year: "2017",
            number_workers: "443",
            median_weekly_earnings: "1068",
            men_number_workers: "319",
            men_median_weekly_earnings: "1134",
            women_number_workers: "124",
            women_median_weekly_earnings: "919",
            cents_to_dollar: "81"
        },
        {
            slug: "computer-occupations-all-other",
            occupation_name: "Computer occupations, all other",
            year: "2017",
            number_workers: "627",
            median_weekly_earnings: "1194",
            men_number_workers: "484",
            men_median_weekly_earnings: "1250",
            women_number_workers: "142",
            women_median_weekly_earnings: "1059",
            cents_to_dollar: "85"
        },
        {
            slug: "operations-research-analysts",
            occupation_name: "Operations research analysts",
            year: "2017",
            number_workers: "146",
            median_weekly_earnings: "1396",
            men_number_workers: "71",
            men_median_weekly_earnings: "1570",
            women_number_workers: "74",
            women_median_weekly_earnings: "1205",
            cents_to_dollar: "77"
        },
        {
            slug: "architecture-and-engineering-occupations",
            occupation_name: "Architecture and engineering occupations",
            year: "2017",
            number_workers: "2936",
            median_weekly_earnings: "1478",
            men_number_workers: "2494",
            men_median_weekly_earnings: "1518",
            women_number_workers: "442",
            women_median_weekly_earnings: "1307",
            cents_to_dollar: "86"
        },
        {
            slug: "civil-engineers",
            occupation_name: "Civil engineers",
            year: "2017",
            number_workers: "393",
            median_weekly_earnings: "1494",
            men_number_workers: "332",
            men_median_weekly_earnings: "1524",
            women_number_workers: "61",
            women_median_weekly_earnings: "1343",
            cents_to_dollar: "88"
        },
        {
            slug: "engineers-all-other",
            occupation_name: "Engineers, all other",
            year: "2017",
            number_workers: "546",
            median_weekly_earnings: "1561",
            men_number_workers: "473",
            men_median_weekly_earnings: "1571",
            women_number_workers: "73",
            women_median_weekly_earnings: "1436",
            cents_to_dollar: "91"
        },
        {
            slug: "engineering-technicians-except-drafters",
            occupation_name: "Engineering technicians, except drafters",
            year: "2017",
            number_workers: "339",
            median_weekly_earnings: "1053",
            men_number_workers: "269",
            men_median_weekly_earnings: "1102",
            women_number_workers: "70",
            women_median_weekly_earnings: "884",
            cents_to_dollar: "80"
        },
        {
            slug: "life-physical-and-social-science-occupations",
            occupation_name: "Life, physical, and social science occupations",
            year: "2017",
            number_workers: "1238",
            median_weekly_earnings: "1286",
            men_number_workers: "674",
            men_median_weekly_earnings: "1361",
            women_number_workers: "564",
            women_median_weekly_earnings: "1183",
            cents_to_dollar: "87"
        },
        {
            slug: "medical-scientists",
            occupation_name: "Medical scientists",
            year: "2017",
            number_workers: "162",
            median_weekly_earnings: "1378",
            men_number_workers: "82",
            men_median_weekly_earnings: "1383",
            women_number_workers: "80",
            women_median_weekly_earnings: "1270",
            cents_to_dollar: "92"
        },
        {
            slug: "physical-scientists-all-other",
            occupation_name: "Physical scientists, all other",
            year: "2017",
            number_workers: "270",
            median_weekly_earnings: "1529",
            men_number_workers: "147",
            men_median_weekly_earnings: "1565",
            women_number_workers: "122",
            women_median_weekly_earnings: "1409",
            cents_to_dollar: "90"
        },
        {
            slug: "miscellaneous-life-physical-and-social-science-technicians",
            occupation_name:
                "Miscellaneous life, physical, and social science technicians",
            year: "2017",
            number_workers: "132",
            median_weekly_earnings: "826",
            men_number_workers: "70",
            men_median_weekly_earnings: "970",
            women_number_workers: "63",
            women_median_weekly_earnings: "766",
            cents_to_dollar: "79"
        },
        {
            slug: "community-and-social-service-occupations",
            occupation_name: "Community and social service occupations",
            year: "2017",
            number_workers: "2165",
            median_weekly_earnings: "900",
            men_number_workers: "747",
            men_median_weekly_earnings: "976",
            women_number_workers: "1418",
            women_median_weekly_earnings: "857",
            cents_to_dollar: "88"
        },
        {
            slug: "counselors",
            occupation_name: "Counselors",
            year: "2017",
            number_workers: "650",
            median_weekly_earnings: "897",
            men_number_workers: "178",
            men_median_weekly_earnings: "901",
            women_number_workers: "472",
            women_median_weekly_earnings: "894",
            cents_to_dollar: "99"
        },
        {
            slug: "social-workers",
            occupation_name: "Social workers",
            year: "2017",
            number_workers: "714",
            median_weekly_earnings: "906",
            men_number_workers: "122",
            men_median_weekly_earnings: "935",
            women_number_workers: "591",
            women_median_weekly_earnings: "900",
            cents_to_dollar: "96"
        },
        {
            slug: "legal-occupations",
            occupation_name: "Legal occupations",
            year: "2017",
            number_workers: "1379",
            median_weekly_earnings: "1443",
            men_number_workers: "568",
            men_median_weekly_earnings: "1896",
            women_number_workers: "811",
            women_median_weekly_earnings: "1192",
            cents_to_dollar: "63"
        },
        {
            slug: "lawyers",
            occupation_name: "Lawyers",
            year: "2017",
            number_workers: "781",
            median_weekly_earnings: "1901",
            men_number_workers: "444",
            men_median_weekly_earnings: "2105",
            women_number_workers: "337",
            women_median_weekly_earnings: "1753",
            cents_to_dollar: "83"
        },
        {
            slug: "education-training-and-library-occupations",
            occupation_name: "Education, training, and library occupations",
            year: "2017",
            number_workers: "6978",
            median_weekly_earnings: "1002",
            men_number_workers: "1939",
            men_median_weekly_earnings: "1202",
            women_number_workers: "5039",
            women_median_weekly_earnings: "935",
            cents_to_dollar: "78"
        },
        {
            slug: "postsecondary-teachers",
            occupation_name: "Postsecondary teachers",
            year: "2017",
            number_workers: "985",
            median_weekly_earnings: "1312",
            men_number_workers: "551",
            men_median_weekly_earnings: "1414",
            women_number_workers: "434",
            women_median_weekly_earnings: "1208",
            cents_to_dollar: "85"
        },
        {
            slug: "elementary-and-middle-school-teachers",
            occupation_name: "Elementary and middle school teachers",
            year: "2017",
            number_workers: "2838",
            median_weekly_earnings: "1023",
            men_number_workers: "614",
            men_median_weekly_earnings: "1139",
            women_number_workers: "2224",
            women_median_weekly_earnings: "987",
            cents_to_dollar: "87"
        },
        {
            slug: "secondary-school-teachers",
            occupation_name: "Secondary school teachers",
            year: "2017",
            number_workers: "917",
            median_weekly_earnings: "1139",
            men_number_workers: "392",
            men_median_weekly_earnings: "1226",
            women_number_workers: "524",
            women_median_weekly_earnings: "1091",
            cents_to_dollar: "89"
        },
        {
            slug: "special-education-teachers",
            occupation_name: "Special education teachers",
            year: "2017",
            number_workers: "386",
            median_weekly_earnings: "1024",
            men_number_workers: "54",
            men_median_weekly_earnings: "1051",
            women_number_workers: "332",
            women_median_weekly_earnings: "1017",
            cents_to_dollar: "97"
        },
        {
            slug: "other-teachers-and-instructors",
            occupation_name: "Other teachers and instructors",
            year: "2017",
            number_workers: "419",
            median_weekly_earnings: "897",
            men_number_workers: "155",
            men_median_weekly_earnings: "1128",
            women_number_workers: "265",
            women_median_weekly_earnings: "820",
            cents_to_dollar: "73"
        },
        {
            slug: "teacher-assistants",
            occupation_name: "Teacher assistants",
            year: "2017",
            number_workers: "590",
            median_weekly_earnings: "550",
            men_number_workers: "67",
            men_median_weekly_earnings: "642",
            women_number_workers: "523",
            women_median_weekly_earnings: "537",
            cents_to_dollar: "84"
        },
        {
            slug: "arts-design-entertainment-sports-and-media-occupations",
            occupation_name:
                "Arts, design, entertainment, sports, and media occupations",
            year: "2017",
            number_workers: "1778",
            median_weekly_earnings: "1066",
            men_number_workers: "1013",
            men_median_weekly_earnings: "1161",
            women_number_workers: "765",
            women_median_weekly_earnings: "943",
            cents_to_dollar: "81"
        },
        {
            slug: "designers",
            occupation_name: "Designers",
            year: "2017",
            number_workers: "600",
            median_weekly_earnings: "1012",
            men_number_workers: "327",
            men_median_weekly_earnings: "1172",
            women_number_workers: "273",
            women_median_weekly_earnings: "857",
            cents_to_dollar: "73"
        },
        {
            slug: "editors",
            occupation_name: "Editors",
            year: "2017",
            number_workers: "124",
            median_weekly_earnings: "1084",
            men_number_workers: "56",
            men_median_weekly_earnings: "1123",
            women_number_workers: "68",
            women_median_weekly_earnings: "992",
            cents_to_dollar: "88"
        },
        {
            slug: "writers-and-authors",
            occupation_name: "Writers and authors",
            year: "2017",
            number_workers: "106",
            median_weekly_earnings: "1137",
            men_number_workers: "50",
            men_median_weekly_earnings: "1171",
            women_number_workers: "57",
            women_median_weekly_earnings: "1045",
            cents_to_dollar: "89"
        },
        {
            slug: "healthcare-practitioners-and-technical-occupations",
            occupation_name:
                "Healthcare practitioners and technical occupations",
            year: "2017",
            number_workers: "6970",
            median_weekly_earnings: "1124",
            men_number_workers: "1724",
            men_median_weekly_earnings: "1341",
            women_number_workers: "5246",
            women_median_weekly_earnings: "1068",
            cents_to_dollar: "80"
        },
        {
            slug: "pharmacists",
            occupation_name: "Pharmacists",
            year: "2017",
            number_workers: "254",
            median_weekly_earnings: "1923",
            men_number_workers: "107",
            men_median_weekly_earnings: "2228",
            women_number_workers: "147",
            women_median_weekly_earnings: "1834",
            cents_to_dollar: "82"
        },
        {
            slug: "physicians-and-surgeons",
            occupation_name: "Physicians and surgeons",
            year: "2017",
            number_workers: "815",
            median_weekly_earnings: "1918",
            men_number_workers: "463",
            men_median_weekly_earnings: "2277",
            women_number_workers: "352",
            women_median_weekly_earnings: "1759",
            cents_to_dollar: "77"
        },
        {
            slug: "physical-therapists",
            occupation_name: "Physical therapists",
            year: "2017",
            number_workers: "182",
            median_weekly_earnings: "1317",
            men_number_workers: "64",
            men_median_weekly_earnings: "1341",
            women_number_workers: "118",
            women_median_weekly_earnings: "1297",
            cents_to_dollar: "97"
        },
        {
            slug: "registered-nurses",
            occupation_name: "Registered nurses",
            year: "2017",
            number_workers: "2536",
            median_weekly_earnings: "1150",
            men_number_workers: "283",
            men_median_weekly_earnings: "1260",
            women_number_workers: "2253",
            women_median_weekly_earnings: "1143",
            cents_to_dollar: "91"
        },
        {
            slug: "clinical-laboratory-technologists-and-technicians",
            occupation_name:
                "Clinical laboratory technologists and technicians",
            year: "2017",
            number_workers: "297",
            median_weekly_earnings: "890",
            men_number_workers: "94",
            men_median_weekly_earnings: "1061",
            women_number_workers: "203",
            women_median_weekly_earnings: "845",
            cents_to_dollar: "80"
        },
        {
            slug: "diagnostic-related-technologists-and-technicians",
            occupation_name: "Diagnostic related technologists and technicians",
            year: "2017",
            number_workers: "271",
            median_weekly_earnings: "1162",
            men_number_workers: "85",
            men_median_weekly_earnings: "1404",
            women_number_workers: "186",
            women_median_weekly_earnings: "1041",
            cents_to_dollar: "74"
        },
        {
            slug: "emergency-medical-technicians-and-paramedics",
            occupation_name: "Emergency medical technicians and paramedics",
            year: "2017",
            number_workers: "203",
            median_weekly_earnings: "984",
            men_number_workers: "145",
            men_median_weekly_earnings: "1119",
            women_number_workers: "58",
            women_median_weekly_earnings: "733",
            cents_to_dollar: "66"
        },
        {
            slug: "health-practitioner-support-technologists-and-technicians",
            occupation_name:
                "Health practitioner support technologists and technicians",
            year: "2017",
            number_workers: "469",
            median_weekly_earnings: "710",
            men_number_workers: "98",
            men_median_weekly_earnings: "858",
            women_number_workers: "371",
            women_median_weekly_earnings: "678",
            cents_to_dollar: "79"
        },
        {
            slug: "service-occupations",
            occupation_name: "Service occupations",
            year: "2017",
            number_workers: "16044",
            median_weekly_earnings: "544",
            men_number_workers: "7985",
            men_median_weekly_earnings: "608",
            women_number_workers: "8059",
            women_median_weekly_earnings: "501",
            cents_to_dollar: "82"
        },
        {
            slug: "healthcare-support-occupations",
            occupation_name: "Healthcare support occupations",
            year: "2017",
            number_workers: "2500",
            median_weekly_earnings: "542",
            men_number_workers: "320",
            men_median_weekly_earnings: "597",
            women_number_workers: "2180",
            women_median_weekly_earnings: "533",
            cents_to_dollar: "89"
        },
        {
            slug: "nursing-psychiatric-and-home-health-aides",
            occupation_name: "Nursing, psychiatric, and home health aides",
            year: "2017",
            number_workers: "1387",
            median_weekly_earnings: "500",
            men_number_workers: "164",
            men_median_weekly_earnings: "583",
            women_number_workers: "1223",
            women_median_weekly_earnings: "493",
            cents_to_dollar: "85"
        },
        {
            slug: "protective-service-occupations",
            occupation_name: "Protective service occupations",
            year: "2017",
            number_workers: "2739",
            median_weekly_earnings: "852",
            men_number_workers: "2204",
            men_median_weekly_earnings: "894",
            women_number_workers: "535",
            women_median_weekly_earnings: "690",
            cents_to_dollar: "77"
        },
        {
            slug: "bailiffs-correctional-officers-and-jailers",
            occupation_name: "Bailiffs, correctional officers, and jailers",
            year: "2017",
            number_workers: "390",
            median_weekly_earnings: "771",
            men_number_workers: "284",
            men_median_weekly_earnings: "825",
            women_number_workers: "106",
            women_median_weekly_earnings: "669",
            cents_to_dollar: "81"
        },
        {
            slug: "police-and-sheriffs-patrol-officers",
            occupation_name: "Police and sheriff's patrol officers",
            year: "2017",
            number_workers: "688",
            median_weekly_earnings: "1015",
            men_number_workers: "595",
            men_median_weekly_earnings: "1024",
            women_number_workers: "94",
            women_median_weekly_earnings: "985",
            cents_to_dollar: "96"
        },
        {
            slug: "security-guards-and-gaming-surveillance-officers",
            occupation_name: "Security guards and gaming surveillance officers",
            year: "2017",
            number_workers: "740",
            median_weekly_earnings: "596",
            men_number_workers: "570",
            men_median_weekly_earnings: "616",
            women_number_workers: "170",
            women_median_weekly_earnings: "548",
            cents_to_dollar: "89"
        },
        {
            slug: "food-preparation-and-serving-related-occupations",
            occupation_name: "Food preparation and serving related occupations",
            year: "2017",
            number_workers: "4465",
            median_weekly_earnings: "484",
            men_number_workers: "2359",
            men_median_weekly_earnings: "502",
            women_number_workers: "2106",
            women_median_weekly_earnings: "459",
            cents_to_dollar: "91"
        },
        {
            slug: "chefs-and-head-cooks",
            occupation_name: "Chefs and head cooks",
            year: "2017",
            number_workers: "382",
            median_weekly_earnings: "634",
            men_number_workers: "310",
            men_median_weekly_earnings: "655",
            women_number_workers: "72",
            women_median_weekly_earnings: "514",
            cents_to_dollar: "78"
        },
        {
            slug:
                "first-line-supervisors-of-food-preparation-and-serving-workers",
            occupation_name:
                "First-line supervisors of food preparation and serving workers",
            year: "2017",
            number_workers: "427",
            median_weekly_earnings: "537",
            men_number_workers: "200",
            men_median_weekly_earnings: "613",
            women_number_workers: "227",
            women_median_weekly_earnings: "500",
            cents_to_dollar: "82"
        },
        {
            slug: "cooks",
            occupation_name: "Cooks",
            year: "2017",
            number_workers: "1365",
            median_weekly_earnings: "466",
            men_number_workers: "859",
            men_median_weekly_earnings: "481",
            women_number_workers: "506",
            women_median_weekly_earnings: "436",
            cents_to_dollar: "91"
        },
        {
            slug: "food-preparation-workers",
            occupation_name: "Food preparation workers",
            year: "2017",
            number_workers: "510",
            median_weekly_earnings: "425",
            men_number_workers: "242",
            men_median_weekly_earnings: "449",
            women_number_workers: "269",
            women_median_weekly_earnings: "410",
            cents_to_dollar: "91"
        },
        {
            slug: "bartenders",
            occupation_name: "Bartenders",
            year: "2017",
            number_workers: "210",
            median_weekly_earnings: "554",
            men_number_workers: "98",
            men_median_weekly_earnings: "600",
            women_number_workers: "112",
            women_median_weekly_earnings: "515",
            cents_to_dollar: "86"
        },
        {
            slug:
                "combined-food-preparation-and-serving-workers-including-fast-food",
            occupation_name:
                "Combined food preparation and serving workers, including fast food",
            year: "2017",
            number_workers: "175",
            median_weekly_earnings: "407",
            men_number_workers: "75",
            men_median_weekly_earnings: "415",
            women_number_workers: "100",
            women_median_weekly_earnings: "401",
            cents_to_dollar: "97"
        },
        {
            slug: "waiters-and-waitresses",
            occupation_name: "Waiters and waitresses",
            year: "2017",
            number_workers: "911",
            median_weekly_earnings: "493",
            men_number_workers: "319",
            men_median_weekly_earnings: "533",
            women_number_workers: "592",
            women_median_weekly_earnings: "475",
            cents_to_dollar: "89"
        },
        {
            slug: "building-and-grounds-cleaning-and-maintenance-occupations",
            occupation_name:
                "Building and grounds cleaning and maintenance occupations",
            year: "2017",
            number_workers: "3641",
            median_weekly_earnings: "522",
            men_number_workers: "2373",
            men_median_weekly_earnings: "573",
            women_number_workers: "1268",
            women_median_weekly_earnings: "463",
            cents_to_dollar: "81"
        },
        {
            slug:
                "first-line-supervisors-of-housekeeping-and-janitorial-workers",
            occupation_name:
                "First-line supervisors of housekeeping and janitorial workers",
            year: "2017",
            number_workers: "190",
            median_weekly_earnings: "661",
            men_number_workers: "113",
            men_median_weekly_earnings: "749",
            women_number_workers: "77",
            women_median_weekly_earnings: "515",
            cents_to_dollar: "69"
        },
        {
            slug: "janitors-and-building-cleaners",
            occupation_name: "Janitors and building cleaners",
            year: "2017",
            number_workers: "1595",
            median_weekly_earnings: "539",
            men_number_workers: "1136",
            men_median_weekly_earnings: "574",
            women_number_workers: "459",
            women_median_weekly_earnings: "481",
            cents_to_dollar: "84"
        },
        {
            slug: "maids-and-housekeeping-cleaners",
            occupation_name: "Maids and housekeeping cleaners",
            year: "2017",
            number_workers: "815",
            median_weekly_earnings: "450",
            men_number_workers: "128",
            men_median_weekly_earnings: "508",
            women_number_workers: "687",
            women_median_weekly_earnings: "439",
            cents_to_dollar: "86"
        },
        {
            slug: "personal-care-and-service-occupations",
            occupation_name: "Personal care and service occupations",
            year: "2017",
            number_workers: "2699",
            median_weekly_earnings: "520",
            men_number_workers: "728",
            men_median_weekly_earnings: "612",
            women_number_workers: "1971",
            women_median_weekly_earnings: "503",
            cents_to_dollar: "82"
        },
        {
            slug: "first-line-supervisors-of-gaming-workers",
            occupation_name: "First-line supervisors of gaming workers",
            year: "2017",
            number_workers: "126",
            median_weekly_earnings: "797",
            men_number_workers: "73",
            men_median_weekly_earnings: "837",
            women_number_workers: "53",
            women_median_weekly_earnings: "763",
            cents_to_dollar: "91"
        },
        {
            slug: "personal-care-aides",
            occupation_name: "Personal care aides",
            year: "2017",
            number_workers: "735",
            median_weekly_earnings: "486",
            men_number_workers: "127",
            men_median_weekly_earnings: "520",
            women_number_workers: "608",
            women_median_weekly_earnings: "479",
            cents_to_dollar: "92"
        },
        {
            slug: "recreation-and-fitness-workers",
            occupation_name: "Recreation and fitness workers",
            year: "2017",
            number_workers: "200",
            median_weekly_earnings: "616",
            men_number_workers: "82",
            men_median_weekly_earnings: "726",
            women_number_workers: "118",
            women_median_weekly_earnings: "565",
            cents_to_dollar: "78"
        },
        {
            slug: "sales-and-office-occupations",
            occupation_name: "Sales and office occupations",
            year: "2017",
            number_workers: "23686",
            median_weekly_earnings: "718",
            men_number_workers: "9481",
            men_median_weekly_earnings: "834",
            women_number_workers: "14205",
            women_median_weekly_earnings: "672",
            cents_to_dollar: "81"
        },
        {
            slug: "sales-and-related-occupations",
            occupation_name: "Sales and related occupations",
            year: "2017",
            number_workers: "9953",
            median_weekly_earnings: "763",
            men_number_workers: "5598",
            men_median_weekly_earnings: "934",
            women_number_workers: "4355",
            women_median_weekly_earnings: "609",
            cents_to_dollar: "65"
        },
        {
            slug: "first-line-supervisors-of-retail-sales-workers",
            occupation_name: "First-line supervisors of retail sales workers",
            year: "2017",
            number_workers: "2388",
            median_weekly_earnings: "764",
            men_number_workers: "1376",
            men_median_weekly_earnings: "891",
            women_number_workers: "1013",
            women_median_weekly_earnings: "639",
            cents_to_dollar: "72"
        },
        {
            slug: "first-line-supervisors-of-non-retail-sales-workers",
            occupation_name:
                "First-line supervisors of non-retail sales workers",
            year: "2017",
            number_workers: "815",
            median_weekly_earnings: "1062",
            men_number_workers: "541",
            men_median_weekly_earnings: "1151",
            women_number_workers: "274",
            women_median_weekly_earnings: "965",
            cents_to_dollar: "84"
        },
        {
            slug: "cashiers",
            occupation_name: "Cashiers",
            year: "2017",
            number_workers: "1360",
            median_weekly_earnings: "438",
            men_number_workers: "378",
            men_median_weekly_earnings: "493",
            women_number_workers: "982",
            women_median_weekly_earnings: "422",
            cents_to_dollar: "86"
        },
        {
            slug: "retail-salespersons",
            occupation_name: "Retail salespersons",
            year: "2017",
            number_workers: "1896",
            median_weekly_earnings: "615",
            men_number_workers: "1160",
            men_median_weekly_earnings: "704",
            women_number_workers: "736",
            women_median_weekly_earnings: "523",
            cents_to_dollar: "74"
        },
        {
            slug: "advertising-sales-agents",
            occupation_name: "Advertising sales agents",
            year: "2017",
            number_workers: "193",
            median_weekly_earnings: "887",
            men_number_workers: "87",
            men_median_weekly_earnings: "895",
            women_number_workers: "106",
            women_median_weekly_earnings: "882",
            cents_to_dollar: "99"
        },
        {
            slug: "insurance-sales-agents",
            occupation_name: "Insurance sales agents",
            year: "2017",
            number_workers: "440",
            median_weekly_earnings: "897",
            men_number_workers: "198",
            men_median_weekly_earnings: "1058",
            women_number_workers: "242",
            women_median_weekly_earnings: "795",
            cents_to_dollar: "75"
        },
        {
            slug: "securities-commodities-and-financial-services-sales-agents",
            occupation_name:
                "Securities, commodities, and financial services sales agents",
            year: "2017",
            number_workers: "231",
            median_weekly_earnings: "1332",
            men_number_workers: "154",
            men_median_weekly_earnings: "1416",
            women_number_workers: "77",
            women_median_weekly_earnings: "911",
            cents_to_dollar: "64"
        },
        {
            slug: "sales-representatives-services-all-other",
            occupation_name: "Sales representatives, services, all other",
            year: "2017",
            number_workers: "458",
            median_weekly_earnings: "1147",
            men_number_workers: "339",
            men_median_weekly_earnings: "1332",
            women_number_workers: "120",
            women_median_weekly_earnings: "902",
            cents_to_dollar: "68"
        },
        {
            slug: "sales-representatives-wholesale-and-manufacturing",
            occupation_name:
                "Sales representatives, wholesale and manufacturing",
            year: "2017",
            number_workers: "1105",
            median_weekly_earnings: "1157",
            men_number_workers: "796",
            men_median_weekly_earnings: "1222",
            women_number_workers: "308",
            women_median_weekly_earnings: "956",
            cents_to_dollar: "78"
        },
        {
            slug: "real-estate-brokers-and-sales-agents",
            occupation_name: "Real estate brokers and sales agents",
            year: "2017",
            number_workers: "488",
            median_weekly_earnings: "953",
            men_number_workers: "219",
            men_median_weekly_earnings: "1159",
            women_number_workers: "269",
            women_median_weekly_earnings: "818",
            cents_to_dollar: "71"
        },
        {
            slug: "sales-and-related-workers-all-other",
            occupation_name: "Sales and related workers, all other",
            year: "2017",
            number_workers: "195",
            median_weekly_earnings: "971",
            men_number_workers: "107",
            men_median_weekly_earnings: "1147",
            women_number_workers: "89",
            women_median_weekly_earnings: "799",
            cents_to_dollar: "70"
        },
        {
            slug: "office-and-administrative-support-occupations",
            occupation_name: "Office and administrative support occupations",
            year: "2017",
            number_workers: "13733",
            median_weekly_earnings: "701",
            men_number_workers: "3884",
            men_median_weekly_earnings: "735",
            women_number_workers: "9850",
            women_median_weekly_earnings: "691",
            cents_to_dollar: "94"
        },
        {
            slug:
                "first-line-supervisors-of-office-and-administrative-support-workers",
            occupation_name:
                "First-line supervisors of office and administrative support workers",
            year: "2017",
            number_workers: "1261",
            median_weekly_earnings: "867",
            men_number_workers: "408",
            men_median_weekly_earnings: "987",
            women_number_workers: "854",
            women_median_weekly_earnings: "819",
            cents_to_dollar: "83"
        },
        {
            slug: "billing-and-posting-clerks",
            occupation_name: "Billing and posting clerks",
            year: "2017",
            number_workers: "405",
            median_weekly_earnings: "696",
            men_number_workers: "58",
            men_median_weekly_earnings: "718",
            women_number_workers: "347",
            women_median_weekly_earnings: "691",
            cents_to_dollar: "96"
        },
        {
            slug: "bookkeeping-accounting-and-auditing-clerks",
            occupation_name: "Bookkeeping, accounting, and auditing clerks",
            year: "2017",
            number_workers: "718",
            median_weekly_earnings: "719",
            men_number_workers: "92",
            men_median_weekly_earnings: "743",
            women_number_workers: "625",
            women_median_weekly_earnings: "716",
            cents_to_dollar: "96"
        },
        {
            slug: "customer-service-representatives",
            occupation_name: "Customer service representatives",
            year: "2017",
            number_workers: "1881",
            median_weekly_earnings: "654",
            men_number_workers: "646",
            men_median_weekly_earnings: "712",
            women_number_workers: "1234",
            women_median_weekly_earnings: "637",
            cents_to_dollar: "89"
        },
        {
            slug: "receptionists-and-information-clerks",
            occupation_name: "Receptionists and information clerks",
            year: "2017",
            number_workers: "892",
            median_weekly_earnings: "602",
            men_number_workers: "66",
            men_median_weekly_earnings: "652",
            women_number_workers: "826",
            women_median_weekly_earnings: "599",
            cents_to_dollar: "92"
        },
        {
            slug: "dispatchers",
            occupation_name: "Dispatchers",
            year: "2017",
            number_workers: "255",
            median_weekly_earnings: "710",
            men_number_workers: "110",
            men_median_weekly_earnings: "753",
            women_number_workers: "145",
            women_median_weekly_earnings: "691",
            cents_to_dollar: "92"
        },
        {
            slug: "postal-service-mail-carriers",
            occupation_name: "Postal service mail carriers",
            year: "2017",
            number_workers: "266",
            median_weekly_earnings: "944",
            men_number_workers: "158",
            men_median_weekly_earnings: "965",
            women_number_workers: "108",
            women_median_weekly_earnings: "856",
            cents_to_dollar: "89"
        },
        {
            slug: "production-planning-and-expediting-clerks",
            occupation_name: "Production, planning, and expediting clerks",
            year: "2017",
            number_workers: "238",
            median_weekly_earnings: "911",
            men_number_workers: "118",
            men_median_weekly_earnings: "1043",
            women_number_workers: "120",
            women_median_weekly_earnings: "798",
            cents_to_dollar: "77"
        },
        {
            slug: "shipping-receiving-and-traffic-clerks",
            occupation_name: "Shipping, receiving, and traffic clerks",
            year: "2017",
            number_workers: "544",
            median_weekly_earnings: "611",
            men_number_workers: "379",
            men_median_weekly_earnings: "616",
            women_number_workers: "165",
            women_median_weekly_earnings: "596",
            cents_to_dollar: "97"
        },
        {
            slug: "stock-clerks-and-order-fillers",
            occupation_name: "Stock clerks and order fillers",
            year: "2017",
            number_workers: "982",
            median_weekly_earnings: "559",
            men_number_workers: "643",
            men_median_weekly_earnings: "571",
            women_number_workers: "339",
            women_median_weekly_earnings: "538",
            cents_to_dollar: "94"
        },
        {
            slug: "secretaries-and-administrative-assistants",
            occupation_name: "Secretaries and administrative assistants",
            year: "2017",
            number_workers: "2165",
            median_weekly_earnings: "739",
            men_number_workers: "119",
            men_median_weekly_earnings: "852",
            women_number_workers: "2046",
            women_median_weekly_earnings: "735",
            cents_to_dollar: "86"
        },
        {
            slug: "office-clerks-general",
            occupation_name: "Office clerks, general",
            year: "2017",
            number_workers: "935",
            median_weekly_earnings: "682",
            men_number_workers: "142",
            men_median_weekly_earnings: "780",
            women_number_workers: "793",
            women_median_weekly_earnings: "670",
            cents_to_dollar: "86"
        },
        {
            slug: "office-and-administrative-support-workers-all-other",
            occupation_name:
                "Office and administrative support workers, all other",
            year: "2017",
            number_workers: "473",
            median_weekly_earnings: "758",
            men_number_workers: "122",
            men_median_weekly_earnings: "768",
            women_number_workers: "352",
            women_median_weekly_earnings: "756",
            cents_to_dollar: "98"
        },
        {
            slug: "natural-resources-construction-and-maintenance-occupations",
            occupation_name:
                "Natural resources, construction, and maintenance occupations",
            year: "2017",
            number_workers: "11509",
            median_weekly_earnings: "801",
            men_number_workers: "10994",
            men_median_weekly_earnings: "809",
            women_number_workers: "515",
            women_median_weekly_earnings: "579",
            cents_to_dollar: "72"
        },
        {
            slug: "farming-fishing-and-forestry-occupations",
            occupation_name: "Farming, fishing, and forestry occupations",
            year: "2017",
            number_workers: "962",
            median_weekly_earnings: "539",
            men_number_workers: "756",
            men_median_weekly_earnings: "585",
            women_number_workers: "206",
            women_median_weekly_earnings: "471",
            cents_to_dollar: "81"
        },
        {
            slug: "miscellaneous-agricultural-workers",
            occupation_name: "Miscellaneous agricultural workers",
            year: "2017",
            number_workers: "701",
            median_weekly_earnings: "517",
            men_number_workers: "574",
            men_median_weekly_earnings: "553",
            women_number_workers: "127",
            women_median_weekly_earnings: "453",
            cents_to_dollar: "82"
        },
        {
            slug: "installation-maintenance-and-repair-occupations",
            occupation_name:
                "Installation, maintenance, and repair occupations",
            year: "2017",
            number_workers: "4400",
            median_weekly_earnings: "878",
            men_number_workers: "4251",
            men_median_weekly_earnings: "883",
            women_number_workers: "149",
            women_median_weekly_earnings: "736",
            cents_to_dollar: "83"
        },
        {
            slug: "production-transportation-and-material-moving-occupations",
            occupation_name:
                "Production, transportation, and material moving occupations",
            year: "2017",
            number_workers: "14825",
            median_weekly_earnings: "692",
            men_number_workers: "11705",
            men_median_weekly_earnings: "736",
            women_number_workers: "3119",
            women_median_weekly_earnings: "545",
            cents_to_dollar: "74"
        },
        {
            slug: "production-occupations",
            occupation_name: "Production occupations",
            year: "2017",
            number_workers: "7589",
            median_weekly_earnings: "701",
            men_number_workers: "5545",
            men_median_weekly_earnings: "769",
            women_number_workers: "2044",
            women_median_weekly_earnings: "564",
            cents_to_dollar: "73"
        },
        {
            slug: "first-line-supervisors-of-production-and-operating-workers",
            occupation_name:
                "First-line supervisors of production and operating workers",
            year: "2017",
            number_workers: "722",
            median_weekly_earnings: "966",
            men_number_workers: "588",
            men_median_weekly_earnings: "1007",
            women_number_workers: "133",
            women_median_weekly_earnings: "716",
            cents_to_dollar: "71"
        },
        {
            slug: "electrical-electronics-and-electromechanical-assemblers",
            occupation_name:
                "Electrical, electronics, and electromechanical assemblers",
            year: "2017",
            number_workers: "123",
            median_weekly_earnings: "624",
            men_number_workers: "73",
            men_median_weekly_earnings: "682",
            women_number_workers: "50",
            women_median_weekly_earnings: "587",
            cents_to_dollar: "86"
        },
        {
            slug: "miscellaneous-assemblers-and-fabricators",
            occupation_name: "Miscellaneous assemblers and fabricators",
            year: "2017",
            number_workers: "957",
            median_weekly_earnings: "630",
            men_number_workers: "595",
            men_median_weekly_earnings: "700",
            women_number_workers: "362",
            women_median_weekly_earnings: "559",
            cents_to_dollar: "80"
        },
        {
            slug: "bakers",
            occupation_name: "Bakers",
            year: "2017",
            number_workers: "135",
            median_weekly_earnings: "472",
            men_number_workers: "67",
            men_median_weekly_earnings: "488",
            women_number_workers: "68",
            women_median_weekly_earnings: "464",
            cents_to_dollar: "95"
        },
        {
            slug: "butchers-and-other-meat-poultry-and-fish-processing-workers",
            occupation_name:
                "Butchers and other meat, poultry, and fish processing workers",
            year: "2017",
            number_workers: "259",
            median_weekly_earnings: "587",
            men_number_workers: "196",
            men_median_weekly_earnings: "621",
            women_number_workers: "63",
            women_median_weekly_earnings: "487",
            cents_to_dollar: "78"
        },
        {
            slug: "food-processing-workers-all-other",
            occupation_name: "Food processing workers, all other",
            year: "2017",
            number_workers: "171",
            median_weekly_earnings: "676",
            men_number_workers: "119",
            men_median_weekly_earnings: "701",
            women_number_workers: "52",
            women_median_weekly_earnings: "545",
            cents_to_dollar: "78"
        },
        {
            slug: "metal-workers-and-plastic-workers-all-other",
            occupation_name: "Metal workers and plastic workers, all other",
            year: "2017",
            number_workers: "381",
            median_weekly_earnings: "654",
            men_number_workers: "303",
            men_median_weekly_earnings: "679",
            women_number_workers: "78",
            women_median_weekly_earnings: "574",
            cents_to_dollar: "85"
        },
        {
            slug: "inspectors-testers-sorters-samplers-and-weighers",
            occupation_name:
                "Inspectors, testers, sorters, samplers, and weighers",
            year: "2017",
            number_workers: "717",
            median_weekly_earnings: "765",
            men_number_workers: "443",
            men_median_weekly_earnings: "853",
            women_number_workers: "275",
            women_median_weekly_earnings: "637",
            cents_to_dollar: "75"
        },
        {
            slug: "packaging-and-filling-machine-operators-and-tenders",
            occupation_name:
                "Packaging and filling machine operators and tenders",
            year: "2017",
            number_workers: "275",
            median_weekly_earnings: "553",
            men_number_workers: "128",
            men_median_weekly_earnings: "598",
            women_number_workers: "147",
            women_median_weekly_earnings: "516",
            cents_to_dollar: "86"
        },
        {
            slug: "production-workers-all-other",
            occupation_name: "Production workers, all other",
            year: "2017",
            number_workers: "890",
            median_weekly_earnings: "663",
            men_number_workers: "653",
            men_median_weekly_earnings: "716",
            women_number_workers: "238",
            women_median_weekly_earnings: "570",
            cents_to_dollar: "80"
        },
        {
            slug: "transportation-and-material-moving-occupations",
            occupation_name: "Transportation and material moving occupations",
            year: "2017",
            number_workers: "7236",
            median_weekly_earnings: "681",
            men_number_workers: "6160",
            men_median_weekly_earnings: "710",
            women_number_workers: "1075",
            women_median_weekly_earnings: "514",
            cents_to_dollar: "72"
        },
        {
            slug: "bus-drivers",
            occupation_name: "Bus drivers",
            year: "2017",
            number_workers: "356",
            median_weekly_earnings: "605",
            men_number_workers: "209",
            men_median_weekly_earnings: "671",
            women_number_workers: "148",
            women_median_weekly_earnings: "517",
            cents_to_dollar: "77"
        },
        {
            slug: "driver-sales-workers-and-truck-drivers",
            occupation_name: "Driver/sales workers and truck drivers",
            year: "2017",
            number_workers: "2828",
            median_weekly_earnings: "797",
            men_number_workers: "2689",
            men_median_weekly_earnings: "807",
            women_number_workers: "139",
            women_median_weekly_earnings: "589",
            cents_to_dollar: "73"
        },
        {
            slug: "taxi-drivers-and-chauffeurs",
            occupation_name: "Taxi drivers and chauffeurs",
            year: "2017",
            number_workers: "362",
            median_weekly_earnings: "604",
            men_number_workers: "308",
            men_median_weekly_earnings: "623",
            women_number_workers: "54",
            women_median_weekly_earnings: "453",
            cents_to_dollar: "73"
        },
        {
            slug: "laborers-and-freight-stock-and-material-movers-hand",
            occupation_name:
                "Laborers and freight, stock, and material movers, hand",
            year: "2017",
            number_workers: "1450",
            median_weekly_earnings: "578",
            men_number_workers: "1196",
            men_median_weekly_earnings: "595",
            women_number_workers: "254",
            women_median_weekly_earnings: "500",
            cents_to_dollar: "84"
        },
        {
            slug: "packers-and-packagers-hand",
            occupation_name: "Packers and packagers, hand",
            year: "2017",
            number_workers: "368",
            median_weekly_earnings: "480",
            men_number_workers: "158",
            men_median_weekly_earnings: "500",
            women_number_workers: "210",
            women_median_weekly_earnings: "462",
            cents_to_dollar: "92"
        }
    ],
    all: function() {
        return this.gaps;
    },
    get: function(slug) {
        const isGap = g => g.slug === slug;
        return this.gaps.find(isGap);
    },
    cleanOccupationName: function(occupationName) {
        let cleanName = occupationName.toLowerCase();
        //ends with , hand
        if (cleanName.endsWith(", hand")) {
            return this.cutOffSuffix(cleanName, ", hand");
        }
        //ends with , all other
        if (cleanName.endsWith(", all other")) {
            return this.cutOffSuffix(cleanName, ", all other");
        }
        //starts with miscellaneous
        if (cleanName.startsWith("miscellaneous ")) {
            return cleanName.substring("miscellaneous ".length);
        }
        //starts with other
        if (cleanName.startsWith("other ")) {
            return cleanName.substring("other ".length);
        }
        //waitresses and waiters - waiters
        if (cleanName === "waiters and waitresses") {
            return "waitresses";
        }
        //total, 16 years and over just 16 years and over
        if (cleanName === "total, full-time wage and salary workers") {
            return "in the U.S.";
        }
        return cleanName;
    },
    cutOffSuffix: function(str, suffix) {
        return str.substring(0, str.length - suffix.length);
    },
    capitalize: function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
};

export default GapAPI;
