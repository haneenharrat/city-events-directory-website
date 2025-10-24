
// All activities in one array
var events = [
    {
        id: 1,
        title: { en: "AI Conference", ar: "مؤتمر الذكاء الاصطناعي" },
        date: "2025-11-11",
        place: { en: "Miramar Hotel", ar: "فندق ميرامار" },
        category: { en: "Cultural", ar: " ثقافية" },
        desc: {
            en: [
                "The AI Conference is a scientific and technological event bringing together top researchers, programmers, entrepreneurs, students, and experts from various fields to explore the latest developments in Artificial Intelligence and its accelerating applications.",
                "The conference aims to exchange knowledge and experiences on how to utilize AI to improve quality of life, support innovation, and develop industrial, healthcare, educational, and service sectors.",
                "During the conference, discussion sessions, scientific lectures, and practical workshops are held by speakers from global institutions, universities, and companies. The latest AI-based projects and innovations are also showcased, such as big data analysis, deep learning, robotics, computer vision, and generative AI.",
                "The conference provides an excellent opportunity to build professional networks, explore new ideas, and learn about future trends in technology and innovation."
            ],
            ar: [
                "يُعد مؤتمر الذكاء الاصطناعي حدثًا علميًا وتكنولوجيًا يجمع نخبة من الباحثين، والمبرمجين، وروّاد الأعمال، والطلاب، والخبراء من مختلف المجالات لبحث أحدث التطورات في عالم الذكاء الاصطناعي وتطبيقاته المتسارعة.",
                "يهدف المؤتمر إلى تبادل الخبرات والمعارف حول كيفية توظيف الذكاء الاصطناعي في تحسين جودة الحياة، ودعم الابتكار، وتطوير القطاعات الصناعية، الصحية، التعليمية، والخدمية.",
                "خلال المؤتمر تُقام جلسات نقاش ومحاضرات علمية وورش عمل تطبيقية يقدمها متحدثون من مؤسسات وجامعات وشركات عالمية. كما يُعرض فيه أحدث المشاريع والابتكارات المعتمدة على تقنيات الذكاء الاصطناعي، مثل تحليل البيانات الضخمة، والتعلم العميق، والروبوتات، والرؤية الحاسوبية، والذكاء الاصطناعي التوليدي.",
                "يُعد المؤتمر فرصة مميزة لبناء شبكات تواصل مهنية، واستكشاف أفكار جديدة، والتعرف على اتجاهات المستقبل في مجال التكنولوجيا والابتكار."
            ]
        },
        images: ["ai.jpg", "ai2.jpg", "ai3.jpg"],
        images_map: ["loc-ai.jpg"]

    },
    {
        id: 2,
        title: { en: "Tel Frik", ar: "رحلة تل فريك" },
        date: "2025-11-11",
        place: { en: "Kassab", ar: "كسب" },
        category: { en: "Entertainment", ar: "ترفيهية" },
        desc: {
            en: [
                "Kasb Cable Car is one of the most beautiful tourist destinations on the Syrian coast, offering visitors a unique experience that combines adventure with breathtaking views of the green mountainous landscape.",
                "The cable car departs from Kasb area towards the summit of Mount Nabi Younes, in a journey lasting several minutes through dense forests and enchanting natural scenery, where visitors can enjoy a panoramic view overlooking both the sea and the mountains.",
                "This experience is suitable for families, nature lovers, and photography enthusiasts, providing an unforgettable opportunity to discover the beauty of Kasb from above and enjoy the fresh air and tranquility that characterize the area.",
                "The site is surrounded by several rustic cafés and restaurants offering local cuisine, making a visit to Kasb Cable Car a complete trip for relaxation and leisure."
            ],
            ar: [
                "يُعد تلفريك كسب من أجمل الوجهات السياحية في الساحل السوري، ويمنح الزائر تجربة مميزة تجمع بين المغامرة والإطلالة الخلابة على الطبيعة الجبلية الخضراء.",
                "ينطلق التلفريك من منطقة كسب باتجاه قمة جبل النبي يونس، في رحلة تمتد لعدّة دقائق وسط الغابات الكثيفة والمناظر الطبيعية الساحرة، حيث يمكن للزائر الاستمتاع بمشهد بانورامي يطل على البحر والجبال في آنٍ واحد.",
                "تُعتبر هذه التجربة مناسبة للعائلات والمحبين للطبيعة والتصوير، فهي تتيح فرصة لا تُنسى لاكتشاف جمال كسب من الأعلى والاستمتاع بالهواء العليل والهدوء الذي يميز المنطقة.",
                "يُحيط بالموقع عدد من المقاهي والمطاعم الريفية التي تقدم مأكولات محلية، مما يجعل من زيارة تلفريك كسب رحلة متكاملة للراحة والاستجمام."
            ]
        },
        images: ["tellfrik.jpg", "tell2.jpg", "telfrik4.jpg", "tell3.jpg", "telfrik.jpg"],
        images_map: ["loc-telfrik.jpg"]
    },
    {
        id: 3,
        title: { en: "Shopping Festivals", ar: "مهرجان التسوق" },
        date: "2025-11-13",
        place: { en: "Sports City", ar: "المدينة الرياضية" },
        category: { en: "Commercial", ar: "تجارية" },
        images: ["shopping4.jpg", "shopping.jpg", "shopping2.jpg"],
        images_map: ["loc-shopping-horse-treth.jpg"],
        desc: {
            en: [
                "Shopping festivals at the Sports City are among the most prominent economic and social events, combining entertainment and shopping in a lively atmosphere.",
                "A large number of local exhibitors and commercial companies participate in the festival, offering a variety of products including clothing, shoes, furniture, electronics, and food, with competitive prices and special offers.",
                "The event is not limited to shopping only; it also includes entertainment activities, artistic performances, and competitions for children, making it an ideal destination for families during the festival period.",
                "The festival aims to support local producers, boost commercial activity in the city, and provide an enjoyable meeting space that combines shopping and entertainment in one place within the Sports City."
            ],
            ar: [
                "تُعد مهرجانات التسوق في المدينة الرياضية من أبرز الفعاليات الاقتصادية والاجتماعية التي تجمع بين الترفيه والتسوق في أجواء مفعمة بالحيوية.",
                "يشارك في المهرجان عدد كبير من العارضين المحليين والشركات التجارية الذين يقدمون منتجات متنوعة تشمل الألبسة، والأحذية، والمفروشات، والإلكترونيات، والمأكولات، بأسعار تنافسية وعروض خاصة.",
                "ولا يقتصر الحدث على التسوق فقط، بل يتضمن أيضًا أنشطة ترفيهية وعروضًا فنية ومسابقات للأطفال، مما يجعله وجهة مثالية للعائلات خلال فترة المهرجان.",
                "يهدف المهرجان إلى دعم المنتجين المحليين وتنشيط الحركة التجارية في المدينة، بالإضافة إلى توفير مساحة لقاء ممتعة تجمع بين التسوق والترفيه في مكان واحد داخل المدينة الرياضية."
            ]
        }

    },
    {
        id: 4,
        title: { en: "Theatrical Shows", ar: "عروض مسرحية" },
        date: "2025-11-14",
        place: { en: "Cultural Center", ar: "المركز الثقافي" },
        category: { en: "Entertainment", ar: "ترفيهية" },
        images: ["theatr.jpg", "theatr-art-poatry.jpg", "theatr-art-poatry2.jpg"],
        images_map: ["loc-theatr-art.jpg"],
        desc: {
            en: [
                "A series of remarkable theatrical performances are held at the Cultural Center, combining art and creativity to provide the audience with a sophisticated artistic experience that expresses societal issues in an engaging and impactful way.",
                "These performances vary between comedic, social, historical, and experimental theater, featuring top local artists and young theater groups, in interactive settings that reflect the spirit of culture and artistic life in the city.",
                "The events aim to promote artistic awareness and encourage theatrical talent, as well as make the theater a space for expression and dialogue, where art meets the audience in moments that combine enjoyment and thought."
            ],
            ar: [
                "تُقام في المركز الثقافي مجموعة من العروض المسرحية المميزة التي تجمع بين الفن والإبداع، وتقدّم للجمهور تجربة فنية راقية تعبّر عن قضايا المجتمع بأسلوب مشوّق ومؤثر.",
                "تتنوع هذه العروض بين المسرح الكوميدي، والاجتماعي، والتاريخي، والمسرح التجريبي، بمشاركة نخبة من الفنانين المحليين والفرق المسرحية الشابة، في أجواء تفاعلية تعكس روح الثقافة والحياة الفنية في المدينة.",
                "تهدف هذه الفعاليات إلى نشر الوعي الفني وتشجيع المواهب المسرحية، إضافةً إلى جعل المسرح مساحة للتعبير والحوار، حيث يلتقي الفن بالجمهور في لحظات تجمع بين المتعة والفكر."
            ]
        }

    },
    {
        id: 5,
        title: { en: "Camping", ar: "تخييم" },
        date: "2025-11-11",
        place: { en: "Burj Islam", ar: "برج إسلام" },
        category: { en: "Entertainment", ar: "ترفيهية" },
        images: ["cam.jpg", "camping.jpg", "camping4.jpg", "camping3.jpg"],
        images_map: ["loc-camping.jpg"],
        desc: {
            en: [
                "A series of remarkable theatrical performances are held at the Cultural Center, combining art and creativity to provide the audience with a sophisticated artistic experience that expresses societal issues in an engaging and impactful way.",
                "These performances vary between comedic, social, historical, and experimental theater, featuring top local artists and young theater groups, in interactive settings that reflect the spirit of culture and artistic life in the city.",
                "The events aim to promote artistic awareness and encourage theatrical talent, as well as make the theater a space for expression and dialogue, where art meets the audience in moments that combine enjoyment and thought."
            ],
            ar: [
                "تُقام في المركز الثقافي مجموعة من العروض المسرحية المميزة التي تجمع بين الفن والإبداع، وتقدّم للجمهور تجربة فنية راقية تعبّر عن قضايا المجتمع بأسلوب مشوّق ومؤثر.",
                "تتنوع هذه العروض بين المسرح الكوميدي، والاجتماعي، والتاريخي، والمسرح التجريبي، بمشاركة نخبة من الفنانين المحليين والفرق المسرحية الشابة، في أجواء تفاعلية تعكس روح الثقافة والحياة الفنية في المدينة.",
                "تهدف هذه الفعاليات إلى نشر الوعي الفني وتشجيع المواهب المسرحية، إضافةً إلى جعل المسرح مساحة للتعبير والحوار، حيث يلتقي الفن بالجمهور في لحظات تجمع بين المتعة والفكر."
            ]
        }

    },
    {
        id: 6, title: { en: "Horse Riding Race", ar: "سباق ركوب الخيل" },
        date: "2025-11-17",
        place: { en: "Sports City", ar: "المدينة الرياضية" }, category: { en: "Sports", ar: "رياضية" },
        images: ["horse.jpg", "hours.jpg", "horse2.jpg"], images_map: ["loc-shopping-horse-treth.jpg"],
        desc: {
            en: [
                "The Horse Racing event at the Sports City is one of the most prominent sporting events that combines tradition and excitement, where riders showcase their skills in horse riding and speed in an atmosphere full of enthusiasm and thrill.",
                "The race features elite professional and amateur riders from various clubs, delivering high-level performances that reflect the beauty of the purebred Arabian horse and the spirit of fair competition.",
                "The event includes artistic and performance segments that add a festive atmosphere to the venue, making it an attractive destination for families, sports enthusiasts, and heritage lovers alike.",
                "The race aims to promote equestrian culture and preserve its rich heritage, as well as to enhance the spirit of challenge and cooperation among participants."
            ],
            ar: [
                "يُعد سباق ركوب الخيل في المدينة الرياضية من أبرز الفعاليات الرياضية التي تجمع بين الأصالة والإثارة، حيث يستعرض الفرسان مهاراتهم في قيادة الخيول وسرعتها في أجواء مليئة بالحماس والتشويق.",
                "يشارك في السباق نخبة من الفرسان المحترفين والهواة من مختلف الأندية، لتقديم عروض راقية تعكس جمال الخيل العربي الأصيل وروح المنافسة الشريفة.",
                "يتخلل الحدث فقرات استعراضية وفنية تضفي جوًا احتفاليًا على المكان، مما يجعله وجهة مميزة للعائلات ومحبي الرياضة والتراث معًا.",
                "يهدف السباق إلى نشر ثقافة الفروسية والمحافظة على تراثها العريق، إضافةً إلى تعزيز روح التحدي والتعاون بين المشاركين."
            ]


        }

    },
    {
        id: 7,
        title: { en: "Fine Arts Exhibition", ar: "معرض الفنون الجميلة" },
        date: "2025-11-18",
        place: { en: "Cultural Center", ar: "المركز الثقافي" },
        category: { en: "Cultural", ar: "ثقافية" },
        images: ["art3.jpg", "art.jpg", "art2.jpg", "art4.jpg"], images_map: ["loc-theatr-art.jpg"],
        desc: {
            en: [
                "The Fine Arts Exhibition features a distinguished group of visual artists, showcasing paintings and artworks that express diverse intellectual and aesthetic visions inspired by life, nature, and humanity.",
                "The exhibition aims to support young artistic talents and highlight the creations of local artists, as well as enhance visitors' artistic taste and encourage interaction with visual arts.",
                "The event provides a space where colors meet emotions, offering an elegant artistic experience that showcases the beauty of Syrian creativity and its authenticity within a culturally rich environment at the cultural center."
            ],
            ar: [
                "يُقام معرض الفنون الجميلة بمشاركة نخبة من الفنانين التشكيليين، حيث تُعرض لوحات وأعمال فنية تعبّر عن رؤى فكرية وجمالية متنوعة مستوحاة من الحياة والطبيعة والإنسان.",
                "يهدف المعرض إلى دعم المواهب الفنية الشابة والتعريف بإبداعات الفنانين المحليين، إضافةً إلى تعزيز الذوق الفني لدى الزوار وتشجيع التفاعل مع الفنون البصرية.",
                "ويُعد الحدث مساحة تلتقي فيها الألوان بالمشاعر، في تجربة فنية راقية تُبرز جمال الإبداع السوري وأصالته داخل أجواء ثقافية مميزة في المركز الثقافي."
            ]
        }

    },
    {
        id: 8,
        title: { en: "Poetry Evening", ar: "أمسية شعرية" },
        date: "2025-11-19",
        place: { en: "Cultural Center", ar: "المركز الثقافي" },
        category: { en: "Cultural", ar: "ثقافية" },
        images: ["poetry2.jpg", "poetry.jpg"],
        images_map: ["loc-theatr-art.jpg"],
        desc: {
            en: [
                "The Cultural Center hosts a distinguished poetry evening bringing together a group of local poets in a gathering filled with beautiful words and deep emotions.",
                "The poems range from classical (traditional) to free verse, covering themes of homeland, love, and humanity, providing the audience with a refined literary experience blending art and feelings.",
                "This evening is an opportunity for literature enthusiasts to listen to new and creative poetic voices, and engage with texts that express the spirit and culture of the community.",
                "The event aims to revive the poetic scene and enhance cultural interaction between creators and the audience in a calm atmosphere befitting the beauty of words."
            ],
            ar: [
                "يستضيف المركز الثقافي أمسية شعرية مميزة تجمع نخبة من الشعراء المحليين في لقاء يفيض بالكلمة الجميلة والإحساس العميق.",
                "تتنوع القصائد بين الشعر العمودي والحر، وتحمل مواضيع عن الوطن، والحب، والإنسان، لتمنح الحضور تجربة أدبية راقية تمزج بين الفن والمشاعر.",
                "تُعد هذه الأمسية فرصة لعشّاق الأدب للاستماع إلى أصوات شعرية جديدة ومبدعة، والتفاعل مع النصوص التي تعبّر عن روح المجتمع وثقافته.",
                "تسعى الفعالية إلى إحياء المشهد الشعري وتعزيز التواصل الثقافي بين المبدعين والجمهور في أجواء هادئة تليق بجمال الكلمة."
            ]
        }

    },
    {
        id: 9,
        title: { en: "Boat tour in the Seven Lakes", ar: "جولة بالقارب في البحيرات السبعة" },
        date: "2025-11-20",
        place: { en: "Mashqita", ar: "مشقيتا" },
        category: { en: "Entertainment", ar: "ترفيهية" },
        images: ["boat3.jpg", "boat.jpg", "boat4.jpg"], images_map: ["loc-bot.jpg"],
        desc: {
            en: [
                "The boat tour in the Seven Lakes in Mashqita is one of the most beautiful tourist experiences in the Latakia countryside, where the charm of nature and the clarity of the water blend in a breathtaking scene.",
                "During the trip, visitors enjoy green landscapes surrounding the lakes from all sides, with the reflection of mountains and trees on the water surface forming a peaceful natural painting that brings comfort and serenity.",
                "This tour is suitable for families, friends, and photography enthusiasts, offering a unique opportunity to discover the beauty of Mashqita from the heart of the water and enjoy pure rural atmospheres away from the city's hustle.",
                "The area has nearby cafes and resting spots, making the trip a complete experience combining relaxation and light adventure."
            ],
            ar: [
                "تُعد الجولة بالقارب في البحيرات السبع بمشقيتا من أجمل التجارب السياحية في ريف اللاذقية، حيث يمتزج سحر الطبيعة وصفاء المياه في مشهد يخطف الأنفاس.",
                "يستمتع الزائر خلال الرحلة بمناظر خضراء تحيط بالبحيرات من كل جانب، مع انعكاس الجبال والأشجار على سطح الماء في لوحة طبيعية هادئة تبعث على الراحة والسكينة.",
                "تُعد هذه الجولة مناسبة للعائلات والأصدقاء ومحبي التصوير، فهي تمنح فرصة فريدة لاكتشاف جمال مشقيتا من قلب المياه، والاستمتاع بأجواء ريفية نقية بعيدًا عن صخب المدينة.",
                "تتوفر في المنطقة مقاهٍ وأماكن استراحة قريبة، مما يجعل الرحلة تجربة متكاملة تجمع بين الاسترخاء والمغامرة الخفيفة."
            ]
        }

    },
    {
        id: 10,
        title: { en: "Interactive Heritage Festival", ar: "مهرجان التراث التفاعلي" },
        date: "2025-11-21",
        place: { en: "Sports City", ar: "المدينة الرياضية" },
        category: { en: "Traditional", ar: "تراثية" },
        images: ["treth.jpg", "trath.jpg", "fkhar.JPG"], images_map: ["loc-shopping-horse-treth.jpg"],
        desc: {
            en: [
                "The Interactive Heritage Festival is held at the Sports City to celebrate the beauty of history and authenticity, bringing visitors together to explore Syria's rich heritage through interactive activities and live performances that revive ancient customs and traditions.",
                "The festival features pavilions for handicrafts, traditional clothing, and heritage cuisine, along with artistic and folkloric musical performances reflecting the diversity and richness of the local heritage.",
                "Visitors can experience hands-on activities such as pottery making, engraving, spinning, and other traditional crafts, in a fun atmosphere that combines learning and entertainment.",
                "The event aims to strengthen cultural identity and preserve popular heritage, while providing new generations with the opportunity to learn about their heritage in a modern and interactive way."
            ],
            ar: [
                "يُقام مهرجان التراث التفاعلي في المدينة الرياضية احتفاءً بجمال التاريخ والأصالة، حيث يجتمع الزوار لاكتشاف التراث السوري العريق من خلال أنشطة تفاعلية وعروض حيّة تعيد إحياء العادات والتقاليد القديمة.",
                "يتضمن المهرجان أجنحة للحرف اليدوية، والأزياء الشعبية، والمأكولات التراثية، إضافةً إلى عروض فنية وموسيقية فولكلورية تعبّر عن تنوّع التراث المحلي وغناه.",
                "ويتيح المهرجان للزوار تجربة مباشرة لصنع الفخار، والنقش، والغزل وغيرها من الحرف التقليدية، في أجواء ممتعة تجمع بين التعلم والترفيه.",
                "يهدف الحدث إلى تعزيز الهوية الثقافية والحفاظ على الموروث الشعبي، مع إتاحة الفرصة للأجيال الجديدة للتعرّف على تراثهم بطريقة حديثة وتفاعلية."
            ]
        }

    },
    {
        id: 11,
        title: { en: "Friendly match between Hutteen and Tishreen", ar: "مباراة ودية بين نادي حطين وتشرين" },
        date: "2025-11-22",
        place: { en: "Sports City", ar: "المدينة الرياضية" },
        category: { en: "Sports", ar: "رياضية" },
        images: ["match4.jpg", "match5.jpg", "match3.jpg", "match.jpg", "match2.jpg"], images_map: ["loc-shopping-horse-treth.jpg"],
        desc: {
            en: [
                "Fans are eagerly awaiting an upcoming friendly match between Tishreen Club and Hutteen Club, a game expected to bring a lot of excitement and intensity at Latakia Stadium.",
                "This encounter comes as part of the teams' preparations for the upcoming football season, where each club aims to test the readiness of its players and experiment with formations before official competitions.",
                "The event provides a special opportunity for football enthusiasts to witness the Latakia 'derby' in a friendly setting that combines fun and sportsmanship, amidst an anticipated passionate crowd reflecting the city's love for football."
            ],
            ar: [
                "تترقّب الجماهير مباراة ودّية قادمة تجمع بين نادي تشرين ونادي حطين، في لقاء يُنتظر أن يحمل الكثير من الحماس والإثارة على أرض ملعب اللاذقية.",
                "تأتي هذه المواجهة ضمن استعدادات الفريقين لخوض الموسم الكروي المقبل، حيث يسعى كل نادٍ لاختبار جاهزية لاعبيه وتجربة تشكيلاته قبل المنافسات الرسمية.",
                "الفعالية تعدّ فرصة مميزة لعشاق كرة القدم لمتابعة “ديربي” اللاذقية بطابع ودي يجمع بين المتعة والروح الرياضية، وسط أجواء جماهيرية متوقّعة تعكس شغف المدينة بكرة القدم."
            ]
        }

    }
];

// Global variable to store the currently selected event
var selectedEvent = null;

//...Select a related event by its ID...//
// This function searches through the relatedEvents array
// and sets the selectedEvent variable if a match is found.
function SSelateddEvent(id) {
    for (var i = 0; i < relatedEvents.length; i++) {
        if (relatedEvents[i].id === id) {
            selectedEvent = relatedEvents[i];
            break;
        }
    }
}


//...Select an event from the main events list...//
// This function searches the main events array and sets
// the selectedEvent variable based on the provided ID.
function selectEvent(id) {
    for (var i = 0; i < events.length; i++) {
        if (events[i].id === id) {
            selectedEvent = events[i];
            break;
        }
    }
}

//...Extract event ID from the URL...//
// This function reads the current page URL and parses the 'id' parameter.
// Returns the ID as a number, or null if not found.
function getEventIdFromURL() {
    var link = document.location.href;
    var parts = link.split("id=");
    if (parts.length > 1) {
        return Number(parts[1]);
    } else {
        return null;
    }
}


//...Get related events based on the current event...//
// This function finds events that share the same category as the current event.
// It excludes the current event itself from the related events list.
function getRelatedEvents(currentEventId) {
    var currentEvent = null;
    // Find the current event from the events array
    for (var i = 0; i < events.length; i++) {
        if (events[i].id === currentEventId) {
            currentEvent = events[i];
            break;
        }
    }
    // Return empty array if current event is not found
    if (!currentEvent) return [];


    var related = [];
    // Loop through all events and compare categories
    for (var j = 0; j < events.length; j++) {
        if (
            events[j].id !== currentEventId &&  // Exclude the current event
            events[j].category.en === currentEvent.category.en // Match category
        ) {
            related.push(events[j]);  // Add to related events
        }
    }

    return related; // Return array of related events
}



//...Dark Mode Toggle...//

// Select the dark mode switch checkbox
let toggleBtn = document.querySelector("#switch");
// Select the body element to apply the "dark" class
let bodyEl = document.querySelector("body");
// Variable to track the current dark mode state
let darkMode = false;

// Listen for changes on the toggle checkbox
toggleBtn.addEventListener("change", (event) => {
    // Update darkMode state based on checkbox status
    darkMode = event.target.checked;

    if (darkMode) {
        // If checked, add "dark" class to the body
        bodyEl.classList.add("dark");
    } else {
        // If unchecked, remove "dark" class from the body
        bodyEl.classList.remove("dark");
    }
});



//...Language Switch...//

// Select the Arabic and English buttons
var btnAr = document.getElementById("btnAr");
var btnEn = document.getElementById("btnEn");

// Function to change the page language
function changeLanguage(lang) {
    document.documentElement.setAttribute("lang", lang);
    document.body.dir = lang === "ar" ? "rtl" : "ltr";

    // Update text for elements with "lang" class
    var elements = document.getElementsByClassName("lang");
    for (var i = 0; i < elements.length; i++) {
        var el = elements[i];
        var text = el.getAttribute("data-" + lang);

        if (!text) continue;


        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {

            if (el.type === "submit" || el.type === "button") {
                el.value = text;
            } else {

                el.placeholder = text;
            }
        } else {

            el.textContent = text;
        }

        // Align text
        el.style.direction = lang === "ar" ? "rtl" : "ltr";
        el.style.textAlign = lang === "ar" ? "right" : "left";
    }

    // Update success message if exists
    var successMessage = document.getElementById("success-message");
    if (successMessage) {
        successMessage.textContent = lang === "ar"
            ? " تم إرسال الرسالة بنجاح!"
            : " Message sent successfully!";
    }
}

// Bind buttons
if (btnAr) btnAr.onclick = function () { changeLanguage("ar"); };
if (btnEn) btnEn.onclick = function () { changeLanguage("en"); };


//..Quick Category Filter..//

// Get all category buttons
var categoryButtons = document.getElementsByClassName("card-text");
// Get all cards
var cards = document.getElementsByClassName("card");
// Get "No results" message element if it exists
var noResults = document.getElementById("noResults");

// Add click event to each category button
for (var i = 0; i < categoryButtons.length; i++) {
    categoryButtons[i].onclick = function () {
        var selectedCategory = this.getAttribute("data-category"); // Selected category
        var foundAny = false;

        // Loop through all cards and show/hide based on category
        for (var j = 0; j < cards.length; j++) {
            var card = cards[j];
            var cardCategory = card.getAttribute("data-category");
            var match = (cardCategory === selectedCategory);


            card.style.visibility = match ? "visible" : "hidden";
            card.style.position = match ? "relative" : "absolute";
            card.style.height = match ? "auto" : "0";
            card.style.margin = match ? "" : "0";

            if (match) foundAny = true;
        }


        // Show "No results" message if no cards match
        if (noResults) {
            noResults.style.visibility = foundAny ? "hidden" : "visible";
        }
    };
}


//...Date and Category Filter...//
// Get filter elements
var filterDate = document.getElementById("filterDate");
var filterCategory = document.getElementById("filterCategory");
var filterBtn = document.getElementById("filterBtn");

// Get all cards and the "No results" message
var cards = document.getElementsByClassName("card");
var noResults = document.getElementById("noResults");

// Click event for the filter button
filterBtn.onclick = function () {
    var selectedDate = filterDate.value;  // Selected date    
    var selectedCategory = filterCategory.value; // Selected category
    var found = false;     // Track if any card matches

    // Loop through all cards
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];

        // Get the card's date (first card-text element)
        var eventDate = card.getElementsByClassName("card-text")[0].textContent.trim();

        var categoryElem = card.getElementsByClassName("card-text")[2];
        var categoryValue = categoryElem.getAttribute("data-category");

        // Determine if the card should be shown
        var show = (
            (selectedDate === "" || eventDate === selectedDate) &&
            (selectedCategory === "all" || categoryValue === selectedCategory)
        );

        // Show or hide the card
        card.style.visibility = show ? "visible" : "hidden";
        card.style.position = show ? "relative" : "absolute";
        card.style.height = show ? "auto" : "0";
        card.style.margin = show ? "" : "0";

        if (show) found = true;
    }

    // Show "No results" message if nothing matches
    noResults.style.visibility = found ? "hidden" : "visible";
};



function checkForm() {
    //...Get form elements...//
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    var nameFeedback = document.getElementById("name-feedback");
    var emailFeedback = document.getElementById("email-feedback");
    var messageFeedback = document.getElementById("message-feedback");
    var successMessage = document.getElementById("success-message");

    //..Reset previous states..//
    [name, email, message].forEach(el => el.classList.remove("is-invalid", "is-valid"));
    [nameFeedback, emailFeedback, messageFeedback].forEach(el => el.textContent = "");
    successMessage.classList.add("d-none");

    let valid = true;

    //..Name validation..//
    if (name.value.trim() === "") {
        nameFeedback.textContent = "يرجى إدخال الاسم";
        name.classList.add("is-invalid");
        valid = false;
    } else {
        name.classList.add("is-valid");
    }

    //..Email validation..//
    if (email.value.trim() === "") {
        emailFeedback.textContent = "يرجى إدخال البريد الإلكتروني";
        email.classList.add("is-invalid");
        valid = false;
    } else {
        var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!pattern.test(email.value)) {
            emailFeedback.textContent = "صيغة البريد الإلكتروني غير صحيحة. مثال: name@example.com";
            email.classList.add("is-invalid");
            valid = false;
        } else {
            email.classList.add("is-valid");
        }
    }

    //..Message validation..//
    if (message.value.trim() === "") {
        messageFeedback.textContent = "يرجى كتابة محتوى الرسالة";
        message.classList.add("is-invalid");
        valid = false;
    } else {
        message.classList.add("is-valid");
    }

    //..Show success message if valid..//
    if (valid) {
        successMessage.classList.remove("d-none");
        document.getElementById("contactForm").reset();
        [name, email, message].forEach(el => el.classList.remove("is-valid"));
    }

    return false; //// Prevent actual form submission for demo purposes
}


//...Quick Category Filter...//

// Get all category buttons
var categoryButtons = document.getElementsByClassName("push-button");
// Get all event cards
var cards = document.getElementsByClassName("card");

// Add click event to each category button
for (var i = 0; i < categoryButtons.length; i++) {
    categoryButtons[i].onclick = function () {
        var selectedCategory = this.textContent.trim(); // Get category name from button
        // Loop through all cards
        for (var j = 0; j < cards.length; j++) {
            var card = cards[j];

            // Assume category is in the 3rd <p> element of the card (adjust based on HTML)
            var cardCategory = card.getElementsByTagName("p")[2].textContent.trim();

            // Check if card matches the selected category
            var found = (cardCategory === selectedCategory);

            // Show or hide the card
            card.style.visibility = found ? "visible" : "hidden";
        }

    };
}


