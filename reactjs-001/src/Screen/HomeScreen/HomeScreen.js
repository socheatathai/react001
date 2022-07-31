import React from "react";
import {Link,useNavigate} from "react-router-dom";
import styles from "./HomeScreen.module.css";
const HomeScreen = () =>{
    const navigate = useNavigate();
    const toStudent = useNavigate();
    const [active,setActive] = React.useState(true)
    const [show,SetShow] = React.useState(false)
    const handleClickme = ()=>{
         navigate("/chartScreen")
    }
    const handlechangecolor = ()=>{
         setActive(!active)
    }
    const handleReadDetail = ()=>{
        SetShow(!show)
    }
    const handleClickToStudent = () =>{
         toStudent("/StudentScreen")
    }  
    
    return(
        <div>
            <h1 className={active ? styles.blackColor : styles.redColor}>HomeScreen</h1> <br />
            <button onClick={handleClickToStudent}>to Student page</button> <br />
            <button onClick={handlechangecolor} >change color</button>  <br />
            <button onClick={handleClickme}>Chart</button> <br />
            <Link to="/StudentScreen">
                <button>Student</button>
            </Link> <br />
            <button onClick={handleReadDetail} >detail happy new year</button>
            <div className={show ? styles.showDetail : styles.hideDetail}>
                <p className={styles.p}>  <h1>detail khmer new years</h1>
                    When seeing or hearing the word “Khmer” such as Khmer New Year, Khmer Community, or Khmer Temple, many people are not familiar with the word and they ask what “Khmer” is?   In practice, the two words, “Khmer” and “Cambodian”, can be used to replace each other. For example, one might say Khmer New Year or Cambodian New Year; Khmer People or Cambodian People.  The exception is when talking about “Khmer Rouge” (it is not correct to use the word Cambodian instead of Khmer in this case).  (For information about the Khmer Rouge see: Cambodian Cultural Profile)

                    The word “Kampuchea” means a country of Khmer people.  Kampuchea can be translated as “Khmer country”. The French call Kampuchea “Le Cambodge”; the Khmer male is called “Le Cambodgien”; and the Khmer female is called “La Cambodgienne”.  A bit different from French, the English name for the country is “Cambodia” and the Khmer people are called “Cambodian.” However, the full definition of what is Khmer and what is Cambodian remains a large topic of discussion among Khmer or Cambodian intellectuals.

                    Khmer New Year
                    In Cambodia, Khmer New Year is the greatest traditional festival, and also the greatest national holiday.  It is three days of festival and sometimes can be four days. Khmer New Year begins on April 13th or can begin on April 14th, depending on the “MohaSangkran,” which is the ancient horoscope. In fact, Khmer New Year originally began on the first day of the first month in the lunar calendar, which can be in November or the beginning of December. In the Angkor Era, the 13th Century, the Khmer King, either Suriyavaraman II or Jayavaraman VII, changed the New Year to the fifth month of the lunar calendar, in April by the solar calendar. 95% of Khmer population are farmers, and the period from November through March is the busiest season for Khmer farmers to reap or harvest the crops from the rice fields. Khmer people can find free time in April because there is no rain, and it is very hot, so Khmer farmers have the time to take vacation after they have worked very hard to gather the rice crops from their fields to get their income. Therefore, April is the right time for Khmer in Cambodia to celebrate New Year.

                    The Khmer New Year festival originated from Bramhmanism, a part of Hinduism, which was a religion that Khmer believed in before Buddhism. Later on, Buddhism became associated with the festival and then took all the important roles in the festivity.

                    Usually, Khmer New Year is celebrated for three days:

                    The first day of New Year is called Moha Sangkran, and it can be described simply as the inauguration of the New Angels who come to take care of the world for a one-year period. The leader of Angels is named “KimiteaTevi. People need to clean and decorate the house and also prepare fruits and drinks for the New Year inauguration and to welcome the New Angels at every single home. 

                    Elderly people like to meditate or pray the Dharma at that time because they believe that any angel who comes to their houses at that time will stay with them and take care of their family for the whole year. Actually, in the morning of the first day of New Year, most Khmer people prepare food to offer the monks at Khmer temple to get blessed. It is a great time for boys and girls to play traditional games together at the temple or any field or playground in their village because it is only at the New Year time that boys and girls are allowed to play or get together socially. Also it is a wonderful time for single people to search for the special partner to get married to in the future. In the past several decades, “dating” did not exist in Cambodia.

                    The second day of New Year is called Wanabot, which means day of offering gifts to the parents, grandparents and elders. Usually, Khmer People like to share gifts or presents to employees and also donate money or clothes to poor people. In the evening, people go to temple to build a mountain of sand and ask the monks to give them a blessing of happiness and peace.

                    The third day is called day of “Leung Sakk;” that means the year starts to be counted up from this day, for example it is when the year of 2000 would change and begin to be 2001.  Traditionally, in the morning, people would go to the temple to perform the ceremony of the mountain of sand to get blessed. In the evening, to complete the New Year festival, Khmer people need to perform the last ceremony, called “Pithi Srang Preah”, which means giving a special bath or a special shower to Buddha statues, the monks, elders, parents and grandparents in order to apologize for any mistake done to them and to gratify them. Everyone has a wonderful time during this ceremony because it is a great opportunity for everyone, young and old, man and woman, to have much fun by spreading out water to each other.

                    Khmer New Year is not just the great traditional festival for Cambodians, it can allow Cambodians to build up many unforgettable souvenirs and memories.
                </p> 
                
              </div>
            <div>
                <h1>The end Page</h1>
            </div>
        </div>
    )
 }
 export default HomeScreen;