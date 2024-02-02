import React from "react";
import { useSelector } from "react-redux";
import { useWords } from "../../../hooks";

export const PreviewSocial = () => {
  const { social } = useSelector((state) => state.form);
  const { colors } = useSelector((state) => state.site);
  const words = useWords();

  let items;

  if (social.length !== 0) {
    items = React.Children.toArray(
      social.map((item) => {
        let prefix = "";

        if (item.name === "Twitter") prefix = "https://twitter.com/";
        else if (item.name === "Github") prefix = "https://github.com/";
        else if (item.name === "LinkedIn")
          prefix = "https://www.linkedin.com/in/";
        else {
          if (!item.link.includes("https://") && !item.link.includes("http://"))
            prefix = "https://";
          else prefix = "";
        }

        return (
          <>
            <div className=" flex break-words">
              <strong>{item.name}</strong>
            </div>
            <div>
              <a href={prefix + item.link} target="_blank" className="break-words">
                {prefix !== "https://" && prefix !== "http://" && prefix !== ""
                  ? "@"
                  : ""}
                {item.link}
              </a>
            </div>
          </>
        );
      })
    );
  }

  return (
    <div className="flex flex-col w-full">
      {social.length !== 0 && (
        <>
          <div
            className="p-2 mb-4 mt-4 text-xl font-extrabold text-left tracking-widest border-b-2 border-black"
          >
            {words.social_upper}
          </div>
          {items}
        </>
      )}
    </div>
  );
};
