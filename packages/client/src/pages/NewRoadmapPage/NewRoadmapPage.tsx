import React from 'react';

import { ContentPageLayout } from 'src/components';
import { CreateRoadmapForm } from 'src/components/forms/CreateRoadmapForm';

export const NewRoadmapPage: React.FC = () => {
  return (
    <ContentPageLayout title="Create new roadmap">
      <CreateRoadmapForm />
    </ContentPageLayout>
  );
};
