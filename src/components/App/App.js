import FullUserInfo from "../../FullUserInfo.json";
import { AboutMe } from "../AboutMe/AboutMe";
import { Projects } from "../Projects/Projects";
import { EducationalInstitutions } from "../EducationalInstitutions/EducationalInstitutions";
import { WorkExperience } from "../WorkExperience/WorkExperience";
import { Bio } from "../Bio/Bio";
import { Contats } from "../Contats/Contats";
import { Skills } from "../Skills/Skills";
import { Box } from "../Box/Box";

export const App = () => {
  const {
    name,
    lastName,
    intro,
    subinfo,
    projects,
    education,
    companies,
    dateOfBirh,
    location,
    contacts,
    skills: { tech, languages, soft },
    hobbies,
  } = FullUserInfo;

  return (
    // <Container>
    <Box
      display="flex"
      flexDirection="row-reverse"
      maxWidth="1024px"
      m="0 auto"
    >
      <Box as="main" bg="bgMain" p="10px">
        <AboutMe
          name={name}
          lastName={lastName}
          intro={intro}
          subinfo={subinfo}
        />

        <Projects projects={projects}>Projects:</Projects>
        <EducationalInstitutions education={education}>
          Education:
        </EducationalInstitutions>
        <WorkExperience companies={companies}>Work experience:</WorkExperience>
      </Box>

      <Box as="aside" bg="bgSecondary" color="textSecondary">
        <Box as="section">
          <Bio
            name={name}
            lastName={lastName}
            imgLink="./photo.jpg"
            dateOfBirth={dateOfBirh}
            location={location}
          />
        </Box>

        <Box as="section">
          <Contats contacts={contacts} />
        </Box>

        <Box as="section">
          <Skills kind={tech}>Tech Skills:</Skills>
        </Box>

        <Box as="section">
          <Skills kind={languages.map((e) => Object.values(e))}>
            Language Skills:
          </Skills>
        </Box>

        <Box as="section">
          <Skills kind={soft}>Soft Skills:</Skills>
        </Box>

        <Box as="section">
          <Skills kind={hobbies}>Hobbies:</Skills>
        </Box>
      </Box>
    </Box>
  );
};
