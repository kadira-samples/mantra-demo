import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Tracker} from 'meteor/tracker';
import {createStore} from 'redux';

export default function ({reducer}) {
  return {
    Meteor,
    FlowRouter,
    Collections,
    Tracker,
    Store: createStore(reducer)
  };
}
