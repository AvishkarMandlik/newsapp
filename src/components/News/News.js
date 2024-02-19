import React, { Component } from 'react'
import NewsItem from  '../NewsItem/NewsItem'
export default class News extends Component {
  articles = [{
    "status": "ok",
    "totalResults": 38,
    "articles": [
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": null,
            "title": "Alexey Navalny’s spokesperson confirms his death and demands return of his body to his family - CNN",
            "description": "The body of Russian opposition leader Alexey Navalny should be handed over to his family “immediately,” Navalny’s spokesperson Kira Yarmysh said Saturday, adding his mother has been officially notified of his death.",
            "url": "https://www.cnn.com/2024/02/17/europe/alexey-navalny-body-family-russia-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/240216101733-19-navalny-gallery.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-02-17T12:30:00Z",
            "content": "The body of Russian opposition figure Alexey Navalny should be handed over to his family immediately, his spokesperson Kira Yarmysh said Saturday, adding his mother has been officially notified of hi… [+3518 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Ian Livingston",
            "title": "D.C.-area forecast: Clearing and blustery in the wake of overnight snow - The Washington Post",
            "description": "A few snow showers may linger early. Chilly and gusty today, then milder tomorrow.",
            "url": "https://www.washingtonpost.com/weather/2024/02/17/dc-area-forecast-chilly-windy/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3AYBJBYNZNCKLO2CIHIMF2JVLM.jpg&w=1440",
            "publishedAt": "2024-02-17T11:33:13Z",
            "content": "7:10 a.m. Review of snow forecast is forthcoming\r\nThe snow mostly ended between 3 and 4 a.m. and, needless to say, amounts were considerably less than anticipated. Generally, just a coating to a coup… [+2662 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Sara Chernikoff, Janet Loehrke",
            "title": "Long COVID cases are highest in these US states, Census data shows - USA TODAY",
            "description": "Nearly one in four adults who contracted COVID-19 developed long COVID symptoms",
            "url": "https://www.usatoday.com/story/news/health/2024/02/16/long-covid-cases-by-state/72618103007/",
            "urlToImage": "https://www.usatoday.com/gcdn/presto/2023/04/06/USAT/c6998104-1ded-48e8-8f11-e1895c171f0b-LRI_3714361_03-15_23_1493_AMO.jpg?crop=4199,2362,x0,y280&width=3200&height=1801&format=pjpg&auto=webp",
            "publishedAt": "2024-02-17T11:22:23Z",
            "content": "Four years after the emergence of the COVID-19 pandemic, researchers continue the search to uncover the causes of long COVID and develop treatments. Nearly one in four adults who contracted COVID-19 … [+3101 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Ukraine war: Is Avdiivka's fall a sign Russia is turning the tide? - BBC.com",
            "description": "With Western supplies to Ukraine faltering, Russia is making its size matter but the outcome is far from certain.",
            "url": "https://www.bbc.com/news/world-europe-68322527",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/A313/production/_132674714_ac0f47024843fef4b3c7253914e3bbe0511802830_0_5579_31391000x563.jpg",
            "publishedAt": "2024-02-17T11:21:00Z",
            "content": "By James WaterhouseUkraine correspondent in Kyiv \r\nAvdiivka's fall is more than symbolic\r\n\"In order to preserve life and encirclement, I have withdrawn our units from Avdiivka.\" \r\nWhen he was appoint… [+4240 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "Emily Shapiro",
            "title": "Patrick Mahomes, Brittany Mahomes visit kids shot at Chiefs parade - ABC News",
            "description": "The girls, ages 8 and 10, were both shot in the legs at Wednesday's parade.",
            "url": "https://abcnews.go.com/US/patrick-mahomes-brittany-mahomes-visit-kids-shot-chiefs/story?id=107304603",
            "urlToImage": "https://i.abcnewsfe.com/a/fec5e79c-efb3-4e41-90f5-414d57bb4f22/mahomes-edit-ht-er-240216_1708116501711_hpMain_16x9.jpg?w=1600",
            "publishedAt": "2024-02-17T10:29:26Z",
            "content": "Kansas City Chiefs quarterback Patrick Mahomes and his wife Brittany Mahomes visited two young sisters who are in the hospital after being shot at the Chiefs' Super Bowl parade.\r\nThe girls, ages 8 an… [+944 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Stephanie Nolasco, Ashley Papa",
            "title": "Prince Harry's latest TV tell-all raises concern about King Charles' health - Fox News",
            "description": "Prince Harry spoke about his recent meeting with King Charles during an interview with \"Good Morning America\" host Will Reeve, the son of late \"Superman\" star Christopher Reeve.",
            "url": "https://www.foxnews.com/entertainment/prince-harrys-latest-tv-tell-all-raises-concern-king-charles-health",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/02/7a7b75a0-prince-harry-king-charles.jpg",
            "publishedAt": "2024-02-17T09:00:00Z",
            "content": "Prince Harry spoke out about his father, King Charles, for the first time since Buckingham Palace revealed the monarchs cancer diagnosis and several royal watchers are left with more questions than a… [+6945 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "UFC 298 Embedded: Vlog Series - Episode 6 - UFC",
            "description": "Athletes weigh in and UFC 298 is set: champ Alexander Volkanovski vs Ilia Topuria, Robert Whittaker vs Paulo Costa, Geoff Neal vs Ian Machado Garry, Merab Dv...",
            "url": "https://www.youtube.com/watch?v=yQ3wRZ2AB_I",
            "urlToImage": "https://i.ytimg.com/vi/yQ3wRZ2AB_I/maxresdefault.jpg",
            "publishedAt": "2024-02-17T06:52:30Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Suntimes.com"
            },
            "author": "Georgia Nicols",
            "title": "Horoscope for Saturday, February 17, 2024 - Chicago Sun-Times",
            "description": null,
            "url": "https://chicago.suntimes.com/horoscopes/2024/02/16/horoscopes-today-saturday-february-17-2024",
            "urlToImage": "https://cst.brightspotcdn.com/dims4/default/68b7a1d/2147483647/strip/true/crop/870x497+0+67/resize/1461x834!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F23151141%2FGeorgia_Nicols.jpg",
            "publishedAt": "2024-02-17T05:31:00Z",
            "content": "Moon Alert\r\nThere are no restrictions to shopping or important decisions. The moon is in Gemini.\r\nAries (March 21-April 19)\r\nYou're in a talkative mood today, which is why you want to talk to someone… [+3806 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters",
            "title": "Strong services price increases lift US producer inflation in January - Reuters",
            "description": null,
            "url": "https://www.reuters.com/markets/us/us-producer-prices-rise-more-than-expected-january-2024-02-16/",
            "urlToImage": null,
            "publishedAt": "2024-02-17T05:29:09Z",
            "content": null
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Christal Hayes, Paradise Afshar",
            "title": "Virginia home explodes with fire crews inside, leaving firefighter dead and 11 others injured, officials say - CNN",
            "description": "A house exploded in Sterling, Virginia, Friday night as fire crews were inside, leaving at least one firefighter dead and at least 11 others injured, including nine other firefighters, officials say.",
            "url": "https://www.cnn.com/2024/02/16/us/sterling-virginia-house-explosion-firefighters/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/still-20391374-1254780-still.jpeg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-02-17T05:15:00Z",
            "content": "A house exploded in Sterling, Virginia, Friday night as fire crews were inside, leaving at least one firefighter dead and at least 11 others injured, including nine other firefighters, officials say.… [+1354 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "BERNARD CONDON",
            "title": "Trump avoids 'corporate death penalty,' but his business will still get slammed - The Associated Press",
            "description": "A New York judge has spared Donald Trump a “corporate death penalty” ruling, but the business did get hit hard with bans and cash penalties. The ruling Friday in the civil fraud case against Trump will drain cash from corporate coffers and severely restrict t…",
            "url": "https://apnews.com/article/trump-new-york-business-fraud-lawsuit-1acac26e66862f497782350f172cf970",
            "urlToImage": "https://dims.apnews.com/dims4/default/fdcb6de/2147483647/strip/true/crop/5279x2969+0+275/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F9e%2F4d%2F40f0db5a3e948cbd78d73425866a%2Ff285e2c85c5b431cbbb91cb4c26f4bb0",
            "publishedAt": "2024-02-17T05:05:01Z",
            "content": "NEW YORK (AP) Donald Trump wont face the corporate death penalty after all.\r\nA New York judge on Friday spared the ex-president that worst case punishment as he ruled in a civil case alleging Trump f… [+6085 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Travel+Leisure"
            },
            "author": "https://www.facebook.com/travelandleisure/",
            "title": "105 Best Amazon Presidents Day Sale Deals - Travel + Leisure",
            "description": "The Amazon Presidents Day sale is here, and it's giving shoppers the chance to save up to 81 percent off on top travel gear and accessories. Shop the 105 best deals, including massive markdowns on Apple AirTags, Merrell hiking boots, Stanley cups, Samsonite s…",
            "url": "https://www.travelandleisure.com/amazon-best-deals-presidents-day-2024-8582033",
            "urlToImage": "https://www.travelandleisure.com/thmb/1qHVCbfgvA2ARZty7u44mJ1vsvg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/roundup-best-amazon-presidents-day-sales-tout-396e8835f6a34dfca32600f71834c4a3.jpg",
            "publishedAt": "2024-02-17T05:00:00Z",
            "content": "It may seem like the major shopping holidays are long over, but that doesnt mean that you cant still score some serious deals on items like luggage, comfy shoes, tech, and more. This weekend, Amazon … [+12712 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Houthi Missile Hits India-Bound Ship Carrying Crude Oil From Russia: USA | Red Sea | Gaza | Israel - Hindustan Times",
            "description": "A fresh attack on a commercial ship took place in the Red Sea on February 16. The US government claimed that an oil tanker was hit by a Houthi missile. The s...",
            "url": "https://www.youtube.com/watch?v=3jVQdbY2O9E",
            "urlToImage": "https://i.ytimg.com/vi/3jVQdbY2O9E/maxresdefault.jpg",
            "publishedAt": "2024-02-17T04:26:00Z",
            "content": null
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Katie Bo Lillis, Jim Sciutto, Kristin Fisher, Natasha Bertrand",
            "title": "Exclusive: Russia attempting to develop nuclear space weapon to destroy satellites with massive energy wave, sources familiar with intel say - CNN",
            "description": "Russia is trying to develop a nuclear space weapon that would destroy satellites by creating a massive energy wave when detonated, potentially crippling a vast swath of the commercial and government satellites that the world below depends on to talk on cell p…",
            "url": "https://www.cnn.com/2024/02/16/politics/russia-nuclear-space-weapon-intelligence/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2023-05-04t112542z-1616193887-rc2lr0aaq5fd-rtrmadp-3-ukraine-crisis-russia-kremlin.JPG?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-02-17T03:46:00Z",
            "content": "Russia is trying to develop a nuclear space weapon that would destroy satellites by creating a massive energy wave when detonated, potentially crippling a vast swath of the commercial and government … [+5594 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "‘Time running out fast,’ Hamas warns hostages in Gaza ‘struggling to survive’ | World DNA - WION",
            "description": "Palestinian militant group Hamas on Friday (Feb 16) said hostages held in Gaza territory were \"struggling to stay alive\" as the besieged territory reels unde...",
            "url": "https://www.youtube.com/watch?v=6HdBmnHXZmA",
            "urlToImage": "https://i.ytimg.com/vi/6HdBmnHXZmA/maxresdefault.jpg",
            "publishedAt": "2024-02-17T03:10:57Z",
            "content": null
        },
        {
            "source": {
                "id": "entertainment-weekly",
                "name": "Entertainment Weekly"
            },
            "author": "https://www.facebook.com/entertainmentweekly",
            "title": "'Fire Country' star Max Thieriot reacts to those season 2 premiere bombshells - Entertainment Weekly News",
            "description": "Max Thieriot breaks down the 'Fire Country' season 2 premiere.",
            "url": "https://ew.com/fire-country-star-max-thieriot-season-2-premiere-bombshells-8583155",
            "urlToImage": "https://ew.com/thmb/4XdT71VGYglho46Yr8Z3rqOhmmY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FireCountry02152401-ddc0452a881e4bcabc84b0d0f82163d0.JPG",
            "publishedAt": "2024-02-17T03:02:28Z",
            "content": "Bode (Max Thieriot) had one hell of a season premiere.\r\nFire Countryseason 2 picks up six months after Bode returned to prison in the season 1 premiere (fans will remember that he lied about drug dea… [+5654 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Michael Collins",
            "title": "Biden drinks the water in Ohio and praises 'Herculean' cleanup after train derailment - USA TODAY",
            "description": "President Joe Biden visits East Palestine, Ohio, a year after train derailment that contaminated soil, water and air.",
            "url": "https://www.usatoday.com/story/news/politics/2024/02/16/east-palestine-ohio-biden-drinks-water-praises-herculean-cleanup/72636587007/",
            "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/02/17/USAT/72636625007-biden-east-berlin.jpg?crop=5441,3060,x0,y572&width=3200&height=1800&format=pjpg&auto=webp",
            "publishedAt": "2024-02-17T02:57:38Z",
            "content": "WASHINGTON He drank the water.\r\nPresident Joe Biden saw firsthand on Friday the cleanup efforts in East Palestine, Ohio, more than a year after a Norfolk Southern train derailment released hazardous … [+3133 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Kelsey Plum reacts to Caitlin Clark breaking her NCAAW scoring record | ESPN College Basketball - ESPN",
            "description": "Las Vegas Aces superstar Kelsey Plum fields questions during the 2023-24 NBA Celebrity All-Star Game. ✔️Subscribe to ESPN+ http://espnplus.com/youtube✔️ Get ...",
            "url": "https://www.youtube.com/watch?v=2Das6YoPy8Y",
            "urlToImage": "https://i.ytimg.com/vi/2Das6YoPy8Y/maxresdefault.jpg",
            "publishedAt": "2024-02-17T02:39:02Z",
            "content": null
        },
        {
            "source": {
                "id": "bleacher-report",
                "name": "Bleacher Report"
            },
            "author": "zach bachar",
            "title": "Micah Parsons Wins 2024 NBA Celebrity Game MVP, Team Shannon Beats Team Stephen A. - Bleacher Report",
            "description": "Dallas Cowboys star pass-rusher Micah Parsons showed that he can make plays both on the court and on the field as he was named the MVP of the 2024 NBA…",
            "url": "https://bleacherreport.com/articles/10109706-micah-parsons-wins-2024-nba-celebrity-game-mvp-team-shannon-beats-team-stephen-a",
            "urlToImage": "https://media.bleacherreport.com/image/upload/x_0,y_249,w_1800,h_1195,c_crop/c_fill,g_faces,w_3800,h_2000,q_95/v1708135875/obdrutjbjrtn5dpuurye.jpg",
            "publishedAt": "2024-02-17T02:31:47Z",
            "content": "Brian Sevald/NBAE via Getty Images\r\nDallas Cowboys star pass-rusher Micah Parsons showed that he can make plays both on the court and on the field as he was named the MVP of the 2024 NBA All-Star Cel… [+4380 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Brianna Herlihy, Claudia Kelly-Bazan",
            "title": "Biggest takeaways after wild 2-day hearing on Fani Willis affair: 'What's done is done' - Fox News",
            "description": "The second and final day of a court hearing of evidence in allegations that Georgia prosecutor Fani Wills had an \"improper\" affair with her colleague has concluded.",
            "url": "https://www.foxnews.com/politics/biggest-takeaways-wild-day-hearing-fani-willis-affair-whats-done-is-done",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/02/judge-willis.jpg",
            "publishedAt": "2024-02-17T02:04:00Z",
            "content": "The second and final day of a court hearing of evidence in allegations that Georgia prosecutor Fani Wills had an \"improper\" affair with her colleague has concluded, but the judge will still review te… [+5427 chars]"
        }
    ]
} ]
  constructor(){
    super();
    this.state = {
      articles:this.state,
      loading:false
    };
  }

  render() {
    return (
      <div>
        <div className="container">
        <div className="row justify-content-evenly">
        <h2 className='text-center'>NewsMonkey - Top Headlines</h2>
          <div className=" col-auto">
          <NewsItem title="mytitle" description="mydes" imgUrl="" newsUrl=""/>
          </div>
          <div className=" col-auto">
          <NewsItem title="mytitle" description="mydes"/>
          </div>
          <div className=" col-auto">
          <NewsItem title="mytitle" description="mydes"/>
          </div>
          </div>
        </div>
      </div>
    )
  }
}
