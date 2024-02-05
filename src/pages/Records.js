import React, { useState } from "react";

// styles
import "./Records.css";

// images
import Toggle from "../images/toggle.svg";
import EmojiSad from "../images/emoji-sad.svg";
import EmojiDissatisfied from "../images/emoji-dissatisfied.svg";

// components
import SingleRecord from "../components/SingleRecord";
import CenterText from "../components/CenterText";

// hooks
import { useCollection } from "../hooks/useCollection";
import { useAuthContext } from "../hooks/useAuthContext";

const Records = () => {
  const [sorted, setSorted] = useState(true);

  const { user } = useAuthContext();

  const {
    documents: documentsAsc,
    isPending: isPendingAsc,
    error: errorAsc,
  } = useCollection("trainings", ["uid", "==", user.uid], ["time", "asc"]);
  const {
    documents: documentsDesc,
    isPending: isPendingDesc,
    error: errorDesc,
  } = useCollection("trainings", ["uid", "==", user.uid], ["time", "desc"]);

  const handleSort = () => {
    sorted ? setSorted(false) : setSorted(true);
  };

  return (
    <div className="records">
      <div className="records-header">
        <p className={sorted ? "turned-on" : "turned-off"}>From newest</p>
        <img
          className={sorted ? "" : "reversed"}
          onClick={handleSort}
          src={Toggle}
          alt="toggle icon"
        />
        <p className={!sorted ? "turned-on" : "turned-off"}>From oldest</p>
      </div>

      {!isPendingAsc && !isPendingDesc && (
        <div className="records-content">
          {documentsDesc &&
            sorted === true &&
            documentsDesc.map((item) => (
              <SingleRecord key={item.time.seconds} item={item} />
            ))}
          {documentsAsc &&
            sorted === false &&
            documentsAsc.map((item) => (
              <SingleRecord key={item.time.seconds} item={item} />
            ))}
          {!documentsAsc && !documentsDesc && (
            <CenterText
              value="No Trainings records to view"
              src={EmojiDissatisfied}
              alt={"dissatisfied emoji"}
            />
          )}
        </div>
      )}
      {(isPendingAsc || isPendingDesc) && <CenterText value="loading..." />}
      {errorAsc ? (
        <CenterText value={errorAsc} src={EmojiSad} alt={"sad emoji"} />
      ) : (
        errorDesc && (
          <CenterText value={errorDesc} src={EmojiSad} alt={"sad emoji"} />
        )
      )}
    </div>
  );
};

export default Records;
