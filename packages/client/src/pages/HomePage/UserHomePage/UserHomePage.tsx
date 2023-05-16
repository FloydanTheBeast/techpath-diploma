import React from 'react';

import { Carousel } from '@mantine/carousel';
import { Center, Skeleton, Text, Title } from '@mantine/core';
import { useGetUserRecommendedCoursesQuery } from '@shared/graphql';

import { COURSE_CARD_HEIGHT, ContentPageLayout, CourseCard } from 'src/components';

export const UserHomePage: React.FC = () => {
  const { data, loading: loadingCourses } = useGetUserRecommendedCoursesQuery();

  const recommendedCourses = data?.userRecommendedCourses;

  return (
    <ContentPageLayout title="Home">
      <Title color="blue" order={3} fw={500} mb="md">
        Your recommeded courses:
      </Title>
      <Carousel
        slideSize="25%"
        height={COURSE_CARD_HEIGHT}
        slideGap="md"
        align="center"
        containScroll="trimSnaps"
        dragFree
      >
        {loadingCourses ? (
          new Array(10).fill(0).map((_, i) => (
            <Carousel.Slide key={i}>
              <Skeleton h="100%" />
            </Carousel.Slide>
          ))
        ) : recommendedCourses?.length ? (
          recommendedCourses?.map(course => (
            <Carousel.Slide key={course.id}>
              <CourseCard course={course} />
            </Carousel.Slide>
          ))
        ) : (
          <Carousel.Slide size="100%">
            <Center h="100%" w="100%">
              <Text w={500} color="dimmed" align="center">
                Couldn&apos;t make any recommendations for you. ¯\_(ツ)_/¯ <br />
                Please, specify preferable topics in your profile
              </Text>
            </Center>
          </Carousel.Slide>
        )}
      </Carousel>
    </ContentPageLayout>
  );
};
