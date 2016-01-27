import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/layout.main.jsx';


export default function (injectDeps) {
  const MainLayoutCtx = injectDeps(MainLayout);

  // Move these as a module and call this from a main file
  // FlowRouter.route('/comments', {
  //   name: 'comments.list',
  //   action() {
  //     mount(MainLayoutCtx, {
  //       content: () => (<CommentList />)
  //     });
  //   }
  // });

}
