import React from 'react';
import './css/overview.css';
import cape from './images/reviewcape.png';

export default function Overview() {
  return (
    <section className="overview">

      <img src={cape} alt=""></img>
      <div className="content-overview">
        <h1>Overview</h1>
        <p>
          Peaky Blinders is a gangster family epic set in Birmingham, England, in 1919, several months after the end of the First World War in November 1918. The story centres on the Peaky Blinders gang and their ambitious and highly cunning boss Tommy Shelby (Cillian Murphy). The gang comes to the attention of Major Chester Campbell (Sam Neill), a Detective Chief Inspector in the Royal Irish Constabulary (R.I.C.) sent over by Winston Churchill from Belfast, where he had been sent to clean up the city of the Irish Republican Army (I.R.A.), Communists, gangs and common criminals.[4][5] Winston Churchill (played by Andy Nyman in Series 1 and Richard McCabe in Series 2) charged him with suppressing disorder and uprising in Birmingham and recovering a stolen cache of arms meant to be shipped to Libya.[6][7] The first series concludes on 3 December 1919 – "Black Star Day", the event where the Peaky Blinders plan to take over Billy Kimber's betting pitches at the Worcester Races.
        </p>

        <p>
          The second series sees the Shelby family expand their criminal organisation in the "South and North while maintaining a stronghold in their Birmingham heartland."[8] It begins in 1921 and ends with a climax at Epsom racecourse on 31 May 1922 – Derby Day.[9]
        </p>

        <p>
          The third series starts and ends in 1924 as it follows Tommy and his family entering an even more dangerous world as they once again expand, this time internationally. The third series also features Father John Hughes (Paddy Considine), who is involved in an anti-communist organization; Ruben Oliver (Alexander Siddig), a painter whom Polly enlists to paint her portrait; Russian Duchess Tatiana Petrovna (Gaite Jansen); and Linda Shelby (Kate Phillips), new wife of Arthur.
        </p>

        <p>
        The fourth series begins on Christmas Eve 1925 and ends following the general strike of May 1926 with Tommy being elected as a Member of Parliament in 1927. The fifth series begins two years later on 29 October 1929 (Black Tuesday) and ends on 7 December 1929, the morning after a rally led by fascist leader Oswald Mosley.
        </p>

      </div>

    </section>
  )
}