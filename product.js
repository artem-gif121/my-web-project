const PRODUCTS = [

    /* =========================
       КАВА
       ========================= */

    {
        id: "tiramisu-velours-latte",
        name: "Tiramisu Velours Latte",
        category: "Кава",
        number: "01",
        image: "images/Tiramisu Velours Latte.png",
        price: 195,
        description: "Ніжне лате зі смаком тірамісу та легкою ноткою какао."
    },

    {
        id: "eclat-caramel-latte",
        name: "Éclat de Caramel Latte",
        category: "Кава",
        number: "02",
        image: "images/Éclat de Caramel Latte.png",
        price: 170,
        description: "Ароматне лате з насиченим карамельним смаком і ніжною молочною піною."
    },

    {
        id: "cinnamon-latte",
        name: "Cinnamon Latte",
        category: "Кава",
        number: "03",
        image: "images/Cinnamon Latte.png",
        price: 220,
        description: "Ніжне лате з теплою корицею та ароматом свіжоспеченого синабону."
    },

    {
        id: "hazelnut-creme-latte",
        name: "Hazelnut Crème Latte",
        category: "Кава",
        number: "04",
        image: "images/Hazelnut Crème Latte.png",
        price: 210,
        description: "Вершкове лате з ніжним смаком обсмаженого фундука."
    },

    {
        id: "pear-ginger-flat-white",
        name: "Pear & Ginger Flat White",
        category: "Кава",
        number: "05",
        image: "images/Pear & Ginger Flat White.jpg",
        price: 175,
        description: "Флэт-вайт із соковитою грушею та легкою пряною ноткою імбиру."
    },

    {
        id: "peche-creme-espresso",
        name: "Pêche & Crème Espresso",
        category: "Кава",
        number: "06",
        image: "images/Pêche & Crème Espresso.jpg",
        price: 155,
        description: "Еспресо з ніжною молочною піною та ароматним персиковим кремом."
    },

    {
        id: "pistache-flat-white",
        name: "Pistache Flat White",
        category: "Кава",
        number: "07",
        image: "images/Pistache Flat White.jpg",
        price: 175,
        description: "Ніжний флэт-вайт із молочною піною та делікатним фісташковим смаком."
    },

    {
        id: "cacao-marshmallow-latte",
        name: "Cacao Marshmallow Latte",
        category: "Кава",
        number: "08",
        image: "images/Cacao Marshmallow Latte.jpg",
        price: 185,
        description: "Лате з насиченим какао та маленькими ніжними маршмелоу."
    },

    {
        id: "white-chocolate-yuzu-latte",
        name: "White Chocolate & Yuzu Latte",
        category: "Кава",
        number: "09",
        image: "images/White Chocolate &  Yuzu Latte.jpg",
        price: 155,
        description: "Лате з білим шоколадом і яскравою свіжою цитрусовою нотою юдзу."
    },

    {
        id: "delice-ananas-coco",
        name: "Délice d’Ananas & Coco",
        category: "Кава",
        number: "10",
        image: "images/Délice d’Ananas & Coco.jpg",
        price: 175,
        description: "Шоколадна кава з ніжним кокосом та соковитим ананасом."
    },

    {
        id: "ivoire-affogato",
        name: "Ivoire Affogato",
        category: "Кава",
        number: "11",
        image: "images/Ivoire Affogato.jpg",
        price: 210,
        description: "Вершкове морозиво з гарячим еспресо, какао та білим шоколадом."
    },


    /* =========================
       ЧАЇ
       ========================= */

    {
        id: "bergamote-royale",
        name: "Bergamote Royale",
        category: "Чаї",
        number: "01",
        image: "images/Bergamote Royale.png",
        price: 145,
        description: "Чорний чай із ароматним бергамотом та свіжою апельсиновою ноткою."
    },

    {
        id: "eclat-ananas",
        name: "Éclat d’Ananas",
        category: "Чаї",
        number: "02",
        image: "images/Éclat d’Ananas.png",
        price: 175,
        description: "Зелений чай із соковитим ананасом та ніжним тропічним ароматом."
    },

    {
        id: "eclat-litchi",
        name: "Éclat de Litchi",
        category: "Чаї",
        number: "03",
        image: "images/Éclat de Litchi.png",
        price: 195,
        description: "Зелений чай із ніжним фруктовим смаком ароматного лічі."
    },

    {
        id: "eclat-peche",
        name: "Éclat de Pêche",
        category: "Чаї",
        number: "04",
        image: "images/Éclat de Pêche.png",
        price: 170,
        description: "Зелений чай із соковитим персиком та легкою фруктовою солодкістю."
    },

    {
        id: "fleur-miel",
        name: "Fleur de Miel",
        category: "Чаї",
        number: "05",
        image: "images/Fleur de Miel.png",
        price: 155,
        description: "Ніжний ромашковий чай із натуральним медом та м’яким квітковим ароматом."
    },

    {
        id: "fleur-tilleul",
        name: "Fleur de Tilleul",
        category: "Чаї",
        number: "06",
        image: "images/Fleur de Tilleul.png",
        price: 155,
        description: "Ароматний липовий чай із ніжним квітковим смаком."
    },

    {
        id: "passion-lumiere",
        name: "Passion Lumière",
        category: "Чаї",
        number: "07",
        image: "images/Passion Lumière.png",
        price: 175,
        description: "Зелений чай із маракуєю та свіжою лимонною ноткою."
    },

    {
        id: "verger-citronne",
        name: "Verger Citronné",
        category: "Чаї",
        number: "08",
        image: "images/Verger Citronné.png",
        price: 185,
        description: "Зелений чай із лемонграсом, лаймом та соковитим яблуком."
    },


    /* =========================
       ЛИМОНАДИ
       ========================= */

    {
        id: "fraicheur-emeraude",
        name: "Fraîcheur d’Émeraude",
        category: "Лимонади",
        number: "01",
        image: "images/Fraîcheur d’Émeraude.png",
        price: 220,
        description: "Освіжаюче поєднання соковитого ківі, лайма та свіжої м’яти."
    },

    {
        id: "fraise-rosee",
        name: "Fraise Rosée",
        category: "Лимонади",
        number: "02",
        image: "images/Fraise Rosée.png",
        price: 235,
        description: "Ніжний лимонад із полуницею та соковитим білим персиком."
    },

    {
        id: "lueur-citron",
        name: "Lueur de Citron",
        category: "Лимонади",
        number: "03",
        image: "images/Lueur de Citron.png",
        price: 210,
        description: "Класичний лимонад із яскравим лимонним смаком та свіжою м’ятою."
    },

    {
        id: "passion-abricot",
        name: "Passion d’Abricot",
        category: "Лимонади",
        number: "04",
        image: "images/Passion d'Abricot.png",
        price: 245,
        description: "Ароматне поєднання стиглого абрикоса та екзотичної маракуї."
    },

    {
        id: "peche-blanche",
        name: "Pêche Blanche",
        category: "Лимонади",
        number: "05",
        image: "images/Pêche Blanche.png",
        price: 215,
        description: "Легкий та освіжаючий лимонад із ніжним смаком білого персика."
    },

    {
        id: "perle-melon",
        name: "Perle de Melon",
        category: "Лимонади",
        number: "06",
        image: "images/Perle de Melon.png",
        price: 225,
        description: "Соковита диня з освіжаючою цитрусовою ноткою лайма."
    },

    {
        id: "perle-poire-lemonade",
        name: "Perle de Poire",
        category: "Лимонади",
        number: "07",
        image: "images/Perle de Poire.png",
        price: 220,
        description: "Ніжне поєднання соковитої груші та солодкого білого винограду."
    },

    {
        id: "rose-eclipse",
        name: "Rose Éclipse",
        category: "Лимонади",
        number: "08",
        image: "images/Rose Éclipse.png",
        price: 245,
        description: "Ароматний лимонад із малиною та ніжним екзотичним лічі."
    },

    {
        id: "rosee-agrumes",
        name: "Rosée d’Agrumes",
        category: "Лимонади",
        number: "09",
        image: "images/Rosée d’Agrumes.png",
        price: 220,
        description: "Яскраве цитрусове поєднання грейпфрута та свіжого лайма."
    },

    {
        id: "rosee-nectarine",
        name: "Rosée de Nectarine",
        category: "Лимонади",
        number: "10",
        image: "images/Rosée de Nectarine.png",
        price: 215,
        description: "Ніжний фруктовий лимонад із соковитим нектарином та полуницею."
    },

    {
        id: "soleil-tropiques",
        name: "Soleil des Tropiques",
        category: "Лимонади",
        number: "11",
        image: "images/Soleil des Tropiques.png",
        price: 235,
        description: "Тропічне поєднання соковитого ананаса та свіжого лайма."
    },

    {
        id: "velours-figue",
        name: "Velours de Figue",
        category: "Лимонади",
        number: "12",
        image: "images/Velours de Figue.png",
        price: 215,
        description: "Незвичайне поєднання солодкого інжиру, яблука та свіжого лимона."
    },


    /* =========================
       КЛАСИЧНІ ТОРТИ
       ========================= */

    {
        id: "mont-blanc-rose",
        name: "Mont Blanc Rose",
        subtitle: "Рожевий Монблан",
        category: "Класичні торти",
        number: "01",
        image: "images/Mont Blanc Rose (Рожевий Монблан).png",
        price: 3600,
        description: "Каштановий крем-пате з нотами коньяку, соковита чорна смородина та ніжний мус із дамаської троянди на мигдалевій основі."
    },

    {
        id: "opera-noir",
        name: "Opéra Noir",
        subtitle: "Затемнена Опера",
        category: "Класичні торти",
        number: "02",
        image: "images/Opéra Noir (Затемнена Опера).png",
        price: 3400,
        description: "Класичне прочитання з тонкими мигдалевими коржами Joconde, насиченим ганашем із гіркого какао та кавовим крем-брюле."
    },

    {
        id: "symphonie-figue-romarin",
        name: "Symphonie de Figue & Romarin",
        subtitle: "Симфонія Інжиру та Розмарину",
        category: "Класичні торти",
        number: "03",
        image: "images/Symphonie de Figue & Romarin (Симфонія Інжиру та Розмарину).png",
        price: 3650,
        description: "Карамелізований свіжий інжир у поєднанні з мусом із козячого вершкового сиру та тонкою нотою розмарину на коржі Сабле."
    },


    /* =========================
       АВТОРСЬКІ ТОРТИ
       ========================= */

    {
        id: "saint-germain",
        name: "Saint-Germain",
        subtitle: "Сен-Жермен",
        category: "Авторські торти",
        number: "01",
        image: "images/cake.png.png",
        price: 3800,
        description: "Мусовий торт із бергамоту, білого французького шоколаду та прошарком із лісової суниці."
    },

    {
        id: "velours-cerise",
        name: "Velours Cerise",
        subtitle: "Оксамитова Черешня",
        category: "Авторські торти",
        number: "02",
        image: "images/Velours Cerise (Оксамитова Черешня).png",
        price: 3200,
        description: "Ніжний ванільно-бісквітний торт із кулі зі стиглої черешні та кремом із бурбонської ванілі."
    },

    {
        id: "pistache-fleur",
        name: "Pistache & Fleur d'Oranger",
        subtitle: "Фісташка та Флердоранж",
        category: "Авторські торти",
        number: "03",
        image: "images/Pistache & Fleur d'Oranger (Фісташка та Флердоранж).png",
        price: 4200,
        description: "Фісташковий бісквіт із хрустким праліне, мусом із сицилійської фісташки та ароматом квітів апельсина."
    },


    /* =========================
       МІНІ-ДЕСЕРТИ
       ========================= */

    {
        id: "pavlova-mini",
        name: "Pavlova Mini",
        subtitle: "Міні-Павлова",
        category: "Міні-десерти",
        number: "01",
        image: "images/dessert.png.png",
        price: 360,
        description: "Невагоме безе з хрусткою скоринкою, ніжним вершковим центром та свіжими сезонними ягодами."
    },

    {
        id: "perle-poire-saffron",
        name: "Perle de Poire & Saffron",
        subtitle: "Шафранова Груша",
        category: "Міні-десерти",
        number: "02",
        image: "images/Perle de Poire & Saffron (Шафранова Груша).png",
        price: 820,
        description: "Міні-сфери з груші в сиропі з іранським шафраном, кремом із білого шоколаду та мигдалевою крихтою."
    },

    {
        id: "macarons-luxe",
        name: "Set de Macarons Luxe",
        subtitle: "Колекція Макаронів",
        category: "Міні-десерти",
        number: "03",
        image: "images/Set de Macarons Luxe (Колекція Макаронів).png",
        price: 450,
        description: "Колекція макаронів із вишуканими смаками: чорний трюфель, дорблю-груша, малина-роза та матча-лайм."
    },

    {
        id: "canele-bordeaux",
        name: "Canelé de Bordeaux",
        subtitle: "Канеле Бордо",
        category: "Міні-десерти",
        number: "04",
        image: "images/Canelé de Bordeaux (Канеле Бордо).png",
        price: 550,
        description: "Традиційна хрустка карамелізована скоринка, ніжне заварне серце з ароматом рому та натуральної ванілі."
    },

    {
        id: "choux-pistache",
        name: "Choux à la Crème Pistache",
        subtitle: "Шу з фісташкою",
        category: "Міні-десерти",
        number: "05",
        image: "images/Choux à la Crème Pistache (Шу з фісташкою).png",
        price: 480,
        description: "Повітряні тістечка шу з хрустким кракеліном та шовковистим кремом із сицилійської фісташки."
    },

    {
        id: "diamant-cerise",
        name: "Diamant de Cerise",
        subtitle: "Червоний Діамант",
        category: "Міні-десерти",
        number: "06",
        image: "images/dessert 2.png.png",
        price: 700,
        description: "Мікро-десерт у формі огранованого каменя з вишневою глазур’ю та рідкою серцевиною з вишні."
    },

    {
        id: "madeleine-rose",
        name: "Madeleine à la Rose & Framboise",
        subtitle: "Мадлен Роза-Малина",
        category: "Міні-десерти",
        number: "07",
        image: "images/Madeleine à la Rose & Framboise (Мадлен Роза-Малина).png",
        price: 450,
        description: "Традиційне бісквітне печиво з ароматом дамаської троянди, малиновим кулі та рожевою глазур’ю."
    },

    {
        id: "mille-feuille-mini",
        name: "Mille-Feuille Mini",
        subtitle: "Міні-Мільфей",
        category: "Міні-десерти",
        number: "08",
        image: "images/Mille-Feuille Mini Vanille-Pistache (Міні-Мільфей).png",
        price: 700,
        description: "Карамелізоване листкове тісто з кремом дипломат із сицилійської фісташки та мадагаскарської ванілі."
    },


    /* =========================
       КЛАСИЧНІ ПИРОГИ
       ========================= */

    {
        id: "tarte-abricots",
        name: "Tarte aux Abricots & Romarin",
        subtitle: "Абрикосово-Розмариновий Тарт",
        category: "Класичні пироги",
        number: "01",
        image: "images/Tarte aux Abricots & Romarin (Абрикосово-Розмариновий Тарт).png",
        price: 1500,
        description: "Хрустке пісочне тісто з лавандовим франжипаном, соковитим абрикосом та свіжим розмарином."
    },

    {
        id: "tarte-poire-roquefort",
        name: "Tarte aux Poire, Roquefort & Noix",
        subtitle: "Тарт із Грушею та Рокфором",
        category: "Класичні пироги",
        number: "02",
        image: "images/Tarte aux Poire, Roquefort & Noix (Тарт із Грушею та Рокфором).png",
        price: 1600,
        description: "Горіхова пісочна основа з карамелізованою грушею, сиром Roquefort та листочками чебрецю."
    },

    {
        id: "tarte-pommes",
        name: "Tarte Fine aux Pommes",
        subtitle: "Яблучний Тарт",
        category: "Класичні пироги",
        number: "03",
        image: "images/Tarte Fine aux Pommes & Beurre Noisette (Яблучний Тарт).png",
        price: 1450,
        description: "Хрустке листкове тісто на паленому маслі з яблуками Гренні Сміт, каштановим медом і кальвадосом."
    },

    {
        id: "tartelette-yuzu",
        name: "Tartelette Yuzu & Merengue",
        subtitle: "Тартлетка Юдзу-Меренга",
        category: "Класичні пироги",
        number: "04",
        image: "images/Tartelette Yuzu & Merengue (Тартлетка Юдзу-Меренга).png",
        price: 380,
        description: "Пісочна основа Сабле, освіжаючий курд із юдзу та обпалена шовковиста меренга."
    },

    {
        id: "tarte-myrtille",
        name: "Tarte Myrtille & Amande Sauvage",
        subtitle: "Чорничний Франжипан",
        category: "Класичні пироги",
        number: "05",
        image: "images/Tarte Myrtille & Amande Sauvage (Чорничний Франжипан).png",
        price: 1550,
        description: "Пісочний тарт із мигдалевим кремом Франжипан, амаретто та дикою карпатською чорницею."
    },

    {
        id: "tarte-rhubarbe",
        name: "Tarte Rhubarbe & Fraise des Bois",
        subtitle: "Тарт Ревінь-Полуниця",
        category: "Класичні пироги",
        number: "06",
        image: "images/Tarte Rhubarbe & Fraise des Bois (Тарт Ревінь-Полуниця).png",
        price: 1520,
        description: "Мигдалева основа з томленим ревенем, лісовою полуницею та прозорою ягідною глазур’ю."
    },


    /* =========================
       МУСОВІ ДЕСЕРТИ
       ========================= */

    {
        id: "eclair-marron",
        name: "Éclair Marron & Cacao",
        subtitle: "Еклер Каштан-Какао",
        category: "Мусові десерти",
        number: "01",
        image: "images/Éclair Marron & Cacao (Еклер Каштан-Какао).png",
        price: 340,
        description: "Заварне тісто з кракеліном, кремом із каштанового пате та темним шоколадом."
    },

    {
        id: "goyave-rose",
        name: "Goyave Rose",
        subtitle: "Рожева Ґуава & Баскський Перець",
        category: "Мусові десерти",
        number: "02",
        image: "images/Goyave Rose & Piment d'Espelette (Рожева Ґуава & Баскський Перець).png",
        price: 420,
        description: "Мус із рожевої ґуави, серцевина з червоного апельсина та легкий акорд перцю Еспелет."
    },

    {
        id: "mango-passion",
        name: "Mango-Passion Éclat",
        subtitle: "Манго & Маракуйя",
        category: "Мусові десерти",
        number: "03",
        image: "images/Mango-Passion Éclat (Манго & Маракуйя).png",
        price: 400,
        description: "Тропічний мус із маракуйї, центр зі стиглого манго та кокосовий бісквіт Dacquoise."
    },

    {
        id: "matcha-fleur",
        name: "Matcha & Fleur d'Oranger",
        subtitle: "Матча & Флердоранж",
        category: "Мусові десерти",
        number: "04",
        image: "images/Matcha & Fleur d'Oranger (Матча & Флердоранж).png",
        price: 410,
        description: "Мус із церемоніальної японської матчі, гелеве серце з апельсинового цвіту та хрусткий кунжут."
    },

    {
        id: "nuage-vanille",
        name: "Nuage de Vanille",
        subtitle: "Ванільна Хмара",
        category: "Мусові десерти",
        number: "05",
        image: "images/Nuage de Vanille (Ванільна Хмара).png",
        price: 420,
        description: "Порційний мусовий десерт із мадагаскарською ваніллю та рідким центром із солоної карамелі."
    },

    {
        id: "pamplemousse-rose",
        name: "Pamplemousse & Rose",
        subtitle: "Грейпфрут & Троянда",
        category: "Мусові десерти",
        number: "06",
        image: "images/Pamplemousse & Rose (Грейпфрут & Троянда).png",
        price: 470,
        description: "Мус із білого шоколаду та дамаської троянди, соковитий рожевий грейпфрут і хрустке сабле."
    },

    {
        id: "perle-mure",
        name: "Perle de Mûre",
        subtitle: "Ожина & Шампанське",
        category: "Мусові десерти",
        number: "07",
        image: "images/Perle de Mûre (Ожина & Шампанське).png",
        price: 410,
        description: "Мус на основі ігристого вина, начинка з лісової ожини та бісквіт із цедрою бергамоту."
    },

    {
        id: "soleil-agrumes",
        name: "Soleil d'Agrumes & Estragon",
        subtitle: "Сонячний Цитрус & Естрагон",
        category: "Мусові десерти",
        number: "08",
        image: "images/Soleil d'Agrumes & Estragon (Сонячний Цитрус & Естрагон).png",
        price: 450,
        description: "Мус із рожевого грейпфрута, лимонний курд з естрагоном та соковитий бісквіт із маком."
    },


    /* =========================
       WEDDING
       ========================= */

    {
        id: "velours-amour",
        name: "Velours d’Amour",
        category: "Wedding Collection",
        number: "01",
        image: "images/Velours d’Amour.png",
        price: 12000,
        description: "Ванільний бісквіт, білий шоколад, малина та мадагаскарська ваніль. Ніжний і романтичний смак."
    },

    {
        id: "perle-blanche",
        name: "Perle Blanche",
        category: "Wedding Collection",
        number: "02",
        image: "images/Perle Blanche.png",
        price: 15500,
        description: "Білий шоколад, кокос, ваніль та мигдаль. Легкий, вершковий і делікатний."
    },

    {
        id: "perle-pistache",
        name: "Perle de Pistache",
        category: "Wedding Collection",
        number: "03",
        image: "images/Perle de Pistache.png",
        price: 11500,
        description: "Фісташковий крем, малиновий конфітюр, мигдальний бісквіт та білий шоколад."
    },

    {
        id: "amour-macarons",
        name: "Amour Macarons",
        category: "Wedding Collection",
        number: "04",
        image: "images/Amour Macarons.png",
        price: 3500,
        description: "Колекція макаронів зі смаками троянди, малини, фісташки та ванілі."
    },

    {
        id: "vanille-perle",
        name: "Vanille Perle",
        category: "Wedding Collection",
        number: "05",
        image: "images/Vanille Perle.png",
        price: 14000,
        description: "Білий шоколад, ваніль, груша та мигдальний бісквіт. Ніжний десерт із тонкою фруктовою нотою."
    },


    /* =========================
       BIRTHDAY
       ========================= */

    {
        id: "fig-royale",
        name: "Fig Royale",
        category: "Birthday Collection",
        number: "01",
        image: "images/Fig Royale.png",
        price: 4500,
        description: "Соковитий інжир, ароматний мед та хрусткий волоський горіх. Теплий і насичений смак."
    },

    {
        id: "golden-caramel",
        name: "Golden Caramel",
        category: "Birthday Collection",
        number: "02",
        image: "images/Golden Caramel.png",
        price: 4250,
        description: "Карамельний мус, фундук, ванільний бісквіт та солона карамель."
    },

    {
        id: "berry-etoile",
        name: "Berry Étoile",
        category: "Birthday Collection",
        number: "03",
        image: "images/Berry Étoile.png",
        price: 4000,
        description: "Малиновий мус, чорниця, ванільний крем та мигдальний бісквіт."
    },

    {
        id: "mango-soleil",
        name: "Mango Soleil",
        category: "Birthday Collection",
        number: "04",
        image: "images/Mango Soleil.png",
        price: 4750,
        description: "Стигле манго, маракуйя та кокос. Яскравий тропічний смак."
    },

    {
        id: "yuzu-pearl",
        name: "Yuzu Pearl",
        category: "Birthday Collection",
        number: "05",
        image: "images/Yuzu Pearl.png",
        price: 4700,
        description: "Юдзу, кокос та білий шоколад. Свіжий, цитрусовий та елегантний."
    },


    /* =========================
       CORPORATE
       ========================= */

    {
        id: "maison-elegance",
        name: "Maison Élégance",
        category: "Corporate Collection",
        number: "01",
        image: "images/Maison Élégance.png",
        price: 1800,
        description: "Міні-еклери, фісташкові макарони, шоколадні тарталетки та ванільні мадлени. Ідеально для презентацій і зустрічей."
    },

    {
        id: "maison-blanche",
        name: "Maison Blanche",
        category: "Corporate Collection",
        number: "02",
        image: "images/Maison Blanche.png",
        price: 2500,
        description: "Мадлени, міні-торти, еклери, печиво та макарони. Вишукана колекція для офісного дня."
    },

    {
        id: "lumiere-royale",
        name: "Lumière Royale",
        category: "Corporate Collection",
        number: "03",
        image: "images/Lumière Royale.png",
        price: 2200,
        description: "Десерти з білого шоколаду, фісташкові муси, карамельні тарталетки та макарони із золотим декором."
    },

    {
        id: "velvet-etoile",
        name: "Velvet Étoile",
        category: "Corporate Collection",
        number: "04",
        image: "images/Velvet Étoile.png",
        price: 2000,
        description: "Авторська колекція міні-десертів ÉLORIA з фісташкою, малиною, ваніллю, шоколадом та карамеллю."
    },

    {
        id: "pearl-maison",
        name: "Pearl Maison",
        category: "Corporate Collection",
        number: "05",
        image: "images/Pearl Maison.png",
        price: 2100,
        description: "Мадлени, персикові міні-торти, еклери, печиво та макарони. Легка й елегантна офісна колекція."
    },


    /* =========================
       FAMILY
       ========================= */

    {
        id: "maison-fraise",
        name: "Maison Fraise",
        category: "Family Collection",
        number: "01",
        image: "images/Maison Fraise.png",
        price: 3750,
        description: "Ванільний бісквіт, полуничний мус, крем маскарпоне та свіжа полуниця. Ніжна класика для родинного свята."
    },

    {
        id: "poire-vanille",
        name: "Poire Vanille",
        category: "Family Collection",
        number: "02",
        image: "images/Poire Vanille.png",
        price: 3500,
        description: "Соковита груша, ванільний мус, карамель та мигдальний бісквіт. Теплий та витончений смак."
    },

    {
        id: "framboise-douce",
        name: "Framboise Douce",
        category: "Family Collection",
        number: "03",
        image: "images/Framboise Douce.png",
        price: 3550,
        description: "Малиновий конфітюр, ванільний крем, мигдальний бісквіт та ягідний мус."
    },

    {
        id: "abricot-solaire",
        name: "Abricot Solaire",
        category: "Family Collection",
        number: "04",
        image: "images/Abricot Solaire.png",
        price: 3700,
        description: "Соковитий абрикос, маракуйя, мигдаль та ваніль. Сонячний і гармонійний смак."
    },

    {
        id: "petit-bonheur",
        name: "Petit Bonheur",
        category: "Family Collection",
        number: "05",
        image: "images/Petit Bonheur.png",
        price: 3500,
        description: "Невеликі святкові десерти ÉLORIA, створені для теплих родинних моментів."
    },

/* =========================================
   ÉLORIA — КОЛЕКЦІЯ ВИПІЧКИ
========================================= */
/* ========== CROISSANTS — КРУАСАНИ ========== */

{
    id: "chocolat-noir",
    name: "Chocolat Noir",
    category: "Круасани",
    number: "01",
    image: "images/Chocolat Noir.png",
    price: 315,
    description: "Французький круасан із хрусткими золотистими шарами та насиченою начинкою з темного шоколаду."
},

{
    id: "soleil-exotique",
    name: "Soleil Exotique",
    category: "Круасани",
    number: "02",
    image: "images/Soleil Exotique.png",
    price: 350,
    description: "Повітряний круасан із кремом манго-маракуя та делікатною золотистою глазур'ю."
},

{
    id: "fraise-mascarpone",
    name: "Fraise Mascarpone",
    category: "Круасани",
    number: "03",
    image: "images/Fraise Mascarpone.png",
    price: 345,
    description: "Круасан із ніжним кремом маскарпоне та ароматною полуничною начинкою."
},

{
    id: "vanille-royale",
    name: "Vanille Royale",
    category: "Круасани",
    number: "04",
    image: "images/Vanille Royale.png",
    price: 320,
    description: "Класичний французький круасан із ніжним ванільним кремом та вершковим ароматом."
},

{
    id: "ananas-coco-ivoire",
    name: "Ananas Coco Ivoire",
    category: "Круасани",
    number: "05",
    image: "images/Ananas Coco Ivoire.png",
    price: 340,
    description: "Круасан із тропічною начинкою з ананаса, кокосу та ніжного білого шоколаду."
},

{
    id: "yuzu-lumiere",
    name: "Yuzu Lumière",
    category: "Круасани",
    number: "06",
    image: "images/Yuzu Lumière.png",
    price: 330,
    description: "Вишуканий круасан із цитрусовим кремом юдзу та свіжою кислинкою."
},

{
    id: "litchi-perle",
    name: "Litchi Perlé",
    category: "Круасани",
    number: "07",
    image: "images/Litchi Perlé.png",
    price: 350,
    description: "Ніжний круасан із кремом лічі та делікатними квітково-фруктовими нотами."
},

/* ========== CRÉATIONS SIGNATURES — АВТОРСЬКІ БУЛОЧКИ ========== */

{
    id: "rose-framboise-signature",
    name: "Rose Framboise",
    category: "Авторські булочки",
    number: "01",
    image: "images/Rose Framboise.png",
    price: 270,
    description: "Авторська булочка у формі троянди з ніжним малиновим кремом та ягідною начинкою."
},

{
    id: "citron-ivoire",
    name: "Citron Ivoire",
    category: "Авторські булочки",
    number: "02",
    image: "images/Citron Ivoire.png",
    price: 245,
    description: "М'яка авторська булочка з лимонним кремом і ніжною глазур'ю з білого шоколаду."
},

{
    id: "eclat-des-tropiques",
    name: "Éclat des Tropiques",
    category: "Авторські булочки",
    number: "03",
    image: "images/Éclat des Tropiques.png",
    price: 250,
    description: "Вишукана булочка з манговим кремом, маракуєю та легкою кокосовою ноткою."
},

{
    id: "perle-de-velours",
    name: "Perle de Velours",
    category: "Авторські булочки",
    number: "04",
    image: "images/Perle de Velours.png",
    price: 235,
    description: "Ніжна булочка з вершковим кремом, білим шоколадом і делікатним ванільним ароматом."
},

{
    id: "cherry-velvet",
    name: "Cherry Velvet",
    category: "Авторські булочки",
    number: "05",
    image: "images/Cherry Velvet.png",
    price: 240,
    description: "М'яка булочка з вишневою начинкою та оксамитовим шоколадним кремом."
},

{
    id: "abricot-fleur-oranger",
    name: "Abricot Fleur d'Oranger",
    category: "Авторські булочки",
    number: "06",
    image: "images/Abricot & Fleur d'Oranger.png",
    price: 250,
    description: "Авторська булочка з абрикосовим конфі та тонким ароматом квітів апельсина."
},

{
    id: "tiramisu-velours-bun",
    name: "Tiramisu Velours",
    category: "Авторські булочки",
    number: "07",
    image: "images/Tiramisu Velours.png",
    price: 250,
    description: "Булочка з кавовим кремом, ніжною маскарпоне-начинкою та нотками какао."
},

/* ========== HÉRITAGE FRANÇAIS — ФРАНЦУЗЬКА КЛАСИКА ========== */

{
    id: "pain-aux-raisins",
    name: "Pain aux Raisins",
    category: "Французька класика",
    number: "01",
    image: "images/Pain aux Raisins.png",
    price: 180,
    description: "Традиційна французька випічка зі спіральною формою, заварним кремом і соковитими родзинками."
},

{
    id: "pain-au-chocolat",
    name: "Pain au Chocolat",
    category: "Французька класика",
    number: "02",
    image: "images/Pain au Chocolat.png",
    price: 190,
    description: "Класична французька випічка з листкового тіста з начинкою з темного шоколаду."
},

{
    id: "chausson-aux-pommes",
    name: "Chausson aux Pommes",
    category: "Французька класика",
    number: "03",
    image: "images/Chausson aux Pommes.png",
    price: 175,
    description: "Золотистий листковий пиріжок із ніжною яблучною начинкою та легкою коричною ноткою."
},

{
    id: "cannelle-velours",
    name: "Cannelle Velours",
    category: "Французька класика",
    number: "04",
    image: "images/Cannelle Velours.png",
    price: 180,
    description: "М'яка ароматна випічка з корицею, вершковою начинкою та делікатною солодкою глазур'ю."
},

{
    id: "poire-amande",
    name: "Poire Amande",
    category: "Французька класика",
    number: "05",
    image: "images/Poire Amande.png",
    price: 220,
    description: "Французька випічка з грушею та мигдальним кремом у хрусткому листковому тісті."
},

{
    id: "caramel-cristal",
    name: "Caramel Cristal",
    category: "Французька класика",
    number: "06",
    image: "images/Caramel Cristal.png",
    price: 185,
    description: "Ніжна випічка з карамельною начинкою та тонкою хрусткою цукровою скоринкою."
},

{
    id: "velours-cinnamone",
    name: "Velours Cinnamone",
    category: "Французька класика",
    number: "07",
    image: "images/Velours Cinnamone.png",
    price: 190,
    description: "Ароматна спіральна випічка з корицею, вершковим кремом і карамельними нотами."
},

/* ========== BRIOCHE COLLECTION — КОЛЕКЦІЯ БРІОШІВ ========== */

{
    id: "Perle-ivoire",
    name: "Perle ivoire",
    category: "Колекція бріошів",
    number: "01",
    image: "images/Perle Ivoire.png",
    price: 280,
    description: "Міні-булочки у формі мушлі з ніжним ванільним кремом."
},

{
    id: "perle-de-vanille-mini",
    name: "Perle de Vanille",
    category: "Колекція бріошів",
    number: "02",
    image: "images/Perle de Vanille.png",
    price: 240,
    description: "Міні-булочки із натуральною ваніллю та ніжною кремовою серединкою."
},

{
    id: "Fleur de Framboise",
    name: "Fleur de Framboise",
    category: "Колекція бріошів",
    number: "03",
    image: "images/Fleur de Framboise.png",
    price: 280,
    description: "Міні-булочки у формі квітки з малиновою начинкою та ніжним вершковим ароматом."
},

{
    id: "mini-cinnamon",
    name: "Mini Cinnamon",
    category: "Колекція бріошів",
    number: "04",
    image: "images/Mini Cinnamon.png",
    price: 275,
    description: "Міні-булочки з корицею, м'яким тістом і делікатною карамельною глазур'ю."
},

{
    id: "fleur-de-creme",
    name: "Fleur de Crème",
    category: "Колекція бріошів",
    number: "05",
    image: "images/Fleur de Crème.png",
    price: 320,
    description: "Міні-булочки у формі квітки з ніжним вершковим кремом у кожній пелюстці."
},

{
    id: "fraise-delice-mini",
    name: "Fraise Délice Mini",
    category: "Колекція бріошів",
    number: "06",
    image: "images/Fraise Délice.png",
    price: 310,
    description: "Міні-булочки із полуничним конфі та легким кремом маскарпоне."
},

{
    id: "abricot-soleil-mini",
    name: "Abricot Soleil Mini",
    category: "Колекція бріошів",
    number: "07",
    image: "images/Abricot Soleil.png",
    price: 340,
    description: "Міні-булочки з абрикосовою начинкою та тонким медово-фруктовим ароматом."
},

]


/* =========================================================
   HELPERS
   ========================================================= */

function money(value) {

    const number = Number(value);

    if (!Number.isFinite(number)) {
        return "0 ₴";
    }

    return number.toLocaleString("uk-UA") + " ₴";
}


function getProductById(id) {

    return PRODUCTS.find(
        product => product.id === id
    );
}


function getCart() {

    try {

        const data =
            JSON.parse(
                localStorage.getItem("eloriaCart")
            );

        if (!Array.isArray(data)) {
            return [];
        }

        /*
         * Відсіюємо старі пошкоджені записи,
         * які могли спричиняти NaN.
         */

        return data
            .map(item => {

                const product =
                    getProductById(item.id);

        const qty =
    Number(item.qty);

                if (
                    !product ||
                    !Number.isFinite(qty) ||
                    qty <= 0
                ) {
                    return null;
                }

                return {
                    id: product.id,
                    qty: Math.floor(qty)
                };

            })
            .filter(Boolean);

    } catch {

        return [];
    }
}


function saveCart(cart) {

    const cleanCart = cart
        .map(item => {

            const product =
                getProductById(item.id);

            const qty =
                Number(item.qty);

            if (
                !product ||
                !Number.isFinite(qty) ||
                qty <= 0
            ) {
                return null;
            }

            return {
                id: product.id,
                qty: Math.floor(qty)
            };

        })
        .filter(Boolean);

    localStorage.setItem(
        "eloriaCart",
        JSON.stringify(cleanCart)
    );

    updateCartCount();
}


function getCartCount() {

    return getCart().reduce(
        (sum, item) => {

            const qty =
                Number(item.qty);

            return sum +
                (
                    Number.isFinite(qty)
                        ? qty
                        : 0
                );

        },
        0
    );
}


function updateCartCount() {

    const counters =
        document.querySelectorAll(".cart-count");

    const count =
        getCartCount();

    counters.forEach(counter => {

        counter.textContent = count;

    });
}


/* =========================================================
   ADD TO CART
   ========================================================= */

function addToCart(productId, quantity = 1) {

    const product =
        getProductById(productId);

    if (!product) {

        console.error(
            "Product not found:",
            productId
        );

        return;
    }

    const cart =
        getCart();

    const existing =
        cart.find(
            item => item.id === productId
        );

    const safeQuantity =
        Math.max(
            1,
            Math.floor(
                Number(quantity) || 1
            )
        );

    if (existing) {

        existing.qty =
            Number(existing.qty) +
            safeQuantity;

    } else {

        cart.push({

            id: productId,

            qty: safeQuantity

        });
    }

    saveCart(cart);

    showAddedMessage();
}


/* =========================================================
   PRODUCT PAGE
   ========================================================= */

function renderProductPage() {

    const container =
        document.getElementById(
            "productContainer"
        );

    if (!container) {
        return;
    }

    const params =
        new URLSearchParams(
            window.location.search
        );

    const id =
        params.get("id");

    const product =
        getProductById(id);

    if (!product) {

        container.innerHTML = `

            <div class="not-found">

                <i class="fa-solid fa-cookie-bite"></i>

                <h1>
                    Товар не знайдено
                </h1>

                <p>
                    Можливо, посилання на товар неправильне.
                </p>

                <a
                    href="index.html"
                    class="add-cart-btn">

                    Повернутися до каталогу

                </a>

            </div>

        `;

        return;
    }

    document.title =
        `ÉLORIA — ${product.name}`;

    container.innerHTML = `

        <article class="product-box">

            <div class="product-image-area">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-image"
                    onerror="this.src='images/dessert.png.png'"
                >

            </div>


            <div class="product-info">

                <div class="product-category">
                    ${product.category}
                </div>

                <div class="product-number">
                    COLLECTION № ${product.number}
                </div>

                <h1 class="product-title">
                    ${product.name}
                </h1>

                ${
                    product.subtitle
                    ?
                    `
                    <div class="product-subtitle">
                        ${product.subtitle}
                    </div>
                    `
                    :
                    ""
                }

                <div class="product-divider"></div>

                <p class="product-description">
                    ${product.description}
                </p>

                <div class="product-price">
                    ${money(product.price)}
                </div>

                <div class="buy-area">

                    <div class="quantity">

                        <button
                            type="button"
                            onclick="changeProductQuantity(-1)">
                            −
                        </button>

                        <span id="productQuantity">
                            1
                        </span>

                        <button
                            type="button"
                            onclick="changeProductQuantity(1)">
                            +
                        </button>

                    </div>

                    <button
                        type="button"
                        class="add-cart-btn"
                        onclick="addCurrentProductToCart('${product.id}')">

                        <i class="fa-solid fa-bag-shopping"></i>

                        Додати в кошик

                    </button>

                </div>

                <div
                    class="added-message"
                    id="addedMessage">

                    <i class="fa-solid fa-check"></i>

                    Товар додано до кошика

                </div>

            </div>

        </article>

    `;
}


function changeProductQuantity(value) {

    const element =
        document.getElementById(
            "productQuantity"
        );

    if (!element) {
        return;
    }

    let quantity =
        Number(element.textContent);

    quantity += value;

    if (quantity < 1) {
        quantity = 1;
    }

    if (quantity > 99) {
        quantity = 99;
    }

    element.textContent =
        quantity;
}


function addCurrentProductToCart(productId) {

    const element =
        document.getElementById(
            "productQuantity"
        );

    const quantity =
        Number(
            element?.textContent || 1
        );

    addToCart(
        productId,
        quantity
    );
}


function showAddedMessage() {

    const message =
        document.getElementById(
            "addedMessage"
        );

    if (!message) {
        return;
    }

    message.classList.add("show");

    setTimeout(() => {

        message.classList.remove("show");

    }, 2500);
}


/* =========================================================
   MAKE EXISTING MENU CARDS CLICKABLE
   ========================================================= */

function connectExistingCards() {

    const cards =
        document.querySelectorAll(
            ".drink-card, .dessert-card, .cake-card, .product-card, .price-card"
        );

    if (!cards.length) {
        return;
    }

    cards.forEach(card => {

        let id =
            card.dataset.id;

        if (!id) {

            const title =
                card.querySelector("h3");

            if (!title) {
                return;
            }

            const titleText =
                title.textContent
                    .trim()
                    .toLowerCase();

            const product =
                PRODUCTS.find(product =>
                    product.name
                        .toLowerCase() ===
                    titleText
                );

            if (product) {
                id = product.id;
            }
        }

        if (!id) {
            return;
        }

        const product =
            getProductById(id);

        if (!product) {
            return;
        }

        card.style.cursor =
            "pointer";

        card.addEventListener(
            "click",
            function(event) {

                if (
                    event.target.closest("button") ||
                    event.target.closest("a")
                ) {
                    return;
                }

                window.location.href =
                    `product.html?id=${encodeURIComponent(id)}`;

            }
        );

    });
}


/* =========================================================
   GLOBAL INIT
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderProductPage();

        updateCartCount();

        connectExistingCards();

    }
);
