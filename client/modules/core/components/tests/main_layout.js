const { describe, it } = global;
import { expect } from 'chai';
import { shallow } from 'enzyme';
import MainLayout from '../main_layout.jsx';
import Navigation from '../navigation.jsx';
import React from 'react';


describe('core.components.main_layout', () => {
  it('should contain navigation', () => {
    const el = shallow(<MainLayout />);
    expect(el.contains(<Navigation />)).to.be.equal(true);
  });

  it('should render childrens', () => {
    const Comp = () => (<p>Hello</p>);
    const el = shallow(
      <MainLayout content={function testThis() {return (<Comp />);}} />
    );

    expect(el.contains(<Comp />)).to.be.equal(true);
  });
});
