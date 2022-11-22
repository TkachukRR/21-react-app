import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";
import { Title, PhoneNumbers, Link } from "./Contats.styled";
import { iconSize } from "../../constants";

export const Contats = ({ contacts }) => {
  const { tel, email, telegram, linkedIn, gitHub } = contacts;
  return (
    <>
      <Title>Contacts:</Title>
      <PhoneNumbers>
        {tel.map((number) => (
          <Link key={number} href={"tel:" + number}>
            <AiOutlinePhone />
            {number}
          </Link>
        ))}
      </PhoneNumbers>
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
    </>
  );
};
