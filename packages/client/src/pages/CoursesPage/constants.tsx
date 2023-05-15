import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Flex,
  Group,
  Popover,
  Rating,
  Text,
  Tooltip,
} from '@mantine/core';
import { CourseInfoFragment } from '@shared/graphql';
import { IconExternalLink, IconLanguage } from '@tabler/icons-react';
import { MRT_ColumnDef } from 'mantine-react-table';

import { CoursePlatformLogo, DifficultyBadge } from 'src/components';

export const COURSES_TABLE_COLUMNS: MRT_ColumnDef<CourseInfoFragment>[] = [
  {
    header: 'Id',
    accessorKey: 'id',
  },
  {
    header: 'Title',
    accessorKey: 'title',
  },
  {
    header: 'Platform',
    accessorFn: ({ platform }) =>
      platform ? (
        <Popover position="right" withArrow>
          <Popover.Target>
            <Box display="inline-block" sx={{ cursor: 'pointer' }}>
              <CoursePlatformLogo logoUrl={platform.logoUrl} />
            </Box>
          </Popover.Target>
          <Popover.Dropdown>
            <Group>
              <CoursePlatformLogo logoUrl={platform.logoUrl} />
              <Text>{platform?.name}</Text>
              <ActionIcon component="a" href={platform.url} target="_blank">
                <IconExternalLink />
              </ActionIcon>
            </Group>
          </Popover.Dropdown>
        </Popover>
      ) : (
        <Text c="dimmed">None</Text>
      ),
    size: 30,
  },
  {
    header: 'Url',
    accessorFn: ({ url }) => (
      <Tooltip label={url} withArrow openDelay={300}>
        <Button
          maw={300}
          component="a"
          href={url}
          target="_blank"
          compact
          variant="subtle"
          leftIcon={<IconExternalLink size="0.9rem" />}
        >
          {url}
        </Button>
      </Tooltip>
    ),
  },
  {
    header: 'Description',
    accessorFn: ({ description }) => (
      <Tooltip label={description} width={300} multiline withArrow openDelay={500} withinPortal>
        <Text lineClamp={3} sx={{ cursor: 'help', width: 400 }}>
          {description}
        </Text>
      </Tooltip>
    ),
  },
  {
    header: 'Topics',
    accessorFn: ({ tags }) => (
      <Flex gap="sm" sx={{ textTransform: 'capitalize' }} maw={500} wrap="wrap">
        {tags.map(tag => (
          <Badge key={tag.id} variant="dot" size="md">
            {tag.name}
          </Badge>
        ))}
      </Flex>
    ),
  },
  {
    header: 'Price',
    accessorFn: ({ price }) => (price ? `${price.price} ${price.currencyCodeISO}` : 'Free'),
  },
  {
    header: 'Languages',
    accessorFn: ({ languages }) =>
      languages.map(language => (
        <Badge
          key={language.countryCodeISO}
          variant="outline"
          pl={4}
          pr={8}
          leftSection={<IconLanguage display="flex" size="1rem" />}
        >
          {language.countryCodeISO}
        </Badge>
      )),
  },
  {
    header: 'External rating',
    accessorFn: ({ externalRating, externalRatingsCount }) =>
      externalRating ? (
        <Group>
          <Rating value={externalRating} fractions={2} readOnly />
          <Text>({externalRatingsCount})</Text>
        </Group>
      ) : null,
  },
  {
    header: 'Difficulty',
    accessorFn: ({ difficulty }) => <DifficultyBadge difficulty={difficulty} />,
  },
];
