import React from 'react';

export default class Note extends React.Component {
  render() {
    const notes = this.props.items;

    return <ul className="notes">{notes.map(this.renderNote)}</ul>
  }
  renderNote(note) {
    return (
      <li className="note" key={note.id}>
        <Note task={note.task} />
      </li>
    );
  }
}
