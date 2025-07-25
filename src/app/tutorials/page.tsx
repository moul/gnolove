import { Metadata } from 'next';
import Tutorials from '@/components/features/tutorials/tutorials';

export const metadata: Metadata = {
  title: 'Tutorials and guides',
};

const TutorialsPage = () => {
  return <Tutorials />;
};

export default TutorialsPage;