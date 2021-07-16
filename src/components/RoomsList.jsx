import React from 'react';
import PropTypes from 'prop-types';
import Room from './Room';

const RoomsList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((item) => <Room key={item.id} room={item} />)}
      </div>
    </section>
  );
};

RoomsList.propTypes = {
  rooms: PropTypes.array,
};

RoomsList.defaultProps = {
  rooms: [],
};

export default RoomsList;
