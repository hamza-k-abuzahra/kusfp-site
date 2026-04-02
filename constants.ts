import type { NavLink, Slide, BlogPost, Announcement, BoycottItem, Event, TeamMember, TranslatedBlog } from './types';

import dec1 from './resources/imgs/dec-1.jpg';
import dec2 from './resources/imgs/dec-2.jpg';
import dec3 from './resources/imgs/dec-3.jpg';
import dec4 from './resources/imgs/dec-4.jpg';
import flot1 from './resources/imgs/flot-1.jpg';
import flot2 from './resources/imgs/flot-2.jpg';
import flot3 from './resources/imgs/flot-3.jpg';
import flot4 from './resources/imgs/flot-4.jpg';
import farha1 from './resources/imgs/farha-1.jpeg';
import farha2 from './resources/imgs/farha-2.jpeg';
import farha3 from './resources/imgs/farha-3.jpeg';
import farha4 from './resources/imgs/farha-4.jpeg';
import iftar1 from './resources/imgs/ift-1.jpg';
import iftar2 from './resources/imgs/ift-2.jpg';
import iftar3 from './resources/imgs/ift-3.jpg';
import meet1 from './resources/imgs/meet-1.jpg';
import trib1 from './resources/imgs/tribunal-1.jpg';
import iran1 from './resources/imgs/iran1.jpg';
import iran2 from './resources/imgs/iran2.jpg';
import iran3 from './resources/imgs/iran3.jpeg';
import iran7 from './resources/imgs/iran7.jpeg';
import iran8 from './resources/imgs/iran8.jpg';
import irancover from './resources/imgs/iran-cover.jpg';


export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Events', path: '/events' },
  { name: 'Educational Posts', path: '/educational-posts' },
//   { name: 'Blogs', path: '/blogs' },
//   { name: 'Boycott List', path: '/boycott' },
//   { name: 'Announcements', path: '/announcements' },
// { name: 'Your Role', path: '/your-role' },
  // { name: 'About Us', path: '/about' },
  { name: 'Connect', path: '/contact'  }
];

export const SLIDER_CONTENT: Slide[] = [
  // {
  //   id: 1,
  //   imageUrl: iftar2,
  //   title: 'KUSFP+ Iftar at Koç',
  //   description: 'Moments from our iftar together this Ramadan!'
  // },
  {
    id: 2,
    imageUrl: meet1,
    title: 'Meet KUSFP+ at Koç',
    description: 'Throwback to our time together at the start of the academic year!'
  },
  {
    id: 3,
    imageUrl: trib1,
    title: 'The Gaza Tribunal',
    description: 'Our participation in the Gaza Tribunal at Istanbul University.'
  },
  // {
  //   id: 4,
  //   imageUrl: 'https://picsum.photos/1200/600?random=4',
  //   title: 'New Blog Post: The Power of Local Action',
  //   description: 'Read our latest analysis on how small, local efforts can create a global impact.'
  // }
];

export const ROLES_DATA = [
  {
    title: "As a Person",
    description:
      "Change begins at the individual level. Your awareness, empathy, and daily choices shape the world around you.",
    actions: [
      "Stay informed through reliable and diverse sources.",
      "Engage in respectful conversations and listen to different perspectives.",
      "Support causes you believe in through small but consistent actions.",
      "Practice critical thinking and question misinformation.",
    ],
  },
  {
    title: "As a Member of This Community",
    description:
      "Being part of a community means amplifying impact through collaboration and shared purpose.",
    actions: [
      "Participate in discussions and share valuable insights.",
      "Help spread awareness by sharing content responsibly.",
      "Support fellow members and encourage constructive dialogue.",
      "Contribute ideas and initiatives to grow the movement.",
    ],
  },
  {
    title: "As a Student",
    description:
      "Students are in a unique position to learn, question, and influence future systems and ideas.",
    actions: [
      "Use academic resources to deepen your understanding of key issues.",
      "Organize or join student-led initiatives and discussions.",
      "Engage with professors and peers on important topics.",
      "Leverage your environment to create awareness and dialogue.",
    ],
  },
  {
    title: "As a Student in Türkiye",
    description:
      "Students in Türkiye navigate a unique social and political environment that requires awareness, responsibility, and thoughtful engagement.",
    actions: [
      "Stay informed about local issues and policies affecting students.",
      "Respect laws and regulations while advocating for change.",
      "Engage in peaceful and constructive forms of expression.",
      "Build networks with like-minded individuals and organizations.",
    ],
  },
];


export const BLOG_POSTS: TranslatedBlog[] = [
    {
        id: 1,
        imageUrl: irancover,
        translations: {
          en: {
            title: "How American Imperialism has Shaped the Middle East: From Palestine to Iran",
            author: "Maryam Sohaib & Layla Şahin", // KUSFP+ team?
            date: "April 2, 2026",
            category: "Parallels",
            excerpt: "American imperialism overthrew Iran's Mossadeq in 1953 and enabled Israel's occupation of Palestine, prioritizing its own interests over self-determination in both cases.",
            content: [
              { type: 'title', text: 'Background' },
              { type: 'paragraph', text: "Nestled in the crevice between central Asia and West Asia lies the country of Iran. A place of diversity that acts as a gateway to West Asia. The region is rich in natural resources such as copper, gold, silver, and the Imperialist’s favorite resource; oil. Iran has always been one of the first countries to come to a Westerners mind when thinking the terms, “regime”, “extremism”, and “feminism” come into play. But what many do not know is that all of these issues that take place in Iran stem from the United State’s presence in the country in the 1950’s. And as of March 2026, the country is dealing with further instability due to relentless bombings from the United States and Israel, fighting in the name of “regime change” when in reality it is an excuse to further create tensions and destabilize the West Asian region."},
              { type: 'paragraph', text: "As stated previously, the root, or what has caused the butterfly effect on the country of Iran is solely related to its natural resources, most importantly, its oil. In 1953, the CIA and British backed intelligence agencies helped back a military coup to overthrow the president at the time, Mohammad Mossadeq. Shah Mohammad Reza Pahlavi comes into power, a U.S. ally who led a corrupt government that is often overlooked by many who denounce the Ayatollah. "},
              { type: 'image', src: iran1, caption: "Rioters armed with staves shout slogans, during riots in Tehran, Iran, August 1953, following the overthrow of Iranian Prime Minister Mohammad Mossadegh. (AFP/Getty)"},   
              { type: 'paragraph', text: "During the Shah’s ruling, he led a corrupt government with a secret police known as the SAVAK, imprisoning, torturing, and killing protesters who spoke against him and the United States. He led a three day celebration marking 2,500 years of Persian reign and spent an estimated one billion USD, but this was not uncommon for him, as he would consistently host immoderate events and parties while the working people lived in poverty. Secularism was an enforced policy with entirely Western ideologies implemented in the government, education, and more . He ruled until his overthrow in 1979, widely known as the Islamic Revolution where the monarchy was dismantled and Islamic Republic was established. In 1979, 52 Americans were held captive in prison for 444 days for protesting the United States allowing the shah to receive cancer treatment in the country."},
              { type: 'image', src: iran2, caption: "Ruhollah Khomeini (at open window) greeting supporters after returning to Tehrān from exile, February 1979. (AP Images)"},   
              { type: 'paragraph', text: "From here on out, relations between the United States and Iran would remain fractured. Between 1953 and 1979 though, the US was deeply involved in the country with multiple agreements set into place. In 1954, the shah signed an oil agreement where US, British, and French oil companies would own 40% of nationalized oil in Iran for 25 years. Later, in 1957, Iran was granted nuclear education and technology through the Atoms For Peace Program, an initiative under Dwight D. Eisenhower's presidency where developing countries would receive these resources. This lasted in Iran until the Islamic Revolution. The shah was a corrupt ruler that was resented due to lack of freedom of speech, forced killings, unlawful imprisonment, and much more that went on in his reign. Of course a revolution was to be expected under such circumstances. "},
              { type: 'paragraph', text: "Now, obviously, the Ayatollah is corrupt in many, often similar ways; however, understanding the role of the shah is key to understanding the nuance that came with the Revolution initially, since the United States blames the current regime for all issues in Iran. One of the biggest arguments for waging war in Iran and promoting decades of tension and fear against the Iranian people was the US’ claims of Iran having vast weapons of mass destruction including nuclear weapons. Whether people choose to believe these statements or not, simple US and Iranian relations history will tell you that the United States was the first to introduce this topic to the country, but the US strategically leaves this information out of history textbooks to further develop a rhetoric around an unstable, extremist, nuclear threat to the West. "},
              { type: 'title', text: 'Iran and the Palestine Question: Parallel Victims of American Imperialism' },
              { type: 'paragraph', text: "The recent US-Israeli attacks on Iran are only one of a long history of such interventions in the region, and indeed, globally. American foreign policy in the Middle East has always followed one formula (despite many claims to the contrary): self-interest over self-determination. This decades-long process of targeting Middle Eastern countries with vaguely autonomous leadership through violent coups, wars, and invasions to replace them with dictators inclined to favour America and submit to its demands has left the once-great region in ruins. Self-determination, a supposed cornerstone of American democratic ideals, is nowhere to be found in this world power’s dealings with Iran, Palestine, Iraq, Libya,- the list goes on."},
              { type: 'paragraph', text: "These double standards have become fairly obvious to most people with the passage of time, but it’s important to draw clear parallels between the effects of US imperialism in Iran, for example, and Palestine: the objective being the same in both cases, despite their vast differences. Iran and the United States, as well as Israel, are all sovereign states with individual militaries and leadership. Palestine, on the other hand, is an occupied land, stripped of its identity as a sovereign nation and divided in governance, without an official army or state apparatus. Nevertheless, comparing the two provides us with a meaningful insight into how American and Israeli puppeteering of these countries has led us to the present situation."},
              { type: 'image', src: iran3, caption: "Israeli leaders after the capture of East Jerusalem at the the Dome of the Rock in the al-Aqsa Mosque Compound in June, 1967 (Getty Images)"},   
              { type: 'paragraph', text: "Palestinian self-determination has been the primary concern for pro-palestinian activists for decades, and particularly since the Israeli occupation of Gaza and the West Bank in 1967. And yet, time and time again, both peaceful and violent attempts at achieving it have been unsuccessful. American politicians and leaders, obliged to listen to the demands of the Israeli lobby that helps line their pockets with millions of dollars, have funded and armed the Israeli occupation, allowing it to continue to brutalize and suppress the Palestinian population at every turn."},
              { type: 'paragraph', text: "Iran, on the other hand, since the overthrow of the US-friendly Shah during the Islamic Revolution of 1979, has adopted an increasingly defiant position opposing American Imperialism, even sponsoring its own proxies to assert its presence in the region, in the form of the Houthis in Yemen, Hezbollah in Lebanon, etc. In response, it has been met with sanctions that have crippled the Iranian economy. By prioritizing its own strategic interests (namely, oil and regional influence) and overriding local self-determination in both cases, America has created long-term instability and resentment as puppet governments and dictators have been propped up, while real democracy has been actively suppressed."},
              { type: 'paragraph', text: "The imperialist agenda behind the coup that removed Mossadegh- the democratically elected Iranian president working to nationalize Iranian oil- was the same one that supported Israel’s settler colonial project. While it has not directly overthrown any Palestinian governments, the US has been the primary and most significant supporter of the Israeli regime, helping it to maintain its apartheid through the ‘Iron Dome’ and arming it with the weapons it uses to kill Palestinians. By vetoing every UN resolution that attempts to establish a Palestinian state or initiate a ceasefire, America has created the conditions that have allowed Israel to continue its brutalization, which has inevitably led us to the situation we are in today."},
              { type: 'title', text: 'Shaping Narratives and Legitimacy: Who Gets to Be ‘Rational’ in the Region? ' },
              { type: 'paragraph', text: "One important facet of drawing parallels between Iran and Palestine is to observe the similarities in the framing of these nations in Western narratives. Which actors are allowed to be ‘rational’ and who is seen as ‘extremist’? In both cases, there is a clear distinction drawn between the American motive - democratic and civilised - and Iranian/Palestinian savagery and barbarism. As argued by Edward Said in his famous book Orientalism, the superiority and rationality of the West is stressed over fanatical Muslims who resist Western influence and enlightenment. This is no accident."},
              { type: 'paragraph', text: "By framing the media narrative this way, it allows the general public to accept the legitimacy of these wars, coups, and invasions unquestioningly. It allows them to view imperialism as a noble mission spreading democratic values, and war as a necessary step to bringing about peace. This distorted presentation of the truth has helped America wreak havoc in Iran, Palestine, and the broader region, with relatively less pushback. However, the tide is changing. As mainstream Western media becomes more and more obsolete, and as individual reporting and credible journalism from within these countries gains more traction, an increasing number of voices are raising outrage at this decades-long foreign policy that has harmed and killed millions of people under the guise of eliminating threats to Western security and values."},
              { type: 'image', src: iran7, caption: "Demonstrators hold placards as they take part in the 'Nationwide March for Palestine' protest in Sydney, Australia (Hollie Adams/Reuters)"},   
              { type: 'paragraph', text: "Resistance to imperialism is being recognized as a valid right for all peoples, regardless of the nation or race that falls victim to it. Palestinians, dehumanized for so long as their struggle for freedom and sovereignty was reduced to extremist terror, are being celebrated for staying resilient under American-funded ethnic cleansing campaigns. An increasing number of people are pointing out the double standards and false framing that have for so long dominated Western narratives about the Middle East. For instance, Iranian proxies have often been highlighted, without pointing out that Israel, too, works as an American proxy in the region - it cannot sustain its existence without American support. Thus, US intervention in both Palestine and Iran has been backed by media and political narratives that have allowed one side to be ‘rational’ while reducing the other to being ‘unreasonable’ and ‘extreme’ - and as a result providing legitimacy to unjustifiable violence over the decades."},
              { type: 'title', text: 'The Role of the Individual: Where Does the Everyday Person Fit Into Global Power Plays?'},
              { type: 'paragraph', text: "As individuals with very little influence or power to change things on a global scale, we might believe there is nothing we can do to help affect change. But this thinking only exacerbates the problem. While most of us are likely not in a position to affect policy changes or command armies, we can exert effort within our circles of influence. This starts with yourself- those who build an awareness of what imperialism looks like (in all its shapes and forms), whether it be 19th century European colonialism or 21st century American intervention- are better equipped to recognize it and call it out when it happens in front of them."},
              { type: 'paragraph', text: "Understanding the historical and geopolitical context of the current events does not only help you but also those around you, since that awareness is transmitted to them in everyday discussions and conversations. This increases the number of people who are not easily manipulated and led by dominant media narratives. Another initiative that can be taken by anyone, is to be more conscious of the media content they consume. Try to read/watch/listen to sources that remain as objective as possible, and give the facts without leaning into the same imperialist agendas whose narrative we are trying to dismantle."},
              { type: 'image', src: iran8, caption: ""},   
              { type: 'paragraph', text: "And lastly, of course, may be the most important - redirect your spending to buy from and support local brand and ethical companies instead of multinationals that partake in the exploitation and oppression of nations affected by American interference like Palestine. Boycott movements like BDS (Boycott, Divestment and Sanctions) have gained widespread attention and recognition for their work in this regard. Pay attention to where your money goes, and to whom - and in this way, anyone can gain the ability to affect change, no matter how small."},
              { type: 'references', items: [
                {text: "", url: "https://ramigkhouri.substack.com/p/has-the-iran-vs-israelus-war-enhanced"},
                {text: "", url: "https://reason.com/2025/06/23/a-brief-bloody-history-of-all-the-times-the-u-s-caused-chaos-in-the-middle-east/"},
                {text: "", url: "https://www.pbs.org/newshour/world/a-historical-timeline-of-u-s-relations-with-iran"},
                {text: "", url: "https://www.waddingtons.ca/most-expensive-party/"},
                {text: "", url: "https://www.thecrimson.com/article/1979/12/6/life-under-the-shah-pit-was/"},
              ]}
            ]
          }, 
        tr:{
            title: "Amerikan Emperyalizmi Orta Doğu’yu Nasıl Şekillendirdi: Filistin’den İran’a",
            author: "Maryam Sohaib & Layla Şahin", // KUSFP+ team?
            date: "Nisan 2, 2026",
            category: "Benzerlikler",
            excerpt: "Amerikan emperyalizmi, 1953'te İran'ın Musaddık'ını devirdiği gibi Filistin'in işgaline de destek vererek her iki durumda da kendi çıkarlarını halkların kendi kaderini tayin hakkının önüne koymuştur.",
            content: [
              { type: 'title', text: 'Arka Plan' },
              { type: 'paragraph', text: "Orta Asya ile Batı Asya arasında yer alan İran, Batı Asya’ya açılan bir kapı işlevi gören, çeşitlilik bakımından zengin bir ülkedir. Bölge; bakır, altın, gümüş ve emperyalistlerin en sevdiği kaynak olan petrol gibi doğal kaynaklar açısından oldukça zengindir. İran, “rejim”, “aşırılıkçılık” ve “feminizm” gibi kavramlar söz konusu olduğunda Batılıların aklına ilk gelen ülkelerden biri olmuştur. Ancak birçok kişinin bilmediği şey, İran’da yaşanan tüm bu meselelerin kökeninde 1950’lerde Amerika Birleşik Devletleri’nin ülkedeki varlığının yatıyor olmasıdır. Mart 2026 itibariyle ülke, “rejim değişikliği” adına yürütülen, gerçekte ise gerilimi artırmak ve Batı Asya bölgesini daha da istikrarsızlaştırmak için bahane olarak kullanılan ABD ve İsrail’in aralıksız bombardımanları nedeniyle yeni bir istikrarsızlıkla karşı karşıyadır."},
              { type: 'paragraph', text: "Daha önce de belirtildiği gibi, İran’da yaşanan bu zincirleme etkinin temel nedeni tamamen doğal kaynaklarıyla, özellikle de petrolüyle ilgilidir. 1953’te CIA ve Britanya destekli istihbarat birimleri, dönemin başbakanı Muhammed Musaddık’ı devirmek için düzenlenen askerî darbeye destek verdi. Ardından, ABD müttefiki olan Şah Muhammed Rıza Pehlevi iktidara geldi. Onun yönetimi, Ayetullah rejimini eleştiren birçok kişi tarafından sıklıkla göz ardı edilen yolsuzluklarla dolu bir hükümetti. Şah döneminde SAVAK adlı gizli polis teşkilatı aracılığıyla kendisine ve Amerika Birleşik Devletleri’ne karşı çıkan protestocular hapsedildi, işkence gördü ve öldürüldü. Şah, Pers egemenliğinin 2.500. yılını kutlamak için üç gün süren bir şölen düzenledi ve bunun için tahminen 1 milyar ABD doları harcadı. Ancak bu onun için sıra dışı değildi; zira işçi sınıfı yoksulluk içinde yaşarken o, sürekli olarak aşırı lüks etkinlikler ve partiler veriyordu. Laiklik, hükümette, eğitimde ve başka alanlarda tamamen Batılı ideolojilerin uygulanmasıyla birlikte zorla dayatılan bir politika hâline gelmişti. Şah, 1979’da devrilene kadar iktidarda kaldı. Bu dönem, monarşinin yıkıldığı ve İslam Cumhuriyeti’nin kurulduğu, geniş ölçüde İslam Devrimi olarak bilinmektedir."},
              { type: 'image', src: iran1, caption: "Rioters armed with staves shout slogans, during riots in Tehran, Iran, August 1953, following the overthrow of Iranian Prime Minister Mohammad Mossadegh. (AFP/Getty)"},   
              { type: 'paragraph', text: "1979’da, ABD’nin şahın kanser tedavisi için ülkeye kabul edilmesini protesto etmek amacıyla 52 Amerikalı 444 gün boyunca esir tutuldu. Bu noktadan sonra Amerika Birleşik Devletleri ile İran arasındaki ilişkiler kalıcı biçimde bozuldu. Bununla birlikte 1953 ile 1979 arasında ABD, birçok anlaşma yoluyla ülkeye derin biçimde müdahil olmuştur. 1954’te şah, ABD’li, Britanyalı ve Fransız petrol şirketlerinin İran’daki millîleştirilmiş petrolün yüzde 40’ına 25 yıl boyunca sahip olmasını öngören bir petrol anlaşması imzaladı. Daha sonra, 1957’de İran’a, Dwight D. Eisenhower başkanlığı döneminde gelişmekte olan ülkelere bu kaynakları sağlamayı amaçlayan “Barış için Atom” programı kapsamında nükleer eğitim ve teknoloji verildi. Bu durum İran’da İslam Devrimi’ne kadar sürdü."},
              { type: 'image', src: iran2, caption: "Ruhollah Khomeini (at open window) greeting supporters after returning to Tehrān from exile, February 1979. (AP Images)"},  
              { type: 'paragraph', text: "From here on out, relations between the United States and Iran would remain fractured. Between 1953 and 1979 though, the US was deeply involved in the country with multiple agreements set into place. In 1954, the shah signed an oil agreement where US, British, and French oil companies would own 40% of nationalized oil in Iran for 25 years. Later, in 1957, Iran was granted nuclear education and technology through the Atoms For Peace Program, an initiative under Dwight D. Eisenhower's presidency where developing countries would receive these resources. This lasted in Iran until the Islamic Revolution. The shah was a corrupt ruler that was resented due to lack of freedom of speech, forced killings, unlawful imprisonment, and much more that went on in his reign. Of course a revolution was to be expected under such circumstances. "},
              { type: 'paragraph', text: "Şah, ifade özgürlüğünün yokluğu, zorla gerçekleştirilen infazlar, hukuksuz tutuklamalar ve kendi yönetimi boyunca süren daha birçok baskı nedeniyle nefret edilen yozlaşmış bir yöneticiydi. Elbette böyle koşullar altında bir devrim beklenirdi. Açıkça görülüyor ki Ayetullah rejimi de birçok açıdan, çoğu zaman benzer şekillerde yozlaşmıştır; ancak İran’daki tüm sorunların sorumluluğunu mevcut rejime yükleyen Amerika Birleşik Devletleri’nin söylemini anlayabilmek için, devrimin başlangıcındaki karmaşık yapıyı ve şahın oynadığı rolü kavramak büyük önem taşır. İran’a karşı savaş yürütmenin ve İran halkına yönelik onlarca yıllık korku ile gerilim siyasetini meşrulaştırmanın en büyük gerekçelerinden biri, ABD’nin İran’ın nükleer silahlar da dâhil olmak üzere büyük çaplı kitle imha silahlarına sahip olduğu iddiası idi. İnsanlar bu iddialara inanmayı seçsin ya da seçmesin, ABD - İran ilişkilerinin basit tarihine bakmak bile, bu konuyu İran’a ilk getiren tarafın Amerika Birleşik Devletleri olduğunu gösterir. Ancak ABD, Batı için “istikrarsız”, “aşırıcı” ve “nükleer tehdit söylemini” daha da geliştirmek amacıyla bu bilgiyi tarih kitaplarından stratejik biçimde dışarıda bırakmaktadır."},
              { type: 'title', text: 'İran ve Filistin Meselesi: Amerikan Emperyalizminin Paralel Mağdurları'},
              { type: 'paragraph', text: "ABD ve İsrail’in İran’a yönelik son saldırıları, bölgede ve hatta dünya genelinde uzun bir müdahale tarihinin yalnızca son halkasıdır. Amerika’nın Orta Doğu’daki dış politikası, aksi yöndeki sayısız iddiaya rağmen, her zaman aynı formülü izlemiştir: kendi kaderini tayin hakkı yerine çıkarlarını öncelemek. Orta Doğu’daki ülkelerin görece demokrat liderliklerini şiddet içeren darbeler, savaşlar ve işgallerle hedef alarak, bunların yerine Amerika’yı kayıracak ve onun taleplerine boyun eğecek diktatörler yerleştirmeye yönelik onlarca yıllık bu süreç, bir zamanların stabil ve zengin coğrafyasını harabeye çevirmiştir. Amerikan’ın sözüm ona demokratik ideallerinin temel taşlarından biri olan kendi kaderini tayin hakkı, bu küresel gücün İran, Filistin, Irak, Libya ve daha birçok yere yönelik tutumunda hiçbir şekilde görülmemektedir."},
              { type: 'paragraph', text: "Bu çifte standartlar zamanla çoğu insan için oldukça görünür hâle gelmiştir; ancak örneğin İran’da Amerikan emperyalizminin etkileri ile Filistin’deki etkileri arasında açık paralellikler kurmak önemlidir. Her iki durumda da hedef aynıdır; aralarındaki büyük farklara rağmen. İran, Amerika Birleşik Devletleri ve İsrail, ayrı ordulara ve yönetimlere sahip egemen devletlerdir. Filistin ise buna karşılık işgal altındaki bir topraktır; egemen bir ulus olarak kimliği elinden alınmış, yönetim bakımından bölünmüş, resmî bir ordusu ya da devlet aygıtı bulunmayan bir yapıdadır. Buna rağmen bu ikisini karşılaştırmak, Amerika ve İsrail’in bu ülkeler üzerindeki kukla oynatıcılığı sayesinde bugünkü duruma nasıl gelindiğine dair kapsamlı bir kavrayış sunar."},
              { type: 'image', src: iran3, caption: "Israeli leaders after the capture of East Jerusalem at the the Dome of the Rock in the al-Aqsa Mosque Compound in June, 1967 (Getty Images)"}, 
              { type: 'paragraph', text: "Filistinlilerin kendi kaderini tayin hakkı, özellikle 1967’de İsrail’in Gazze ve Batı Şeria’yı işgal etmesinden bu yana Filistin yanlısı aktivistlerin temel meselesi olmuştur. Buna rağmen, bu hakkı elde etmeye yönelik hem barışçıl hem de şiddet içeren girişimler defalarca başarısız olmuştur. Ceplerini milyonlarca dolarla dolduran, İsrail lobisinin taleplerine kulak vermek zorunda kalan Amerikalı siyasetçiler ve liderler, İsrail’in uluslararası hukuku ihlal eden işgal ve soykırımını finanse etmiş ve silahlandırmıştır; böylece bu tecavüzlerin Filistin halkını her fırsatta vahşice bastırmaya ve ezmeye devam etmesine olanak sağlamıştır."},
              { type: 'paragraph', text: "Öte yandan İran, 1979’daki İslam Devrimi ile ABD yanlısı şahın devrilmesinden bu yana Amerikan emperyalizmine karşı giderek daha meydan okuyan bir tutum benimsemiş, Yemen’deki Husiler ve Lübnan’daki Hizbullah gibi yapılar üzerinden bölgedeki varlığını hissettirmek için kendi vekil güçlerini desteklemiştir. Buna karşılık ekonomisini felce uğratan yaptırımlarla karşılaşmıştır. Amerika, her iki durumda da kendi stratejik çıkarlarını — özellikle petrolü ve bölgesel nüfuzu — önceliklendirmiş, yerel halkların kendi kaderini tayin hakkını; daha da önemlisi yaşama hakkını hiçe saymıştır. Sonuç olarak, kukla hükümetler ve diktatörler desteklenirken gerçek demokrasi aktif biçimde engellenmiş, uzun vadeli istikrarsızlık ve öfke yaratılmıştır."},
              { type: 'paragraph', text: "İran petrolünü millîleştirmeye çalışan demokratik yollarla seçilmiş İran başbakanı Musaddık’ı deviren darbeyi yönlendiren emperyalist politika ile İsrail’in yerleşimci-sömürgeci projesini destekleyen politika aynıdır. ABD, Filistin’de herhangi bir hükümeti doğrudan devirmemiş olsa da İsrail rejiminin en büyük ve en önemli destekçisi olarak bunun belki İsrail’den bile daha büyük bir sebebi olmuştur . İsrail’in apartheid rejimini “Demir Kubbe” aracılığıyla sürdürmesine yardım etmiş, Filistinlileri öldürmek için kullandığı silahları ona sağlamıştır. Filistin devleti kurulmasını ya da ateşkes başlatılmasını amaçlayan her Birleşmiş Milletler kararını veto ederek, İsrail’in süregelen vahşetini mümkün kılan koşulları yaratmış ve bizi kaçınılmaz olarak bugün içinde bulunduğumuz duruma getirmiştir."},
              { type: 'title', text: 'Anlatıları ve Meşruiyeti Şekillendirmek: Bölgede Kimin ‘Akılcı’ Sayılacağına Kim Karar Veriyor?' },
              { type: 'paragraph', text: "İran ile Filistin arasında paralellik kurmanın önemli bir boyutu da bu iki kavmin Batılı anlatılarda nasıl benzer biçimlerde çerçevelendiğini gözlemleyerek ortaya çıkar. Hangi aktörlerin “sağduyulu” olarak algılanması sağlanıyor ve kimler “aşırıcı” olarak görülüyor? Her iki durumda da Amerikan motivasyonu “demokratik” ve “uygar”, İranlıların ve Filistinlilerin direnişi ise “vahşi” ve “barbar” olarak sunulmaktadır. Edward Said’in ünlü Oryantalizm adlı eserinde savunduğu gibi, Batının üstünlüğü ve akılcılığı; Batı etkisine ve “aydınlanmasına” direnen fanatik Müslümanların karşısına yerleştirilir. Bu bir tesadüf değildir."},
              { type: 'paragraph', text: "Medya anlatısı bu şekilde kurulduğunda, kamuoyunun savaşları, darbeleri ve işgalleri sorgulamadan meşru görmesi kolaylaşır. Emperyalizm, demokratik değerleri yayan soylu bir görev; savaş ise barışı getirmek için gerekli bir adım gibi sunulur. Hatta daha da ileri gidilerek, içerisinde bulunduğumuz on yılda Batı’nın Batı Asya coğrafyasında başlattığı bütün savaşlar kamuoyuna bilinçli şekilde yumuşatılarak “önleyici müdahale”, “sınırlı askeri operasyon”, ya da şu sıralar İran’da kullanılan “meşru müdafaa kapsamında kapasite azaltma” gibi şekillerde adlandırılmaktadır. “Gerçeğin bu çarpıtılmış sunumu, Amerika’nın İran’da, Filistin’de ve daha geniş bölgede görece daha az tepkiyle büyük yıkımlar yaratmasına yardımcı olmuştur. Ancak gidişat değişmektedir. Ana akım Batı medyası giderek daha fazla işlevsiz hâle gelirken ve bu ülkelerin içinden yapılan bireysel habercilik ile güvenilir gazetecilik daha fazla ilgi görürken, milyonlarca insanın Batı güvenliği ve değerlerine yönelik tehditleri ortadan kaldırma bahanesiyle zarar gördüğü, öldürüldüğü bu onlarca yıllık dış politikaya karşı giderek daha fazla ses yükselmektedir."},
              { type: 'image', src: iran7, caption: "Demonstrators hold placards as they take part in the 'Nationwide March for Palestine' protest in Sydney, Australia (Hollie Adams/Reuters)"},   
              { type: 'paragraph', text: "Emperyalizme karşı direniş, hangi ulus ya da ırktan olursa olsun, ona maruz kalan tüm halklar için meşru bir hak olarak görülmeye başlanmıştır. Özgürlük ve egemenlik mücadeleleri uzun süre aşırıcı terörle özdeşleştirilerek insanlıktan çıkarılan Filistinliler, Amerika tarafından finanse edilen etnik temizlik kampanyaları karşısında dirençlerini korudukları için artık takdir edilmektedir. Giderek daha fazla insan, Orta Doğu hakkında Batılı anlatılara uzun süre egemen olan çifte standartları ve çarpıtılmış çerçeveleri açığa çıkarmaktadır. Örneğin, İran’ın vekil güçleri sık sık öne çıkarılırken, İsrail’in de bölgede bir Amerikan vekili gibi hareket ettiği gerçeği çoğu zaman belirtilmez; zira Amerika’nın desteği olmadan varlığını sürdüremez. Dolayısıyla hem Filistin’de hem de İran’da ABD müdahalesi, bir tarafın “akılcı”, diğer tarafın ise “mantıksız” ve “aşırı” olarak görülmesine izin veren medya ve siyasal anlatılarla desteklenmiştir; bunun sonucunda da on yıllar boyunca savunulamaz şiddete meşruiyet kazandırılmıştır."},
              { type: 'title', text: 'Bireyin Rolü: Sıradan İnsan Küresel Güç Oyunlarının Neresinde Duruyor?'},
              { type: 'paragraph', text: "Küresel ölçekte bir şeyleri değiştirme konusunda çok az etkisi ya da gücü olan bireyler olarak, değişime katkıda bulunmak için elimizden hiçbir şey gelmediğini düşünebiliriz. Ancak bu düşünce sorunu daha da büyütür. Çoğumuzun politika değişiklikleri yaratabilecek ya da ordular yönetecek bir konumda olmadığı doğru olabilir; fakat hepimiz kendi etki alanlarımız için çaba gösterebiliriz. Bu da kişinin kendisinden başlar. Emperyalizmin neye benzediğine — 19. yüzyıl Avrupa sömürgeciliği ya da 21. yüzyıl Amerikan müdahaleciliği gibi, hangi biçimde olursa olsun — dair farkındalık geliştirenler, onu karşılarında gördüklerinde tanımaya ve buna itiraz etmeye daha hazırlıklı olur."},
              { type: 'paragraph', text: "Güncel olayların tarihsel ve jeopolitik bağlamını anlamak yalnızca kişiye değil, çevresindeki insanlara da yardımcı olur; çünkü bu farkındalık gündelik tartışmalar ve sohbetler yoluyla başkalarına da aktarılır. Böylece baskın medya anlatıları tarafından kolayca yönlendirilemeyen insanların sayısı artar. Herkesin atabileceği bir diğer adım da tükettiği medya içerikleri konusunda daha bilinçli olmaktır. Mümkün olduğunca nesnel kalmaya çalışmak, olguları, üstesinden gelinmesi gereken aynı emperyalist anlatılara yaslanmadan aktaran kaynakları okumak, izlemek ve dinlemek kişinin ve toplumun bilincinin temiz kalmasını sağlar"},
              { type: 'image', src: iran8, caption: ""},   
              { type: 'paragraph', text: "Ve son olarak, belki de en önemlisi: Harcamaları, Filistin gibi Amerikan müdahalelerinden etkilenen ulusların sömürülmesine ve baskı altına alınmasına ortak olan çok uluslu şirketler yerine, yerel markalardan ve etik şirketlerden yana kullanmak önemlidir. BDS (Boykot, Yatırımların Geri Çekilmesi ve Yaptırımlar) gibi boykot hareketleri bu alandaki çalışmalarıyla geniş çapta dikkat ve takdir toplamıştır. Paranın nereye ve kime harcandığına dikkat edilmelidir. Böylece herkes, ne kadar küçük olursa olsun, değişim yaratma gücü kazanabilir."},
              { type: 'references', items: [
                {text: "", url: "https://ramigkhouri.substack.com/p/has-the-iran-vs-israelus-war-enhanced"},
                {text: "", url: "https://reason.com/2025/06/23/a-brief-bloody-history-of-all-the-times-the-u-s-caused-chaos-in-the-middle-east/"},
                {text: "", url: "https://www.pbs.org/newshour/world/a-historical-timeline-of-u-s-relations-with-iran"},
                {text: "", url: "https://www.waddingtons.ca/most-expensive-party/"},
                {text: "", url: "https://www.thecrimson.com/article/1979/12/6/life-under-the-shah-pit-was/"},
              ]}
            ]
          }
        }
    },
    // {
    //   id: 2,
    //   imageUrl: "https://picsum.photos/400/250?random=10",
    //   translations: {
    //     en: {
    //       title: "How American Imperialism has Shaped the Middle East: From Palestine to Iran",
    //       author: "Maryam Sohaib", // KUSFP+ team?
    //       date: "April 1, 2026",
    //       category: "Parallels",
    //       excerpt: "American imperialism overthrew Iran's Mossadeq in 1953 and enabled Israel's occupation of Palestine, prioritizing its own interests over self-determination in both cases.",
    //       content: [
    //         { type: 'title', text: 'Iran and the Palestine Question: Parallel Victims of American Imperialism' },
    //         { type: 'paragraph', text: "The recent US-Israeli attacks on Iran are only one of a long history of such interventions in the region, and indeed, globally. American foreign policy in the Middle East has always followed one formula (despite many claims to the contrary): self-interest over self-determination. This decades-long process of targeting Middle Eastern countries with vaguely autonomous leadership through violent coups, wars, and invasions to replace them with dictators inclined to favour America and submit to its demands has left the once-great region in ruins. Self-determination, a supposed cornerstone of American democratic ideals, is nowhere to be found in this world power’s dealings with Iran, Palestine, Iraq, Libya,- the list goes on."},
    //         { type: 'paragraph', text: "These double standards have become fairly obvious to most people with the passage of time, but it’s important to draw clear parallels between the effects of US imperialism in Iran, for example, and Palestine: the objective being the same in both cases, despite their vast differences. Iran and the United States, as well as Israel, are all sovereign states with individual militaries and leadership. Palestine, on the other hand, is an occupied land, stripped of its identity as a sovereign nation and divided in governance, without an official army or state apparatus. Nevertheless, comparing the two provides us with a meaningful insight into how American and Israeli puppeteering of these countries has led us to the present situation."},
    //         { type: 'image', src: iran3, caption: "Israeli leaders after the capture of East Jerusalem at the the Dome of the Rock in the al-Aqsa Mosque Compound in June, 1967 (Getty Images)"},   
    //         { type: 'paragraph', text: "Palestinian self-determination has been the primary concern for pro-palestinian activists for decades, and particularly since the Israeli occupation of Gaza and the West Bank in 1967. And yet, time and time again, both peaceful and violent attempts at achieving it have been unsuccessful. American politicians and leaders, obliged to listen to the demands of the Israeli lobby that helps line their pockets with millions of dollars, have funded and armed the Israeli occupation, allowing it to continue to brutalize and suppress the Palestinian population at every turn."},
    //         { type: 'paragraph', text: "Iran, on the other hand, since the overthrow of the US-friendly Shah during the Islamic Revolution of 1979, has adopted an increasingly defiant position opposing American Imperialism, even sponsoring its own proxies to assert its presence in the region, in the form of the Houthis in Yemen, Hezbollah in Lebanon, etc. In response, it has been met with sanctions that have crippled the Iranian economy. By prioritizing its own strategic interests (namely, oil and regional influence) and overriding local self-determination in both cases, America has created long-term instability and resentment as puppet governments and dictators have been propped up, while real democracy has been actively suppressed."},
    //         { type: 'paragraph', text: "The imperialist agenda behind the coup that removed Mossadegh- the democratically elected Iranian president working to nationalize Iranian oil- was the same one that supported Israel’s settler colonial project. While it has not directly overthrown any Palestinian governments, the US has been the primary and most significant supporter of the Israeli regime, helping it to maintain its apartheid through the ‘Iron Dome’ and arming it with the weapons it uses to kill Palestinians. By vetoing every UN resolution that attempts to establish a Palestinian state or initiate a ceasefire, America has created the conditions that have allowed Israel to continue its brutalization, which has inevitably led us to the situation we are in today."},
    //         { type: 'title', text: 'Shaping Narratives and Legitimacy: Who Gets to Be ‘Rational’ in the Region? ' },
    //         { type: 'paragraph', text: "One important facet of drawing parallels between Iran and Palestine is to observe the similarities in the framing of these nations in Western narratives. Which actors are allowed to be ‘rational’ and who is seen as ‘extremist’? In both cases, there is a clear distinction drawn between the American motive - democratic and civilised - and Iranian/Palestinian savagery and barbarism. As argued by Edward Said in his famous book Orientalism, the superiority and rationality of the West is stressed over fanatical Muslims who resist Western influence and enlightenment. This is no accident."},
    //         { type: 'paragraph', text: "By framing the media narrative this way, it allows the general public to accept the legitimacy of these wars, coups, and invasions unquestioningly. It allows them to view imperialism as a noble mission spreading democratic values, and war as a necessary step to bringing about peace. This distorted presentation of the truth has helped America wreak havoc in Iran, Palestine, and the broader region, with relatively less pushback. However, the tide is changing. As mainstream Western media becomes more and more obsolete, and as individual reporting and credible journalism from within these countries gains more traction, an increasing number of voices are raising outrage at this decades-long foreign policy that has harmed and killed millions of people under the guise of eliminating threats to Western security and values."},
    //         { type: 'paragraph', text: "Resistance to imperialism is being recognized as a valid right for all peoples, regardless of the nation or race that falls victim to it. Palestinians, dehumanized for so long as their struggle for freedom and sovereignty was reduced to extremist terror, are being celebrated for staying resilient under American-funded ethnic cleansing campaigns. An increasing number of people are pointing out the double standards and false framing that have for so long dominated Western narratives about the Middle East. For instance, Iranian proxies have often been highlighted, without pointing out that Israel, too, works as an American proxy in the region - it cannot sustain its existence without American support. Thus, US intervention in both Palestine and Iran has been backed by media and political narratives that have allowed one side to be ‘rational’ while reducing the other to being ‘unreasonable’ and ‘extreme’ - and as a result providing legitimacy to unjustifiable violence over the decades."},
    //         { type: 'title', text: 'The Role of the Individual: Where Does the Everyday Person Fit Into Global Power Plays?'},
    //         { type: 'paragraph', text: "As individuals with very little influence or power to change things on a global scale, we might believe there is nothing we can do to help affect change. But this thinking only exacerbates the problem. While most of us are likely not in a position to affect policy changes or command armies, we can exert effort within our circles of influence. This starts with yourself- those who build an awareness of what imperialism looks like (in all its shapes and forms), whether it be 19th century European colonialism or 21st century American intervention- are better equipped to recognize it and call it out when it happens in front of them."},
    //         { type: 'paragraph', text: "Understanding the historical and geopolitical context of the current events does not only help you but also those around you, since that awareness is transmitted to them in everyday discussions and conversations. This increases the number of people who are not easily manipulated and led by dominant media narratives. Another initiative that can be taken by anyone, is to be more conscious of the media content they consume. Try to read/watch/listen to sources that remain as objective as possible, and give the facts without leaning into the same imperialist agendas whose narrative we are trying to dismantle."},
    //         { type: 'paragraph', text: "And lastly, of course, may be the most important - redirect your spending to buy from and support local brand and ethical companies instead of multinationals that partake in the exploitation and oppression of nations affected by American interference like Palestine. Boycott movements like BDS (Boycott, Divestment and Sanctions) have gained widespread attention and recognition for their work in this regard. Pay attention to where your money goes, and to whom - and in this way, anyone can gain the ability to affect change, no matter how small."},
    //       ]
    //     }, 
    //   tr:{
    //       title: "Amerikan Emperyalizmi Orta Doğu’yu Nasıl Şekillendirdi: Filistin’den İran’a",
    //       author: "Maryam Sohaib", // KUSFP+ team?
    //       date: "Nisan 1, 2026",
    //       category: "Benzerlikler",
    //       excerpt: "Amerikan emperyalizmi, 1953'te İran'ın Musaddık'ını devirdiği gibi Filistin'in işgaline de destek vererek her iki durumda da kendi çıkarlarını halkların kendi kaderini tayin hakkının önüne koymuştur.",
    //       content: [
    //         { type: 'title', text: 'İran ve Filistin Meselesi: Amerikan Emperyalizminin Paralel Mağdurları'},
    //         { type: 'paragraph', text: "ABD ve İsrail’in İran’a yönelik son saldırıları, bölgede ve hatta dünya genelinde uzun bir müdahale tarihinin yalnızca son halkasıdır. Amerika’nın Orta Doğu’daki dış politikası, aksi yöndeki sayısız iddiaya rağmen, her zaman aynı formülü izlemiştir: kendi kaderini tayin hakkı yerine çıkarlarını öncelemek. Orta Doğu’daki ülkelerin görece demokrat liderliklerini şiddet içeren darbeler, savaşlar ve işgallerle hedef alarak, bunların yerine Amerika’yı kayıracak ve onun taleplerine boyun eğecek diktatörler yerleştirmeye yönelik onlarca yıllık bu süreç, bir zamanların stabil ve zengin coğrafyasını harabeye çevirmiştir. Amerikan’ın sözüm ona demokratik ideallerinin temel taşlarından biri olan kendi kaderini tayin hakkı, bu küresel gücün İran, Filistin, Irak, Libya ve daha birçok yere yönelik tutumunda hiçbir şekilde görülmemektedir."},
    //         { type: 'paragraph', text: "Bu çifte standartlar zamanla çoğu insan için oldukça görünür hâle gelmiştir; ancak örneğin İran’da Amerikan emperyalizminin etkileri ile Filistin’deki etkileri arasında açık paralellikler kurmak önemlidir. Her iki durumda da hedef aynıdır; aralarındaki büyük farklara rağmen. İran, Amerika Birleşik Devletleri ve İsrail, ayrı ordulara ve yönetimlere sahip egemen devletlerdir. Filistin ise buna karşılık işgal altındaki bir topraktır; egemen bir ulus olarak kimliği elinden alınmış, yönetim bakımından bölünmüş, resmî bir ordusu ya da devlet aygıtı bulunmayan bir yapıdadır. Buna rağmen bu ikisini karşılaştırmak, Amerika ve İsrail’in bu ülkeler üzerindeki kukla oynatıcılığı sayesinde bugünkü duruma nasıl gelindiğine dair kapsamlı bir kavrayış sunar."},
    //         { type: 'image', src: iran3, caption: "Israeli leaders after the capture of East Jerusalem at the the Dome of the Rock in the al-Aqsa Mosque Compound in June, 1967 (Getty Images)"}, 
    //         { type: 'paragraph', text: "Filistinlilerin kendi kaderini tayin hakkı, özellikle 1967’de İsrail’in Gazze ve Batı Şeria’yı işgal etmesinden bu yana Filistin yanlısı aktivistlerin temel meselesi olmuştur. Buna rağmen, bu hakkı elde etmeye yönelik hem barışçıl hem de şiddet içeren girişimler defalarca başarısız olmuştur. Ceplerini milyonlarca dolarla dolduran, İsrail lobisinin taleplerine kulak vermek zorunda kalan Amerikalı siyasetçiler ve liderler, İsrail’in uluslararası hukuku ihlal eden işgal ve soykırımını finanse etmiş ve silahlandırmıştır; böylece bu tecavüzlerin Filistin halkını her fırsatta vahşice bastırmaya ve ezmeye devam etmesine olanak sağlamıştır."},
    //         { type: 'paragraph', text: "Öte yandan İran, 1979’daki İslam Devrimi ile ABD yanlısı şahın devrilmesinden bu yana Amerikan emperyalizmine karşı giderek daha meydan okuyan bir tutum benimsemiş, Yemen’deki Husiler ve Lübnan’daki Hizbullah gibi yapılar üzerinden bölgedeki varlığını hissettirmek için kendi vekil güçlerini desteklemiştir. Buna karşılık ekonomisini felce uğratan yaptırımlarla karşılaşmıştır. Amerika, her iki durumda da kendi stratejik çıkarlarını — özellikle petrolü ve bölgesel nüfuzu — önceliklendirmiş, yerel halkların kendi kaderini tayin hakkını; daha da önemlisi yaşama hakkını hiçe saymıştır. Sonuç olarak, kukla hükümetler ve diktatörler desteklenirken gerçek demokrasi aktif biçimde engellenmiş, uzun vadeli istikrarsızlık ve öfke yaratılmıştır."},
    //         { type: 'paragraph', text: "İran petrolünü millîleştirmeye çalışan demokratik yollarla seçilmiş İran başbakanı Musaddık’ı deviren darbeyi yönlendiren emperyalist politika ile İsrail’in yerleşimci-sömürgeci projesini destekleyen politika aynıdır. ABD, Filistin’de herhangi bir hükümeti doğrudan devirmemiş olsa da İsrail rejiminin en büyük ve en önemli destekçisi olarak bunun belki İsrail’den bile daha büyük bir sebebi olmuştur . İsrail’in apartheid rejimini “Demir Kubbe” aracılığıyla sürdürmesine yardım etmiş, Filistinlileri öldürmek için kullandığı silahları ona sağlamıştır. Filistin devleti kurulmasını ya da ateşkes başlatılmasını amaçlayan her Birleşmiş Milletler kararını veto ederek, İsrail’in süregelen vahşetini mümkün kılan koşulları yaratmış ve bizi kaçınılmaz olarak bugün içinde bulunduğumuz duruma getirmiştir."},
    //         { type: 'title', text: 'Anlatıları ve Meşruiyeti Şekillendirmek: Bölgede Kimin ‘Akılcı’ Sayılacağına Kim Karar Veriyor?' },
    //         { type: 'paragraph', text: "İran ile Filistin arasında paralellik kurmanın önemli bir boyutu da bu iki kavmin Batılı anlatılarda nasıl benzer biçimlerde çerçevelendiğini gözlemleyerek ortaya çıkar. Hangi aktörlerin “sağduyulu” olarak algılanması sağlanıyor ve kimler “aşırıcı” olarak görülüyor? Her iki durumda da Amerikan motivasyonu “demokratik” ve “uygar”, İranlıların ve Filistinlilerin direnişi ise “vahşi” ve “barbar” olarak sunulmaktadır. Edward Said’in ünlü Oryantalizm adlı eserinde savunduğu gibi, Batının üstünlüğü ve akılcılığı; Batı etkisine ve “aydınlanmasına” direnen fanatik Müslümanların karşısına yerleştirilir. Bu bir tesadüf değildir."},
    //         { type: 'paragraph', text: "Medya anlatısı bu şekilde kurulduğunda, kamuoyunun savaşları, darbeleri ve işgalleri sorgulamadan meşru görmesi kolaylaşır. Emperyalizm, demokratik değerleri yayan soylu bir görev; savaş ise barışı getirmek için gerekli bir adım gibi sunulur. Hatta daha da ileri gidilerek, içerisinde bulunduğumuz on yılda Batı’nın Batı Asya coğrafyasında başlattığı bütün savaşlar kamuoyuna bilinçli şekilde yumuşatılarak “önleyici müdahale”, “sınırlı askeri operasyon”, ya da şu sıralar İran’da kullanılan “meşru müdafaa kapsamında kapasite azaltma” gibi şekillerde adlandırılmaktadır. “Gerçeğin bu çarpıtılmış sunumu, Amerika’nın İran’da, Filistin’de ve daha geniş bölgede görece daha az tepkiyle büyük yıkımlar yaratmasına yardımcı olmuştur. Ancak gidişat değişmektedir. Ana akım Batı medyası giderek daha fazla işlevsiz hâle gelirken ve bu ülkelerin içinden yapılan bireysel habercilik ile güvenilir gazetecilik daha fazla ilgi görürken, milyonlarca insanın Batı güvenliği ve değerlerine yönelik tehditleri ortadan kaldırma bahanesiyle zarar gördüğü, öldürüldüğü bu onlarca yıllık dış politikaya karşı giderek daha fazla ses yükselmektedir."},
    //         { type: 'paragraph', text: "Emperyalizme karşı direniş, hangi ulus ya da ırktan olursa olsun, ona maruz kalan tüm halklar için meşru bir hak olarak görülmeye başlanmıştır. Özgürlük ve egemenlik mücadeleleri uzun süre aşırıcı terörle özdeşleştirilerek insanlıktan çıkarılan Filistinliler, Amerika tarafından finanse edilen etnik temizlik kampanyaları karşısında dirençlerini korudukları için artık takdir edilmektedir. Giderek daha fazla insan, Orta Doğu hakkında Batılı anlatılara uzun süre egemen olan çifte standartları ve çarpıtılmış çerçeveleri açığa çıkarmaktadır. Örneğin, İran’ın vekil güçleri sık sık öne çıkarılırken, İsrail’in de bölgede bir Amerikan vekili gibi hareket ettiği gerçeği çoğu zaman belirtilmez; zira Amerika’nın desteği olmadan varlığını sürdüremez. Dolayısıyla hem Filistin’de hem de İran’da ABD müdahalesi, bir tarafın “akılcı”, diğer tarafın ise “mantıksız” ve “aşırı” olarak görülmesine izin veren medya ve siyasal anlatılarla desteklenmiştir; bunun sonucunda da on yıllar boyunca savunulamaz şiddete meşruiyet kazandırılmıştır."},
    //         { type: 'title', text: 'Bireyin Rolü: Sıradan İnsan Küresel Güç Oyunlarının Neresinde Duruyor?'},
    //         { type: 'paragraph', text: "Küresel ölçekte bir şeyleri değiştirme konusunda çok az etkisi ya da gücü olan bireyler olarak, değişime katkıda bulunmak için elimizden hiçbir şey gelmediğini düşünebiliriz. Ancak bu düşünce sorunu daha da büyütür. Çoğumuzun politika değişiklikleri yaratabilecek ya da ordular yönetecek bir konumda olmadığı doğru olabilir; fakat hepimiz kendi etki alanlarımız için çaba gösterebiliriz. Bu da kişinin kendisinden başlar. Emperyalizmin neye benzediğine — 19. yüzyıl Avrupa sömürgeciliği ya da 21. yüzyıl Amerikan müdahaleciliği gibi, hangi biçimde olursa olsun — dair farkındalık geliştirenler, onu karşılarında gördüklerinde tanımaya ve buna itiraz etmeye daha hazırlıklı olur."},
    //         { type: 'paragraph', text: "Güncel olayların tarihsel ve jeopolitik bağlamını anlamak yalnızca kişiye değil, çevresindeki insanlara da yardımcı olur; çünkü bu farkındalık gündelik tartışmalar ve sohbetler yoluyla başkalarına da aktarılır. Böylece baskın medya anlatıları tarafından kolayca yönlendirilemeyen insanların sayısı artar. Herkesin atabileceği bir diğer adım da tükettiği medya içerikleri konusunda daha bilinçli olmaktır. Mümkün olduğunca nesnel kalmaya çalışmak, olguları, üstesinden gelinmesi gereken aynı emperyalist anlatılara yaslanmadan aktaran kaynakları okumak, izlemek ve dinlemek kişinin ve toplumun bilincinin temiz kalmasını sağlar"},
    //         { type: 'paragraph', text: "Ve son olarak, belki de en önemlisi: Harcamaları, Filistin gibi Amerikan müdahalelerinden etkilenen ulusların sömürülmesine ve baskı altına alınmasına ortak olan çok uluslu şirketler yerine, yerel markalardan ve etik şirketlerden yana kullanmak önemlidir. BDS (Boykot, Yatırımların Geri Çekilmesi ve Yaptırımlar) gibi boykot hareketleri bu alandaki çalışmalarıyla geniş çapta dikkat ve takdir toplamıştır. Paranın nereye ve kime harcandığına dikkat edilmelidir. Böylece herkes, ne kadar küçük olursa olsun, değişim yaratma gücü kazanabilir."},
    //       ]
        // }
      // }
    // },
];

export const ANNOUNCEMENTS: Announcement[] = [
    {
        id: 1,
        title: "New Partnership with Global Relief Foundation",
        date: "November 1, 2023",
        content: "We are thrilled to announce a new partnership that will amplify our efforts and extend our reach to communities in need across the globe."
    },
    {
        id: 2,
        title: "Annual Charity Gala - Save the Date!",
        date: "October 28, 2023",
        content: "Our biggest fundraising event of the year is scheduled for December 15th. Get ready for an evening of inspiration and action. Tickets on sale soon."
    },
    {
        id: 3,
        title: "Volunteer Mobilization Success",
        date: "October 25, 2023",
        content: "A huge thank you to the 500+ new volunteers who signed up last week! Your dedication is the backbone of our movement."
    }
];

export const BOYCOTT_LIST: BoycottItem[] = [
    { 
        id: 1, 
        title: "MegaCorp Inc.", 
        reason: "Cited for unethical labor practices and environmental damage.", 
        logoUrl: "https://picsum.photos/200/200?random=20",
        details: "Investigations have revealed MegaCorp Inc. utilizes sweatshops in their supply chain and has been fined multiple times for dumping industrial waste into local rivers, severely impacting ecosystems and community health.",
        alternatives: ["EcoFriendly Goods", "FairTrade Collective"],
        categories: ["food"]
    },
    { 
        id: 2, 
        title: "Global Beverages Co.", 
        reason: "Involved in water source exploitation in vulnerable communities.", 
        logoUrl: "https://picsum.photos/200/200?random=21",
        details: "Global Beverages Co. has been criticized for privatizing public water sources in developing regions, leading to water scarcity for local populations while they bottle and sell the water at a premium.",
        alternatives: ["Local Spring Waters", "PureSip Drinks"],
        categories: ["food"]
    },
    { 
        id: 3, 
        title: "Fast Fashion United", 
        reason: "Lack of transparency in supply chain and use of child labor.", 
        logoUrl: "https://picsum.photos/200/200?random=22",
        details: "Audits and whistleblower reports have consistently pointed to the use of child labor in factories supplying Fast Fashion United. They have failed to provide a transparent supply chain audit.",
        alternatives: ["Sustainable Threads", "Ethical Attire"],
        categories: ["food"]
    },
    { 
        id: 4, 
        title: "TechGiant Ltd.", 
        reason: "Data privacy violations and suppression of user speech.", 
        logoUrl: "https://picsum.photos/200/200?random=23",
        details: "TechGiant Ltd. has faced numerous lawsuits regarding the unauthorized collection and sale of user data to third parties. They have also been accused of censoring content that is critical of their business partners.",
        alternatives: ["PrivacyFirst Tech", "OpenSource Software Solutions"],
        categories: ["food"]
    }
];

export const UPCOMING_EVENTS_DATA: Event[] = [
    {
        id: 5,
        title: "International Law in Kashmir and the Study of Hindutva",
        date: "TBD",
        time: "TBD",
        location: "TBD",
        category: "Seminar",
        description: "Coming soon...",
        imageUrl: "https://img.freepik.com/free-vector/red-grunge-style-coming-soon-design_1017-26691.jpg?semt=ais_incoming&w=740&q=80",
        images: []
    },
    {
        id: 6,
        title: "The Power of Student",
        date: "TBD",
        time: "TBD",
        location: "TBD",
        category: "Seminar",
        description: "Coming soon...",
        imageUrl: "https://img.freepik.com/free-vector/red-grunge-style-coming-soon-design_1017-26691.jpg?semt=ais_incoming&w=740&q=80",
        images: []
    },
    {
        id: 7,
        title: "BDS Seminar",
        date: "TBD",
        time: "TBD",
        location: "TBD",
        category: "Seminar - Campiagn",
        description: "Coming soon...",
        imageUrl: "https://img.freepik.com/free-vector/red-grunge-style-coming-soon-design_1017-26691.jpg?semt=ais_incoming&w=740&q=80",
        images: []
    },
];

export const EVENTS_DATA: Event[] = [
    // {
    //     id: 8,
    //     title: "Under the Olive Tree: KUSFP+ Iftar at Koç",
    //     date: "February 25, 2026",
    //     time: "18:50",
    //     location: "Koç University - Winter Garden",
    //     category: "Community",
    //     description: "An evening of community, connection, and solidarity at this year's KUSFP+ Iftar. We break our fast together, play a fun and interactive Spy game, and enjoy henna throughout the night! More than just a meal, it's a moment to agather, reflect, and stand together.",
    //     imageUrl: iftar3,
    //     images: [
    //       {url: iftar1, title: ""}, 
    //       {url: iftar2, title: ""}, 
    //       // {url: iftar3, title: ""}, 
    //       // {url: dec4, title: ""}, 
    //   ]
    // },
    {
        id: 1,
        title: "Decolonizing Palestine: Politics, History & Media",
        date: "December 9, 2025",
        time: "18:00",
        location: "Koç University - ENG B29",
        category: "Seminar - Panel",
        description: "A multidisciplinary panel examining how decolonial thinking-through media, history, and international relations-challenges colonial narratives and opens new ways of understanding Palestine",
        imageUrl: dec4,
        images: [
          {url: dec1, title: ""}, 
          {url: dec2, title: ""}, 
          {url: dec3, title: ""}, 
          // {url: dec4, title: ""}, 
      ]
    },
    // {
    //     id: 2,
    //     title: "Filistin'de Sanat ve Yaratıcılığa Bakış",
    //     date: "24. Kasım, 2025",
    //     time: "18:00",
    //     location: "Koç University - SOS Z21",
    //     category: "Seminar",
    //     description: "Bu kısa seminer, Filistin’deki sanatın genel bir perspektifini sunarak kültür, kimlik ve yaratıcı ifade biçimlerini ele alır. Konuşmacımız Samed Karagöz, Filistin sanatı üzerine çalışan bir küratör ve sanat uzmanı olarak deneyim ve görüşlerini paylaşacaktır.",
    //     imageUrl: "",
    //     images: []
    // },
    {
        id: 3,
        title: "Screening FARHA (2021)",
        date: "November 19, 2025",
        time: "17:30",
        location: "Koç University - Henry Ford",
        category: "Movie Screening",
        description: "Farha (2021) offers a gripping portrayal of a young girl’s survival during the Nakba, illuminating themes of displacement, resilience, and historical memory.\n\nKUSFP+ X KU Sinema  invite you to a screening, accompanied by trivia and hot drinks for an evening of collective reflection.",
        imageUrl: farha2,
        images: [
            {url:  farha4, title: "test"},
            {url:  farha1, title: "test"},
            {url:  farha3, title: "test"},
        ]
    },
    {
        id: 4,
        title: "Gaza and beyond: Activism from the sumud flotilla",
        date: "November 4, 2025",
        time: "17:30",
        location: "Koç University - SOS Z27",
        category: "Seminar - Panel",
        description: "Join us to delve into stories of resistance, solidarity, and hope — exploring how activism can transcend borders and transform the world.",
        imageUrl: flot1,
        images: [
            {url:  flot2, title: "test"},
            {url:  flot3, title: "test"},
            {url:  flot4, title: "test"},
        ]
    }
];

export const TEAM_MEMBERS: TeamMember[] = [
    {
        id: 1,
        name: "Dr. Evelyn Reed",
        role: "Founder & Lead Strategist",
        bio: "With over 20 years of experience in social justice and community organizing, Evelyn provides the vision and strategic direction for our movement.",
        avatarUrl: "https://picsum.photos/200/200?random=40"
    },
    {
        id: 2,
        name: "Jamal Carter",
        role: "Community Outreach Director",
        bio: "Jamal is the heart of our community engagement, building bridges and mobilizing support on the ground. He ensures every voice is heard.",
        avatarUrl: "https://picsum.photos/200/200?random=41"
    },
    {
        id: 3,
        name: "Sofia Nguyen",
        role: "Research & Policy Analyst",
        bio: "Sofia's sharp analysis and dedication to data-driven advocacy shape our campaigns and educational materials, ensuring our actions are informed and impactful.",
        avatarUrl: "https://picsum.photos/200/200?random=42"
    },
    {
        id: 4,
        name: "Ben O'Connell",
        role: "Digital Campaign Manager",
        bio: "Ben is the digital force behind our online presence, managing social media campaigns and leveraging technology to amplify our message globally.",
        avatarUrl: "https://picsum.photos/200/200?random=43"
    }
];