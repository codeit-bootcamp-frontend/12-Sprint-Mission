import React from "react";
import styles from "./tagDisplay.module.css";

function TagDisplay({ tags }) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className={styles.tagsDisplaySection}>
      {tags.map((tag, index) => (
        <div className={styles.tag} key={`tag-display-${index}`}>
          #{tag}
        </div>
      ))}
    </div>
  );
}

export default TagDisplay;
