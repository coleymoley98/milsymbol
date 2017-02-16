// SIDC parts for tactical points
module.exports = function tacticalPoints(sidc,bbox,icn,std2525){
// Tactical Point Symbols =========================================================================


//sidc['G-T-GD----'] = [];//2.X.1.1.9
//sidc['G-T-GI----'] = [];//2.X.1.1.13
//sidc['G-T-GN----'] = [];//2.X.1.1.15
  sidc['G-C-MGPFE-'] = icn['TP.FIX ELECTRO-MAGNETIC'];//2.X.2.1.1.1.1.2
  sidc['G-C-MGPFA-'] = icn['TP.FIX ACOUSTIC'];//2.X.2.1.1.1.1.2
  sidc['G-C-MGPFO-'] = icn['TP.FIX ELECTRO-OPTICAL'];//2.X.2.1.1.1.1.3
  sidc['G-C-MGPI--'] = icn['TP.POINT OF INTEREST'];//2.X.2.1.1.1.2
  bbox['G-C-MGPI--'] = {x1:50,x2:150,y1:-25};
  sidc['G-C-MAAP--'] = icn['TP.AIR CONTROL POINT (ACP)'];//2.X.2.1.2.1.1
  bbox['G-C-MAAP--'] = {x1:50,x2:150,y1:50,y2:150};
  sidc['G-C-MAAC--'] = icn['TP.COMMUNICATIONS CHECKPOINT'];//2.X.2.1.2.1.2
  bbox['G-C-MAAC--'] = {x1:50,x2:150,y1:50,y2:150};
  sidc['G-C-MAAU--'] = icn['TP.PULL-UP POINT'];//2.X.2.1.2.1.3
  bbox['G-C-MAAU--'] = {x1:50,x2:240,y1:50,y2:150};
  sidc['G-C-MAAD--'] = icn['TP.DOWNED AIRCREW PICKUP POINT'];//2.X.2.1.2.1.4
  bbox['G-C-MAAD--'] = {x1:60,x2:140,y1:-60};
  sidc['G-C-MMPT--'] = icn['TP.TARGET REFERENCE'];//2.X.2.1.4.1.1
  sidc['G-C-MMPO--'] = icn['TP.OBSERVATION POST/OUTPOST'];//2.X.2.1.4.1.4
  bbox['G-C-MMPO--'] = {x1:50,x2:150,y1:40,y2:150};
  sidc['G-C-MMPOC-'] = icn['TP.COMBAT OUTPOST'];//2.X.2.1.4.1.4.1
  bbox['G-C-MMPOC-'] = {x1:50,x2:150,y1:40,y2:150};
  sidc['G-C-MMPOR-'] = icn['TP.OBSERVATION POST/RECONNAISSANCE'];//2.X.2.1.4.1.4.2
  bbox['G-C-MMPOR-'] = {x1:50,x2:150,y1:40,y2:150};
  sidc['G-C-MMPOF-'] = icn['TP.FORWARD OBSERVER POSITION'];//2.X.2.1.4.1.4.3
  bbox['G-C-MMPOF-'] = {x1:50,x2:150,y1:40,y2:150};
  sidc['G-C-MMPOS-'] = icn['TP.SENSOR OUTPOST'];//2.X.2.1.4.1.4.4
  bbox['G-C-MMPOS-'] = {x1:50,x2:150,y1:40,y2:150};
  sidc['G-C-MMPON-'] = icn['TP.CBRN OBSERVATION POST'];//2.X.2.1.4.1.4.5
  bbox['G-C-MMPON-'] = {x1:50,x2:150,y1:40,y2:150};
// Go home APP6 you are drunk sidc['G-C-MMPON-'] = [];//2.X.2.1.4.1.4.6
// Go home APP6 you are drunk sidc['G-C-MMPON-'] = [];//2.X.2.1.4.1.4.7
  sidc['G-C-MOPD--'] = icn['TP.POINT OF DEPARTURE'];//2.X.2.1.5.1.1
  bbox['G-C-MOPD--'] = {x1:60,x2:140,y1:-60};
  sidc['G-C-BOAB--'] = icn['TP.BOOBY TRAP'];//2.X.2.2.1.4
  sidc['G-C-BOAMA-'] = icn['TP.ANTIPERSONNEL (AP) MINES'];//2.X.2.2.1.5.1
  sidc['G-C-BOAMT-'] = icn['TP.ANTITANK MINE (AT)'];//2.X.2.2.1.5.2
  sidc['G-C-BOAMD-'] = icn['TP.(AT) ANTIHANDLING DEVICE'];//2.X.2.2.1.5.3
  bbox['G-C-BOAMD-'] = {x1:60,x2:140,y1:40,y2:195};
  sidc['G-C-BOAMC-'] = icn['TP.(AT) DIRECTIONAL'];//2.X.2.2.1.5.4
  bbox['G-C-BOAMC-'] = {x1:60,x2:140,y1:10,y2:140};
  sidc['G-C-BOAMU-'] = icn['TP.UNSPECIFIED MINE'];//2.X.2.2.1.5.5
//sidc['G-C-BOAMN-'] = [];//2.X.2.2.1.5.6
  sidc['G-C-BOAMW-'] = icn['TP.WIDE AREA MINES'];//2.X.2.2.2.2.8
  sidc['G-C-BSE---'] = icn['TP.EARTHWORK/FORTIFICATION'];//2.X.2.2.3.1
  sidc['G-C-BSF---'] = icn['TP.FORT'];//2.X.2.2.3.2
  sidc['G-C-BSH---'] = icn['TP.SURFACE SHELTER'];//2.X.2.2.3.6
  sidc['G-C-BSU---'] = icn['TP.UNDERGROUND SHELTER'];//2.X.2.2.3.7
//sidc['G-C-BWDP--'] = [];//2.X.2.2.4.11.1
//sidc['G-C-BWDA--'] = [];//2.X.2.2.4.11.2
//sidc['G-C-BWDT--'] = [];//2.X.2.2.4.11.3
//sidc['G-C-BWDE--'] = [];//2.X.2.2.4.11.4
//sidc['G-C-BWDS--'] = [];//2.X.2.2.4.11.5
//sidc['G-C-BWDO--'] = [];//2.X.2.2.4.11.6
//sidc['G-C-BWDG--'] = [];//2.X.2.2.4.11.7
//sidc['G-C-BWDEM-'] = [];//2.X.2.2.4.11.8
//sidc['G-C-BWDTF-'] = [];//2.X.2.2.4.11.9
//sidc['G-C-FSTP--'] = [];//2.X.2.3.1.1.1
//sidc['G-C-FSS---'] = [];//2.X.2.3.1.2
  sidc['G-C-FAU---'] = icn['TP.NUCLEAR TARGET'];//2.X.2.3.3.9
//sidc['G-C-SPA---'] = [];//2.X.2.4.1.1
//sidc['G-C-SPC---'] = [];//2.X.2.4.1.2
//sidc['G-C-SPY---'] = [];//2.X.2.4.1.3
//sidc['G-C-SPT---'] = [];//2.X.2.4.1.4
//sidc['G-C-SPD---'] = [];//2.X.2.4.1.5
//sidc['G-C-SPE---'] = [];//2.X.2.4.1.6
//sidc['G-C-SPL---'] = [];//2.X.2.4.1.7
//sidc['G-C-SPM---'] = [];//2.X.2.4.1.8
//sidc['G-C-SPR---'] = [];//2.X.2.4.1.9
//sidc['G-C-SPU---'] = [];//2.X.2.4.1.10
//sidc['G-C-SPO---'] = [];//2.X.2.4.1.11
//sidc['G-C-SPI---'] = [];//2.X.2.4.1.12
//sidc['G-C-SPN---'] = [];//2.X.2.4.1.13
  sidc['G-C-SPQT--'] = icn['TP.SUPPLY POINT'];//2.X.2.4.1.14.1
  bbox['G-C-SPQT--'] = {x1:60,x2:140,y1:-60};
  sidc['G-C-SPQA--'] = icn['TP.SP CLASS I'];//2.X.2.4.1.14.2
  bbox['G-C-SPQA--'] = {x1:60,x2:140,y1:-60};
  sidc['G-C-SPQB--'] = icn['TP.SP CLASS II'];//2.X.2.4.1.14.3
  bbox['G-C-SPQB--'] = {x1:60,x2:140,y1:-60};
  sidc['G-C-SPQC--'] = icn['TP.SP CLASS III'];//2.X.2.4.1.14.4
  bbox['G-C-SPQC--'] = {x1:60,x2:140,y1:-60};
  sidc['G-C-SPQD--'] = icn['TP.SP CLASS IV'];//2.X.2.4.1.14.5
  bbox['G-C-SPQD--'] = {x1:60,x2:140,y1:-60};
  sidc['G-C-SPQE--'] = icn['TP.SP CLASS V'];//2.X.2.4.1.14.6
  bbox['G-C-SPQE--'] = {x1:60,x2:140,y1:-60};
  sidc['G-C-SPQF--'] = icn['TP.SP CLASS VI'];//2.X.2.4.1.14.7
  bbox['G-C-SPQF--'] = {x1:60,x2:140,y1:-60};
  sidc['G-C-SPQG--'] = icn['TP.SP CLASS VII'];//2.X.2.4.1.14.8
  bbox['G-C-SPQG--'] = {x1:60,x2:140,y1:-60};
  sidc['G-C-SPQH--'] = icn['TP.SP CLASS VIII'];//2.X.2.4.1.14.9
  bbox['G-C-SPQH--'] = {x1:60,x2:140,y1:-60};
  sidc['G-C-SPQI--'] = icn['TP.SP CLASS IX'];//2.X.2.4.1.14.10
  bbox['G-C-SPQI--'] = {x1:60,x2:140,y1:-60};
  sidc['G-C-SPQJ--'] = icn['TP.SP CLASS X'];//2.X.2.4.1.14.11
  bbox['G-C-SPQJ--'] = {x1:60,x2:140,y1:-60};
//sidc['G-C-SPMA--'] = [];//2.X.2.4.1.15.1
//sidc['G-C-SPMT--'] = [];//2.X.2.4.1.15.2
sidc['G-C-OX----'] = icn['TP.SPECIAL POINT'];//2.X.2.5.1
bbox['G-C-OX----'] = {x1:40,x2:160,y1:40,y2:160};
sidc['G-C-OXRN--'] = icn['TP.NAVIGATIONAL REFERENCE'];//2.X.2.5.1.1.1
bbox['G-C-OXRN--'] = {x1:40,x2:160,y1:40,y2:160};
//sidc['G-C-OXRD--'] = [];//2.X.2.5.1.1.2
  sidc['G-C-OXUD--'] = icn['TP.DATUM'];//2.X.2.5.1.2.1
  bbox['G-C-OXUD--'] = {x1:50,x2:150,y1:50,y2:150};
  sidc['G-C-OXUB--'] = icn['TP.BRIEF CONTACT'];//2.X.2.5.1.2.2
  bbox['G-C-OXUB--'] = {x1:50,x2:150,y1:0,y2:100};
  sidc['G-C-OXUL--'] = icn['TP.LOST CONTACT'];//2.X.2.5.1.2.3
  bbox['G-C-OXUL--'] = {x1:50,x2:150,y1:0,y2:100};
  sidc['G-C-OXUS--'] = icn['TP.SINKER'];//2.X.2.5.1.2.4
  bbox['G-C-OXUS--'] = {x1:50,x2:150,y1:0,y2:100};
  sidc['G-C-OXWA--'] = icn['TP.AIM POINT'];//2.X.2.5.1.3.1
  bbox['G-C-OXWA--'] = {x1:50,x2:150,y1:50,y2:150};
  sidc['G-C-OXWD--'] = icn['TP.DROP POINT'];//2.X.2.5.1.3.2
  bbox['G-C-OXWD--'] = {x1:50,x2:150,y1:50,y2:120};  
  sidc['G-C-OXWE--'] = icn['TP.ENTRY POINT'];//2.X.2.5.1.3.3
  bbox['G-C-OXWE--'] = {x1:50,x2:150,y1:50};
  sidc['G-C-OXWG--'] = icn['TP.GROUND ZERO'];//2.X.2.5.1.3.4
  bbox['G-C-OXWG--'] = {x1:50,x2:150,y1:30};
  sidc['G-C-OXWM--'] = icn['TP.MSL DETECT POINT'];//2.X.2.5.1.3.5
  bbox['G-C-OXWM--'] = {x1:50,x2:150,y1:30};
  sidc['G-C-OXWI--'] = icn['TP.IMPACT POINT'];//2.X.2.5.1.3.6
  bbox['G-C-OXWI--'] = {x1:50,x2:150,y1:50,y2:150};
  sidc['G-C-OXWP--'] = icn['TP.PREDICTED IMPACT POINT'];//2.X.2.5.1.3.7
  bbox['G-C-OXWP--'] = {x1:50,x2:150,y1:50,y2:150};
  sidc['G-C-OXY---'] = icn['TP.SONOBUOY'];//2.X.2.5.1.4
  bbox['G-C-OXY---'] = {x1:60,x2:140,y1:-10,y2:160};
  sidc['G-C-OXYP--'] = icn['TP.SONOBUOY PATTERN CENTER'];//2.X.2.5.1.4.1
  bbox['G-C-OXYP--'] = {x1:60,x2:140,y1:-10,y2:160};
  sidc['G-C-OXYD--'] = icn['TP.SONOBUOY DIFAR'];//2.X.2.5.1.4.2
  bbox['G-C-OXYD--'] = {x1:60,x2:140,y1:-10,y2:160};
  sidc['G-C-OXYL--'] = icn['TP.SONOBUOY LOFAR'];//2.X.2.5.1.4.3
  bbox['G-C-OXYL--'] = {x1:60,x2:140,y1:-10,y2:160};
  sidc['G-C-OXYC--'] = icn['TP.SONOBUOY CASS'];//2.X.2.5.1.4.4
  bbox['G-C-OXYC--'] = {x1:60,x2:140,y1:-10,y2:160};
  sidc['G-C-OXYS--'] = icn['TP.SONOBUOY DICASS'];//2.X.2.5.1.4.5
  bbox['G-C-OXYS--'] = {x1:60,x2:140,y1:-10,y2:160};
  sidc['G-C-OXYB--'] = icn['TP.SONOBUOY BT'];//2.X.2.5.1.4.6
  bbox['G-C-OXYB--'] = {x1:60,x2:140,y1:-10,y2:160};
  sidc['G-C-OXYA--'] = icn['TP.SONOBUOY ANM'];//2.X.2.5.1.4.7
  bbox['G-C-OXYA--'] = {x1:60,x2:140,y1:-10,y2:160};
  sidc['G-C-OXYV--'] = icn['TP.SONOBUOY VLAD'];//2.X.2.5.1.4.8
  bbox['G-C-OXYV--'] = {x1:60,x2:140,y1:-10,y2:160};  
  sidc['G-C-OXYT--'] = icn['TP.SONOBUOY ATAC'];//2.X.2.5.1.4.9
  bbox['G-C-OXYT--'] = {x1:60,x2:140,y1:-10,y2:160};
  sidc['G-C-OXYR--'] = icn['TP.SONOBUOY RO'];//2.X.2.5.1.4.10
  bbox['G-C-OXYR--'] = {x1:60,x2:140,y1:-10,y2:160};
  sidc['G-C-OXYK--'] = icn['TP.SONOBUOY KINGPIN'];//2.X.2.5.1.4.11
  bbox['G-C-OXYK--'] = {x1:60,x2:140,y1:-10,y2:160};
//sidc['G-C-OXN---'] = [];//2.X.2.5.1.5
  sidc['G-C-OXH---'] = icn['TP.HARBOR'];//2.X.2.5.1.6
  bbox['G-C-OXH---'] = {x1:50,x2:150,y1:50,y2:150};
  sidc['G-C-OXHQ--'] = icn['TP.HARBOR POINT Q'];//2.X.2.5.1.6.1
  bbox['G-C-OXHQ--'] = {x1:50,x2:150,y1:50,y2:150};
  sidc['G-C-OXHA--'] = icn['TP.HARBOR POINT A'];//2.X.2.5.1.6.2
  bbox['G-C-OXHA--'] = {x1:50,x2:150,y1:50,y2:150};
  sidc['G-C-OXHY--'] = icn['TP.HARBOR POINT Y'];//2.X.2.5.1.6.3
  bbox['G-C-OXHY--'] = {x1:50,x2:150,y1:50,y2:150};
  sidc['G-C-OXHX--'] = icn['TP.HARBOR POINT X'];//2.X.2.5.1.6.4
  bbox['G-C-OXHX--'] = {x1:50,x2:150,y1:50,y2:150};
  sidc['G-C-OXR---'] = icn['TP.ROUTE'];//2.X.2.5.1.7
  bbox['G-C-OXR---'] = {x1:30,x2:170,y1:60,y2:140};
  sidc['G-C-OXRR--'] = icn['TP.ROUTE RENDEZVOUS'];//2.X.2.5.1.7.1
  bbox['G-C-OXRR--'] = {x1:30,x2:170,y1:60,y2:170};
  sidc['G-C-OXRD--'] = icn['TP.ROUTE DIVERSIONS'];//2.X.2.5.1.7.2
  bbox['G-C-OXRD--'] = {x1:30,x2:170,y1:60,y2:170};
  sidc['G-C-OXRW--'] = icn['TP.ROUTE WAYPOINT'];//2.X.2.5.1.7.3
  bbox['G-C-OXRW--'] = {x1:30,x2:170,y1:60,y2:170};
  sidc['G-C-OXRP--'] = icn['TP.ROUTE PIM'];//2.X.2.5.1.7.4
  bbox['G-C-OXRP--'] = {x1:30,x2:170,y1:60,y2:170};
  sidc['G-C-OXRT--'] = icn['TP.ROUTE POINT R'];//2.X.2.5.1.7.5
  bbox['G-C-OXRT--'] = {x1:30,x2:170,y1:60,y2:170};
//sidc['G-C-OXSTC-'] = [];//2.X.2.5.1.8.1
//sidc['G-C-OXSTCP'] = [];//2.X.2.5.1.8.1.1
//sidc['G-C-OXSTCA'] = [];//2.X.2.5.1.8.1.2
//sidc['G-C-OXSTR-'] = [];//2.X.2.5.1.8.2
//sidc['G-C-OXSTH-'] = [];//2.X.2.5.1.8.3
//sidc['G-C-OXSTS-'] = [];//2.X.2.5.1.8.4
//sidc['G-C-OXSTSA'] = [];//2.X.2.5.1.8.5
  sidc['G-C-OXS---'] = icn['TP.SEARCH'];//2.X.2.5.1.9 
  bbox['G-C-OXS---'] = {x1:50,x2:150,y1:50,y2:150}; 
  //sidc['G-C-OXSA--'] = []//icn['TP.SEARCH AREA'];//2.X.2.5.1.9.1 TODO
  //bbox['G-C-OXSA--'] = {x1:50,x2:150,y1:50,y2:150};
  //sidc['G-C-OXSD--'] = []//icn['TP.DIP POSITION'];//2.X.2.5.1.9.2 TODO
  //bbox['G-C-OXSD--'] = {x1:50,x2:150,y1:50,y2:150};
  sidc['G-C-OXSC--'] = icn['TP.SEARCH CENTER'];//2.X.2.5.1.9.3
  bbox['G-C-OXSC--'] = {x1:50,x2:150,y1:50,y2:150};
  sidc['G-C-OXAC--'] = icn['TP.COMBAT AIR PATROL (CAP)'];//2.X.2.5.1.10.1
  bbox['G-C-OXAC--'] = {x1:60,x2:140,y1:40,y2:160};
  sidc['G-C-OXAA--'] = icn['TP.AIRBORNE EARLY WARNING (AEW)'];//2.X.2.5.1.10.2
  bbox['G-C-OXAA--'] = {x1:60,x2:140,y1:40,y2:160};
  sidc['G-C-OXAT--'] = icn['TP.TACAN'];//2.X.2.5.1.10.3
  bbox['G-C-OXAT--'] = {x1:60,x2:140,y1:40,y2:160};
sidc['G-C-OXAK--'] = icn['TP.TANKING'];//2.X.2.5.1.10.4
bbox['G-C-OXAK--'] = {x1:60,x2:140,y1:40,y2:160};
sidc['G-C-OXAF--'] = icn['TP.FIXED WING'];//2.X.2.5.1.10.5
bbox['G-C-OXAF--'] = {x1:60,x2:140,y1:40,y2:160};
sidc['G-C-OXAH--'] = icn['TP.ROTARY WING'];//2.X.2.5.1.10.6
bbox['G-C-OXAH--'] = {x1:60,x2:140,y1:40,y2:160};
sidc['G-C-OXAO--'] = icn['TP.TOMCAT'];//2.X.2.5.1.10.7
bbox['G-C-OXAO--'] = {x1:60,x2:140,y1:40,y2:160};
sidc['G-C-OXAR--'] = icn['TP.RESCUE'];//2.X.2.5.1.10.8
bbox['G-C-OXAR--'] = {x1:60,x2:140,y1:40,y2:160};
sidc['G-C-OXAP--'] = icn['TP.REPLENISH'];//2.X.2.5.1.10.9
bbox['G-C-OXAP--'] = {x1:60,x2:140,y1:40,y2:160};

//sidc['G-C-OXAM--'] = [];//2.X.2.5.1.10.10
bbox['G-C-OXAM--'] = {x1:60,x2:140,y1:40,y2:160};

sidc['G-C-OXAS--'] = icn['TP.STRIKE IP'];//2.X.2.5.1.10.11
bbox['G-C-OXAS--'] = {x1:60,x2:140,y1:40,y2:160};

//sidc['G-C-OXAD--'] = [];//2.X.2.5.1.10.12
bbox['G-C-OXAD--'] = {x1:60,x2:140,y1:40,y2:160};

//sidc['G-C-OG----'] = [];//2.X.2.5.2
//sidc['G-C-OGC---'] = [];//2.X.2.5.2.1
	sidc['G-C-OGP---'] = icn['TP.CONTACT POINT'];//2.X.2.5.2.2
	bbox['G-C-OGP---'] = {x1:55,x2:145,y1:-10};
	sidc['G-C-OGT---'] = icn['TP.COORDINATION POINT'];//2.X.2.5.2.3
	bbox['G-C-OGT---'] = {x1:50,x2:150,y1:50,y2:150};
	sidc['G-C-OGD---'] = icn['TP.DECISION POINT'];//2.X.2.5.2.4
	bbox['G-C-OGD---'] = {x1:30,x2:170,y1:25,y2:160};
	sidc['G-C-OGL---'] = icn['TP.ACTION LINKUP POINT'];//2.X.2.5.2.5
	bbox['G-C-OGL---'] = {x1:60,x2:140,y1:-60};
	sidc['G-C-OGN---'] = icn['TP.ACTION PASSAGE POINT'];//2.X.2.5.2.6
	bbox['G-C-OGN---'] = {x1:60,x2:140,y1:-60};
//sidc['G-C-OGR---'] = [];//2.X.2.5.2.7
	sidc['G-C-OGS---'] = icn['TP.ACTION RELEASE POINT'];//2.X.2.5.2.8
	bbox['G-C-OGS---'] = {x1:60,x2:140,y1:-60};
	sidc['G-C-OGI---'] = icn['TP.ACTION START POINT'];//2.X.2.5.2.9
	bbox['G-C-OGI---'] = {x1:60,x2:140,y1:-60};
	sidc['G-C-OGW---'] = icn['TP.WAYPOINT'];//2.X.2.5.2.10
	bbox['G-C-OGW---'] = {x1:60,x2:140,y1:60,y2:140};
//sidc['G-O-VA----'] = [];//2.X.3.1.1
  sidc['G-O-VR----'] = icn['GR.EQ.HOWITZER'];//2.X.3.1.2
  sidc['G-O-VE----'] = icn['ST.IC.KILLING VICTIM'];//2.X.3.1.3
  sidc['G-O-VB----'] = icn['AIR.MISSILE.IC.BOMB'];//2.X.3.1.4
  sidc['G-O-VY----'] = icn['ST.IC.BOOBY TRAP'];//2.X.3.1.5
  sidc['G-O-VD----'] = icn['ST.IC.DRIVE-BY SHOOTING'];//2.X.3.1.6
//sidc['G-O-VI----'] = [];//2.X.3.1.7
  sidc['G-O-VM----'] = icn['GR.EQ.MORTAR'];//2.X.3.1.8
  sidc['G-O-VK----'] = icn['GR.EQ.MULTIPLE ROCKET LAUNCHER'];//2.X.3.1.9
  sidc['G-O-VS----'] = icn['ST.IC.SNIPING'];//2.X.3.1.10
  sidc['G-O-VP----'] = icn['ST.IC.POISONING'];//2.X.3.1.11
//sidc['G-O-VU----'] = [];//2.X.3.1.12
  sidc['G-O-VC----'] = icn['GR.IC.FF.CLASS V'];//2.X.3.1.13
  sidc['G-O-VH----'] = icn['AR.I.FF.CIVILIAN ROTARY WING'];//2.X.3.1.14
  sidc['G-O-VF----'] = [icn['GR.IC.FF.INFANTRY'],icn['GR.IC.FF.MOTORIZED']];//2.X.3.1.15
  sidc['G-O-VO----'] = icn['GR.IC.FF.INFANTRY'];//2.X.3.1.16
  sidc['G-O-VL----'] = icn['GR.IC.FF.RECONNAISSANCE'];//2.X.3.1.17
  sidc['G-O-VX----'] = icn['GR.IC.FF.SIGNAL'];//2.X.3.1.18
  sidc['G-O-VZ----'] = icn['GR.IC.FF.SUPPLY'];//2.X.3.1.19
  sidc['G-O-LB----'] = icn['ST.IC.BLACK LIST LOCATION'];//2.X.3.2.1
  sidc['G-O-LG----'] = icn['ST.IC.GRAY LIST LOCATION'];//2.X.3.2.2
  sidc['G-O-LW----'] = icn['ST.IC.WHITE LIST LOCATION'];//2.X.3.2.3
//sidc['G-O-PR----'] = [];//2.X.3.3.1
//sidc['G-O-PR B---'] = [];//2.X.3.3.1.1
  sidc['G-O-PT----'] = icn['ST.IC.PATROLLING'];//2.X.3.3.2
  sidc['G-O-PC----'] = [icn['ST.IC.INDIVIDUAL'],icn['ST.M1.WILLING']];//2.X.3.3.3
  sidc['G-O-PC U---'] = [icn['ST.IC.INDIVIDUAL'],icn['ST.M1.COERCED/IMPRESSED']];//2.X.3.3.3.1
  sidc['G-O-PD----'] = icn['ST.IC.DEMONSTRATION'];//2.X.3.3.4
  sidc['G-O-PM----'] = icn['ST.IC.MINE LAYING'];//2.X.3.3.5
  sidc['G-O-PH----'] = icn['ST.IC.PSYCHOLOGICAL OPERATIONS'];//2.X.3.3.6
  sidc['G-O-PHY---'] = icn['ST.IC.RADIO AND TELEVISION PSYCHOLOGICAL OPERATIONS'];//2.X.3.3.6.1
  sidc['G-O-PHW---'] = [icn['ST.IC.PSYCHOLOGICAL OPERATIONS'],icn['ST.M1.WRITTEN PSYCHOLOGICAL OPERATIONS']];//2.X.3.3.6.2
  sidc['G-O-PHG---'] = [icn['ST.IC.PSYCHOLOGICAL OPERATIONS'],icn['ST.M1.WRITTEN PSYCHOLOGICAL OPERATIONS']];//2.X.3.3.6.3
  sidc['G-O-PHT---'] = [icn['ST.IC.PSYCHOLOGICAL OPERATIONS'],icn['ST.M1.HOUSE-TO-HOUSE']];//2.X.3.3.6.4
  sidc['G-O-PG----'] = icn['ST.IC.SEARCHING'];//2.X.3.3.7
  sidc['G-O-PS----'] = icn['ST.IC.SPY'];//2.X.3.3.8
  sidc['G-O-PF----'] = icn['ST.IC.FOOD DISTRIBUTION'];//2.X.3.3.9
  sidc['G-O-PI----'] = icn['GR.IC.FF.MEDICAL TREATMENT FACILITY'];//2.X.3.3.10
  sidc['G-O-PE----'] = [icn['GR.IC.ELECTRONIC WARFARE'],icn['GR.IC.FF.INTERCEPT']];//2.X.3.3.11
  sidc['G-O-PX----'] = icn['ST.IC.EXTORTION'];//2.X.3.3.12
  sidc['G-O-PJV---'] = [icn['ST.IC.KNOWN INSURGENT VEHICLE'],icn['ST.M1.HIJACKING/HIJACKED']];//2.X.3.3.13.1
  sidc['G-O-PJA---'] = [icn['ST.IC.HIJACKING (AIRPLANE)'],icn['ST.M1.HIJACKING/HIJACKED']];//2.X.3.3.13.2
  sidc['G-O-PJB---'] = [icn['ST.IC.HIJACKING (BOAT)'],icn['ST.M1.HIJACKING/HIJACKED']];//2.X.3.3.13.3
  sidc['G-O-PK----'] = [icn['ST.IC.INDIVIDUAL'],icn['ST.M1.KIDNAPPING']];//2.X.3.3.14
  sidc['G-O-PA----'] = icn['ST.IC.ARREST'];//2.X.3.3.15
  sidc['G-O-PO----'] = icn['ST.IC.DRUG RELATED ACTIVITIES'];//2.X.3.3.16
  sidc['G-O-IR----'] = icn['ST.IC.GROUP'];//2.X.3.4.1
  sidc['G-O-IS----'] = icn['ST.IC.SAFE HOUSE'];//2.X.3.4.2
  sidc['G-O-IG----'] = icn['ST.IC.GRAFFITI'];//2.X.3.4.3
  sidc['G-O-IV----'] = icn['ST.IC.VANDALISM/LOOT/RANSACK/PLUNDER/SACK'];//2.X.3.4.4
  sidc['G-O-IK----'] = icn['ST.IC.KNOWN INSURGENT VEHICLE'];//2.X.3.4.5
  sidc['G-O-ID----'] = [icn['ST.IC.KNOWN INSURGENT VEHICLE'],icn['ST.M1.DRUG']];//2.X.3.4.6
  sidc['G-O-IF----'] = icn['ST.IC.INTERNAL SECURITY FORCE'];//2.X.3.4.7
}