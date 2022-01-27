-- Parameters from Cheapest Tickets
INSERT INTO
flights(origin, destination, price, airline, flight_number, departure_at, return_at, expires_at)
VALUES
-- Toronto to Japan
    ('YYZ', 'TYO', 200, 'OZ', '111', '2022-01-31T08:20:00Z', '2022-02-12T10:00:00Z', '2022-01-28T13:30:00Z'),
-- Toronto to Paris
    ('YYZ', 'PAR', 175, 'AC', '222', '2022-01-30T00:20:00Z', '2022-02-07T13:45:00Z', '2022-01-29T16:00:00Z'),
-- Toronto to Sao Paulo
    ('YTZ','SAO', 100, 'UA', '333', '2022-02-03T17:41:00Z', '2022-02-10T14:14:00Z', '2022-01-28T13:30:00Z'),
-- Toronto to Cairo
    ('YYZ', 'CAI', 125, 'EK', '444', '2022-02-01T20:15:00Z', '2022-02-09T18:23:00Z', '2022-01-29T09:00:00Z'),
-- Toronto to Honolulu
    ('YYZ', 'HNL', 150, 'AC', '555', '2022-02-02T19:00:00Z', '2022-02-14T16:01:00Z', '2022-01-30T00:00:00Z'),
-- Toronto to Sweden
    ('YYZ', 'ARN', 75, 'TP', '666', '2022-02-01T17:30:00Z', '2022-02-08T13:48:00Z', '2022-01-27T22:30:00Z'),
-- Vancouver to London
    ('YVR', 'LON', 150, 'AC', '666', '2022-01-31T16:50:00Z', '2022-02-11T10:10:00Z', '2022-01-28T08:30:00Z'),
-- Vancouver to Las Vegas
    ('YVR', 'LAS', 75, 'AC', '777', '2022-01-29T11:30:00Z', '2022-02-05T18:11:00Z', '2022-01-28T02:00:00Z'),
-- Vancouver to Delhi
    ('YVR', 'DEL', 125, 'BA', '888', '2022-01-31T22:55:00Z', '2022-02-13T10:04:00Z', '2022-01-27T20:30:00Z');

INSERT INTO favourites(favId, user_id, origin, destination, price, airline, flight_number, departure_at, return_at, expires_at)
VALUES
-- Amanda Won's favourite flights
    (1, 1, 'YYZ', 'TYO', 200, 'OZ', '111', '2022-01-31T08:20:00Z', '2022-02-12T10:00:00Z', '2022-01-28T13:30:00Z'), -- Toronto to Japan
    (2, 1, 'YYZ', 'PAR', 175, 'AC', '222', '2022-01-30T00:20:00Z', '2022-02-07T13:45:00Z', '2022-01-29T16:00:00Z'), -- Toronto to Paris
    (3, 1, 'YYZ', 'HNL', 150, 'AC', '555', '2022-02-02T19:00:00Z', '2022-02-14T16:01:00Z', '2022-01-30T00:00:00Z'), -- Toronto to Honolulu
-- KC Trey's favourite flights
    (4, 3, 'YVR', 'LAS', 75, 'AC', '777', '2022-01-29T11:30:00Z', '2022-02-05T18:11:00Z', '2022-01-28T02:00:00Z'); -- Vancover to Las Vegas


INSERT INTO activities(favourite_id, name, start_at, end_at)
VALUES
-- Japan
    (1, 'Visit Tokyo Tower', '2022-02-02T11:00:00', '2022-02-02T13:00:00'),
    (1, 'Attend a Tea Ceremony', '2022-02-03T14:00:00', '2022-02-03T16:00:00'),
    (1, 'Try Ramen Noodles', '2022-02-05T18:00:00', '2022-02-05T19:00:00'),
    (1, 'Visit a Hot Spring', '2022-02-06T17:00:00', '2022-02-07T11:00:00'),
-- Honolulu
    (3, 'Go Snorkeling', '2022-02-03T10:00:00', '2022-02-03T11:00:00'),
    (3, 'Try Hula Dancing', '2022-02-03T:15:00:00', '2022-02-03T16:00:00'),
-- Las Vegas
    (4, 'Visit the Hover Dam', '2022-01-31T09:00:00', '2022-01-31T13:00:00'),
    (4, 'See a Cirque du Soleil show', '2022-01-31T22:00:00', '2022-02-01T00:0000');

INSERT INTO cities(name)
VALUES
-- Origin
('Jakarta'),
('Chengdu'),
('Beijing'),
('Chicago'),
('New York City'),
('Toronto'),
('Tokyo'),
('Adrar'),
('Algiers'),
('Annaba'),
('Batna'),
('Béjaïa'),
('Oumache'),
('Chlef'),
('Constantine'),
('Hassi Messaoud'),
('Jijel'),
('startpostgres'),
('Sétif'),
('Tamanrasset'),
('Tlemcen'),
('Luanda'),
('Lubango'),
('Cotonou'),
('Gaborone'),
('Maun'),
('Francistown'),
('Kasane'),
('Bobo-Dioulasso'),
('Ouagadougou'),
('Bujumbura'),
('Douala'),
('Yaoundé'),
('Boa Vista'),
('Sal Island'),
('Praia, Santiago Island'),
('São Vicente'),
('Bangui'),
('N Djamena'),
('Moroni'),
('Abidjan'),
('Goma'),
('Kinshasa'),
('Kisangani'),
('Lubumbashi'),
('Brazzaville'),
('Pointe-Noire'),
('Djibouti City'),
('Asyut'),
('Aswan'),
('Cairo'),
('El Arish'),
('El Dabaa'),
('Hurghada'),
('Luxor'),
('Marsa Alam'),
('Mersa Matruh'),
('Saint Catherine'),
('Sharm El Sheikh'),
('Sohag'),
('Taba'),
('Malabo'),
('Asmara'),
('Manzini'),
('Addis Ababa'),
('Dire Dawa'),
('Franceville'),
('Libreville'),
('Port-Gentil'),
('Banjul'),
('Accra'),
('Kumasi'),
('Takoradi'),
('Sunyani'),
('Ho'),
('Wa'),
('Tamale'),
('Conakry'),
('Bissau'),
('Bubaque'),
('Eldoret'),
('Mombasa'),
('Kisumu'),
('Nairobi'),
('Maseru'),
('Monrovia'),
('Benghazi'),
('Sabha'),
('Tripoli'),
('Tajoura'),
('Antananarivo'),
('Antsiranana'),
('Mahajanga'),
('Nosy Be'),
('Toamasina'),
('Tôlanaro'),
('Toliara'),
('Blantyre'),
('Lilongwe'),
('Plaine Magnien'),
('Agadir'),
('Casablanca'),
('Fes'),
('Marrakech'),
('Nador'),
('Oujda'),
('Rabat'),
('Tangier'),
('Tetouan'),
('Dakhla'),
('Laayoune'),
('Abuja'),
('Calabar'),
('Asaba, Delta'),
('Kano'),
('Lagos'),
('Port Harcourt'),
('Enugu'),
('Sokoto'),
('Cape Town'),
('Durban'),
('Nelspruit'),
('Bloemfontein'),
('East London'),
('Harare'),
('Victoria Falls'),
('Bulawayo'),
('Nassau'),
('Chub Cay'),
('Exuma'),
('Freeport'),
('South Eleuthera'),
('Marsh Harbour'),
('Bridgetown'),
('Road Town'),
('Cayman Brac'),
('Georgetown'),
('Camagüey'),
('Cayo Coco'),
('Cayo Largo del Sur'),
('Cienfuegos'),
('Havana'),
('Holguín'),
('Santa Clara'),
('Santiago de Cuba'),
('Varadero'),
('Barahona'),
('La Romana'),
('Punta Cana'),
('Samana'),
('San Felipe de Puerto Plata'),
('Santiago de los Caballeros'),
('Santo Domingo'),
('Kingston'),
('Montego Bay'),
('Aguadilla'),
('San Juan'),
('Saint Thomas'),
('Saint Croix'),
('Flores'),
('Guatemala City'),
('Abbotsford'),
('Calgary'),
('Edmonton'),
('Fredericton'),
('Gander'),
('Halifax'),
('Hamilton'),
('Kelowna'),
('London'),
('Moncton'),
('Montreal'),
('Ottawa'),
('Quebec City'),
('Regina'),
('Saskatoon'),
('St. Johns'),
('Thunder Bay'),
('Vancouver'),
('Victoria'),
('Whitehorse'),
('Windsor'),
('Winnipeg'),
('Acapulco'),
('Aguascalientes'),
('Cancún'),
('Chihuahua City'),
('Ciudad del Carmen'),
('Cozumel'),
('Culiacán'),
('Durango'),
('Guadalajara'),
('Hermosillo'),
('Huatulco'),
('Ixtapa'),
('León'),
('Loreto'),
('Los Cabos'),
('Manzanillo'),
('Mazatlán'),
('Mérida'),
('Mexico City'),
('Monterrey'),
('Morelia'),
('Oaxaca City'),
('Puebla'),
('Puerto Vallarta'),
('Querétaro City'),
('Reynosa'),
('Saltillo'),
('San Luis Potosí City'),
('Tampico'),
('Tijuana'),
('Toluca'),
('Torreón'),
('Tuxtla Gutiérrez'),
('Uruapan'),
('Veracruz'),
('Villahermosa'),
('Zacatecas City'),
('Akron'),
('Albany'),
('Albuquerque'),
('Anchorage'),
('Appleton'),
('Atlanta'),
('Atlantic City'),
('Austin (TX)'),
('Baltimore'),
('Bangor'),
('Bellingham'),
('Birmingham'),
('Boise'),
('Boston'),
('Buffalo'),
('Charlotte'),
('Charleston (SC)'),
('Cincinnati'),
('Cleveland'),
('Dallas'),
('Dayton (OH)'),
('Denver'),
('Des Moines (IA)'),
('Detroit'),
('El Paso'),
('Fairbanks'),
('Fort Lauderdale'),
('Fort Myers'),
('Fresno'),
('Grand Rapids'),
('Green Bay'),
('Greensboro'),
('Harrisburg'),
('Hartford (CT)'),
('Hilo'),
('Honolulu'),
('Huntsville (AL)'),
('Indianapolis'),
('Jackson (MS)'),
('Jacksonville'),
('Juneau'),
('Kansas City (MO)'),
('Ketchikan'),
('Key West'),
('Kailua-Kona'),
('Knoxville'),
('Lakeland'),
('Lansing'),
('Las Vegas'),
('Little Rock'),
('Los Angeles'),
('Louisville'),
('Melbourne (FL)'),
('Memphis'),
('Miami'),
('Midland'),
('Milwaukee'),
('Minneapolis/St. Paul'),
('Myrtle Beach'),
('Nashville'),
('New Orleans'),
('Newark'),
('Newburgh'),
('Norfolk (VA)'),
('Oakland'),
('Oklahoma City'),
('Omaha'),
('Ontario'),
('Orange County'),
('Orlando'),
('Orlando/Sanford'),
('Palm Springs'),
('Panama City (FL)'),
('Pensacola'),
('Philadelphia'),
('Phoenix'),
('Phoenix/Mesa'),
('Pittsburgh'),
('Portland (ME)'),
('Portland (OR)'),
('Providence'),
('Racine'),
('Raleigh/Durham'),
('Reno'),
('Richmond (VA) (Sandston)'),
('Rochester (MN)'),
('Rochester (NY)'),
('Rockford (IL)'),
('Sacramento'),
('Salt Lake City'),
('San Antonio'),
('San Bernardino'),
('San Diego'),
('San Francisco'),
('San Jose (CA)'),
('Sarasota/Bradenton'),
('Savannah (GA)/Hilton Head (SC)'),
('Sheboygan'),
('Snohomish County (WA)'),
('Spokane'),
('St. Louis'),
('St. Petersburg (FL)'),
('Syracuse'),
('Tallahassee'),
('Tampa'),
('Tucson'),
('Tulsa'),
('West Palm Beach'),
('Wilkes-Barre/Scranton'),
('Wilmington (NC)'),
('Pyongyang'),
('Akita'),
('Aomori'),
('Fukuoka'),
('Hakodate'),
('Kagoshima'),
('Komatsu'),
('Hiroshima'),
('Kitakyushu'),
('Nagasaki'),
('Naha'),
('Nagoya'),
('Niigata'),
('Ōita'),
('Okayama'),
('Osaka'),
('Sapporo'),
('Sendai'),
('Shizuoka'),
('Baotou'),
('Beihai'),
('Changchun'),
('Changsha'),
('Changzhou'),
('Chongqing'),
('Dalian'),
('Dandong'),
('Datong'),
('Dunhuang'),
('Enshi City'),
('Fuzhou'),
('Ganzhou'),
('Guangzhou'),
('Guilin'),
('Guiyang'),
('Haikou'),
('Hangzhou'),
('Harbin'),
('Hefei'),
('Heihe'),
('Hohhot'),
('Huai an'),
('Huangshan City'),
('Hulunbuir'),
('Jiamusi'),
('Jieyang'),
('Jinan'),
('Kunming'),
('Lanzhou'),
('Lhasa'),
('Lianyungang'),
('Lijiang'),
('Linyi'),
('Luoyang'),
('Mangshi'),
('Manzhouli'),
('Meizhou'),
('Mudanjiang'),
('Nanchang'),
('Nanjing'),
('Nanning'),
('Nantong'),
('Ningbo'),
('Ordos City'),
('Qingdao'),
('Qinhuangdao'),
('Qiqihar'),
('Quanzhou'),
('Sanya'),
('Shenyang'),
('Shenzhen'),
('Shijiazhuang'),
('Taiyuan'),
('Tianjin'),
('Ulanqab'),
('Ürümqi'),
('Wanzhou'),
('Weihai'),
('Wenzhou'),
('Wuhan'),
('Wuxi'),
('Wuyishan'),
('Xiamen'),
('Xi an'),
('Xining'),
('Xinzhou'),
('Xishuangbanna'),
('Xuzhou'),
('Yancheng'),
('Yangzhou'),
('Yanji'),
('Yantai'),
('Yichang'),
('Yinchuan'),
('Yiwu'),
('Yuncheng'),
('Zhangjiajie'),
('Zhanjiang'),
('Zhengzhou'),
('Zhuhai'),
('Zunyi'),
('Hong Kong'),
('Hualien City'),
('Kaohsiung'),
('Taichung'),
('Tainan'),
('Taipei'),
('Taoyuan'),
('Busan'),
('Daegu'),
('Jeju'),
('Seoul'),
('Incheon'),
('Cheongju'),
('Muan'),
('Yangyang'),
('Balikpapan'),
('Banda Aceh'),
('Bandar Lampung'),
('Banjarmasin'),
('Banyuwangi'),
('Batam'),
('Biak'),
('Denpasar'),
('Kupang'),
('Makassar'),
('Manado'),
('Mataram'),
('Medan'),
('Padang'),
('Palembang'),
('Pekanbaru'),
('Pontianak'),
('Semarang'),
('Siborong-Borong'),
('Surabaya'),
('Surakarta'),
('Tanjung Pandan'),
('Tarakan'),
('Yogyakarta'),
('Batanes'),
('Cagayan'),
('Lapu-Lapu City'),
('Angeles City'),
('Davao City'),
('General Santos'),
('Iloilo City'),
('Kalibo'),
('Laoag'),
('Manila'),
('Panglao Island'),
('Puerto Princesa'),
('Olongapo'),
('Zamboanga City'),
('Bangkok/Samut Prakan'),
('Bangkok'),
('Chiang Mai'),
('Chiang Rai'),
('Rayong/Pattaya'),
('Hat Yai'),
('Krabi'),
('Phuket'),
('Surat Thani'),
('Ko Samui'),
('Udon Thani'),
('Baden-Baden/Karlsruhe'),
('Berlin'),
('Bremen'),
('Cologne/Bonn'),
('Dortmund'),
('Düsseldorf'),
('Freiburg im Breisgau'),
('Friedrichshafen'),
('Hamburg'),
('Hanover'),
('Leipzig'),
('Lübeck'),
('Memmingen'),
('Munich'),
('Nuremberg'),
('Stuttgart'),
('Weeze'),
('Birmingham'),
('Bournemouth'),
('Bristol'),
('Cardiff'),
('Doncaster/Sheffield'),
('Middlesbrough'),
('Nottingham/Leicester'),
('Exeter'),
('Leeds/Bradford'),
('Liverpool'),
('Manchester'),
('Newcastle upon Tyne'),
('Newquay'),
('Norwich'),
('Southampton'),
('Adelaide'),
('Brisbane'),
('Broome'),
('Cairns'),
('Canberra'),
('Darwin'),
('Geelong'),
('Gold Coast'),
('Hobart'),
('Melbourne'),
('Newcastle'),
('Perth'),
('Port Hedland'),
('Sunshine Coast'),
('Sydney'),
('Townsville');




INSERT INTO airports(airport_code, city_id, airport_name)
VALUES
('HLP', 1, 'Halim Perdanakusuma International Airport'),
('CGK', 1, 'Soekarno–Hatta International Airport'),
('CTU', 2, 'Chengdu Shuangliu International Airport'),
('TFU', 2, 'Chengdu Tianfu International Airport'),
('PEK', 3, 'Beijing Capital International Airport'),
('PKX', 3, 'Beijing Daxing International Airport'),
('MDW', 4, 'Midway International Airport'),
('ORD', 4, 'O Hare International Airport'),
('JFK', 5, 'John F. Kennedy International Airport'),
('LGA', 5, 'LaGuardia Airport'),
('YYZ', 6, 'Toronto Pearson Airport'),
('YTZ', 6, 'Billy Bishop Toronto City Airport'),
('YTO', 6, 'All Toronto Airports'),
('HND', 7, 'Haneda Airport'),
('NRT', 7, 'Narita International Airport'),
('AZR', 8, 'Touat-Cheikh Sidi Mohamed Belkebir Airport'),
('ALG', 9, 'Houari Boumediene Airport'),
('AAE', 10, 'Rabah Bitat Airport'),
('BLJ', 11, 'Batna Airport'),
('BJA', 12, 'Soummam Airport'),
('BSK', 13, 'Biskra Airport'),
('CFK', 14, 'Chlef International Airport'),
('CZL', 15, 'Mohamed Boudiaf International Airport'),
('HME', 16, 'Oued Irara Airport'),
('GJL', 17, 'Jijel Ferhat Abbas Airport'),
('ORN', 18, 'Oran Es Senia Airport'),
('QSF', 19, 'Ain Arnat Airport'),
('TMR', 20, 'Tamanrasset Airport'),
('TLM', 21, 'Zenata – Messali El Hadj Airport'),
('LAD', 22, 'Quatro de Fevereiro Airport'),
('SDD', 23, 'Lubango Airport'),
('COO', 24, 'Cadjehoun Airport'),
('GBE', 25, 'Sir Seretse Khama International Airport'),
('MUB', 26, 'Maun Airport'),
('FRW', 27, 'Francistown International Airport'),
('BBK', 28, 'Kasane Airport'),
('BOY', 29, 'Bobo Dioulasso Airport'),
('OUA', 30, 'Thomas Sankara International Airport Ouagadougou'),
('BJM', 31, 'Bujumbura International Airport'),
('DLA', 32, 'Douala International Airport'),
('NSI', 33, 'Yaoundé Nsimalen International Airport'),
('BVC', 34, 'Aristides Pereira International Airport'),
('SID', 35, 'Amílcar Cabral International Airport'),
('RAI', 36, 'Nelson Mandela International Airport'),
('VXE', 37, 'Cesária Évora Airport'),
('BGF', 38, 'Bangui M Poko International Airport'),
('NDJ', 39, 'N Djamena International Airport'),
('HAH', 40, 'Prince Said Ibrahim International Airport'),
('ABJ', 41, 'Félix-Houphouët-Boigny International Airport'),
('GOM', 42, 'Goma International Airport'),
('FIH', 43, 'N djili Airport'),
('FKI', 44, 'Kisangani Bangoka International Airport'),
('FBM', 45, 'Lubumbashi International Airport'),
('BZV', 46, 'Maya-Maya Airport'),
('PNR', 47, 'Agostinho-Neto International Airport'),
('JIB', 48, 'Djibouti–Ambouli International Airport'),
('ATZ', 49, 'Assiut Airport'),
('ASW', 50, 'Aswan International Airport'),
('CAI', 51, 'Cairo International Airport'),
('AAC', 52, 'El Arish International Airport'),
('DBB', 53, 'El Alamein International Airport'),
('HRG', 54, 'Hurghada International Airport'),
('LXR', 55, 'Luxor International Airport'),
('RMF', 56, 'Marsa Alam International Airport'),
('MUH', 57, 'Mersa Matruh International Airport'),
('SKV', 58, 'St. Catherine International Airport'),
('SSH', 59, 'Sharm El Sheikh International Airport'),
('HMB', 60, 'Sohag International Airport'),
('TCP', 61, 'Taba International Airport'),
('SSG', 62, 'Malabo International Airport'),
('ASM', 63, 'Asmara International Airport'),
('SHO', 64, 'King Mswati III International Airport'),
('ADD', 65, 'Addis Ababa Bole International Airport'),
('DIR', 66, 'Dire Dawa Airport'),
('MVB', 67, 'M Vengue El Hadj Omar Bongo Ondimba International Airport'),
('LBV', 68, 'Léon-Mba International Airport'),
('POG', 69, 'Port-Gentil International Airport'),
('BJL', 70, 'Banjul International Airport'),
('ACC', 71, 'Kotoka International Airport'),
('KMS', 72, 'Kumasi International Airport'),
('TKD', 73, 'Takoradi Airport'),
('NYI', 74, 'Sunyani Airport'),
('HZO', 75, 'Ho Airport'),
('WZA', 76, 'Wa Airport'),
('TML', 77, 'Tamale Airport'),
('CKY', 78, 'Conakry International Airport'),
('OXB', 79, 'Osvaldo Vieira International Airport'),
('BQE', 80, 'Bubaque Airport'),
('EDL', 81, 'Eldoret International Airport'),
('MBA', 82, 'Moi International Airport'),
('KIS', 83, 'Kisumu International Airport'),
('NBO', 84, 'Jomo Kenyatta International Airport'),
('MSU', 85, 'Moshoeshoe I International Airport'),
('ROB', 86, 'Roberts International Airport'),
('BEN', 87, 'Benina International Airport'),
('SEB', 88, 'Sabha Airport'),
('TIP', 89, 'Tripoli International Airport'),
('MJI', 90, 'Mitiga International Airport'),
('TNR', 91, 'Ivato International Airport'),
('DIE', 92, 'Arrachart Airport'),
('MJN', 93, 'Amborovy Airport'),
('NOS', 94, 'Fascene Airport'),
('TMM', 95, 'Toamasina Airport'),
('FTU', 96, 'Tôlanaro Airport'),
('TLE', 97, 'Toliara Airport'),
('BLZ', 98, 'Chileka International Airport'),
('LLW', 99, 'Lilongwe International Airport'),
('MRU', 100, 'Sir Seewoosagur Ramgoolam International Airport'),
('AGA', 101, 'Agadir–Al Massira Airport'),
('CMN', 102, 'Mohammed V International Airport'),
('FEZ', 103, 'Fès–Saïs Airport'),
('RAK', 104, 'Marrakesh Menara Airport'),
('NDR', 105, 'Nador International Airport'),
('OUD', 106, 'Angads Airport'),
('RBA', 107, 'Rabat–Salé Airport'),
('TNG', 108, 'Tangier Ibn Battouta Airport'),
('TTU', 109, 'Sania Ramel Airport'),
('VIL', 110, 'Dakhla Airport'),
('EUN', 111, 'Hassan I Airport'),
('ABV', 112, 'Nnamdi Azikiwe International Airport'),
('CBQ', 113, 'Margaret Ekpo International Airport'),
('ABB', 114, 'Asaba International Airport'),
('KAN', 115, 'Mallam Aminu Kano International Airport'),
('LOS', 116, 'Murtala Muhammed International Airport'),
('PHC', 117, 'Port Harcourt International Airport'),
('ENU', 118, 'Akanu Ibiam International Airport'),
('SKO', 119, 'Sadiq Abubakar III International Airport'),
('CPT', 120, 'Cape Town International Airport'),
('DUR', 121, 'King Shaka International Airport'),
('MQP', 122, 'Kruger Mpumalanga International Airport'),
('BFN', 123, 'Bram Fischer International Airport'),
('ELS', 124, 'East London Airport'),
('HRE', 125, 'Robert Gabriel Mugabe International Airport'),
('VFA', 126, 'Victoria Falls Airport'),
('BUQ', 127, 'Joshua Mqabuko Nkomo International Airport'),
('NAS', 128, 'Lynden Pindling International Airport'),
('CCZ', 129, 'Chub Cay International Airport'),
('GGT', 130, 'Exuma International Airport'),
('FPO', 131, 'Grand Bahama International Airport'),
('RSD', 132, 'Rock Sound International Airport'),
('MHH', 133, 'Marsh Harbour International Airport'),
('BGI', 134, 'Grantley Adams International Airport'),
('EIS', 135, 'Terrance B. Lettsome International Airport'),
('CYB', 136, 'Charles Kirkconnell International Airport'),
('GCM', 137, 'Owen Roberts International Airport'),
('CMW', 138, 'Ignacio Agramonte International Airport'),
('CCC', 139, 'Jardines del Rey Airport'),
('CYO', 140, 'Vilo Acuña Airport'),
('CFG', 141, 'Jaime González Airport'),
('HAV', 142, 'José Martí International Airport'),
('HOG', 143, 'Frank País Airport'),
('SNU', 144, 'Abel Santamaría Airport'),
('SCU', 145, 'Antonio Maceo Airport'),
('VRA', 146, 'Juan Gualberto Gómez Airport'),
('BRX', 147, 'María Montez International Airport'),
('LRM', 148, 'La Romana International Airport'),
('PUJ', 149, 'Punta Cana International Airport'),
('AZS', 150, 'Samaná El Catey International Airport'),
('POP', 151, 'Gregorio Luperón International Airport'),
('STI', 152, 'Cibao International Airport'),
('SDQ', 153, 'Las Américas International Airport'),
('KIN', 154, 'Norman Manley International Airport'),
('MBJ', 155, 'Sangster International Airport'),
('BQN', 156, 'Rafael Hernández Airport'),
('SJU', 157, 'Luis Muñoz Marín International Airport'),
('STT', 158, 'Cyril E. King Airport'),
('STX', 159, 'Henry E. Rohlsen Airport'),
('FRS', 160, 'Mundo Maya International Airport'),
('GUA', 161, 'La Aurora International Airport'),
('YXX', 162, 'Abbotsford International Airport'),
('YYC', 163, 'Calgary International Airport'),
('YEG', 164, 'Edmonton International Airport'),
('YFC', 165, 'Fredericton International Airport'),
('YQX', 166, 'Gander International Airport'),
('YHZ', 167, 'Halifax Stanfield International Airport'),
('YHM', 168, 'John C. Munro Hamilton International Airport'),
('YLW', 169, 'Kelowna International Airport'),
('YXU', 170, 'London International Airport'),
('YQM', 171, 'Greater Moncton Roméo LeBlanc International Airport'),
('YUL', 172, 'Montréal–Trudeau International Airport'),
('YOW', 173, 'Ottawa Macdonald–Cartier International Airport'),
('YQB', 174, 'Québec City Jean Lesage International Airport'),
('YQR', 175, 'Regina International Airport'),
('YXE', 176, 'Saskatoon John G. Diefenbaker International Airport'),
('YYT', 177, 'St. Johns International Airport'),
('YQT', 178, 'Thunder Bay International Airport'),
('YVR', 179, 'Vancouver International Airport'),
('YYJ', 180, 'Victoria International Airport'),
('YXY', 181, 'Erik Nielsen Whitehorse International Airport'),
('YQC', 182, 'Windsor International Airport'),
('YWG', 183, 'Winnipeg James Armstrong Richardson International Airport'),
('ACA', 184, 'Acapulco International Airport'),
('AGU', 185, 'Aguascalientes International Airport'),
('CUN', 186, 'Cancún International Airport'),
('CUU', 187, 'Chihuahua International Airport'),
('CME', 188, 'Ciudad del Carmen International Airport'),
('CZM', 189, 'Cozumel International Airport'),
('CUL', 190, 'Culiacán International Airport'),
('DGO', 191, 'Durango International Airport'),
('GDL', 192, 'Miguel Hidalgo y Costilla Guadalajara International Airport'),
('HMO', 193, 'Hermosillo International Airport'),
('HUX', 194, 'Bahías de Huatulco International Airport'),
('ZIH', 195, 'Ixtapa-Zihuatanejo International Airport'),
('BJX', 196, 'Bajío International Airport'),
('LTO', 197, 'Loreto International Airport'),
('SJD', 198, 'Los Cabos International Airport'),
('ZLO', 199, 'Playa de Oro International Airport'),
('MZT', 200, 'Mazatlán International Airport'),
('MID', 201, 'Mérida International Airport'),
('MEX', 202, 'Mexico City International Airport'),
('MTY', 203, 'Monterrey International Airport'),
('MLM', 204, 'General Francisco Mujica International Airport'),
('OAX', 205, 'Oaxaca International Airport'),
('PBC', 206, 'Puebla International Airport'),
('PVR', 207, 'Licenciado Gustavo Díaz Ordaz International Airport'),
('QRO', 208, 'Querétaro Intercontinental Airport'),
('REX', 209, 'General Lucio Blanco International Airport'),
('SLW', 210, 'Saltillo Airport'),
('SLP', 211, 'San Luis Potosí International Airport'),
('TAM', 212, 'Tampico International Airport'),
('TIJ', 213, 'Tijuana International Airport'),
('TLC', 214, 'Toluca International Airport'),
('TRC', 215, 'Torreón International Airport'),
('TGZ', 216, 'Tuxtla Gutiérrez International Airport'),
('UPN', 217, 'Uruapan International Airport'),
('VER', 218, 'Veracruz International Airport'),
('VSA', 219, 'Villahermosa International Airport'),
('ZCL', 220, 'Zacatecas International Airport'),
('AKC', 221, 'Akron Executive Airport'),
('ALB', 222, 'Albany International Airport'),
('ABQ', 223, 'Albuquerque International Sunport'),
('ANC', 224, 'Ted Stevens Anchorage International Airport'),
('ATW', 225, 'Appleton International Airport'),
('ATL', 226, 'Hartsfield–Jackson Atlanta International Airport'),
('ACY', 227, 'Atlantic City International Airport'),
('AUS', 228, 'Austin–Bergstrom International Airport'),
('BWI', 229, 'Baltimore/Washington International Airport'),
('BGR', 230, 'Bangor International Airport'),
('BLI', 231, 'Bellingham International Airport'),
('BHM', 232, 'Birmingham–Shuttlesworth International Airport'),
('BOI', 233, 'Boise Airport'),
('BOS', 234, 'Logan International Airport'),
('BUF', 235, 'Buffalo Niagara International Airport'),
('CLT', 236, 'Charlotte Douglas International Airport'),
('CHS', 237, 'Charleston International Airport'),
('CVG', 238, 'Cincinnati/Northern Kentucky International Airport'),
('CLE', 239, 'Cleveland Hopkins International Airport'),
('DFW', 240, 'Dallas/Fort Worth International Airport'),
('DAY', 241, 'Dayton International Airport'),
('DEN', 242, 'Denver International Airport'),
('DSM', 243, 'Des Moines International Airport'),
('DTW', 244, 'Detroit Metropolitan Airport'),
('ELP', 245, 'El Paso International Airport'),
('FAI', 246, 'Fairbanks International Airport'),
('FLL', 247, 'Fort Lauderdale–Hollywood International Airport'),
('RSW', 248, 'Southwest Florida International Airport'),
('FAT', 249, 'Fresno Yosemite International Airport'),
('GRR', 250, 'Gerald R. Ford International Airport'),
('GRB', 251, 'Green Bay–Austin Straubel International Airport'),
('GSO', 252, 'Piedmont Triad International Airport'),
('MDT', 253, 'Harrisburg International Airport'),
('BDL', 254, 'Bradley International Airport'),
('ITO', 255, 'Hilo International Airport'),
('HNL', 256, 'Daniel K. Inouye International Airport'),
('HSV', 259, 'Huntsville International Airport'),
('IND', 260, 'Indianapolis International Airport'),
('JAN', 261, 'Jackson–Medgar Wiley Evers International Airport'),
('JAX', 262, 'Jacksonville International Airport'),
('JNU', 263, 'Juneau International Airport'),
('MCI', 264, 'Kansas City International Airport'),
('KTN', 265, 'Ketchikan International Airport'),
('EYW', 266, 'Key West International Airport'),
('KOA', 267, 'Kona International Airport'),
('TYS', 268, 'McGhee Tyson Airport'),
('LAL', 269, 'Lakeland Linder International Airport'),
('LAN', 270, 'Capital Region International Airport'),
('LAS', 271, 'McCarran International Airport'),
('LIT', 272, 'Clinton National Airport'),
('LAX', 273, 'Los Angeles International Airport'),
('SDF', 274, 'Louisville International Airport'),
('MLB', 275, 'Melbourne Orlando International Airport'),
('MEM', 276, 'Memphis International Airport'),
('MIA', 277, 'Miami International Airport'),
('MAF', 278, 'Midland International Air and Space Port'),
('MKE', 279, 'General Mitchell International Airport'),
('MSP', 280, 'Minneapolis–Saint Paul International Airport'),
('MYR', 281, 'Myrtle Beach International Airport'),
('BNA', 282, 'Nashville International Airport'),
('MSY', 283, 'Louis Armstrong New Orleans International Airport'),
('EWR', 284, 'Newark Liberty International Airport'),
('SWF', 285, 'Stewart International Airport'),
('ORF', 286, 'Norfolk International Airport'),
('OAK', 287, 'Oakland International Airport'),
('OKC', 288, 'Will Rogers World Airport'),
('OMA', 289, 'Eppley Airfield'),
('ONT', 290, 'Ontario International Airport'),
('SNA', 291, 'John Wayne Airport'),
('MCO', 292, 'Orlando International Airport'),
('SFB', 293, 'Orlando Sanford International Airport'),
('PSP', 294, 'Palm Springs International Airport'),
('ECP', 295, 'Northwest Florida Beaches International Airport'),
('PNS', 296, 'Pensacola International Airport'),
('PHL', 297, 'Philadelphia International Airport'),
('PHX', 298, 'Phoenix Sky Harbor International Airport'),
('AZA', 299, 'Phoenix–Mesa Gateway Airport'),
('PIT', 300, 'Pittsburgh International Airport'),
('PWM', 301, 'Portland International Jetport'),
('PDX', 302, 'Portland International Airport'),
('PVD', 303, 'Rhode Island T. F. Green International Airport'),
('RAC', 304, 'Batten International Airport'),
('RDU', 305, 'Raleigh–Durham International Airport'),
('RNO', 306, 'Reno–Tahoe International Airport'),
('RIC', 307, 'Richmond International Airport'),
('RST', 308, 'Rochester International Airport'),
('ROC', 309, 'Greater Rochester International Airport'),
('RFD', 310, 'Chicago Rockford International Airport'),
('SMF', 311, 'Sacramento International Airport'),
('SLC', 312, 'Salt Lake City International Airport'),
('SAT', 313, 'San Antonio International Airport'),
('SBD', 314, 'San Bernardino International Airport'),
('SAN', 315, 'San Diego International Airport'),
('SFO', 316, 'San Francisco International Airport'),
('SJC', 317, 'San Jose International Airport'),
('SRQ', 318, 'Sarasota–Bradenton International Airport'),
('SAV', 319, 'Savannah/Hilton Head International Airport'),
('SBM', 320, 'Sheboygan County Memorial Airport'),
('PAE', 321, 'Paine Field'),
('GEG', 322, 'Spokane International Airport'),
('STL', 323, 'St. Louis Lambert International Airport'),
('PIE', 324, 'St. Pete–Clearwater International Airport'),
('SYR', 325, 'Syracuse Hancock International Airport'),
('TLH', 326, 'Tallahassee International Airport'),
('TPA', 327, 'Tampa International Airport'),
('TUS', 328, 'Tucson International Airport'),
('TUL', 329, 'Tulsa International Airport'),
('PBI', 332, 'Palm Beach International Airport'),
('AVP', 333, 'Wilkes-Barre/Scranton International Airport'),
('ILM', 334, 'Wilmington International Airport'),
('FNJ', 335, 'Pyongyang International Airport'),
('AXT', 336, 'Akita Airport'),
('AOJ', 337, 'Aomori Airport'),
('FUK', 338, 'Fukuoka Airport'),
('HKD', 339, 'Hakodate Airport'),
('KOJ', 340, 'Kagoshima Airport'),
('KMQ', 341, 'Komatsu Airport'),
('HIJ', 342, 'Hiroshima Airport'),
('KKJ', 343, 'Kitakyushu Airport'),
('NGS', 344, 'Nagasaki Airport'),
('OKA', 345, 'Naha Airport'),
('NGO', 346, 'Chubu Centrair International Airport'),
('KIJ', 347, 'Niigata Airport'),
('OIT', 348, 'Oita Airport'),
('OKJ', 349, 'Okayama Airport'),
('KIX', 350, 'Kansai International Airport'),
('CTS', 351, 'New Chitose Airport'),
('SDJ', 352, 'Sendai Airport'),
('FSZ', 353, 'Shizuoka Airport'),
('BAV', 354, 'Baotou Donghe Airport'),
('BHY', 355, 'Beihai Fucheng Airport'),
('CGQ', 356, 'Changchun Longjia International Airport'),
('CSX', 357, 'Changsha Huanghua International Airport'),
('CZX', 358, 'Changzhou Benniu International Airport'),
('CKG', 359, 'Chongqing Jiangbei International Airport'),
('DLC', 360, 'Dalian Zhoushuizi International Airport'),
('DDG', 361, 'Dandong Langtou Airport'),
('DAT', 362, 'Datong Yungang Airport'),
('DNH', 363, 'Dunhuang Mogao International Airport'),
('ENH', 364, 'Enshi Xujiaping Airport'),
('FOC', 365, 'Fuzhou Changle International Airport'),
('KOW', 366, 'Ganzhou Huangjin Airport'),
('CAN', 367, 'Guangzhou Baiyun International Airport'),
('KWL', 368, 'Guilin Liangjiang International Airport'),
('KWE', 369, 'Guiyang Longdongbao International Airport'),
('HAK', 370, 'Haikou Meilan International Airport'),
('HGH', 371, 'Hangzhou Xiaoshan International Airport'),
('HRB', 372, 'Harbin Taiping International Airport'),
('HFE', 373, 'Hefei Xinqiao International Airport'),
('HEK', 374, 'Heihe Aihui Airport'),
('HET', 375, 'Hohhot Baita International Airport'),
('HIA', 376, 'Huai an Lianshui International Airport'),
('TXN', 377, 'Huangshan Tunxi International Airport'),
('HLD', 378, 'Hulunbuir Hailar Airport'),
('JMU', 379, 'Jiamusi Dongjiao Airport'),
('SWA', 380, 'Jieyang Chaoshan International Airport'),
('TNA', 381, 'Jinan Yaoqiang International Airport'),
('KMG', 382, 'Kunming Changshui International Airport'),
('LHW', 383, 'Lanzhou Zhongchuan International Airport'),
('LXA', 384, 'Lhasa Gonggar Airport'),
('LYG', 385, 'Lianyungang Baitabu Airport'),
('LJG', 386, 'Lijiang Sanyi International Airport'),
('LYI', 387, 'Linyi Qiyang Airport'),
('LYA', 388, 'Luoyang Beijiao Airport'),
('LUM', 389, 'Dehong Mangshi Airport'),
('NZH', 390, 'Manzhouli Xijiao Airport'),
('MXZ', 391, 'Meixian Airport'),
('MDG', 392, 'Mudanjiang Hailang International Airport'),
('KHN', 393, 'Nanchang Changbei International Airport'),
('NKG', 394, 'Nanjing Lukou International Airport'),
('NNG', 395, 'Nanning Wuxu International Airport'),
('NTG', 396, 'Nantong Xingdong International Airport'),
('NGB', 397, 'Ningbo Lishe International Airport'),
('DSN', 398, 'Ordos Ejin Horo International Airport'),
('TAO', 399, 'Qingdao Liuting International Airport'),
('BPE', 400, 'Qinhuangdao Beidaihe Airport'),
('NDG', 401, 'Qiqihar Sanjiazi Airport'),
('JJN', 402, 'Quanzhou Jinjiang International Airport'),
('SYX', 403, 'Sanya Phoenix International Airport'),
('SHE', 406, 'Shenyang Taoxian International Airport'),
('SZX', 407, 'Shenzhen Bao an International Airport'),
('SJW', 408, 'Shijiazhuang Zhengding International Airport'),
('TYN', 409, 'Taiyuan Wusu International Airport'),
('TSN', 410, 'Tianjin Binhai International Airport'),
('UCB', 411, 'Ulanqab Jining Airport'),
('URC', 412, 'Ürümqi Diwopu International Airport'),
('WXN', 413, 'Wanzhou Wuqiao Airport'),
('WEH', 414, 'Weihai Dashuibo Airport'),
('WNZ', 415, 'Wenzhou Yongqiang Airport'),
('WUH', 416, 'Wuhan Tianhe International Airport'),
('WUX', 417, 'Sunan Shuofang International Airport'),
('WUS', 418, 'Wuyishan Airport'),
('XMN', 419, 'Xiamen Gaoqi International Airport'),
('XIY', 420, 'Xi an Xianyang International Airport'),
('XNN', 421, 'Xining Caojiabao International Airport'),
('WUT', 422, 'Xinzhou Wutaishan Airport'),
('JHG', 423, 'Xishuangbanna Gasa International Airport'),
('XUZ', 424, 'Xuzhou Guanyin Airport'),
('YNZ', 425, 'Yancheng Nanyang Airport'),
('YTY', 426, 'Yangzhou Taizhou International Airport'),
('YNJ', 427, 'Yanji Airport'),
('YNT', 428, 'Yantai Penglai International Airport'),
('YIH', 429, 'Yichang Sanxia Airport'),
('INC', 430, 'Yinchuan Hedong International Airport'),
('YIW', 431, 'Yiwu Airport'),
('YCU', 432, 'Yuncheng Guangong Airport'),
('DYG', 433, 'Zhangjiajie Hehua Airport'),
('ZHA', 434, 'Zhanjiang Airport'),
('CGO', 435, 'Zhengzhou Xinzheng International Airport'),
('ZUH', 436, 'Zhuhai Jinwan Airport'),
('ZYI', 437, 'Zunyi Xinzhou Airport'),
('HKG', 438, 'Hong Kong International Airport'),
('HUN', 439, 'Hualien Airport'),
('KHH', 440, 'Kaohsiung International Airport'),
('RMQ', 441, 'Taichung International Airport'),
('TNN', 442, 'Tainan Airport'),
('TSA', 443, 'Taipei Songshan Airport'),
('TPE', 444, 'Taoyuan International Airport'),
('PUS', 445, 'Gimhae International Airport'),
('TAE', 446, 'Daegu International Airport'),
('CJU', 447, 'Jeju International Airport'),
('GMP', 448, 'Gimpo International Airport'),
('ICN', 449, 'Incheon International Airport'),
('CJJ', 450, 'Cheongju International Airport'),
('MWX', 451, 'Muan International Airport'),
('YNY', 452, 'Yangyang International Airport'),
('BPN', 453, 'Sultan Aji Muhammad Sulaiman Sepinggan Airport'),
('BTJ', 454, 'Sultan Iskandar Muda International Airport'),
('TKG', 455, 'Radin Inten II International Airport'),
('BDJ', 456, 'Syamsudin Noor International Airport'),
('BWX', 457, 'Banyuwangi International Airport'),
('BTH', 458, 'Hang Nadim International Airport'),
('BIK', 459, 'Frans Kaisiepo International Airport'),
('DPS', 460, 'Ngurah Rai International Airport'),
('KOE', 461, 'El Tari International Airport'),
('UPG', 462, 'Sultan Hasanuddin International Airport'),
('MDC', 463, 'Sam Ratulangi International Airport'),
('LOP', 464, 'Lombok International Airport'),
('KNO', 465, 'Kualanamu International Airport'),
('PDG', 466, 'Minangkabau International Airport'),
('PLM', 467, 'Sultan Mahmud Badaruddin II International Airport'),
('PKU', 468, 'Sultan Syarif Kasim II International Airport'),
('PNK', 469, 'Supadio International Airport'),
('SRG', 470, 'Jenderal Ahmad Yani International Airport'),
('DTB', 471, 'Sisingamangaraja XII International Airport'),
('SUB', 472, 'Juanda International Airport'),
('SOC', 473, 'Adisumarmo International Airport'),
('TJQ', 474, 'H.A.S. Hanandjoeddin International Airport'),
('TRK', 475, 'Juwata International Airport'),
('YIA', 476, 'Yogyakarta International Airport'),
('BSO', 477, 'Basco Airport'),
('LLC', 478, 'Cagayan North International Airport'),
('CEB', 479, 'Mactan–Cebu International Airport'),
('CRK', 480, 'Clark International Airport'),
('DVO', 481, 'Francisco Bangoy International Airport'),
('GES', 482, 'General Santos International Airport'),
('ILO', 483, 'Iloilo International Airport'),
('KLO', 484, 'Kalibo International Airport'),
('LAO', 485, 'Laoag International Airport'),
('MNL', 486, 'Ninoy Aquino International Airport'),
('TAG', 487, 'Bohol–Panglao International Airport'),
('PPS', 488, 'Puerto Princesa International Airport'),
('SFS', 489, 'Subic Bay International Airport'),
('ZAM', 490, 'Zamboanga International Airport'),
('BKK', 491, 'Suvarnabhumi Airport'),
('DMK', 492, 'Don Mueang International Airport'),
('CNX', 493, 'Chiang Mai International Airport'),
('CEI', 494, 'Chiang Rai International Airport'),
('UTP', 495, 'U-Tapao International Airport'),
('HDY', 496, 'Hat Yai International Airport'),
('KBV', 497, 'Krabi International Airport'),
('HKT', 498, 'Phuket International Airport'),
('URT', 499, 'Surat Thani International Airport'),
('USM', 500, 'Samui Airport'),
('UTH', 501, 'Udon Thani International Airport'),
('FKB', 502, 'Karlsruhe/Baden-Baden Airport'),
('BER', 503, 'Berlin Brandenburg Airport'),
('BRE', 504, 'Bremen Airport'),
('CGN', 505, 'Cologne/Bonn Airport'),
('DTM', 506, 'Dortmund Airport'),
('DUS', 507, 'Düsseldorf Airport'),
('MLH/BSL/EAP', 508, 'EuroAirport Basel–Mulhouse–Freiburg'),
('FDH', 509, 'Friedrichshafen Airport'),
('HAM', 510, 'Hamburg Airport'),
('HAJ', 511, 'Hannover Airport'),
('LEJ', 512, 'Leipzig/Halle Airport'),
('LBC', 513, 'Lübeck Airport'),
('FMM', 514, 'Memmingen Airport'),
('MUC', 515, 'Munich Airport'),
('NUE', 516, 'Nuremberg Airport'),
('STR', 517, 'Stuttgart Airport'),
('NRN', 518, 'Weeze Airport'),
('BHX', 519, 'Birmingham International Airport'),
('BOH', 520, 'Bournemouth Airport'),
('BRS', 521, 'Bristol Airport'),
('CWL', 522, 'Cardiff Airport'),
('DSA', 523, 'Robin Hood Airport Doncaster Sheffield'),
('MME', 524, 'Durham Tees Valley Airport'),
('EMA', 525, 'East Midlands Airport'),
('EXT', 526, 'Exeter International Airport'),
('LBA', 527, 'Leeds Bradford International Airport'),
('LPL', 528, 'Liverpool John Lennon Airport'),
('MAN', 529, 'Manchester Airport'),
('NCL', 530, 'Newcastle Airport'),
('NQY', 531, 'Newquay Cornwall Airport'),
('NWI', 532, 'Norwich International Airport'),
('SOU', 533, 'Southampton Airport'),
('ADL', 534, 'Adelaide Airport'),
('BNE', 535, 'Brisbane Airport'),
('BME', 536, 'Broome International Airport'),
('CNS', 537, 'Cairns Airport'),
('CBR', 538, 'Canberra Airport'),
('DRW', 539, 'Darwin International Airport'),
('AVV', 540, 'Avalon Airport'),
('OOL', 541, 'Gold Coast Airport'),
('HBA', 542, 'Hobart Airport'),
('MEL', 543, 'Melbourne Airport');


