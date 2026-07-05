/* MATCHDAY — data: FIFA World Cup, MLS, and Premier League fixtures/standings */
/* ---------------- DATA ---------------- */
const FLAGS = {
  BEL:"🇧🇪",SEN:"🇸🇳",USA:"🇺🇸",BIH:"🇧🇦",ESP:"🇪🇸",AUT:"🇦🇹",POR:"🇵🇹",CRO:"🇭🇷",SUI:"🇨🇭",DZA:"🇩🇿",
  AUS:"🇦🇺",EGY:"🇪🇬",ARG:"🇦🇷",CPV:"🇨🇻",COL:"🇨🇴",GHA:"🇬🇭",CAN:"🇨🇦",MAR:"🇲🇦",PAR:"🇵🇾",FRA:"🇫🇷",
  BRA:"🇧🇷",NOR:"🇳🇴",MEX:"🇲🇽",ENG:"🏴",RSA:"🇿🇦",KOR:"🇰🇷",CZE:"🇨🇿",QAT:"🇶🇦",SCO:"🏴",HTI:"🇭🇹",
  TUR:"🇹🇷",GER:"🇩🇪",CIV:"🇨🇮",ECU:"🇪🇨",CUW:"🇨🇼",NED:"🇳🇱",JPN:"🇯🇵",SWE:"🇸🇪",TUN:"🇹🇳",IRN:"🇮🇷",
  NZL:"🇳🇿",URU:"🇺🇾",KSA:"🇸🇦",IRQ:"🇮🇶",JOR:"🇯🇴",COD:"🇨🇩",UZB:"🇺🇿",PAN:"🇵🇦"
};
const flagFor = code => FLAGS[code] || "⚽";

const DATA = {
  worldcup: {
    label:"FIFA World Cup", icon:"🌍", short:"World Cup",
    matches:[
      {status:"final",start:"2026-07-01T20:00:00Z",home:"BEL",away:"SEN",names:{BEL:"Belgium",SEN:"Senegal"},score:{BEL:3,SEN:2},round:"Round of 32"},
      {status:"final",start:"2026-07-02T00:00:00Z",home:"USA",away:"BIH",names:{USA:"USA",BIH:"Bosnia & Herzegovina"},score:{USA:2,BIH:0},round:"Round of 32"},
      {status:"final",start:"2026-07-02T19:00:00Z",home:"ESP",away:"AUT",names:{ESP:"Spain",AUT:"Austria"},score:{ESP:3,AUT:0},round:"Round of 32"},
      {status:"final",start:"2026-07-02T23:00:00Z",home:"POR",away:"CRO",names:{POR:"Portugal",CRO:"Croatia"},score:{POR:2,CRO:1},round:"Round of 32"},
      {status:"final",start:"2026-07-03T03:00:00Z",home:"SUI",away:"DZA",names:{SUI:"Switzerland",DZA:"Algeria"},score:{SUI:2,DZA:0},round:"Round of 32"},
      {status:"final",start:"2026-07-03T18:00:00Z",home:"AUS",away:"EGY",names:{AUS:"Australia",EGY:"Egypt"},score:{AUS:1,EGY:1},round:"Round of 32"},
      {status:"final",start:"2026-07-03T22:00:00Z",home:"ARG",away:"CPV",names:{ARG:"Argentina",CPV:"Cape Verde"},score:{ARG:3,CPV:2},round:"Round of 32"},
      {status:"final",start:"2026-07-04T01:30:00Z",home:"COL",away:"GHA",names:{COL:"Colombia",GHA:"Ghana"},score:{COL:1,GHA:0},round:"Round of 32"},
      {status:"final",start:"2026-07-04T17:00:00Z",home:"CAN",away:"MAR",names:{CAN:"Canada",MAR:"Morocco"},score:{CAN:0,MAR:3},round:"Round of 32"},
      {status:"final",start:"2026-07-04T21:00:00Z",home:"PAR",away:"FRA",names:{PAR:"Paraguay",FRA:"France"},score:{PAR:0,FRA:1},round:"Round of 32"},
      {status:"scheduled",start:"2026-07-05T20:00:00Z",home:"BRA",away:"NOR",names:{BRA:"Brazil",NOR:"Norway"},winProb:{BRA:53.3,NOR:21.3,draw:25.4},round:"Round of 32"},
      {status:"scheduled",start:"2026-07-06T00:00:00Z",home:"MEX",away:"ENG",names:{MEX:"Mexico",ENG:"England"},winProb:{MEX:30.4,ENG:39.8,draw:29.8},round:"Round of 32"},
      {status:"scheduled",start:"2026-07-06T19:00:00Z",home:"POR",away:"ESP",names:{POR:"Portugal",ESP:"Spain"},winProb:{POR:23.5,ESP:50.2,draw:26.3},round:"Round of 16"},
      {status:"scheduled",start:"2026-07-07T00:00:00Z",home:"USA",away:"BEL",names:{USA:"USA",BEL:"Belgium"},winProb:{USA:36,BEL:35.9,draw:28.1},round:"Round of 16"},
      {status:"scheduled",start:"2026-07-07T16:00:00Z",home:"ARG",away:"EGY",names:{ARG:"Argentina",EGY:"Egypt"},winProb:{ARG:69.5,EGY:10.5,draw:20},round:"Round of 16"},
      {status:"scheduled",start:"2026-07-07T20:00:00Z",home:"SUI",away:"COL",names:{SUI:"Switzerland",COL:"Colombia"},winProb:{SUI:27.1,COL:42.5,draw:30.4},round:"Round of 16"},
      {status:"scheduled",start:"2026-07-09T20:00:00Z",home:"FRA",away:"MAR",names:{FRA:"France",MAR:"Morocco"},winProb:{FRA:61.6,MAR:15.4,draw:23},round:"Round of 16"},
      {status:"scheduled",start:"2026-07-10T19:00:00Z",home:"W93",away:"W94",names:{W93:"Winner M93",W94:"Winner M94"},round:"Round of 16"},
      {status:"scheduled",start:"2026-07-11T21:00:00Z",home:"W91",away:"W92",names:{W91:"Winner M91",W92:"Winner M92"},round:"Round of 16"},
      {status:"scheduled",start:"2026-07-12T01:00:00Z",home:"W95",away:"W96",names:{W95:"Winner M95",W96:"Winner M96"},round:"Round of 16"}
    ],
    standingsMode:"groups",
    standings:[
      {group:"A",rank:1,team:"Mexico",code:"MEX",w:3,l:0,d:0,pts:9},{group:"A",rank:2,team:"South Africa",code:"RSA",w:1,l:1,d:1,pts:4},
      {group:"A",rank:3,team:"Korea Republic",code:"KOR",w:1,l:2,d:0,pts:3},{group:"A",rank:4,team:"Czechia",code:"CZE",w:0,l:2,d:1,pts:1},
      {group:"B",rank:1,team:"Switzerland",code:"SUI",w:2,l:0,d:1,pts:7},{group:"B",rank:2,team:"Canada",code:"CAN",w:1,l:1,d:1,pts:4},
      {group:"B",rank:3,team:"Bosnia & Herzegovina",code:"BIH",w:1,l:1,d:1,pts:4},{group:"B",rank:4,team:"Qatar",code:"QAT",w:0,l:2,d:1,pts:1},
      {group:"C",rank:1,team:"Brazil",code:"BRA",w:2,l:0,d:1,pts:7},{group:"C",rank:2,team:"Morocco",code:"MAR",w:2,l:0,d:1,pts:7},
      {group:"C",rank:3,team:"Scotland",code:"SCO",w:1,l:2,d:0,pts:3},{group:"C",rank:4,team:"Haiti",code:"HTI",w:0,l:3,d:0,pts:0},
      {group:"D",rank:1,team:"USA",code:"USA",w:2,l:1,d:0,pts:6},{group:"D",rank:2,team:"Australia",code:"AUS",w:1,l:1,d:1,pts:4},
      {group:"D",rank:3,team:"Paraguay",code:"PAR",w:1,l:1,d:1,pts:4},{group:"D",rank:4,team:"Türkiye",code:"TUR",w:1,l:2,d:0,pts:3},
      {group:"E",rank:1,team:"Germany",code:"GER",w:2,l:1,d:0,pts:6},{group:"E",rank:2,team:"Ivory Coast",code:"CIV",w:2,l:1,d:0,pts:6},
      {group:"E",rank:3,team:"Ecuador",code:"ECU",w:1,l:1,d:1,pts:4},{group:"E",rank:4,team:"Curaçao",code:"CUW",w:0,l:2,d:1,pts:1},
      {group:"F",rank:1,team:"Netherlands",code:"NED",w:2,l:0,d:1,pts:7},{group:"F",rank:2,team:"Japan",code:"JPN",w:1,l:0,d:2,pts:5},
      {group:"F",rank:3,team:"Sweden",code:"SWE",w:1,l:1,d:1,pts:4},{group:"F",rank:4,team:"Tunisia",code:"TUN",w:0,l:3,d:0,pts:0},
      {group:"G",rank:1,team:"Belgium",code:"BEL",w:1,l:0,d:2,pts:5},{group:"G",rank:2,team:"Egypt",code:"EGY",w:1,l:0,d:2,pts:5},
      {group:"G",rank:3,team:"IR Iran",code:"IRN",w:0,l:0,d:3,pts:3},{group:"G",rank:4,team:"New Zealand",code:"NZL",w:0,l:2,d:1,pts:1},
      {group:"H",rank:1,team:"Spain",code:"ESP",w:2,l:0,d:1,pts:7},{group:"H",rank:2,team:"Cape Verde",code:"CPV",w:0,l:0,d:3,pts:3},
      {group:"H",rank:3,team:"Uruguay",code:"URU",w:0,l:1,d:2,pts:2},{group:"H",rank:4,team:"Saudi Arabia",code:"KSA",w:0,l:1,d:2,pts:2},
      {group:"I",rank:1,team:"France",code:"FRA",w:3,l:0,d:0,pts:9},{group:"I",rank:2,team:"Norway",code:"NOR",w:2,l:1,d:0,pts:6},
      {group:"I",rank:3,team:"Senegal",code:"SEN",w:1,l:2,d:0,pts:3},{group:"I",rank:4,team:"Iraq",code:"IRQ",w:0,l:3,d:0,pts:0},
      {group:"J",rank:1,team:"Argentina",code:"ARG",w:3,l:0,d:0,pts:9},{group:"J",rank:2,team:"Austria",code:"AUT",w:1,l:1,d:1,pts:4},
      {group:"J",rank:3,team:"Algeria",code:"DZA",w:1,l:1,d:1,pts:4},{group:"J",rank:4,team:"Jordan",code:"JOR",w:0,l:3,d:0,pts:0},
      {group:"K",rank:1,team:"Colombia",code:"COL",w:2,l:0,d:1,pts:7},{group:"K",rank:2,team:"Portugal",code:"POR",w:1,l:0,d:2,pts:5},
      {group:"K",rank:3,team:"Congo DR",code:"COD",w:1,l:1,d:1,pts:4},{group:"K",rank:4,team:"Uzbekistan",code:"UZB",w:0,l:3,d:0,pts:0},
      {group:"L",rank:1,team:"England",code:"ENG",w:2,l:0,d:1,pts:7},{group:"L",rank:2,team:"Croatia",code:"CRO",w:2,l:1,d:0,pts:6},
      {group:"L",rank:3,team:"Ghana",code:"GHA",w:1,l:1,d:1,pts:4},{group:"L",rank:4,team:"Panama",code:"PAN",w:0,l:3,d:0,pts:0}
    ]
  },
  mls: {
    label:"MLS", icon:"⭐", short:"MLS",
    matches:[
      {status:"final",start:"2026-05-24T00:30:00Z",home:"CHI",away:"TOR",names:{CHI:"Chicago Fire",TOR:"Toronto FC"},score:{CHI:2,TOR:1}},
      {status:"final",start:"2026-05-24T00:30:00Z",home:"SKC",away:"RBNY",names:{SKC:"Sporting Kansas City",RBNY:"NY Red Bulls"},score:{SKC:1,RBNY:2}},
      {status:"final",start:"2026-05-24T00:30:00Z",home:"NSH",away:"NYC",names:{NSH:"Nashville SC",NYC:"New York City FC"},score:{NSH:2,NYC:1}},
      {status:"final",start:"2026-05-24T01:30:00Z",home:"COL",away:"DAL",names:{COL:"Colorado Rapids",DAL:"FC Dallas"},score:{COL:1,DAL:2}},
      {status:"final",start:"2026-05-24T01:30:00Z",home:"POR",away:"SJ",names:{POR:"Portland Timbers",SJ:"San Jose Earthquakes"},score:{POR:1,SJ:3}},
      {status:"final",start:"2026-05-24T01:30:00Z",home:"SD",away:"VAN",names:{SD:"San Diego FC",VAN:"Vancouver Whitecaps"},score:{SD:2,VAN:4}},
      {status:"final",start:"2026-05-24T02:30:00Z",home:"LA",away:"HOU",names:{LA:"LA Galaxy",HOU:"Houston Dynamo"},score:{LA:1,HOU:1}},
      {status:"final",start:"2026-05-24T21:00:00Z",home:"CLB",away:"ATL",names:{CLB:"Columbus Crew",ATL:"Atlanta United"},score:{CLB:2,ATL:0}},
      {status:"final",start:"2026-05-24T23:00:00Z",home:"MIA",away:"PHI",names:{MIA:"Inter Miami CF",PHI:"Philadelphia Union"},score:{MIA:6,PHI:4}},
      {status:"final",start:"2026-05-25T01:15:00Z",home:"LAFC",away:"SEA",names:{LAFC:"Los Angeles FC",SEA:"Seattle Sounders"},score:{LAFC:1,SEA:0}},
      {status:"scheduled",start:"2026-07-16T23:30:00Z",home:"MTL",away:"TOR",names:{MTL:"CF Montréal",TOR:"Toronto FC"},winProb:{MTL:51.8,TOR:23.5,draw:24.7}},
      {status:"scheduled",start:"2026-07-17T00:30:00Z",home:"CHI",away:"VAN",names:{CHI:"Chicago Fire",VAN:"Vancouver Whitecaps"},winProb:{CHI:34.1,VAN:40.7,draw:25.2}},
      {status:"scheduled",start:"2026-07-17T00:30:00Z",home:"STL",away:"SKC",names:{STL:"Saint Louis City SC",SKC:"Sporting Kansas City"},winProb:{STL:69.8,SKC:12.9,draw:17.3}},
      {status:"scheduled",start:"2026-07-17T02:30:00Z",home:"SEA",away:"POR",names:{SEA:"Seattle Sounders",POR:"Portland Timbers"},winProb:{SEA:67.3,POR:14.6,draw:18.1}},
      {status:"scheduled",start:"2026-07-18T00:00:00Z",home:"NSH",away:"ATL",names:{NSH:"Nashville SC",ATL:"Atlanta United"},winProb:{NSH:71,ATL:11.1,draw:17.9}},
      {status:"scheduled",start:"2026-07-18T02:45:00Z",home:"LA",away:"LAFC",names:{LA:"LA Galaxy",LAFC:"Los Angeles FC"},winProb:{LA:36.7,LAFC:38.3,draw:25}},
      {status:"scheduled",start:"2026-07-22T23:30:00Z",home:"CIN",away:"VAN",names:{CIN:"FC Cincinnati",VAN:"Vancouver Whitecaps"}},
      {status:"scheduled",start:"2026-07-22T23:30:00Z",home:"CLB",away:"NYC",names:{CLB:"Columbus Crew",NYC:"New York City FC"}},
      {status:"scheduled",start:"2026-07-22T23:30:00Z",home:"MIA",away:"CHI",names:{MIA:"Inter Miami CF",CHI:"Chicago Fire"}},
      {status:"scheduled",start:"2026-07-22T23:30:00Z",home:"NE",away:"TOR",names:{NE:"New England Revolution",TOR:"Toronto FC"}}
    ],
    standingsMode:"toggle",
    standingsGroups:["Overall","Eastern Conference","Western Conference"],
    standings:[
      {group:"Overall",rank:1,team:"Nashville SC",code:"NSH",w:10,l:1,d:3,pts:33},{group:"Overall",rank:2,team:"Vancouver Whitecaps",code:"VAN",w:10,l:2,d:2,pts:32},
      {group:"Overall",rank:3,team:"San Jose Earthquakes",code:"SJ",w:10,l:3,d:2,pts:32},{group:"Overall",rank:4,team:"Inter Miami CF",code:"MIA",w:9,l:2,d:4,pts:31},
      {group:"Overall",rank:5,team:"Chicago Fire",code:"CHI",w:8,l:4,d:2,pts:26},{group:"Overall",rank:6,team:"Real Salt Lake",code:"RSL",w:8,l:4,d:2,pts:26},
      {group:"Overall",rank:7,team:"New England Revolution",code:"NE",w:8,l:5,d:1,pts:25},{group:"Overall",rank:8,team:"FC Dallas",code:"DAL",w:7,l:4,d:4,pts:25},
      {group:"Overall",rank:9,team:"Los Angeles FC",code:"LAFC",w:7,l:5,d:3,pts:24},{group:"Overall",rank:10,team:"Seattle Sounders",code:"SEA",w:7,l:3,d:3,pts:24},
      {group:"Overall",rank:11,team:"Houston Dynamo",code:"HOU",w:7,l:6,d:1,pts:22},{group:"Overall",rank:12,team:"Minnesota United",code:"MIN",w:6,l:5,d:4,pts:22},
      {group:"Overall",rank:13,team:"NY Red Bulls",code:"RBNY",w:6,l:5,d:4,pts:22},{group:"Overall",rank:14,team:"Charlotte FC",code:"CLT",w:6,l:6,d:3,pts:21},
      {group:"Overall",rank:15,team:"LA Galaxy",code:"LA",w:5,l:5,d:5,pts:20},{group:"Overall",rank:16,team:"FC Cincinnati",code:"CIN",w:5,l:5,d:5,pts:20},
      {group:"Overall",rank:17,team:"New York City FC",code:"NYC",w:5,l:6,d:4,pts:19},{group:"Overall",rank:18,team:"DC United",code:"DC",w:4,l:5,d:6,pts:18},
      {group:"Overall",rank:19,team:"San Diego FC",code:"SD",w:4,l:6,d:5,pts:17},{group:"Overall",rank:20,team:"Colorado Rapids",code:"COL",w:5,l:9,d:1,pts:16},
      {group:"Overall",rank:21,team:"Columbus Crew",code:"CLB",w:4,l:7,d:4,pts:16},{group:"Overall",rank:22,team:"Saint Louis City SC",code:"STL",w:4,l:6,d:4,pts:16},
      {group:"Overall",rank:23,team:"Portland Timbers",code:"POR",w:4,l:8,d:2,pts:14},{group:"Overall",rank:24,team:"CF Montréal",code:"MTL",w:4,l:8,d:2,pts:14},
      {group:"Overall",rank:25,team:"Orlando City SC",code:"ORL",w:4,l:9,d:2,pts:14},{group:"Overall",rank:26,team:"Toronto FC",code:"TOR",w:3,l:6,d:5,pts:14},
      {group:"Overall",rank:27,team:"Austin FC",code:"ATX",w:3,l:7,d:5,pts:14},{group:"Overall",rank:28,team:"Atlanta United",code:"ATL",w:3,l:9,d:2,pts:11},
      {group:"Overall",rank:29,team:"Sporting Kansas City",code:"SKC",w:3,l:9,d:2,pts:11},{group:"Overall",rank:30,team:"Philadelphia Union",code:"PHI",w:1,l:10,d:4,pts:7},

      {group:"Eastern Conference",rank:1,team:"Nashville SC",code:"NSH",w:10,l:1,d:3,pts:33},{group:"Eastern Conference",rank:2,team:"Inter Miami CF",code:"MIA",w:9,l:2,d:4,pts:31},
      {group:"Eastern Conference",rank:3,team:"Chicago Fire",code:"CHI",w:8,l:4,d:2,pts:26},{group:"Eastern Conference",rank:4,team:"New England Revolution",code:"NE",w:8,l:5,d:1,pts:25},
      {group:"Eastern Conference",rank:5,team:"NY Red Bulls",code:"RBNY",w:6,l:5,d:4,pts:22},{group:"Eastern Conference",rank:6,team:"Charlotte FC",code:"CLT",w:6,l:6,d:3,pts:21},
      {group:"Eastern Conference",rank:7,team:"FC Cincinnati",code:"CIN",w:5,l:5,d:5,pts:20},{group:"Eastern Conference",rank:8,team:"New York City FC",code:"NYC",w:5,l:6,d:4,pts:19},
      {group:"Eastern Conference",rank:9,team:"DC United",code:"DC",w:4,l:5,d:6,pts:18},{group:"Eastern Conference",rank:10,team:"Columbus Crew",code:"CLB",w:4,l:7,d:4,pts:16},
      {group:"Eastern Conference",rank:11,team:"CF Montréal",code:"MTL",w:4,l:8,d:2,pts:14},{group:"Eastern Conference",rank:12,team:"Orlando City SC",code:"ORL",w:4,l:9,d:2,pts:14},
      {group:"Eastern Conference",rank:13,team:"Toronto FC",code:"TOR",w:3,l:6,d:5,pts:14},{group:"Eastern Conference",rank:14,team:"Atlanta United",code:"ATL",w:3,l:9,d:2,pts:11},
      {group:"Eastern Conference",rank:15,team:"Philadelphia Union",code:"PHI",w:1,l:10,d:4,pts:7},

      {group:"Western Conference",rank:1,team:"Vancouver Whitecaps",code:"VAN",w:10,l:2,d:2,pts:32},{group:"Western Conference",rank:2,team:"San Jose Earthquakes",code:"SJ",w:10,l:3,d:2,pts:32},
      {group:"Western Conference",rank:3,team:"Real Salt Lake",code:"RSL",w:8,l:4,d:2,pts:26},{group:"Western Conference",rank:4,team:"FC Dallas",code:"DAL",w:7,l:4,d:4,pts:25},
      {group:"Western Conference",rank:5,team:"Los Angeles FC",code:"LAFC",w:7,l:5,d:3,pts:24},{group:"Western Conference",rank:6,team:"Seattle Sounders",code:"SEA",w:7,l:3,d:3,pts:24},
      {group:"Western Conference",rank:7,team:"Houston Dynamo",code:"HOU",w:7,l:6,d:1,pts:22},{group:"Western Conference",rank:8,team:"Minnesota United",code:"MIN",w:6,l:5,d:4,pts:22},
      {group:"Western Conference",rank:9,team:"LA Galaxy",code:"LA",w:5,l:5,d:5,pts:20},{group:"Western Conference",rank:10,team:"San Diego FC",code:"SD",w:4,l:6,d:5,pts:17},
      {group:"Western Conference",rank:11,team:"Colorado Rapids",code:"COL",w:5,l:9,d:1,pts:16},{group:"Western Conference",rank:12,team:"Saint Louis City SC",code:"STL",w:4,l:6,d:4,pts:16},
      {group:"Western Conference",rank:13,team:"Portland Timbers",code:"POR",w:4,l:8,d:2,pts:14},{group:"Western Conference",rank:14,team:"Austin FC",code:"ATX",w:3,l:7,d:5,pts:14},
      {group:"Western Conference",rank:15,team:"Sporting Kansas City",code:"SKC",w:3,l:9,d:2,pts:11}
    ]
  },
  epl: {
    label:"Premier League", icon:"🏴", short:"Premier League",
    seasonStarts:"2026-08-22",
    matches:[
      {status:"scheduled",start:"2026-08-21T19:00:00Z",home:"ARS",away:"COV",names:{ARS:"Arsenal FC",COV:"Coventry City"},winProb:{ARS:82.1,COV:5.7,draw:12.2}},
      {status:"scheduled",start:"2026-08-22T11:30:00Z",home:"HUL",away:"MUN",names:{HUL:"Hull City",MUN:"Manchester United"},winProb:{HUL:13.4,MUN:66.8,draw:19.8}},
      {status:"scheduled",start:"2026-08-22T14:00:00Z",home:"EVE",away:"CRY",names:{EVE:"Everton FC",CRY:"Crystal Palace"},winProb:{EVE:45.3,CRY:27.7,draw:27}},
      {status:"scheduled",start:"2026-08-22T14:00:00Z",home:"IPS",away:"SUN",names:{IPS:"Ipswich Town",SUN:"Sunderland AFC"},winProb:{IPS:35,SUN:36.5,draw:28.5}},
      {status:"scheduled",start:"2026-08-22T14:00:00Z",home:"NFO",away:"LEE",names:{NFO:"Nottingham Forest",LEE:"Leeds United"},winProb:{NFO:42.8,LEE:30.1,draw:27.1}},
      {status:"scheduled",start:"2026-08-22T16:30:00Z",home:"BRE",away:"TOT",names:{BRE:"Brentford FC",TOT:"Tottenham Hotspur"},winProb:{BRE:37.5,TOT:36.2,draw:26.3}},
      {status:"scheduled",start:"2026-08-23T13:00:00Z",home:"BRI",away:"AVL",names:{BRI:"Brighton & Hove Albion",AVL:"Aston Villa"},winProb:{BRI:41.7,AVL:32.6,draw:25.7}},
      {status:"scheduled",start:"2026-08-23T13:00:00Z",home:"MCI",away:"BOU",names:{MCI:"Manchester City",BOU:"AFC Bournemouth"},winProb:{MCI:64.9,BOU:16.3,draw:18.8}},
      {status:"scheduled",start:"2026-08-23T15:30:00Z",home:"NEW",away:"LFC",names:{NEW:"Newcastle United",LFC:"Liverpool FC"},winProb:{NEW:32.9,LFC:42.8,draw:24.3}},
      {status:"scheduled",start:"2026-08-24T19:00:00Z",home:"FUL",away:"CFC",names:{FUL:"Fulham FC",CFC:"Chelsea FC"},winProb:{FUL:30.9,CFC:43.3,draw:25.8}}
    ],
    standingsMode:"preseason",
    standings:["Arsenal FC","AFC Bournemouth","Aston Villa","Brentford FC","Brighton & Hove Albion","Chelsea FC","Coventry City","Crystal Palace","Everton FC","Fulham FC","Hull City","Ipswich Town","Leeds United","Liverpool FC","Manchester City","Manchester United","Newcastle United","Nottingham Forest","Sunderland AFC","Tottenham Hotspur"].sort()
      .map((t,i)=>({rank:i+1,team:t,w:0,l:0,d:0,pts:0}))
  }
};

