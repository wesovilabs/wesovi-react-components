import React from 'react';
import { mount, shallow } from 'enzyme';
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme()) // Note the invocation at the end
import {expect} from 'chai';
import SignInBox from './../src/components/SignInBox/SignInBox';

const clickButtonFn = () => {

}

const credentials = () => {

}

describe('<SignInBox/>', function () {
  it('should have a button to display the SignInBox', function () {
    const wrapper = shallow(<SignInBox credentials={credentials} handleClickButtonFn={clickButtonFn}/>);
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should have props for username and password labels', function () {
    const wrapper = shallow(<SignInBox credentials={credentials} handleClickButtonFn={clickButtonFn}/>);
    expect(wrapper.props().lbUsername).to.be.defined;
    expect(wrapper.props().lbPassword).to.be.defined;
  });

  it('should have a form whose className is wsvform',function(){
    const wrapper = shallow(<SignInBox credentials={credentials} handleClickButtonFn={clickButtonFn}/>);
    expect(wrapper.find('form')).to.have.className('wsvform')
  });

});
