import { AiOutlinePhone, AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";
import { iconSize } from "../../constants";
import css from "./Contats.module.css";

export const Contats = ({ contacts }) => {
  const { tel, email, telegram, linkedIn, gitHub } = contacts;
  return (
    <>
      <div>
        <AiOutlinePhone />
        {tel}
      </div>
      <div>
        <AiOutlineMail />
        {email}
      </div>
      <div>
        <TbBrandTelegram />
        {telegram}
      </div>
      <div>
        <AiOutlineLinkedin />
        {linkedIn}
      </div>
      <div>
        <AiOutlineGithub />
        {gitHub}
      </div>
    </>
  );
};
