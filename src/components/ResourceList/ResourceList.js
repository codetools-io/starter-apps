import React, { useState } from 'react';

import styles from './ResourceList.module.css';

export default function ResourceList({
  items,
  keyName = 'id',
  renderItem = () => {},
  onSearch,
  emptyMessage = EmptyMessage,
  ...props
}) {
  const [searchTerm, setSearchTerm] = useState('');
  if (!items?.length) {
    return (
      <div className={styles.ResourceList} {...props}>
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className={styles.ResourceList} {...props}>
      {onSearch && (
        <form onSubmit={() => onSearch(searchTerm)}>
          <input
            type="search"
            name="searchTerm"
            placeholder="Enter your search"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button>search</button>
        </form>
      )}
      {items.map(renderItem)}
    </div>
  );
}

function EmptyMessage() {
  return <p>No records found…</p>;
}
