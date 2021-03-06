import React, { Component } from 'react';
import Title from './Title';
import { RoomContext } from '../context';
import Room from './Room';
import Loading from './Loading';

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    const { loading } = this.context;
    let { featuredRooms: rooms } = this.context;

    rooms = rooms.map((room) => <Room key={room.id} room={room} />);
    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
