import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./styles.css";
import { saveToLocalStorage, loadFromLocalStorage } from "./LocalStorage";

export default function Notice() {
  const [notice, setNotice] = useState(loadFromLocalStorage("My Notice") ?? []);
  const [noticeValue, setNoticeValue] = useState("");
  useEffect(() => {
    saveToLocalStorage("My Notice", notice);
  });
  return (
    <div className="notizenWrap">
      <h2 className="notizentitle">Marias's Notizen</h2>
      <form
        className="form"
        autoComplete="off"
        htmlFor="notice"
        onSubmit={(event) => {
          event.preventDefault();
          setNotice([...notice, { name: noticeValue, id: nanoid() }]);
          setNoticeValue("");
        }}
      >
        <input
          placeholder="Schreib deine Notizen"
          required
          type="text"
          id="notice"
          value={noticeValue}
          onChange={(event) => {
            setNoticeValue(event.target.value);
          }}
        />
        <button className="addButton">Hinzufügen</button>
      </form>
      <ul className="noticeUL">
        {notice.map((noti) => {
          return (
            <>
              <li className="noticeLi" key={noti.id}>
                {noti.name}
                <button
                  key={noti.id}
                  type="button"
                  className="deleteButton"
                  onClick={() => {
                    setNotice(notice.filter((Item) => Item.id !== noti.id));
                  }}
                >
                  Erledigt
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
