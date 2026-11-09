/* OrthodoxPath – Bilder zu Heiligen und Kirchenvätern.
   Nur gemeinfreie Werke (alte Ikonen/Fresken, „PD-Art“) bzw. alte Fotos (vor 1925, „PD“), Herkunft Wikimedia Commons
   (Lizenz dort über die API geprüft am 9.11.2026). Datei liegt in der App: img/icons/<id>.jpg.
   icon: "<id>" = gleiches Bild wie im Ikonen-Lexikon. Für Heilige des 20. Jh. ohne sicher freies Bild: kein Eintrag. */
const SAINT_IMGS = {
  "f-athanasius": { file: "Rila_Mon._-_Fresco_mir._icon_018_Athanasius_of_Alexandria.jpg", license: "PD-Art", credit: { de: "Fresko im Rila-Kloster, 1843", sr: "Фреска у Рилском манастиру, 1843." } },
  "f-basil": { file: "Vasiliy_by_Dionisius_(Kirillo-Belozersk).jpg", license: "PD-Art", credit: { de: "Dionisij, um 1502, aus dem Kirillo-Beloserski-Kloster", sr: "Дионисије, око 1502, из Кирило-Белозерског манастира" } },
  "f-gregnaz": { file: "Gregory_of_Nazianzus_from_Vasilyevskiy_chin_(15th_c.,_GTG).jpg", license: "PD-Art", credit: { de: "Deesis-Reihe („Wassiljewski-Reihe“), Moskau, 1408, Tretjakow-Galerie", sr: "Деисисни ред („Васиљевски ред“), Москва, 1408, Третјаковска галерија" } },
  "f-gregnys": { file: "St._Gregory_of_Nyssa,_prothesis.jpg", license: "PD-Art", credit: { de: "Fresko, Kirche der Gottesgebärerin Peribleptos in Ohrid, 13. Jh.", sr: "Фреска, црква Богородице Перивлепте у Охриду, 13. век" } },
  "f-chrysostom": { icon: "chrysostom" },
  "f-cyril": { file: "Fresco_Icon_of_Saint_Kyrillos_of_Alexandria_3.jpg", license: "PD-Art", credit: { de: "Fresko vom Berg Athos, 1545", sr: "Фреска са Свете Горе, 1545." } },
  "f-maximus": { file: "Athonite_Fresco_Icon_of_Saint_Maximos_the_Confessor.jpg", license: "PD-Art", credit: { de: "Fresko vom Berg Athos, 14./15. Jh.", sr: "Фреска са Свете Горе, 14/15. век" } },
  "f-damascus": { file: "Athonite_Fresco_Icon_of_Saint_John_of_Damascus_2.jpg", license: "PD-Art", credit: { de: "Fresko vom Berg Athos, 14./15. Jh.", sr: "Фреска са Свете Горе, 14/15. век" } },
  "f-ephrem": { file: "Dormition_of_Saint_Ephraim_the_Syrian_(Cretan,_15th_c.,_Byzantine_museum).jpg", license: "PD-Art", credit: { de: "Entschlafung des hl. Ephräm, kretische Ikone, 15. Jh., Byzantinisches Museum", sr: "Упокојење светог Јефрема, критска икона, 15. век, Византијски музеј" } },
  "s-antony": { file: "Cretan_Icon_Saint_Anthony_the_Great.jpg", license: "PD-Art", credit: { de: "Kretische Ikone, 15.–17. Jh.", sr: "Критска икона, 15–17. век" } },
  "s-ignatius": { file: "Byzantine_-_Saint_Ignatius_of_Antioch_-_Walters_4820867.jpg", license: "PD-Art", credit: { de: "Byzantinische Bildkachel, 10. Jh., Walters Art Museum", sr: "Византијска керамичка плоча, 10. век, Музеј Волтерс" } },
  "s-andrew": { file: "Andrew_from_Vasilyevskiy_chin_(15th_c.,_GTG).jpg", license: "PD-Art", credit: { de: "Deesis-Reihe („Wassiljewski-Reihe“), Moskau, 1408, Tretjakow-Galerie", sr: "Деисисни ред („Васиљевски ред“), Москва, 1408, Третјаковска галерија" } },
  "s-catherine": { file: "IconEcaterina.jpeg", license: "PD-Art", credit: { de: "Ikone, 13. Jh.", sr: "Икона, 13. век" } },
  "s-demetrios": { file: "Св._Дмитрий_Солунский_-_Google_Art_Project.jpg", license: "PD-Art", credit: { de: "Mosaik aus dem Michaelskloster in Kiew, um 1108–1113, Tretjakow-Galerie", sr: "Мозаик из Михајловског манастира у Кијеву, око 1108–1113, Третјаковска галерија" } },
  "s-spyridon": { file: "Saint_Spyridon_Icon_from_Gorno_Statitsa_1720.jpg", license: "PD-Art", credit: { de: "Ikone aus Ano Melas (Gorno Statitsa), 1720", sr: "Икона из Ано Меласа (Горња Статица), 1720." } },
  "s-maryegypt": { file: "Icon_of_Mary_of_Egypt_(Mstera,_19th_c.).jpg", license: "PD-Art", credit: { de: "Vita-Ikone, Mstjora (Russland), spätes 19. Jh.", sr: "Икона са житијем, Мстера (Русија), крај 19. века" } },
  "s-prokopije": { file: "St._Procopius_Icon.jpg", license: "PD-Art", credit: { de: "Metallikone, 10. Jh., aus Chersones (Sewastopol)", sr: "Метална икона, 10. век, из Херсонеса (Севастопољ)" } },
  "s-petka": { file: "Parascheva_of_the_Balkans.jpg", license: "PD-Art", credit: { de: "Druckgrafik, 1817", sr: "Графика, 1817." } },
  "s-rila": { file: "Saint_John_of_Rila._Icon._National_Museum_of_Rila_Monastery._Bulgaria.jpg", license: "PD-Art", credit: { de: "Ikone, 14. Jh., Museum des Rila-Klosters", sr: "Икона, 14. век, музеј Рилског манастира" } },
  "s-sava": { file: "Saint_Sava,_fresco_from_Mileševa.jpg", license: "PD-Art", credit: { de: "Fresko im Kloster Mileševa, 13. Jh.", sr: "Фреска у манастиру Милешеви, 13. век" } },
  "s-simeon": { file: "Nemanja_Simeon_Sopocani.jpg", license: "PD-Art", credit: { de: "Fresko im Kloster Sopoćani, 2. Hälfte 13. Jh.", sr: "Фреска у манастиру Сопоћанима, друга половина 13. века" } },
  "s-lazar": { file: "Knez_Lazar_i_kneginja_Milica.jpg", license: "PD-Art", credit: { de: "Fürst Lazar mit Fürstin Milica, Fresko im Kloster Ljubostinja, um 1405", sr: "Кнез Лазар и кнегиња Милица, фреска у манастиру Љубостињи, око 1405." } },
  "s-stefan": { file: "Stefan_Decanski_ktitor.jpg", license: "PD-Art", credit: { de: "Stifterbild im Kloster Visoki Dečani, 14. Jh.", sr: "Ктиторски портрет у манастиру Високи Дечани, 14. век" } },
  "s-vasilije": { file: "Vasily_Ostrojsky.jpg", license: "PD-Art", credit: { de: "Ikone, 19. Jh., Kloster Ostrog", sr: "Икона, 19. век, манастир Острог" } },
  "s-arsenije": { file: "Saint_Arsenije_I_Sremac.jpeg", license: "PD-Art", credit: { de: "Fresko, 14./15. Jh.", sr: "Фреска, 14/15. век" } },
  "s-seraphim": { file: "Seraphim_of_Sarov_(portrait).jpg", license: "PD-Art", credit: { de: "Bildnis, 19. Jh.", sr: "Портрет, 19. век" } },
  "s-kronstadt": { file: "Ioann_of_Kronstadt.jpeg", license: "PD", credit: { de: "Foto, 1900", sr: "Фотографија, 1900." } },
  "s-nikolaj": { file: "Jeromonah-Nikolaj-Velimirovic-1915.jpg", license: "PD", credit: { de: "Foto als Hieromonach, 1915", sr: "Фотографија као јеромонах, 1915." } },
  "s-nicholas": { icon: "nicholas" },
  "s-george": { icon: "george" }
};
if (typeof module !== "undefined") module.exports = { SAINT_IMGS };
