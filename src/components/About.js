import React from 'react'

const About = ({logged_in}) => {

  return(
    <div className="about-page-container">
     { !logged_in ?
        (
        <div>
            <h2>
              Brakebills University of Arts and Sciences
            </h2>
        </div>
      
      ) : (
        <div>
          <h2>
            Brakebills University for Magical Pedagogy
          </h2>
          <p>Brakebills University for Magical Pedagogy, also known as Brakebills College for Magical Pedagogy, Brakebills Preparatory College of Magic, Brakebills Academy for Magical Pedagogy, or simply Brakebills, is the premier institution for the study of magic in North America.</p>
          <p>"This school exists for a single and timeless purpose: to reveal your innate abilities and hone them to the highest degree. Now, what you do with it after that is entirely up to you. If you want to take over the world, we don't teach that, but give it a go."<br></br> ―Dean Henry Fogg</p>

          <p>Brakebills University for Magical Pedagogy was established in Upstate New York in 1763 and became the 
            standard-bearer of the American magical society, having given rise to generation after generation of 
            illustrious Magicians. Using enchanted globes to find people with magical potential, the school evaluates 
            all potential students with scouts before sending them an invitation to take the Entrance Exam and determine
             whether or not they qualify for enrollment. Though the wards surrounding the school keep it hidden from civilians, 
             some have been known to make their way through the forest and onto campus grounds.

            <br></br>By the 1920s Brakebills taught English and American magic almost exclusively, and as such, 
            lacked a diverse student body until a vogue for multicultural spellcasting swept the school in the '30s and '40s, and the 
            school imported professors from all around, including Dean Mayakovsky and Professor Neeny Bigby, a Pixie.[2] The school 
            recruited skirt-wearing shamans from Micronesian dot-islands; hunch-shouldered, hookah-puffing wizards from inner-city Cairo 
            coffeehouses; and blue-faced Tuareg necromancers from southern Morocco.[3]


        <br></br>Banning Battle Magic
        In 1879, Brakebills provided training in Battle Magic to its students, and Professor Neeny Bigby led the course during World War II, when 
        Rupert Chatwin attended the school after he was discharged from the war due to his injuries. Neeny Bigby taught Chatwin how to cast the Rhinemann 
        Ultra, a powerful spell that required the strength of a Master Magician to cast, which Chatwin used to win the Battle of the Bulge in 1945 for the 
        Allied Powers. However, due to the high amount of student deaths in the 1970s, the course was banned by the Brakebills Board of Trustees, and Neeny Bigby was 
        fired from the school. Prior to leaving, however, Neeny Bigby left clues in the school's library for how to find her in the future when a Brakebills student would need her help.</p>
        </div>
      )
     }

    </div>
  )
}

export default About;

