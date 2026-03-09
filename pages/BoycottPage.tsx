import React from 'react';
import { BOYCOTT_LIST } from '../constants';
import BoycottSection from '../components/BoycottSection';
const BoycottPage: React.FC = () => {
  return  <BoycottSection items={BOYCOTT_LIST} />;
};

export default BoycottPage;