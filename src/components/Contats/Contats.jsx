import PropTypes from "prop-types";

import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";
import { Title, Link } from "./Contats.styled";
import { Box } from "../Box/Box";
import { iconSize } from "../../constants";

export const Contats = ({ contacts }) => {
  const { tel, email, telegram, linkedIn, gitHub } = contacts;
  return (
    <>
      <Title>Contacts:</Title>

      <Box as="address" my={2} display="block">
        <>
          {tel.map((number) => (
            <Link key={number} href={"tel:" + number}>
              <AiOutlinePhone />
              {number}
            </Link>
          ))}
        </>
        <Link href={"mailto:" + email}>
          <AiOutlineMail />
          {email}
        </Link>
        <Link href={telegram}>
          <TbBrandTelegram />
          {telegram}
        </Link>
        <Link href={linkedIn}>
          <AiOutlineLinkedin />
          {linkedIn}
        </Link>
        <Link href={gitHub}>
          <AiOutlineGithub />
          {gitHub}
        </Link>
      </Box>
    </>
  );
};

Contats.propTypes = {
  contacts: PropTypes.exact({
    tel: PropTypes.arrayOf(PropTypes.string.isRequired),
    email: PropTypes.string.isRequired,
    telegram: PropTypes.string,
    linkedIn: PropTypes.string,
    gitHub: PropTypes.string,
  }),
};
