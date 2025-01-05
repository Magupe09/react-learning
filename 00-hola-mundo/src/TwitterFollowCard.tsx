import { useState } from "react";

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsfollowing] = useState(initialIsFollowing);
  const text = isFollowing ? "siguiendo" : "seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handelClick = () => {
    setIsfollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="un avartar usuario"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className={"tw-followCard-infoUserName"}>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handelClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
